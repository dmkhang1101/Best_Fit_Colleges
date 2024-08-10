import './SignIn.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState, useContext }from 'react';
import { UserContext } from '../../controllers/User';

function SignIn(){
    const user = useContext(UserContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = () => {
        if (email === '' || password === ''){
            alert('Please fill in all required fields.')
            return
        }
        //User Authentication and Set Global User Object.
        user.setLogIn(true)
        navigate('/')
    }
    return (
        <div className = "signIn">
            <h1>Sign In</h1>
            <div className = "wrapper">
                <TextField
                required
                id="standard-required"
                label="Email"
                variant="standard"
                sx={{ width: '60%' }}
                onChange = {(e,value) => setEmail(e.target.value)}
                />
                <TextField
                required
                id="standard-required"
                label="Password"
                variant="standard"
                sx={{ width: '60%' , m : 6 }}
                onChange = {(e,value) => setPassword(e.target.value)}
                type={'password'}
                />
                <div>Don't have an account? Sign up <text className = "link_signup" onClick = {() => navigate('../signup')}>here</text>.</div>
                <Button variant="contained" sx={{ width: '25%', m : 3, p : 1, fontSize: 18 }} onClick = {handleSignIn}>
                    Sign In
                </Button>
            </div>
        </div>
    )
}

export default SignIn;