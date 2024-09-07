import React from 'react'
import { OutlineGradientButton } from '../Button/Button'

const ScrollToSection = ({ sections, isFlying }) => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div
            className={`relative flex flex-row items-center justify-center md:flex-col ${
                isFlying ? 'pb-5 pt-2' : 'p-5'
            }`}
        >
            <div className="relative flex flex-row items-center gap-2 md:gap-8 lg:gap-20">
                {sections.map((section, index) => (
                    <div
                        className="flex w-full flex-col items-center justify-start"
                        key={index}
                    >
                        {isFlying && (
                            <span className="px-2 pb-2 font-eloquialight text-sm text-emperor-700">
                                {section.name}
                            </span>
                        )}
                        <OutlineGradientButton
                            type="primary"
                            size={isFlying ? 'sm' : 'md'}
                            color="emperor-700"
                            children={index + 1}
                            onClick={() => scrollToSection(section.id)}
                        />
                        {!isFlying && (
                            <span className="p-5 font-eloquialight text-lg text-emperor-700">
                                {section.name}
                            </span>
                        )}
                    </div>
                ))}
                <div
                    className={
                        'absolute bottom-0 left-0 right-0 -z-10 m-auto h-[2px] w-[85%] bg-gradient-to-r from-nypink-400 to-wisteria-600' +
                        ' ' +
                        `${isFlying ? 'top-7' : '-top-16'}`
                    }
                ></div>
            </div>
        </div>
    )
}

export default ScrollToSection
