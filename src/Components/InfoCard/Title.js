const IndexTitle = ({ index, title }) => {
    return (
        <div className="flex-col gap-3 flex text-nypink-400">
            <div className=" text-5xl font-eloquiabold">{index}</div>
            <div className="font-bold text-3xl font-laviossa">{title}</div>
        </div>
    )
}

export { IndexTitle }
