import './App.css'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './Tabs/Home/Home'
import About from './Tabs/About/About'
import { NavRoute } from './Constants/Routes'
import NavigationBar from './Components/Navigation/NavigationBar'
import Projects from './Tabs/Projects/Projects'
import { useEffect, useState } from 'react'
import Project1 from './Tabs/Projects/Project1'
import Project2 from './Tabs/Projects/Project2'
import Project3 from './Tabs/Projects/Project3'
import Overlay from './Components/Overlay/Overlay'
import Footer from './Components/Footer/Footer'
import React from 'react'
import resume from './Assets/Documents/UX_UIDesigner_ Resume.pdf'
import 'react-photo-view/dist/react-photo-view.css'
import colorPaletteIcon from './Assets/Image/LoadingIcons/colorPalette.png'
import laptopScreenIcon from './Assets/Image/LoadingIcons/laptopScreen.png'
import officeMaterialIcon from './Assets/Image/LoadingIcons/officeMaterial.png'
import shapesIcon from './Assets/Image/LoadingIcons/shapes.png'
import heartIcon from './Assets/Image/LoadingIcons/heart.png'
import ScrollToTop from './Components/Section/ScrollToTop'

function Loading() {
    const messages = [
        'Prepping the goods',
        'Polishing the details',
        'Crafting your experience',
        'Curating the showcase',
        'Assembling brilliance',
        'Bringing the vision to life',
        'Finishing the touches',
        'Loading the spotlight',
        'Refining the masterpiece',
        'Sharpening the presentation',
        'Showcase on the way',
    ]

    const getRandomMessage = () => {
        const randomIndex = Math.floor(Math.random() * messages.length)
        return messages[randomIndex]
    }

    return (
        <div className="loading-screen">
            <div className="loading-bg"></div>
            <div className="loading-content flex justify-center font-laviossa text-[3rem] font-bold drop-shadow">
                {getRandomMessage()}
                {'...'}
            </div>
            <div class="loadingIcon loadingIcon1">
                <img src={colorPaletteIcon} />
            </div>
            <div class="loadingIcon loadingIcon2">
                <img src={laptopScreenIcon} />
            </div>
            <div class="loadingIcon loadingIcon3">
                <img src={officeMaterialIcon} />
            </div>
            <div class="loadingIcon loadingIcon4">
                <img src={shapesIcon} />
            </div>
            <div class="loadingIcon loadingIcon5">
                <img src={heartIcon} />
            </div>
        </div>
    )
}

function App() {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false)
    const [loading, setLoading] = useState(true)
    const location = useLocation()

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
        setLoading(true)
        const timer = setTimeout(() => {
            setLoading(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [location])

    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible)
    }

    return (
        <div>
            <NavigationBar onResumeClick={toggleOverlay} />
            <ScrollToTop />
            <Routes>
                <Route path={NavRoute.home} element={<Home />} />
                <Route path={NavRoute.about} element={<About />} />
                <Route path={NavRoute.projects} element={<Projects />} />
                <Route path={NavRoute.project1} element={<Project1 />} />
                <Route path={NavRoute.project2} element={<Project2 />} />
                <Route path={NavRoute.project3} element={<Project3 />} />
            </Routes>

            {isOverlayVisible && (
                <Overlay onClose={toggleOverlay}>
                    <iframe
                        width="100%"
                        height="100%"
                        src={resume}
                        type="application/pdf"
                    >
                        {' '}
                    </iframe>
                </Overlay>
            )}

            {loading && <Loading />}
            <Footer />
        </div>
    )
}

export default App
