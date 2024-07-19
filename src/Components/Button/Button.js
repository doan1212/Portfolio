const Button = ({children, onClick, className, ...props }) => {
    return (
        <button onClick={onClick} className={`${className}`} {...props}>
            {children}
        </button>
    )
}

const PrimaryButton = ({children, onClick }) => {
    return (
        <Button onClick={onClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            {children}
        </Button>
    )
}

const SecondaryButton = ({children, onClick }) => {
    return (
        <Button onClick={onClick} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
            {children}
        </Button>
    )
}

export { Button, PrimaryButton, SecondaryButton }