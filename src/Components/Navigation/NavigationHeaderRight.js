import { OutlineGradientButton } from '../Button/Button'

const NavigationHeaderRight = () => {
    return (
        <div className="flex flex-row">
            <OutlineGradientButton
                type="primary"
                size="sm"
                children={'My Resume'}
            />
        </div>
    )
}

export default NavigationHeaderRight
