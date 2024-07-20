import React from 'react'
import { Button, OutlineGradientButton } from '../../Components/Button/Button'
import avatar from '../../Assets/Image/avatar.png'
import {
    SectionPrimary,
    SectionSecondary,
} from '../../Components/Section/Section'

const Home = () => {
    return (
        <div>
            <SectionPrimary>
            <div className="flex flex-row justify-evenly ">
                <div className="py-10 px-10 items-center w-1/2 justify-center ">
                    <span className="font-eloquialight text-emperor-700 text-4xl">
                        Hello there, I'm
                    </span>{' '}
                    <span className="font-laviossa text-7xl p-4 bg-gradient-to-r from-wisteria-500 to-nypink-400 text-transparent bg-clip-text font-bold">
                        Doan
                    </span>{' '}
                    <br />
                    <span className="font-eloquiabold text-nypink-400 text-4xl">
                        Frontend
                    </span>{' '}
                    <span className="font-eloquiabold stroke text-fantasy-50 text-4xl">
                        Developer
                    </span>{' '}
                    <br />
                    <span className="font-eloquiabold stroke text-fantasy-50 text-4xl">
                        {' '}
                        UI/UX
                    </span>{' '}
                    <span className="font-eloquiabold text-nypink-400 text-4xl">
                        Designer.
                    </span>
                    <br />
                    <br />
                    <span className="font-eloquialight text-emperor-500">
                        {' '}
                        I'm Flora Sheen Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to specimen book.
                    </span>
                </div>
                <div className='w-96 h-96'>
                    <img
                        src={avatar}
                        alt="avatar"
                        className="rounded-full"
                    />
                </div>
            </div>
            </SectionPrimary>
            <SectionSecondary>
                <div>Hello Doan</div>
            </SectionSecondary>
            <SectionPrimary>
                <div>Hello Doan</div>
            </SectionPrimary>
        </div>
    )
}

export default Home
