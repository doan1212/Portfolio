export const iFrame = ({ src }) => {
    return (
        <iframe
            src={src}
            className="flex w-full "
            height={450}
            title="iframe"
            allowfullscreen="true"

        />
    )
}
