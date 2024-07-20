import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home.js'
import Search from './pages/Search/Search.js'
import Compare from './pages/Compare/Compare.js'

export default function App(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element ={<Home/>}/>
                    <Route path='search' element = {<Search/>}/>
                    <Route path='compare' element = {<Compare/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}