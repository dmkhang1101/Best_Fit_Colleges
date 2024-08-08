import { useMemo, useContext } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { UserContext } from '../../controllers/User';

const test_result = [
    {
        overall_score : 50,
        name : 'University of California, Berkeley',
        group : 'National Universities',
        location : 'Berkeley, CA',
        tuition_fee : {
            value : '$30000',
            score : 5,
        },
        general_ranking : {
            value : 15,
            score : 10,
        },
        main_ranking : {
            value : 2,
            score : 10,
        },
        additional_ranking_1 : {
            value : 3,
            score : 8,
        },
        additional_ranking_2 : {
            value : 25,
            score : 4,
        },
    },
    {
        overall_score : 40,
        name : 'University of Texas at Austin',
        group : 'National Universities',
        location : 'Austin, TX',
        tuition_fee : {
            value : '$20000-$40000',
            score : 6,
        },
        general_ranking : {
            value : 32,
            score : 15,
        },
        main_ranking : {
            value : 5,
            score : 7,
        },
        additional_ranking_1 : {
            value : 7,
            score : 5,
        },
        additional_ranking_2 : {
            value : 20,
            score : 6,
        },
    },
    {
        overall_score : 42,
        name : 'Amherst College',
        group : 'National Liberal Arts Colleges',
        location : 'Amherst, MA',
        tuition_fee : {
            value : '$15000',
            score : 8,
        },
        general_ranking : {
            value : 2,
            score : 5,
        },
        main_ranking : {
            value : 'N/A',
            score : 0,
        },
        additional_ranking_1 : {
            value : 12,
            score : 1,
        },
        additional_ranking_2 : {
            value : 45,
            score : 1,
        },
    }
]

export const ResultTable = () => {

 const user = useContext(UserContext)
    const columns = useMemo(
        () => [
        {
            accessorKey: 'name',
            header: 'Institution Name',
        },
        {
            accessorKey: 'group',
            header: 'Institution Group',
        },
        {
            accessorKey: 'location',
            header: 'Location',
        },
        {
            accessorFn: (row) => `${row.tuition_fee.value}`,        
            header: 'Tuition Fee',
            sortingFn : (rowA, rowB) => {
                const scoreA = rowA.original.tuition_fee.score
                const scoreB = rowB.original.tuition_fee.score
                if (scoreA > scoreB){
                    return -1
                }
                else if (scoreA < scoreB){
                    return 1
                }
                return 0
            }
        },
        {
            accessorFn: (row) => `${row.general_ranking.value}`,        
            header: 'General Ranking',
            sortingFn : (rowA, rowB) => {
                const scoreA = rowA.original.general_ranking.score
                const scoreB = rowB.original.general_ranking.score
                if (scoreA > scoreB){
                    return -1
                }
                else if (scoreA < scoreB){
                    return 1
                }
                return 0
            }
        },
        {
            accessorFn: (row) => `${row.main_ranking.value}`,        
            header: 'Main Ranking',
            sortingFn : (rowA, rowB) => {
                const scoreA = rowA.original.main_ranking.score
                const scoreB = rowB.original.main_ranking.score
                if (scoreA > scoreB){
                    return -1
                }
                else if (scoreA < scoreB){
                    return 1
                }
                return 0
            }
        },
        ],
        [],
    );

    const add_rankings = Object.keys(test_result[0]).slice(6)
    add_rankings.map(ar => {
        columns.push({
            accessorFn: (row) => `${row[ar].value}`,
            header: ar,
            sortingFn : (rowA, rowB) => {
                const scoreA = rowA.original[ar].score
                const scoreB = rowB.original[ar].score
                if (scoreA > scoreB){
                    return -1
                }
                else if (scoreA < scoreB){
                    return 1
                }
                return 0
            }
        })
    })

    return (
        <MaterialReactTable
            columns={columns}
            data={test_result.sort((a,b) => b.overall_score-a.overall_score)}
            layoutMode="grid"
            enableColumnResizing
        />
    );
};

export default ResultTable;
