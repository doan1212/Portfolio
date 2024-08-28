import Container from '../Container/Container'

const Section = ({ title, id, children, className }) => {
    return (
        <section
            className={`${className} flex w-fit items-center justify-center`}
            id={id}
        >
            <Container>
                {title && (
                    <div className="flex justify-center font-abrilfatface text-5xl text-wisteria-600">
                        {title}
                    </div>
                )}
                {children}
            </Container>
        </section>
    )
}

const SectionPrimary = ({ title, id, children }) => {
    return (
        <Section title={title} id={id} className="w-full bg-transparent">
            {children}
        </Section>
    )
}

const SectionSecondary = ({ title, id, children }) => {
    return (
        <Section title={title} id={id} className="w-full bg-white">
            {children}
        </Section>
    )
}

export { SectionPrimary, SectionSecondary }
