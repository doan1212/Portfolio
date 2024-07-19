import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Tabs/Home/Home'
import About from './Tabs/About/About'

function App() {
    return (
        <div className="App">
            <div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        background: 'green',
                        fontSize: '20px',
                    }}
                >
                    <Link to={'/'} style={{ color: 'white' }}>
                        Home
                    </Link>
                    <Link
                        to={'/about'}
                        style={{
                            color: 'white',
                        }}
                    >
                        About
                    </Link>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}

export default App
