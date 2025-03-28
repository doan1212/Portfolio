import {
    SectionPrimary,
    SectionSecondary,
} from '../../Components/Section/Section'
import banner from '../../Assets/Image/banner.png'
import ScrollToSection from '../../Components/Section/ScrollToSection'
import personas1 from '../../Assets/Image/Persona1.png'
import personas2 from '../../Assets/Image/Persona2.png'
import dynamic from '../../Assets/Image/dynamic.png'
import DATA from '../../Assets/Projects/project1.json'
import { formatString } from '../../Utils/stringHelper'
import {
    VerticalTextBox,
    HorizontalTextBox,
    QuoteTextBox,
} from '../../Components/TextBox/TextBox'
import { ImageCardWithDescription } from '../../Components/ImageCard/ImageCard'
import { TwoImageCardWithDescription } from '../../Components/ImageCard/ImageCard'
import { ImageSlider } from '../../Components/ImageCard/ImageSlider'
import userflow1 from '../../Assets/Image/userflow1.png'
import userflow2 from '../../Assets/Image/userflow2.png'
import userflow3 from '../../Assets/Image/userflow3.png'
import userflow4 from '../../Assets/Image/userflow4.png'
import guide1 from '../../Assets/Image/guide1.png'
import guide2 from '../../Assets/Image/guide2.png'
import guide3 from '../../Assets/Image/guide3.png'
import guide4 from '../../Assets/Image/guide4.png'
import guide5 from '../../Assets/Image/guide5.png'
import heuristic from '../../Assets/Image/heuristic.png'
import final from '../../Assets/video/Final.mp4'
import demo from '../../Assets/Image/Demo.png'
import { useState, useEffect } from 'react'
import { FaSquareGithub } from 'react-icons/fa6'

const Project1 = () => {
    const images = [
        { src: userflow1, alt: 'Userflow1' },
        { src: userflow2, alt: 'Userflow2' },
        { src: userflow3, alt: 'Userflow3' },
        { src: userflow4, alt: 'Userflow4' },
    ]

    const guides = [
        { src: guide1, alt: 'Guide1' },
        { src: guide2, alt: 'Guide2' },
        { src: guide3, alt: 'Guide3' },
        { src: guide4, alt: 'Guide4' },
        { src: guide5, alt: 'Guide5' },
    ]

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
                            className="h-3/4 w-auto"
                            src={banner}
                            alt="ILUVUS"
                        />
                    </div>
                </div>
            </SectionPrimary>
            <SectionSecondary>
                <div className="grid grid-cols-1 items-start md:grid-cols-2 md:flex-row">
                    <HorizontalTextBox
                        title="Overview"
                        content={formatString(DATA.overview)}
                    />
                    <HorizontalTextBox
                        title="A Refined Scope"
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
                    title={DATA.sections.discovery.clientResearch.title}
                    content={formatString(
                        DATA.sections.discovery.clientResearch.description
                    )}
                />
                <VerticalTextBox
                    title={DATA.sections.discovery.userResearch.title}
                    content={formatString(
                        DATA.sections.discovery.userResearch.description
                    )}
                />
            </SectionSecondary>
            <SectionSecondary
                id={DATA.sections.ideation.id}
                title={DATA.sections.ideation.title}
            >
                <HorizontalTextBox
                    title={DATA.sections.ideation['personas'].title}
                    content={
                        <TwoImageCardWithDescription
                            content={formatString(
                                DATA.sections.ideation['personas'].description
                            )}
                            img1={personas1}
                            img2={personas2}
                        />
                    }
                />
                <HorizontalTextBox
                    title={DATA.sections.ideation['dynamic'].title}
                    content={
                        <ImageCardWithDescription
                            content={formatString(
                                DATA.sections.ideation['dynamic'].description
                            )}
                            img={dynamic}
                        />
                    }
                />
            </SectionSecondary>
            <SectionSecondary
                id={DATA.sections.design.id}
                title={DATA.sections.design.title}
            >
                <HorizontalTextBox
                    title={DATA.sections.design['sketches'].title}
                    content={formatString(
                        DATA.sections.design['sketches'].description
                    )}
                />
                <ImageSlider images={images}> </ImageSlider>

                <HorizontalTextBox
                    title={DATA.sections.design['styleGuide'].title}
                    content={formatString(
                        DATA.sections.design['styleGuide'].description
                    )}
                />

                <ImageSlider images={guides}> </ImageSlider>
            </SectionSecondary>

            <SectionSecondary
                id={DATA.sections.development.id}
                title={DATA.sections.development.title}
            >
                <HorizontalTextBox
                    title={DATA.sections.development['prototype'].title}
                    content={formatString(
                        DATA.sections.development['prototype'].description
                    )}
                />
                <iframe
                    src={DATA.sections.development.prototype.src}
                    className="flex md:w-full"
                    height={700}
                    title="iframe"
                    allowfullscreen="true"
                />

                <QuoteTextBox
                    title={DATA.sections.development['heuristic'].title}
                    content={DATA.sections.development.heuristic.feedback.map(
                        (role, index) => (
                            <ul key={index}>{formatString(role)}</ul>
                        )
                    )}
                    className={'italic'}
                />

                <ImageCardWithDescription
                    content={formatString(
                        DATA.sections.development['heuristic'].description
                    )}
                    img={heuristic}
                />
                <HorizontalTextBox
                    title={DATA.sections.development['final'].title}
                    content={
                        <div>
                            <div>
                                <a href="https://github.com/ILUVUS">
                                    <div className="mb-2 flex flex-row items-center gap-2 text-2xl text-wisteria-500 hover:underline">
                                        <FaSquareGithub />
                                        <span>Source code</span>
                                    </div>
                                </a>
                            </div>
                            <div>
                                {formatString(
                                    DATA.sections.development['final']
                                        .description
                                )}
                            </div>
                        </div>
                    }
                />
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <video width="320" height="240" controls>
                        <source src={final} type="video/mp4" />
                    </video>
                </div>
            </SectionSecondary>

            <SectionSecondary
                id={DATA.sections.reflection.id}
                title={DATA.sections.reflection.title}
            >
                <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:flex-row">
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
                </div>

                <div className="flex items-center justify-center">
                    <ImageCardWithDescription
                        content={formatString(
                            DATA.sections.reflection['demo'].description
                        )}
                        img={demo}
                    />
                </div>
            </SectionSecondary>
        </div>
    )
}

export default Project1
