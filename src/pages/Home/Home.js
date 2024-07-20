import './Home.css'
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

function Home(){
    const navigate = useNavigate()
    return(
        <div className="home">
            <h1 className = "home_desc">Welcome to Best-Fit-Colleges</h1>
            <p className = "home_desc">Let us find the best colleges for you.</p>
            <div className="button_wrapper">
                <Button variant="contained" onClick ={() => navigate('search')}>Search</Button>
                <Button variant="contained" onClick ={() => navigate('compare')}>Compare</Button>
            </div>
        </div>
    )
}

export default Home;