import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button, OutlineGradientButton } from '../../Components/Button/Button'
import avatar from '../../Assets/Image/avatar.png'
import {
    SectionPrimary,
    SectionSecondary,
} from '../../Components/Section/Section'
import { InfoCard, ReverseInfoCard } from '../../Components/InfoCard/InfoCard'
import { IndexTitle } from '../../Components/InfoCard/Title'
import MockImage1 from '../../Assets/mock_1.png'
import MockImage2 from '../../Assets/mock_2.png'
import MockImage3 from '../../Assets/mock_3.png'
import { NavRoute } from '../../Constants/Routes'
import { TextBox } from '../../Components/TextBox/TextBox'
import daisy from '../../Assets/Image/daisy.png'
import flowerPot from '../../Assets/Image/pot.png'

const Home = () => {
    const roles = [
        {
            text1: 'UI/UX',
            text2: 'Designer',
            color1: 'text-fantasy-50 stroke',
            color2: 'text-nypink-400',
        },
        {
            text1: 'Frontend',
            text2: 'Developer',
            color1: 'text-nypink-400',
            color2: 'text-fantasy-50 stroke',
        },
    ]

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev === 0 ? 1 : 0)) // Toggle between roles
        }, 3000) // Switch every 3 seconds
        return () => clearInterval(interval)
    }, [])

    const projects = [
        {
            title: 'ILUVUS Application',
            image: MockImage1,
            link: NavRoute.project1,
            content: `UI/UX Design | Frontend Development | A mobile app creating a space for users to connect, share, and celebrate achievements.`,
        },
        {
            title: 'Plannee',
            image: MockImage3,
            link: NavRoute.project3,
            content: `UI/UX Design | Frontend Development | A mobile app providing personalized activity recommendations based on users' location, time, and preferences. | Ongoing.`,
        },
        {
            title: 'Traveloka',
            image: MockImage2,
            link: NavRoute.project2,
            content: `UI/UX Design | Redesigned | A website travel agency offering a comprehensive platform for booking flights, hotels, and vacation packages.`,
        },
    ]

    return (
        <div>
            <SectionPrimary>
                <div className="flex flex-col items-center gap-5 md:grid md:grid-cols-2">
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
                                <span
                                    className={`font-eloquiabold text-3xl md:text-5xl ${roles[index].color1}`}
                                >
                                    {roles[index].text1}
                                </span>
                                <span
                                    className={`font-eloquiabold text-3xl md:text-5xl ${roles[index].color2}`}
                                >
                                    {roles[index].text2}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                        <br />
                        <br />
                        <span className="font-eloquialight text-lg text-emperor-500 md:text-base">
                            I'm passionate about creating seamless,
                            user-centered designs that blend creativity with
                            functionality, always exploring new ways to enhance
                            the user experience through innovative solutions.
                        </span>
                    </div>

                    <div className="order-1 h-1/2 w-1/2 md:order-2 md:h-full md:w-full">
                        {/* <img
                            src={avatar}
                            alt="avatar"
                            className="rounded-full"
                        /> */}
                        <motion.img
                            src={daisy}
                            alt="daisy flower"
                            className="z-5 right-60 h-full w-full md:right-80 md:h-full md:w-full" // move it up
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: 'loop',
                                duration: 1.5,
                                ease: 'easeInOut',
                            }}
                        />
                    </div>
                </div>
            </SectionPrimary>
            <SectionPrimary title={'Projects'}>
                <div className="flex flex-col items-center gap-y-52 md:gap-y-5">
                    <InfoCard
                        title={
                            <IndexTitle index="01" title={projects[0].title} />
                        }
                        content={projects[0].content}
                        image={projects[0].image}
                        link={projects[0].link}
                    />
                    <ReverseInfoCard
                        title={
                            <IndexTitle index="02" title={projects[1].title} />
                        }
                        content={projects[1].content}
                        image={projects[1].image}
                        link={projects[1].link}
                    />
                    {/* <InfoCard
                        title={
                            <IndexTitle index="03" title={projects[2].title} />
                        }
                        content={projects[2].content}
                        image={projects[2].image}
                        link={projects[2].link}
                    /> */}
                </div>
            </SectionPrimary>
        </div>
    )
}

export default Home
