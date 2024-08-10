import './SignUp.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useState, useContext }from 'react';
import { UserContext } from '../../controllers/User';

function SignUp(){
    const user = useContext(UserContext)
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')

    const handleSignUp = () => {
        if (name === '' || email === '' || password === '' || confirm === ''){
            alert('Please fill in all required fields.')
            return
        }
        if (password !== confirm){
            alert('Passwords do not match.')
            return
        }
        // Create user and add to Database, fetch and Set Global User Object.
        user.setLogIn(true)
        navigate('/')
    }

    return (
        <div className = "signUp">
            <h1>Sign Up</h1>
            <div className = "wrapper">
                <TextField
                required
                id="standard-required"
                label="Name"
                variant="standard"
                sx={{ width: '60%' }}
                onChange = {(e,value) => setName(e.target.value)}
                />
                <TextField
                required
                id="standard-required"
                label="Email"
                variant="standard"
                sx={{ width: '60%' , mt : 6 }}
                onChange = {(e,value) => setEmail(e.target.value)}
                />
                <TextField
                required
                id="standard-required"
                label="Password"
                variant="standard"
                sx={{ width: '60%' , mt : 6 }}
                onChange = {(e,value) => setPassword(e.target.value)}
                type={'password'}
                />
                <TextField
                required
                id="standard-required"
                label="Confirm Password"
                variant="standard"
                sx={{ width: '60%' , m : 6 }}
                onChange = {(e,value) => setConfirm(e.target.value)}
                type={'password'}
                />
                <div>Already have an account? Sign in <text className = "link_signup" onClick = {() => navigate('../signin')}>here</text>.</div>
                <Button variant="contained" sx={{ width: '25%', m : 3, p : 1, fontSize: 18 }} onClick = {handleSignUp}>
                    Sign Up
                </Button>
            </div>
        </div>
    )
}

export default SignUp;