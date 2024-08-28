import { OutlineGradientButton } from '../Button/Button'

const NavigationHeaderRight = ({ onResumeClick }) => {
    return (
        <div className="basic flex flex-row transition">
            <OutlineGradientButton
                type="primary"
                size="sm"
                color="emperor-700"
                children={'My Resume'}
                onClick={onResumeClick}
            />
        </div>
    )
}

export default NavigationHeaderRight
