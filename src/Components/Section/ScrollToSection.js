import React from 'react'
import { OutlineGradientButton } from '../Button/Button'

const ScrollToSection = ({ sections }) => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="relative flex flex-row items-center justify-start p-5 md:flex-col md:justify-center">
            <div className="relative flex flex-col items-center md:flex-row md:gap-8 lg:gap-20">
                {sections.map((section, index) => (
                    <div
                        className="flex w-full flex-row items-center justify-start md:flex-col"
                        key={index}
                    >
                        <OutlineGradientButton
                            type="primary"
                            size="sm rounded-full"
                            color="emperor-700"
                            children={index + 1}
                            onClick={() => scrollToSection(section.id)}
                        />
                        <span className="p-5 font-eloquialight text-lg text-emperor-700">
                            {section.name}
                        </span>
                    </div>
                ))}
                <div className="absolute bottom-0 left-0 right-0 -top-16 -z-10 m-auto h-[2px] w-[90%] bg-transparent from-nypink-400 to-wisteria-600 md:bg-gradient-to-r"></div>
            </div>
        </div>
    )
}

export default ScrollToSection
