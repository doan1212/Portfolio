import {
    SectionPrimary,
    SectionSecondary,
} from '../../Components/Section/Section'
import banner from '../../Assets/Image/banner.png'

const Project1 = () => {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            <SectionPrimary>
                <div className="flex flex-col md:flex-row items-center gap-5 justify-start">
                    <div className=" p-5 items-center justify-start">
                        <div className="font-laviossa text-5xl text-wisteria-600">
                            ILUVUS
                        </div>
                        <div className="font-eloquialight text-xl text-emperor-700 w-96">
                            A social media platform provide a unique user
                            experience that celebrates diversity.
                        </div>
                    </div>
                    <img
                        className="w-3/4 h-3/4 justify-center"
                        src={banner}
                        alt="ILUVUS"
                    />
                </div>
            </SectionPrimary>
            <SectionSecondary>
                <div className="flex flex-col md:flex-row items-start">
                    <div className=" p-5 items-center justify-start ">
                        <div className="font-laviossa text-2xl text-nypink-400">
                            Overview
                        </div>
                        <div className="font-eloquialight text-md text-emperor-700">
                            ILUVUS was inspired to develop
                            <span className="font-eloquiabold">
                                {' '}
                                a social mobile app{' '}
                            </span>
                            dedicated to posting categorical content,
                            commenting, and
                            <span className="font-eloquiabold">
                                {' '}
                                celebrating the achievements
                            </span>
                            , and stories of{' '}
                            <span className="font-eloquiabold">
                                {' '}
                                LGBTQ individuals
                            </span>{' '}
                            and{' '}
                            <span className="font-eloquiabold">
                                {' '}
                                diverse communities
                            </span>
                            .
                        </div>
                    </div>
                    <div className=" p-5 items-center justify-center ">
                        <div className="font-laviossa text-2xl text-nypink-400">
                            A Refined Scope
                        </div>
                        <div className="font-eloquialight text-md text-emperor-700">
                            Our focus to create a space that{' '}
                            <span className="font-eloquiabold">
                                {' '}
                                prioritizes{' '}
                            </span>
                            these communities' accomplishments, offering a{' '}
                            <span className="font-eloquiabold">
                                {' '}
                                unique user experience{' '}
                            </span>{' '}
                            while ensuring a safe and positive environment.
                        </div>
                    </div>
                </div>
            </SectionSecondary>
            <SectionSecondary>
                <div className="flex flex-col md:flex-row items-start justify-center gap-5">
                    <div className=" p-5 items-center justify-start ">
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
                            5 week sprint
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
                            Usability Testing
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
                    </div>
                </div>
            </SectionSecondary>
            <SectionPrimary>
                <div></div>
            </SectionPrimary>
        </div>
    )
}

export default Project1
