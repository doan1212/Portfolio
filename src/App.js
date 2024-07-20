import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Tabs/Home/Home'
import About from './Tabs/About/About'
import Project from './Tabs/Project/Project'
import {NavRoute} from './Constants/Routes'
import NavigationBar from './Components/Navigation/NavigationBar'

function App() {
    return (
        <div className="App bg-fantasy-50">
            <div className='w-full flex justify-center'>
                <NavigationBar />
            </div>
            <Routes>
                <Route path={NavRoute.home} element={<Home />} />
                <Route path={NavRoute.about} element={<About />} />
                <Route path={NavRoute.project} element={<Project />} />
            </Routes>
        </div>
    )
}

export default App
