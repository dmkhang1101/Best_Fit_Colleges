import './Home.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import { UserContext } from '../../controllers/User';

function Home(){
    const navigate = useNavigate()
    const user = React.useContext(UserContext);

    return(
        <div className="home">
            <h1 className = "home_desc">Welcome to Best-Fit-Colleges</h1>
            <p className = "home_desc">Let us find the best colleges for you.</p>
            <div className="button_wrapper">
                <Button variant="contained" onClick ={() => {
                    user.setUserData([])
                    user.setFilters({
                        setting: [],
                        type: [],
                        location: []
                    })
                    navigate('search')
                }}>
                    Search
                </Button>
                <Button variant="contained" onClick ={() => {
                    user.setUserData([])
                    user.setCompareColleges([])
                    navigate('compare')
                }}>
                    Compare
                </Button>
            </div>
        </div>
    )
}

export default Home;