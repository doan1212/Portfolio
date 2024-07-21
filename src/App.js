import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Tabs/Home/Home'
import About from './Tabs/About/About'
import { NavRoute } from './Constants/Routes'
import NavigationBar from './Components/Navigation/NavigationBar'
import Component from './Tabs/Component/Component'
import { useEffect } from 'react'

function App() {
    const handleScroll = () => {
        const navBar = document.getElementById('navbar')
        const navBarHeight = navBar.clientHeight
        if (
            document.body.scrollTop > navBarHeight ||
            document.documentElement.scrollTop > navBarHeight
        ) {
            navBar.classList.add('bg-white')
            navBar.classList.add('shadow-md')
        } else {
            navBar.classList.remove('bg-white')
            navBar.classList.remove('shadow-md')
        }
    }

    useEffect(() => {
        window.onscroll = () => {
            handleScroll()
        }
    }, [])

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
