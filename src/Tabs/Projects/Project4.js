import {
    SectionPrimary,
    SectionSecondary,
} from '../../Components/Section/Section'
import mock4 from '../../Assets/Image/mock_4.png'
import ScrollToSection from '../../Components/Section/ScrollToSection'
import userstory1 from '../../Assets/Image/Story1.jpg'
import userstory2 from '../../Assets/Image/Story2.jpg'
import userstory3 from '../../Assets/Image/Story3.jpg'
import styleGuide from '../../Assets/Image/StyleGuide4.png'
import paperWireframe from '../../Assets/Image/paper1.jpg'
import paperWireframe2 from '../../Assets/Image/paper2.jpg'
import { formatString } from '../../Utils/stringHelper'
import {
    VerticalTextBox,
    HorizontalTextBox,
    QuoteTextBox,
} from '../../Components/TextBox/TextBox'
import { ImageCardWithDescription } from '../../Components/ImageCard/ImageCard'
import { TwoImageCardWithDescription } from '../../Components/ImageCard/ImageCard'
import { ImageSlider } from '../../Components/ImageCard/ImageSlider'
import { useState, useEffect } from 'react'
import { FaSquareGithub } from 'react-icons/fa6'
import UserPersona1 from '../../Assets/Image/user1.png'
import UserPersona2 from '../../Assets/Image/user2.png'
import UserPersona3 from '../../Assets/Image/user3.png'
import sitemap from '../../Assets/Image/sitemap.jpg'
import DATA from '../../Assets/Projects/project4.json'
import userJourney1 from '../../Assets/Image/userJourney1.png'
import { s, u } from 'framer-motion/client'
import userflow from '../../Assets/Image/userflow.png'

