const IndexTitle = ({ index, title }) => {
    return (
        <div className="flex-col gap-3 flex text-nypink-400">
            <div className="font-black text-6xl">{index}</div>
            <div className="font-bold text-4xl">{title}</div>
        </div>
    )
}

export { IndexTitle }
