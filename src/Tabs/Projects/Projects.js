import React from 'react'
import { Link } from 'react-router-dom'
import { InfoCard, ReverseInfoCard } from '../../Components/InfoCard/InfoCard'
import { IndexTitle } from '../../Components/InfoCard/Title'
import MockImage1 from '../../Assets/mock_1.png'
import MockImage2 from '../../Assets/mock_2.png'
import MockImage3 from '../../Assets/mock_3.jpg'
import {
    SectionPrimary,
    SectionSecondary,
} from '../../Components/Section/Section'
import { NavRoute } from '../../Constants/Routes'
import { TwoImageCardWithDescription } from '../../Components/ImageCard/ImageCard'

const Projects = () => {
    

    return (
        <SectionPrimary>
            <TwoImageCardWithDescription
                content="This is a project that I did for a client."
                img1={MockImage1}
                img2={MockImage2}
            />
            
        </SectionPrimary>
       
    )
}
export default Projects
