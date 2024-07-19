const BaseButton = ({ children, onClick, className, ...props }) => {
    return (
        <button
            onClick={onClick}
            className={`btnBasic group ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}

const ButtonType = {
    gradient: 'btnGradient',
    solid: 'btnSolid',
    outline: 'btnOutline',
    'gradient-outline': 'btnGradientOutline',
}

const ButtonColor = {
    solid: {
        primary: 'btnSolidPrimary',
        secondary: 'btnSolidSecondary',
    },
    gradient: {
        primary: 'btnGradientPrimary',
    },
    outline: {
        primary: 'btnOutlinePrimary',
        secondary: 'btnOutlineSecondary',
    },
    'gradient-outline': {
        primary: 'btnGradientOutlinePrimary',
    },
}

const ButtonTransition = {
    basic: 'basicTransition',
}

const buttonClassGenerator = (type, color, transition) => {
    let btnType = ButtonType[type] ? ButtonType[type] : ButtonType.solid
    let btnColor = ButtonColor[type][color] ? ButtonColor[type][color] : ''
    let btnTransition = ButtonTransition[transition]
        ? ButtonTransition[transition]
        : ''
    return `${btnType} ${btnColor} ${btnTransition}`
}

/*
 * type: gradient, solid, outline
 * gradientFrom: color
 * gradientTo: color
 * color: color
 * transition: basic
 */
const Button = ({ type, color, transition, children, onClick, ...props }) => {
    const buttonClass = buttonClassGenerator(type, color, transition)
    return (
        <BaseButton onClick={onClick} className={buttonClass} {...props}>
            {type === 'gradient-outline' ? (
                <span className="textGradientOutlinePrimary basicTransition">
                    {children}
                </span>
            ) : (
                <span>{children}</span>
            )}
        </BaseButton>
    )
}

export { BaseButton, Button }
