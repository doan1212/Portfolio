import { NavRoute } from '../../Constants/Routes'
import NavigationButton from './NavigationButton'
import NavigationHeaderLeft from './NavigationHeaderLeft'
import NavigationHeaderRight from './NavigationHeaderRight'

const NavigationBar = () => {
    return (
        <div className='grid grid-cols-9 gap-4 p-10 items-center md:w-9/12'>
            <div className='col-start-1 col-span-2 flex justify-start'>
                <NavigationHeaderLeft />
            </div>
            <div className="flex flex-row justify-center gap-10 col-start-3 col-span-5">
                <NavigationButton name="Home" route={NavRoute.home} />
                <NavigationButton name="About" route={NavRoute.about} />
            </div>
            <div className='col-end-10 col-span-2 flex justify-end'>
                <NavigationHeaderRight />
                </div>
        </div>
    )
}

export default NavigationBar
