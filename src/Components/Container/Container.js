const Container = ({ children }) => {
    const defaultStyle = 'px-4 w-full py-16';
    const mdStyle = 'md:w-10/12 md:px-10';
    const lgStyle = 'lg:w-9/12 lg:px-10';
    const xlStyle = 'xl:w-9/12 xl:px-10';
    const xxlStyle = '2xl:w-7/12 2xl:px-10';
    return (
        <div
            className={`
                flex flex-col gap-16
                ${defaultStyle}
                ${mdStyle}
                ${lgStyle}
                ${xlStyle}
                ${xxlStyle}
            `}
        >
            {children}
        </div>
    )
}

export default Container
