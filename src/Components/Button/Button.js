const ButtonType = {
    'solid-primary':
        'bg-wisteria-600 hover:bg-wisteria-700 focus:bg-wisteria-800 text-white',
    'solid-secondary':
        'bg-nypink-400 hover:bg-nypink-500 focus:bg-nypink-600 text-white',
    'outline-primary':
        'border-[2px] border-wisteria-600 hover:border-wisteria-700 hover:bg-wisteria-700 hover:text-white focus:bg-wisteria-800',
    'outline-secondary':
        'border-[2px] border-nypink-400 hover:border-nypink-500 hover:bg-nypink-500 hover:text-white focus:bg-nypink-600',
    'gradient-primary':
        'text-white bg-gradient-to-r from-wisteria-600 to-nypink-400',
    'gradient-secondary':
        'text-white bg-gradient-to-r from-nypink-400 to-wisteria-600',
}

const ButtonSize = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
}

const BaseButton = ({ children, onClick, className, ...props }) => {
    return (
        <div>
            <button
                onClick={onClick}
                className={`btnBasic group ${className}`}
                {...props}
            >
                {children}
            </button>
        </div>
    )
}

const Button = ({ type, size, className, children, onClick, ...props }) => {
    const btnClass = ButtonType[type]
        ? ButtonType[type]
        : ButtonType['solid-primary']
    const sizeClass = ButtonSize[size] ? ButtonSize[size] : ButtonSize['md']
    return (
        <BaseButton
            onClick={onClick}
            className={`${className} ${btnClass} ${sizeClass} basicTransition`}
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
    size,
    children,
    onClick,
    ...props
}) => {
    const btnClass = GradientButtonType[type]
        ? GradientButtonType[type]
        : GradientButtonType['primary']
    const sizeClass = ButtonSize[size] ? ButtonSize[size] : ButtonSize['md']

    return (
        <BaseButton
            onClick={onClick}
            className={`${className} ${btnClass}`}
            {...props}
        >
            <span
                className={`${sizeClass} basicTransition text-wisteria-950 block rounded-full bg-white font-eloquialight group-hover:bg-transparent group-hover:text-white`}
            >
                {children}
            </span>
        </BaseButton>
    )
}

export { Button, OutlineGradientButton }
