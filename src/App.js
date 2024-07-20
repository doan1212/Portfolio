import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Tabs/Home/Home'
import About from './Tabs/About/About'
import { NavRoute } from './Constants/Routes'
import NavigationBar from './Components/Navigation/NavigationBar'
import Container from './Components/Container/Container'
import Component from './Tabs/Component/Component'

function App() {
    return (
        <div>
            <NavigationBar />
            <Routes>
                <Route path={NavRoute.home} element={<Home />} />
                <Route path={NavRoute.about} element={<About />} />
                <Route path={NavRoute.component} element={<Component />} />
            </Routes>
        </div>
    )
}

export default App
