import { useMemo, useContext } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import {
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { UserContext } from '../../controllers/User';

export const Table = () => {
  const user = useContext(UserContext);
  
  const columns = useMemo(
    () => [
      {
        accessorKey: 'main',
        header: 'Main Ranking',
      },
      {
        accessorKey: 'add',
        header: 'Additional Ranking',
      },
      {
        accessorKey: 'weight',
        header: 'Weight',
      },
    ],
    [],
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={user.userData}
      layoutMode="grid"
      displayColumnDefOptions={{
        'mrt-row-actions': {
          size: 200, 
          grow: false,
        },
      }}
      enableRowActions
      renderRowActions={({ row, table }) => (
        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
          <IconButton
            color="error"
            onClick={() => {
              const curr = user.userData;
              curr.splice(row.index, 1);
              user.setUserData([...curr]);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      )}
    />
  );
};

export default Table;
