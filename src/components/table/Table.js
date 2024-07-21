import { useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

const initialData = [
  {
    main: 'Main Ranking 1',
    add: 'Additional Ranking 2',
    weight: '0.1'
  }
]

export const Table = () => {
    
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

  const [data, setData] = useState(initialData);

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
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
            color="secondary"
            onClick={() => {
              table.setEditingRow(row);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            onClick={() => {
              data.splice(row.index, 1);
              setData([...data]);
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
