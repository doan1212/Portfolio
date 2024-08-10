export const formatString = (inputString) => {
    const formattedString = inputString
        .replace(/<b>/g, '<span class="font-eloquiabold">')
        .replace(/<\/b>/g, '</span>')
    return <span dangerouslySetInnerHTML={{ __html: formattedString }} />
}
