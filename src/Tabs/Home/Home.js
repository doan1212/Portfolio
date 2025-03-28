import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import avatar from '../../Assets/Image/avatar.png'
import { SectionPrimary } from '../../Components/Section/Section'

const Home = () => {
    const roles = [
        { text1: 'UI/UX', text2: 'Designer', color1: 'text-fantasy-50 stroke', color2: 'text-nypink-400' },
        { text1: 'Frontend', text2: 'Developer', color1: 'text-nypink-400', color2: 'text-fantasy-50 stroke' }
    ]

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev === 0 ? 1 : 0)) // Toggle between roles
        }, 3000) // Switch every 3 seconds
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <SectionPrimary>
                <div className="flex flex-col items-center gap-5 md:flex-row">
                    <div className="order-2 items-center justify-center px-10 md:order-1">
                        <div className="flex flex-row items-end gap-3">
                            <span className="align-text-bottom font-eloquialight text-xl text-emperor-700 md:text-3xl">
                                Hello there, I'm
                            </span>
                            <span className="-mb-[2px] w-fit bg-gradient-to-r from-wisteria-500 to-nypink-400 bg-clip-text align-text-bottom font-laviossa text-4xl font-bold text-transparent md:text-7xl">
                                Doan
                            </span>
                        </div>
                        <br />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index} // Changes animation when index changes
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.6 }}
                                className="flex gap-2"
                            >
                                <span className={`font-eloquiabold text-3xl md:text-5xl ${roles[index].color1}`}>
                                    {roles[index].text1}
                                </span>
                                <span className={`font-eloquiabold text-3xl md:text-5xl ${roles[index].color2}`}>
                                    {roles[index].text2}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                        <br />
                        <br />
                        <span className="font-eloquialight text-lg text-emperor-500 md:text-base">
                            I'm passionate about creating seamless, user-centered designs that blend creativity with functionality, always exploring new ways to enhance the user experience through innovative solutions.
                        </span>
                    </div>
                    <div className="order-1 h-1/2 w-1/2 md:order-2 md:h-full md:w-full">
                        <img src={avatar} alt="avatar" className="rounded-full" />
                    </div>
                </div>
            </SectionPrimary>
        </div>
    )
}

export default Home
