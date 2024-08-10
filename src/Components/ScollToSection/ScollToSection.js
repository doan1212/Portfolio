import React from 'react'
import { OutlineGradientButton } from '../Button/Button'

const ScollToSection = () => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="relative flex flex-row items-center justify-start p-5 md:flex-col md:justify-center">
            <div className="relative flex flex-col items-center md:flex-row md:gap-48">
                <div className="flex w-full flex-row items-center justify-start md:flex-col">
                    <OutlineGradientButton
                        type="primary"
                        size="sm rounded-full"
                        color="emperor-700"
                        children={'1'}
                        onClick={() => scrollToSection('section1')}
                    />
                    <span className="p-5 font-eloquialight text-lg text-emperor-700">
                        Discovery
                    </span>
                </div>
                <div className="flex w-full flex-row items-center md:flex-col">
                    <OutlineGradientButton
                        type="primary"
                        size="sm rounded-full"
                        color="emperor-700"
                        children={'2'}
                        onClick={() => scrollToSection('section2')}
                    />
                    <span className="p-5 font-eloquialight text-lg text-emperor-700">
                        Ideation
                    </span>
                </div>

                <div className="flex w-full flex-row items-center md:flex-col">
                    <OutlineGradientButton
                        type="primary"
                        size="sm rounded-full"
                        color="emperor-700"
                        children={'3'}
                        onClick={() => scrollToSection('section3')}
                    />
                    <span className="p-5 font-eloquialight text-lg text-emperor-700">
                        Design
                    </span>
                </div>
                <div className="flex w-full flex-row items-center md:flex-col">
                    <OutlineGradientButton
                        type="primary"
                        size="sm rounded-full"
                        color="emperor-700"
                        children={'4'}
                        onClick={() => scrollToSection('section4')}
                    />
                    <span className="p-5 font-eloquialight text-lg text-emperor-700">
                        Development
                    </span>
                </div>
                <div className="flex w-full flex-row items-center md:flex-col">
                    <OutlineGradientButton
                        type="primary"
                        size="sm rounded-full"
                        color="emperor-700"
                        children={'5'}
                        onClick={() => scrollToSection('section5')}
                    />
                    <span className="p-5 font-eloquialight text-lg text-emperor-700">
                        Reflection
                    </span>
                </div>
                <div
                    className="absolute bg-transparent from-nypink-400 to-wisteria-600 md:bg-gradient-to-r"
                    style={{
                        top: '23%',
                        left: 30,
                        width: '95%',
                        height: '2px',
                        zIndex: -1,
                    }}
                ></div>
            </div>
        </div>
    )
}

export default ScollToSection
