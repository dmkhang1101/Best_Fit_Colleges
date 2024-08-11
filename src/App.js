import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home.js'
import Search from './pages/Search/Search.js'
import Compare from './pages/Compare/Compare.js'
import Result from './pages/Result/Result.js'
import SignIn from './pages/Sign In/SignIn.js'
import SignUp from './pages/Sign Up/SignUp.js'
import './App.css'
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CssBaseline from '@mui/material/CssBaseline';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './controllers/User.js';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const pages = ['Home','Search','Compare']
const icons = [ <HomeIcon/>, <SearchIcon/>, <CompareArrowsIcon/> ]
const settings = ['Saved Searches', 'Saved School Lists', 'Logout'];

function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  
function Header (){
    const navigate = useNavigate()
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const user = React.useContext(UserContext);
    const username = 'Khang Do';
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = (setting) => {
        if (setting === 'Logout'){
            user.setLogIn(false)
            navigate('/')
        }
        // if (setting === 'Saved Searches'){
        //     navigate('../saved-searches')
        // }
        // if (setting === 'Saved School Lists'){
        //     navigate('../saved-school-lists')
        // }
        setAnchorElUser(null);
    };

    const handleReset = (page) => {
        if (page === "Home"){
            navigate("/")
            return
        }
        else if (page === "Search"){
            user.setUserData([])
            user.setFilters({
                setting: [],
                type: [],
                location: []
            })
            navigate('search')
            return
        }
        else if (page === "Compare"){
            user.setUserData([])
            user.setCompareColleges([])
            navigate('compare')
            return
        }
    }

   return (
        <AppBar position = 'sticky'>
            <Toolbar disableGutters>
                <Box
                    sx={{
                    display: 'flex',
                    width: '100%',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    bgcolor: 'background.default',
                    color: 'text.primary',
                    borderRadius: 1,
                    p: 2.5,
                    }}
                >
                    <div>
                        {pages.map((page,index) => (
                        <Button sx = {{ml: 5, color : 'inherit'}} key={page} onClick = {() => handleReset(page)}>
                            {page}
                            <div className = "header_icon">
                                {icons[index]}
                            </div>
                        </Button>
                        ))}
                    </div>
                  
                    <div className = "header_buttons">
                        {user.isLoggedIn ? 
                        <div className = "header_button">
                            <div>Welcome, {username}.</div>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar {...stringAvatar(username)} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                            >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                            </Menu>
                        </div> : 

                        <div className = "header_button">
                            <Button variant="contained" onClick = {() => navigate('signin')}>Sign In</Button>
                            <Button variant="contained" onClick = {() => navigate('signup')}>Sign Up</Button>
                        </div>
                        }
                        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </div>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

function MyApp() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element ={<Home/>}/>
                    <Route path='search' element = {<Search/>}/>
                    <Route path='compare' element = {<Compare/>}/>
                    <Route path='result' element = {<Result/>}/> 
                    <Route path='signin' element = {<SignIn/>}/>
                    <Route path='signup' element = {<SignUp/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default function App(){
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
        () => ({
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
        createTheme({
            palette: {
                primary: {
                    main: '#4fc3f7',
                },
                mode,
            },
        }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <MyApp />
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}