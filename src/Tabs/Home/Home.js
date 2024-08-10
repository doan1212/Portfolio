import React from 'react'
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
import MockImage3 from '../../Assets/mock_3.jpg'
import { NavRoute } from '../../Constants/Routes'

const Home = () => {
    const projects = [
        {
            title: 'ILUVUS Application',
            image: MockImage1,
            link: NavRoute.project1,
            content: `UI/UX Design | Frontend Development | A mobile app create a space for users to connect, share, and celebrate achievements.`,
        },
        {
            title: 'Traveloka',
            image: MockImage2,
            link: NavRoute.project2,
            content: `I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to specimen book.`,
        },
        {
            title: 'Project 3',
            image: MockImage3,
            link: NavRoute.project3,
            content: `I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to specimen book.`,
        },
    ]

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
                        <span className="font-eloquiabold text-3xl text-nypink-400 md:text-5xl">
                            Frontend
                        </span>{' '}
                        <span className="stroke font-eloquiabold text-3xl text-fantasy-50 md:text-5xl">
                            Developer
                        </span>{' '}
                        <br />
                        <span className="stroke font-eloquiabold text-3xl text-fantasy-50 md:text-5xl">
                            {' '}
                            UI/UX
                        </span>{' '}
                        <span className="font-eloquiabold text-3xl text-nypink-400 md:text-5xl">
                            Designer.
                        </span>
                        <br />
                        <br />
                        <span className="font-eloquialight text-sm text-emperor-500 md:text-base">
                            {' '}
                            I'm Flora Sheen Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to specimen book.
                        </span>
                    </div>
                    <div className="order-1 h-1/2 w-1/2 md:order-2 md:h-full md:w-full">
                        <img
                            src={avatar}
                            alt="avatar"
                            className="rounded-full"
                        />
                    </div>
                </div>
            </SectionPrimary>
            <SectionPrimary></SectionPrimary>
            <SectionPrimary title={''}>
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