const Project4 = () => {
    

    const UserPersonas = [
        { src: UserPersona1, alt: 'UserPersona1' },
        { src: UserPersona2, alt: 'UserPersona2' },
        { src: UserPersona3, alt: 'UserPersona3' },
    ]

    const userStorys = [
        { src: userstory1, alt: 'UserStory1' },
        { src: userstory2, alt: 'UserStory2' },
        { src: userstory3, alt: 'UserStory3' },
    ]

    const userJourneys = [{ src: userJourney1, alt: 'UserJourney1' }]

    const [isFlying, setIsFlying] = useState(true)

    // useEffect(() => {
    //     const flyingBarHeight =
    //         document.getElementById('flyingBar').clientHeight
    //     document.body.style.marginBottom = `${flyingBarHeight}px`
    // }, [])

    const sectionsDetails = [
        {
            id: DATA.sections.discovery.id,
            name: DATA.sections.discovery.title,
        },
        {
            id: DATA.sections.ideation.id,
            name: DATA.sections.ideation.title,
        },
        {
            id: DATA.sections.design.id,
            name: DATA.sections.design.title,
        },
        {
            id: DATA.sections.development.id,
            name: DATA.sections.development.title,
        },
        {
            id: DATA.sections.reflection.id,
            name: DATA.sections.reflection.title,
        },
    ]
    return (
        <div>
            <SectionPrimary>
                <div className="gap-5 lg:grid lg:grid-cols-8">
                    <div className="lg:col-span-3 lg:col-start-1">
                        <div className="flex h-full flex-col items-center justify-center p-5 lg:items-start">
                            <div className="font-eloquiabold text-5xl text-wisteria-600">
                                {DATA.name}
                            </div>
                            <div className="w-96 font-eloquialight text-xl text-emperor-700">
                                {DATA.shortDescription}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center lg:col-span-5 lg:col-start-4">
                        <img
                            className="h-full w-auto"
                            src={mock4}
                            alt="Plannee"
                        />
                    </div>
                </div>
            </SectionPrimary>
            <SectionSecondary>
                <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:flex-row">
                    <HorizontalTextBox
                        title="Overview"
                        content={formatString(DATA.overview)}
                    />
                    <HorizontalTextBox
                        title="Solution"
                        content={formatString(DATA.refinedScope)}
                    />
                </div>
            </SectionSecondary>
            <SectionPrimary>
                <div className="grid grid-flow-row grid-cols-2 items-start justify-center gap-5 md:grid-cols-3 md:flex-row lg:grid-cols-5">
                    <HorizontalTextBox
                        title="Role"
                        content={
                            <ul>
                                {DATA.roles.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                        }
                    />
                    <HorizontalTextBox
                        title="Timeline"
                        content={
                            <ul>
                                {DATA.timeline.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                        }
                    />
                    <HorizontalTextBox
                        title="Tools"
                        content={
                            <ul>
                                {DATA.tools.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                        }
                    />
                    <HorizontalTextBox
                        title="Process"
                        content={
                            <ul>
                                {DATA.process.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                        }
                    />
                    <HorizontalTextBox
                        title="Platform"
                        content={
                            <ul>
                                {DATA.platform.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                        }
                    />
                </div>
            </SectionPrimary>

            <SectionPrimary id="flyingBar" isFlying={isFlying}>
                <ScrollToSection
                    isFlying={isFlying}
                    sections={sectionsDetails}
                />
            </SectionPrimary>

            <SectionSecondary
                id={DATA.sections.discovery.id}
                title={DATA.sections.discovery.title}
            >
                <VerticalTextBox
                    title={DATA.sections.discovery['goalStatement'].title}
                    content={formatString(
                        DATA.sections.discovery['goalStatement'].description
                    )}
                />
                <HorizontalTextBox
                    title={DATA.sections.discovery['competitiveAnalysis'].title}
                    content={formatString(
                        DATA.sections.discovery['competitiveAnalysis']
                            .description
                    )}
                />

                <HorizontalTextBox
                    title={DATA.sections.discovery['Userpersonas'].title}
                    content={DATA.sections.discovery.Userpersonas.description}
                />
                <ImageSlider images={UserPersonas} />
                <HorizontalTextBox
                    title={DATA.sections.discovery.userStory.title}
                    content={formatString(
                        DATA.sections.discovery.userStory.description
                    )}
                />
                <ImageSlider images={userStorys} />

                <HorizontalTextBox
                    title={DATA.sections.discovery.userJourney.title}
                    content={formatString(
                        DATA.sections.discovery.userJourney.description
                    )}
                />
                <ImageSlider images={userJourneys} />
            </SectionSecondary>

            <SectionSecondary
                id={DATA.sections.ideation.id}
                title={DATA.sections.ideation.title}
            >
                <HorizontalTextBox
                    title={DATA.sections.ideation.Brainstorming.title}
                    content={
                        formatString(
                            DATA.sections.ideation.Brainstorming.description
                        )}
                />
                <iframe
                    src={DATA.sections.ideation.Brainstorming.src}
                    className="flex md:w-full"
                    height={700}
                    title="iframe"
                    allowfullscreen="true"
                />
                <HorizontalTextBox
                    title={DATA.sections.ideation.siteMap.title}
                    content={ <ImageCardWithDescription
                    content={formatString(
                        DATA.sections.ideation.siteMap.description
                    )}
                    img={sitemap}
                /> }
                />
                <HorizontalTextBox
                    title={DATA.sections.ideation.userFlow.title}
                    content={ <ImageCardWithDescription
                    content={formatString(
                        DATA.sections.ideation.userFlow.description
                    )}
                    img={userflow}
                /> }
                />
                
            
            </SectionSecondary>
        
            <SectionSecondary
                id={DATA.sections.design.id}
                title={DATA.sections.design.title}
            >
                <HorizontalTextBox
                    title={DATA.sections.design['Wireframe'].title}
                    content={formatString(
                        DATA.sections.design['Wireframe'].description
                    )}
                />
                <ImageSlider
                    images={[
                        { src: paperWireframe, alt: 'PaperWireframe1' },
                        { src: paperWireframe2, alt: 'PaperWireframe2' },
                    ]}
                />


                <HorizontalTextBox
                    title={DATA.sections.design['Digital Wireframe'].title}
                    content={formatString(
                        DATA.sections.design['Digital Wireframe'].description
                    )}
                />
                <iframe
                    src={DATA.sections.design['Digital Wireframe'].src}
                    className="flex md:w-full"
                    height={700}
                    title="iframe"
                    allowfullscreen="true"
                />
                <HorizontalTextBox
                    title={DATA.sections.design['styleGuide'].title}
                    content={formatString(
                        DATA.sections.design['styleGuide'].description
                    )}
                />

                <ImageCardWithDescription
                    content={formatString(
                        DATA.sections.design.styleGuide.title
                    )}
                    img={styleGuide}
                />
            </SectionSecondary>

            <SectionSecondary
                id={DATA.sections.development.id}
                title={DATA.sections.development.title}
            >
                {/* <HorizontalTextBox
                    title={DATA.sections.development['prototype'].title}
                    content={formatString(
                        DATA.sections.development['prototype'].description
                    )}
                />
                 <div className="flex justify-center">
                    <div
                        style={{
                            transform: 'scale(0.4)',
                            transformOrigin: 'top',
                        }}
                    >
                        <ImageSlider images={prototypes} />
                    </div>
                </div> 

                <iframe
                    src={DATA.sections.development.prototype.src}
                    className="flex md:w-full"
                    height={700}
                    title="iframe"
                    allowfullscreen="true"
                />  */}
            </SectionSecondary>

            <SectionSecondary
                id={DATA.sections.reflection.id}
                title={DATA.sections.reflection.title}
            >
                {/* <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:flex-row">
                    <HorizontalTextBox
                        title={DATA.sections.reflection['lookingback'].title}
                        content={
                            <div className="gap-5">
                                {formatString(
                                    DATA.sections.reflection['lookingback']
                                        .description
                                )}
                                <ul className="mx-10 list-disc">
                                    {DATA.sections.reflection[
                                        'lookingback'
                                    ].list.map((role, index) => (
                                        <li key={index}>
                                            {formatString(role)}
                                        </li>
                                    ))}
                                </ul>
                                {formatString(
                                    DATA.sections.reflection['lookingback']
                                        .reflection
                                )}
                            </div>
                        }
                    />
                    <HorizontalTextBox
                        title={DATA.sections.reflection['lookingforward'].title}
                        content={formatString(
                            DATA.sections.reflection['lookingforward']
                                .description
                        )}
                    />
                </div> */}
            </SectionSecondary>
        </div>
    )
}

export default Project4
