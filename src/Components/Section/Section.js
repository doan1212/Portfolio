import Container from '../Container/Container'

const Section = ({ title, children, className }) => {
    return (
        <section
            className={`${className} flex flex-fow justify-center items-center w-fit`}
        >
            <Container>
                {title && <div className='text-wisteria-600 text-4xl flex justify-center font-abrilfatface'>{title}</div>}
                {children}
            </Container>
        </section>
    )
}

const SectionPrimary = ({ title, children }) => {
    return (
        <Section title={title} className="bg-transparent w-full">
            {children}
        </Section>
    )
}

const SectionSecondary = ({ title, children }) => {
    return (
        <Section title={title} className="bg-white w-full">
            {children}
        </Section>
    )
}

export { SectionPrimary, SectionSecondary }
