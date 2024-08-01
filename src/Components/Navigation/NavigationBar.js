import { NavRoute } from '../../Constants/Routes'
import NavigationButton from './NavigationButton'
import NavigationHeaderLeft from './NavigationHeaderLeft'
import NavigationHeaderRight from './NavigationHeaderRight'

const NavigationBar = () => {
    const defaultStyle = 'w-full';
    const mdStyle = 'md:w-10/12';
    const lgStyle = 'lg:w-9/12';
    const xlStyle = 'xl:w-9/12';
    const xxlStyle = '2xl:w-7/12';
    return (
        <nav id="navbar" className="w-full flex justify-center fixed top-0 basicTransition z-[9999]">
            
            <div className={`
                md:grid grid-rows-3 md:grid-rows-1 md:grid-cols-9 gap-4 px-36 py-5 items-center flex flex-col
                ${defaultStyle}
                
                `}>
                <div className="md:col-start-1 md:col-span-2 flex justify-start">
                    <NavigationHeaderLeft />
                </div>
                <ul className="flex flex-row justify-center gap-10 md:col-start-3 md:col-span-5">
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
                <div className="md:col-end-10 md:col-span-2 flex justify-end">
                    <NavigationHeaderRight />
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar
