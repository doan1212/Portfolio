import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Tabs/Home/Home'
import About from './Tabs/About/About'
import {NavRoute} from './Constants/Routes'
import NavigationBar from './Components/Navigation/NavigationBar'

function App() {
    return (
        <div className="App">
            <div className='w-full flex justify-center'>
                <NavigationBar />
            </div>
            <Routes>
                <Route path={NavRoute.home} element={<Home />} />
                <Route path={NavRoute.about} element={<About />} />
            </Routes>
        </div>
    )
}

export default App
