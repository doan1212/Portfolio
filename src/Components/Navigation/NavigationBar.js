import { NavRoute } from '../../Constants/Routes'
import NavigationButton from './NavigationButton'
import NavigationHeaderLeft from './NavigationHeaderLeft'
import NavigationHeaderRight from './NavigationHeaderRight'

const NavigationBar = ({ onResumeClick }) => {
    const defaultStyle = 'w-full'
    const mdStyle = 'md:w-10/12'
    const lgStyle = 'lg:w-9/12'
    const xlStyle = 'xl:w-9/12'
    const xxlStyle = '2xl:w-7/12'
    return (
        <nav
            id="navbar"
            className="basicTransition fixed top-0 z-10 flex w-full justify-center"
        >
            <div
                className={`flex grid-rows-3 flex-col items-center gap-4 px-36 py-5 md:grid md:grid-cols-9 md:grid-rows-1 ${defaultStyle} `}
            >
                <div className="flex justify-start md:col-span-2 md:col-start-1">
                    <NavigationHeaderLeft />
                </div>
                <ul className="flex flex-row justify-center gap-10 md:col-span-5 md:col-start-3">
                    {[
                        {
                            title: 'Home',
                            route: NavRoute.home,
                        },
                        {
                            title: 'About',
                            route: NavRoute.about,
                        },
                        {
                            title: 'Projects',
                            route: NavRoute.projects,
                        },
                    ].map((item, index) => (
                        <NavigationButton
                            key={index}
                            name={item.title}
                            route={item.route}
                        />
                    ))}
                </ul>
                <div className="flex justify-end md:col-span-2 md:col-end-10">
                    <NavigationHeaderRight onResumeClick={onResumeClick} />
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar
