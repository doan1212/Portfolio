import React from 'react'
import {
    SectionPrimary,
    SectionSecondary,
} from '../../Components/Section/Section'
import Model3D from '../../Components/Models/Model3D'
import poster from '../../Assets/Image/Poster.png'
import brochure from '../../Assets/Image/Brochure.png'
import bookCover from '../../Assets/Image/BookCover.png'
import business from '../../Assets/Image/Business card.png'

const Projects = () => {
    const models = [
        'https://sketchfab.com/models/f8b73802f6a84daaa09b570ac19a5c89/embed',
        'https://sketchfab.com/models/696cb98464644b9386a72387654c374b/embed',
        'https://sketchfab.com/models/0af3fafb6525472fa47e3c4cc715a06f/embed',
        'https://sketchfab.com/models/8db71c61029d4b0599971aa9d462cd5e/embed',
    ]
    return (
        <div>
        <SectionPrimary title={'3D Models'}>
            <Model3D src={models} />
        </SectionPrimary>
        <SectionSecondary title={'Other Creative Outlets'}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                <img src={poster} alt="poster" className="w-1/2 h-1/2 md:w-1/4 md:h-1/4" />
                <img src={brochure}
                    alt="brochure"
                    className="w-1/2 h-1/2 md:w-1/4 md:h-1/4"
                />
                <img src={bookCover
                } alt="book cover"
                    className="w-1/2 h-1/2 md:w-1/4 md:h-1/4"  />
                <img src={business} alt="business card" className="w-1/2 h-1/2 md:w-1/4 md:h-1/4" />
            </div>

        </SectionSecondary>
        </div>
    )
}
export default Projects
