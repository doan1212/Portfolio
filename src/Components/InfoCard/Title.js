const IndexTitle = ({ index, title }) => {
    return (
        <div className="flex flex-col gap-3 text-nypink-400">
            <div className="font-eloquiabold text-5xl">{index}</div>
            <div className="font-eloquiabold text-3xl font-bold">{title}</div>
        </div>
    )
}

export { IndexTitle }
