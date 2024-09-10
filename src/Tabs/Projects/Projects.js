import React, { useState } from 'react'
import {
    SectionPrimary,
    SectionSecondary,
} from '../../Components/Section/Section'
import Model3D from '../../Components/Models/Model3D'
import poster from '../../Assets/Image/Poster.png'
import brochure from '../../Assets/Image/Brochure.png'
import bookCover from '../../Assets/Image/BookCover.png'
import business from '../../Assets/Image/Business card.png'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import mood from '../../Assets/Image/Mood.png'

const Projects = () => {
    const models = [
        'https://sketchfab.com/models/f8b73802f6a84daaa09b570ac19a5c89/embed',
        'https://sketchfab.com/models/696cb98464644b9386a72387654c374b/embed',
        'https://sketchfab.com/models/0af3fafb6525472fa47e3c4cc715a06f/embed',
        'https://sketchfab.com/models/8db71c61029d4b0599971aa9d462cd5e/embed',
    ]

    const images = [poster, brochure, bookCover, business]

    return (
        <>
            <div>
                <SectionPrimary title={'3D Models'}>
                    <div className="flex grid-cols-2 flex-col justify-center gap-20 md:grid lg:gap-10">
                        {models.map((model, index) => (
                            <iframe
                                key={index}
                                src={model}
                                className="h-[400px] w-full shadow-lg"
                                title={`3D Model ${index}`}
                                allowFullScreen
                            />
                        ))}
                    </div>
                </SectionPrimary>

                <SectionSecondary title={'Other Creative Outlets'}>
                    <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
                        {images.map((image, index) => (
                            <PhotoProvider>
                                <div className="h-1/2 w-1/2 drop-shadow-md md:h-1/4 md:w-1/4">
                                    <PhotoView key={index} src={image}>
                                        <img src={image} alt="" />
                                    </PhotoView>
                                </div>
                            </PhotoProvider>
                        ))}
                    </div>
                    <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
                        <PhotoProvider>
                            <div className="h-1/2 w-1/2 drop-shadow-md md:h-full md:w-full">
                                <PhotoView src={mood}>
                                    <img src={mood} alt="" />
                                </PhotoView>
                            </div>
                        </PhotoProvider>
                        
                    </div>
                </SectionSecondary>
            </div>
        </>
    )
}
export default Projects
