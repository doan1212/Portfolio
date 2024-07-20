import React from 'react'
import { Button, OutlineGradientButton } from '../../Components/Button/Button'
import avatar from '../../Assets/Image/avatar.png'
import {
    SectionPrimary,
    SectionSecondary,
} from '../../Components/Section/Section'
import { InfoCard, ReverseInfoCard } from '../../Components/InfoCard/InfoCard'
import { IndexTitle } from '../../Components/InfoCard/Title'
import MockImage1 from '../../Assets/mock_1.jpg'
import MockImage2 from '../../Assets/mock_2.jpg'
import MockImage3 from '../../Assets/mock_3.jpg'

const Home = () => {
    const projects = [
        {
            title: 'Project 1',
            image: MockImage1,
            link: 'https://www.google.com',
            content: `I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to specimen book.`,
        },
        {
            title: 'Project 2',
            image: MockImage2,
            link: 'https://www.google.com',
            content: `I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to specimen book.`,
        },
        {
            title: 'Project 3',
            image: MockImage3,
            link: 'https://www.google.com',
            content: `I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to specimen book.`,
        },
    ]

    return (
        <div>
            <SectionPrimary>
            <div className="flex flex-row justify-evenly ">
                <div className=" px-10 items-center justify-center ">
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
                <div >
                    <img
                        src={avatar}
                        alt="avatar"
                        className="rounded-full"
                    />
                </div>
            </div>
            </SectionPrimary>
            <SectionSecondary>
                
            </SectionSecondary>
            <SectionPrimary>
            <InfoCard
                    title={<IndexTitle index="01" title={projects[0].title} />}
                    content={projects[0].content}
                    image={projects[0].image}
                    link={projects[0].link}
                />
                <ReverseInfoCard
                    title={<IndexTitle index="02" title={projects[1].title} />}
                    content={projects[1].content}
                    image={projects[1].image}
                    link={projects[1].link}
                />
                <InfoCard
                    title={<IndexTitle index="03" title={projects[2].title} />}
                    content={projects[2].content}
                    image={projects[2].image}
                    link={projects[2].link}
                />
            </SectionPrimary>
        </div>
    )
}

export default Home
