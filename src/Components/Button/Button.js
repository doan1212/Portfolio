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
    'solid-primary':
        'px-5 py-2 bg-wisteria-600 hover:bg-wisteria-700 focus:bg-wisteria-800 text-white',
    'solid-secondary':
        'px-5 py-2 bg-nypink-400 hover:bg-nypink-500 focus:bg-nypink-600 text-white',
    'outline-primary':
        'border-[2px] px-5 py-2 border-wisteria-600 hover:border-wisteria-700 hover:bg-wisteria-700 hover:text-white focus:bg-wisteria-800',
    'outline-secondary':
        'border-[2px] px-5 py-2 border-nypink-400 hover:border-nypink-500 hover:bg-nypink-500 hover:text-white focus:bg-nypink-600',
    'gradient-primary':
        'text-white px-5 py-2 bg-gradient-to-r from-wisteria-600 to-nypink-400',
    'gradient-secondary':
        'text-white px-5 py-2 bg-gradient-to-r from-nypink-400 to-wisteria-600',
}

const Button = ({ type, className, children, onClick, ...props }) => {
    const btnClass = ButtonType[type]
        ? ButtonType[type]
        : ButtonType['solid-primary']

    return (
        <BaseButton
            onClick={onClick}
            className={`${className} ${btnClass} basicTransition`}
            {...props}
        >
            {children}
        </BaseButton>
    )
}

const GradientButtonType = {
    primary:
        'text-white p-[2px] bg-gradient-to-r from-wisteria-600 to-nypink-400',
    secondary:
        'text-white p-[2px] bg-gradient-to-r from-nypink-400 to-wisteria-600',
}

const OutlineGradientButton = ({
    type,
    className,
    children,
    onClick,
    ...props
}) => {
    const btnClass = GradientButtonType[type]
        ? GradientButtonType[type]
        : GradientButtonType['primary']

    return (
        <BaseButton
            onClick={onClick}
            className={`${className} ${btnClass}`}
            {...props}
        >
            <span className="basicTransition text-wisteria-950 block rounded-full bg-white px-5 py-2 font-eloquialight group-hover:bg-transparent group-hover:text-white">
                {children}
            </span>
        </BaseButton>
    )
}

export { Button, OutlineGradientButton }
