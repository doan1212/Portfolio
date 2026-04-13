import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './Tabs/Home/Home'
import About from './Tabs/About/About'
import { NavRoute } from './Constants/Routes'
import NavigationBar from './Components/Navigation/NavigationBar'
import Projects from './Tabs/Projects/Projects'
import { useEffect, useState } from 'react'
import DynamicProjectPage from './Tabs/Projects/DynamicProjectPage'
import Overlay from './Components/Overlay/Overlay'
import Footer from './Components/Footer/Footer'
import resume from './Assets/Documents/Doan2025_resume.pdf'
import 'react-photo-view/dist/react-photo-view.css'
import ScrollToTop from './Components/Section/ScrollToTop'

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

        // Track resource loading
        const handleResourcesLoaded = () => {
            // Check if all images are loaded
            const images = document.querySelectorAll('img')
            const imagePromises = Array.from(images).map((img) => {
                if (img.complete) return Promise.resolve()
                return new Promise((resolve) => {
                    img.onload = resolve
                    img.onerror = resolve // Resolve even on error to prevent hanging
                })
            })

            // Wait for all images to load
            Promise.all(imagePromises).then(() => {
                // Add minimum loading time (e.g., 1 second) for UX
                const minLoadTime = 1000
                const startTime = Date.now()

                setTimeout(
                    () => {
                        setLoading(false)
                    },
                    Math.max(0, minLoadTime - (Date.now() - startTime))
                )
            })
        }

        // Wait for DOM to be ready, then check resources
        if (document.readyState === 'complete') {
            handleResourcesLoaded()
        } else {
            window.addEventListener('load', handleResourcesLoaded)
        }

        // Fallback timeout to prevent infinite loading
        const fallbackTimer = setTimeout(() => {
            setLoading(false)
        }, 10000) // 10 second max

        return () => {
            clearTimeout(fallbackTimer)
            window.removeEventListener('load', handleResourcesLoaded)
        }
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
                {/* Dynamic project route - renders all projects via DynamicProjectPage */}
                <Route path="/projects/:slug" element={<DynamicProjectPage />} />
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

            <Footer />
        </div>
    )
}

export default App
