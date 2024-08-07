import { OutlineGradientButton } from '../Button/Button'

const NavigationHeaderRight = () => {
    return (
        <div className="flex flex-row basic transition">
            <OutlineGradientButton
                type="primary"
                size="sm"
                color = "emperor-700"
                children={'My Resume'}
            />
        </div>
    )
}

export default NavigationHeaderRight
