import React from 'react'
import { Button, OutlineGradientButton } from '../../Components/Button/Button'
import {
    SectionPrimary,
    SectionSecondary,
} from '../../Components/Section/Section'
import { InfoCard, ReverseInfoCard } from '../../Components/InfoCard/InfoCard'
import MockImage1 from '../../Assets/mock_1.jpg'
import MockImage2 from '../../Assets/mock_2.jpg'

const Home = () => {
    return (
        <div>
            <SectionPrimary>
                <div>Hello Doan</div>
            </SectionPrimary>
            <SectionSecondary>
            <ReverseInfoCard
                    title={
                        <div className="flex-col gap-3 flex text-nypink-400">
                            <div className='font-black text-6xl'>01</div>
                            <div className='font-bold text-4xl'>Flora Sheen</div>
                        </div>
                    }
                    content="I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
                    image={MockImage1}
                    link="https://www.google.com"
                />
            </SectionSecondary>
            <SectionPrimary>
                <InfoCard
                    title={
                        <div className="flex-col gap-3 flex text-nypink-400">
                            <div className='font-black text-6xl'>02</div>
                            <div className='font-bold text-4xl'>Flora Sheen</div>
                        </div>
                    }
                    content="I'm Flora Sheen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
                    image={MockImage2}
                    link="https://www.google.com"
                />

            </SectionPrimary>
        </div>
    )
}

export default Home
