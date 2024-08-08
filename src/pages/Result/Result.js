import './Result.css'
import ResultTable from '../../components/result_table/ResultTable';

function Result(){
    return (
        <div className = "result">
            <h1>Here are your results,</h1>
            <br/>
            <ResultTable/>
        </div>
    )
}

export default Result;