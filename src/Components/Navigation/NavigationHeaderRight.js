import { Button } from '../Button/Button'

const NavigationHeaderRight = () => {
    return (
        <div className='flex flex-row'>
            <Button
                type="gradient-outline"
                color="primary"
                children={<span>Hello</span>}
            />
        </div>
    )
}

export default NavigationHeaderRight
