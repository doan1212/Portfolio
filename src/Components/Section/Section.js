import Container from '../Container/Container'

const Section = ({ title, id, children, className, isFlying }) => {
    return (
        <section
            className={`${className} flex justify-center ${
                isFlying
                    ? 'fixed bottom-0 left-0 right-0 z-[2000]'
                    : `w-fit items-center`
            }`}
            id={id}
        >
            <Container isFlying={isFlying}>
                {title && (
                    <div className="flex justify-center font-laviossa text-4xl text-wisteria-600">
                        {title}
                    </div>
                )}
                {children}
            </Container>
        </section>
    )
}
const SectionPrimary = ({ title, id, children, isFlying }) => {
    return (
        <Section
            title={title}
            id={id}
            className={`w-full ${
                isFlying
                    ? 'bg-white shadow-[rgba(145,109,179,0.3)_0px_-5px_20px_0px]'
                    : 'bg-transparent'
            }`}
            isFlying={isFlying}
        >
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
