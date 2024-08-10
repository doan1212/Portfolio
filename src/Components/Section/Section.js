import Container from '../Container/Container'

const Section = ({ title, children, className }) => {
    return (
        <section
            className={`${className} flex-fow flex w-fit items-center justify-center`}
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

const SectionPrimary = ({ title, children }) => {
    return (
        <Section title={title} className="w-full bg-transparent">
            {children}
        </Section>
    )
}

const SectionSecondary = ({ title, children }) => {
    return (
        <Section title={title} className="w-full bg-white">
            {children}
        </Section>
    )
}

export { SectionPrimary, SectionSecondary }
