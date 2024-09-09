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
            content: `UI/UX Design | Redesigned |An website travel agency offering a comprehensive platform for booking flights, hotels, and vacation packages.`,
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
                        <span className="font-eloquialight text-lg text-emperor-500 md:text-base">
                            {' '}
                            I'm passionate about creating seamless,
                            user-centered designs that blend creativity with
                            functionality, always exploring new ways to enhance
                            the user experience through innovative solutions.
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
                </div>
            </SectionPrimary>
            <div className="absolute left-0 right-0 -z-10 m-auto h-[2px] w-[68%] bg-transparent from-nypink-400 to-wisteria-600 md:bg-gradient-to-r">
                {' '}
            </div>
        </div>
    )
}

export default Home
