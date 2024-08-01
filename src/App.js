import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Tabs/Home/Home'
import About from './Tabs/About/About'
import { NavRoute } from './Constants/Routes'
import NavigationBar from './Components/Navigation/NavigationBar'
import Projects from './Tabs/Projects/Projects'
import { useEffect } from 'react'
import Project1 from './Tabs/Projects/Project1'
import Project2 from './Tabs/Projects/Project2'
import Project3 from './Tabs/Projects/Project3'

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
                <Route path={NavRoute.projects} element={<Projects />} />
                <Route path={NavRoute.project1} element={<Project1 />} />
                <Route path={NavRoute.project2} element={<Project2 />} />
                <Route path={NavRoute.project3} element={<Project3 />} />
            </Routes>
        </div>
    )
}

export default App
