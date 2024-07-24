import './Home.css'
import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../controllers/User';
import SearchIcon from '@mui/icons-material/Search';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

function Home(){
    const navigate = useNavigate()
    const user = React.useContext(UserContext);

    const handleReset = (page) => {
        if (page === "Search"){
            user.setUserData([])
            user.setFilters({
                setting: [],
                type: [],
                location: []
            })
            navigate('search')
        }
        else if (page === "Compare"){
            user.setUserData([])
            user.setCompareColleges([])
            navigate('compare')
        }
    }

    return(
        <div className="home">
            <h1 className = "home_desc">Welcome to Best-Fit-Colleges.</h1>
            <p className = "home_desc">Let us find the best colleges for you.</p>
            <div className="button_wrapper">
                <Button variant="contained" sx={{ width: 150 }} onClick ={() => handleReset("Search")}>
                    Search
                    <div className = "header_icon">
                        <SearchIcon/>
                    </div>
                </Button>
                <Button variant="contained" sx={{ width: 150 }} onClick ={() => handleReset("Compare")}>
                    Compare
                    <div className = "header_icon">
                        <CompareArrowsIcon/>
                    </div>
                </Button>
            </div>
        </div>
    )
}

export default Home;