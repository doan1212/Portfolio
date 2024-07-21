const IndexTitle = ({ index, title }) => {
    return (
        <div className="flex-col gap-3 flex text-nypink-400">
            <div className="font-black text-5xl">{index}</div>
            <div className="font-bold text-3xl">{title}</div>
        </div>
    )
}

export { IndexTitle }
