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
        <nav id="navbar" className="w-full flex justify-center fixed top-0 basicTransition">
            <div className={`
                grid grid-cols-9 gap-4 px-10 py-5 items-center
                ${defaultStyle}
                ${mdStyle}
                ${lgStyle}
                ${xlStyle}
                ${xxlStyle}
                `}>
                <div className="col-start-1 col-span-2 flex justify-start">
                    <NavigationHeaderLeft />
                </div>
                <div className="flex flex-row justify-center gap-10 col-start-3 col-span-5">
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
                            title: 'Component',
                            route: NavRoute.component,
                        },
                    ].map((item, index) => (
                        <NavigationButton
                            key={index}
                            name={item.title}
                            route={item.route}
                        />
                    ))}
                </div>
                <div className="col-end-10 col-span-2 flex justify-end">
                    <NavigationHeaderRight />
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar
