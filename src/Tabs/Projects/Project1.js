import {
    SectionPrimary,
    SectionSecondary,
} from '../../Components/Section/Section'
import banner from '../../Assets/Image/banner.png'
import ScollToSection from '../../Components/ScollToSection/ScollToSection'
import sketch from '../../Assets/Image/2.5D_Sketch.drawio.png'
import DATA from '../../Assets/Projects/project1.json'
import { formatString } from '../../Utils/stringHelper'
import {
    VerticalTextBox,
    HorizontalTextBox,
} from '../../Components/TextBox/TextBox'

const Project1 = () => {
    return (
        <div>
            <SectionPrimary>
                <div className="flex flex-col items-center justify-start gap-5 md:flex-row">
                    <div className="items-center justify-start p-5">
                        <div className="font-laviossa text-5xl text-wisteria-600">
                            {DATA.name}
                        </div>
                        <div className="w-96 font-eloquialight text-xl text-emperor-700">
                            {DATA.shortDescription}
                        </div>
                    </div>
                    <img
                        className="h-3/4 w-3/4 justify-center"
                        src={banner}
                        alt="ILUVUS"
                    />
                </div>
            </SectionPrimary>
            <SectionSecondary>
                <div className="grid grid-cols-1 items-start md:grid-cols-2 md:flex-row">
                    <VerticalTextBox
                        title="Overview"
                        content={formatString(DATA.overview)}
                    />
                    <VerticalTextBox
                        title="A Refined Scope"
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
                        title="platform"
                        content={
                            <ul>
                                {DATA.platform.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                        }
                    />
                    {/* <div className=" p-5 items-center justify-start ">
                        <div className="font-laviossa text-2xl text-nypink-400">
                            Role
                        </div>
                        <div className="font-eloquialight text-md text-emperor-700 w-48">
                            UX Design
                            <br />
                            Visual Design
                            <br />
                            Frontend Development
                            <br />
                            (Team of Five)
                        </div>
                    </div>
                    <div className=" p-5 items-center justify-start ">
                        <div className="font-laviossa text-2xl text-nypink-400">
                            Timeline
                        </div>
                        <div className="font-eloquialight text-md text-emperor-700 w-48">
                            3 week sprint
                            <br />
                            Research 3+ weeks
                            <br />
                            Design 4+ weeks
                        </div>
                    </div>
                    <div className=" p-5 items-center justify-start ">
                        <div className="font-laviossa text-2xl text-nypink-400">
                            Tools
                        </div>
                        <div className="font-eloquialight text-md text-emperor-700 w-48">
                            Figma
                            <br />
                            React Native
                            <br />
                            MongoDB
                            <br />
                            Spring Boot
                            <br />
                            Cloud Firestore
                        </div>
                    </div>
                    <div className=" p-5 items-center justify-start">
                        <div className="font-laviossa text-2xl text-nypink-400">
                            Process
                        </div>
                        <div className="font-eloquialight text-md text-emperor-700 w-48">
                            Discovery
                            <br />
                            Ideation
                            <br />
                            Design
                            <br />
                            Development
                            <br />
                            Relection
                        </div>
                    </div>
                    <div className=" p-5 items-center justify-start ">
                        <div className="font-laviossa text-2xl text-nypink-400">
                            Platform
                        </div>
                        <div className="font-eloquialight text-md text-emperor-700 w-48">
                            iOS
                            <br />
                            Android
                        </div>
                    </div> */}
                </div>
            </SectionSecondary>
            <SectionPrimary>
                <ScollToSection />
            </SectionPrimary>
            <SectionSecondary id="section1" title={'Discovery'}>
                <div className="flex flex-col items-center justify-start gap-5 md:flex-row">
                    <div className="font-laviossa text-2xl text-nypink-400">
                        Client Research
                    </div>
                    <div className="text-md font-eloquialight text-emperor-700">
                        After meetings with our client, our team thoroughly
                        discuss the users' needs, along with the vision that the
                        client had for this project. We learned we need to
                        identify what matters most to our users. Do they
                        prioritize diversity, user-friendliness, content
                        quality, or something else? This question will help us
                        to polish the application’s user experience to align
                        with their preferences.
                    </div>
                </div>
                <div className="flex flex-col items-center justify-start gap-5 md:flex-row">
                    <div className="font-laviossa text-2xl text-nypink-400">
                        User Research
                    </div>
                    <div className="text-md font-eloquialight text-emperor-700">
                        We conducted a user interview and survey to understand
                        the users' needs, preferences, and pain points. The
                        research findings we collected from the compilation of
                        the survey revealed that our users want a platform that
                        prioritizes a user-friendly interface, effective content
                        moderation, and robust privacy settings, offers a unique
                        user experience, and ensures a safe and positive
                        environment.
                    </div>
                </div>
                <div className="flex flex-col items-center justify-start gap-5">
                    <div>
                        <div className="font-laviossa text-2xl text-nypink-400">
                            2.5D Sketch
                        </div>
                        <img
                            src={sketch}
                            alt="sketch"
                            className="h-fit w-fit p-5"
                        />
                        <div className="text-md font-eloquialight text-emperor-700">
                            Our insights gathered from research led to the
                            creation of the following 2.5D sketch based on the
                            target audience for our product.
                        </div>
                    </div>
                </div>
            </SectionSecondary>
            <SectionSecondary id="section2" title={'Ideation'}>
                <div>
                    <div className="font-laviossa text-2xl text-nypink-400">
                        User Stories
                    </div>
                    <div className="text-md font-eloquialight text-emperor-700">
                        We focused on the main five user stories to guide our
                        design and development process. These stories helped us
                        to understand the user's needs and expectations, and how
                        they would interact with the application.
                        <br />
                        <ol className="list-inside list-decimal">
                            <li>
                                As a user, I want to create an account to
                                personalize my experience.
                            </li>
                            <li>
                                As a user, I want to post content to share my
                                stories and achievements.
                            </li>
                            <li>
                                As a user, I want to comment on posts to engage
                                with the community.
                            </li>
                            <li>
                                As a user, I want to report inappropriate
                                content to keep the community safe.
                            </li>
                            <li>
                                As a user, I want to search for specific content
                                to find relevant posts.
                            </li>
                        </ol>
                    </div>
                </div>
            </SectionSecondary>
            <SectionSecondary id="section3" title={'Design'}></SectionSecondary>

            <SectionSecondary
                id="section4"
                title={'Development'}
            ></SectionSecondary>

            <SectionSecondary
                id="section5"
                title={'Reflection'}
            ></SectionSecondary>
        </div>
    )
}

export default Project1
