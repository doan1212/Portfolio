import Container from '../Container/Container'

const Section = ({ children, className }) => {
    return (
        <section
            className={`${className} flex flex-fow justify-center items-center`}
        >
            <Container>{children}</Container>
        </section>
    )
}

const SectionPrimary = ({ children }) => {
    return <Section className="bg-transparent w-full">{children}</Section>
}

const SectionSecondary = ({ children }) => {
    return <Section className="bg-white w-full">{children}</Section>
}

export { SectionPrimary, SectionSecondary }
