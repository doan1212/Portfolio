export const VerticalTextBox = ({ title, content }) => {
    return (
        <div className="items-center flex flex-row justify-start p-5 gap-5">
            <div className="font-laviossa text-2xl text-nypink-400">
                {title}
            </div>
            <div className="text-md font-eloquialight text-emperor-700">
                {content}
            </div>
        </div>
    )
}

export const HorizontalTextBox = ({ title, content, className }) => {
    return (
        <div
            className={`flex w-full flex-col gap-5 items-start justify-start ${className}`}
        >
            <div className="font-laviossa text-2xl text-nypink-400">
                {title}
            </div>
            <div className="text-md font-eloquialight text-emperor-700">
                {content}
            </div>
        </div>
    )
}

export const QuoteTextBox = ({ title, content, className }) => {
    return (
        <div
            className={`flex w-full flex-col items-start  gap-5 justify-start ${className}`}
        >
            <div className="font-laviossa text-2xl text-nypink-400">
                {title}
            </div>
            <div className="text-md font-eloquialight italic text-emperor-700 grid grid-flow-row grid-cols-3 items-start justify-center gap-5">
                {content}
            </div>
        </div>
    )
}
