import React from 'react'
import { Link } from 'react-router-dom'
import { SectionPrimary, SectionSecondary } from '../../Components/Section/Section'
import doan from '../../Assets/Image/doan.png'

const About = () => {
    return (
        <div>
            <SectionPrimary className="bg-gradient-to-r from-wisteria-500 to-nypink-400">
                <div className=" flex flex-col md:flex-row items-start gap-5">
                    <div className=" justify-start w-1/2 h-1/2 md:w-full md:h-full">
                        <img src={doan} alt="doan" className="rounded-full" />
                    </div>
                    <div className=" px-10 flex flex-col justify-center gap-6">
                        <div className="md:text-4xl text-lg font-laviossa text-wisteria-600 align-text-bottom">
                            About Me
                        </div>
           
                        <div className="md:text-xl text-sm font-eloquialight text-emperor-700 align-text-bottom">
                        I'm Flora Sheen Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to specimen book.
                        </div>
                        <div className="md:text-xl text-sm font-eloquialight text-emperor-700 align-text-bottom" >
                        I'm Flora Sheen Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. 
                        </div>
                    </div>
                </div>
            </SectionPrimary>
            <SectionSecondary title={'Skills'}>
            </SectionSecondary>
        </div>
    )
}

export default About
