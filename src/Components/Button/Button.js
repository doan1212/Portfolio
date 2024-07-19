const BaseButton = ({ children, onClick, className, ...props }) => {
    return (
        <button
            onClick={onClick}
            className={`${className} basic-btn`}
            {...props}
        >
            {/* <span className="block rounded-full bg-white px-5 py-2 text-sm font-eloquialight group-hover:bg-transparent"> */}
            <span>
                {children}
            </span>
        </button>
    )
}

const ButtonType = {
    gradient: "btnGradient",
    solid: "btnSolid",
    outline: "btnOutline",
}

const ButtonAnimation = {
    pulse: "btnPulse",
    shake: "btnShake",
    bounce: "btnBounce",
}



/*
 * type: gradient, solid, outline
 * gradientFrom: color
 * gradientTo: color
 * color: color
 * animation: boolean
 * animationType: pulse, shake, bounce
 */
const Button = ({
    type,
    gradientFrom,
    gradientTo,
    color,
    animation,
    animationType,
    children,
    onClick,
    ...props
}) => {}

export { BaseButton }
