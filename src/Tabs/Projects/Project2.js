import { SectionPrimary } from '../../Components/Section/Section'
import mock_2 from '../../Assets/mock_2.png'
import DATA from '../../Assets/Projects/project2.json'
import { SectionSecondary } from '../../Components/Section/Section'
import { formatString } from '../../Utils/stringHelper'
import {
    VerticalTextBox,
    HorizontalTextBox,
    QuoteTextBox,
} from '../../Components/TextBox/TextBox'
import ScrollToSection from '../../Components/Section/ScrollToSection'
import {
    ImageCardWithDescription,
    TwoImageCardWithDescription,
} from '../../Components/ImageCard/ImageCard'
import BrandIdentity from '../../Assets/Image/BrandIdentity.png'
import Expedia from '../../Assets/Image/Expedia.png'
import Expedia2 from '../../Assets/Image/Expedia2.png'

const Project2 = () => {
    return (
        <div>
            <SectionPrimary>
                <div className="gap-5 lg:grid lg:grid-cols-8">
                    <div className="lg:col-span-3 lg:col-start-1">
                        <div className="flex h-full flex-col items-center justify-center p-5 lg:items-start">
                            <div className="font-laviossa text-5xl text-wisteria-600">
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
                            src={mock_2}
                            alt="Traveloka"
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
                        title="Redesign"
                        content={formatString(DATA.refinedScope)}
                    />
                </div>
            </SectionSecondary>
            <SectionSecondary>
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
            </SectionSecondary>
            <SectionPrimary>
                <ScrollToSection
                    sections={[
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
                            id: DATA.sections.reflection.id,
                            name: DATA.sections.reflection.title,
                        },
                    ]}
                />
            </SectionPrimary>
            <SectionSecondary
                id={DATA.sections.discovery.id}
                title={DATA.sections.discovery.title}
            >
                <HorizontalTextBox
                    title={DATA.sections.discovery.heuristic.title}
                    content={formatString(
                        DATA.sections.discovery.heuristic.description
                    )}
                />
                <QuoteTextBox
                    content={DATA.sections.discovery.heuristic.feedback.map(
                        (role, index) => (
                            <li key={index}>{formatString(role)}</li>
                        )
                    )}
                />
                <HorizontalTextBox
                    title={DATA.sections.discovery.brandIdentity.title}
                    content={formatString(
                        DATA.sections.discovery.brandIdentity.description
                    )}
                />

                <img
                    className="h-3/4 w-auto shadow"
                    src={BrandIdentity}
                    alt="Traveloka"
                />

                <HorizontalTextBox
                    title={DATA.sections.discovery.competitiveAnalysis.title}
                    content={
                        <TwoImageCardWithDescription
                            img1={Expedia}
                            img2={Expedia2}
                        />
                    }
                />
            </SectionSecondary>
            <SectionSecondary
                id={DATA.sections.ideation.id}
                title={DATA.sections.ideation.title}
            ></SectionSecondary>
        </div>
    )
}

export default Project2
