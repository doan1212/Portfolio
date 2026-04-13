import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export const ImageSlider = ({ images, imageIds }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    // Accept 'images' array (original) or 'imageIds' array (JSON - already resolved by processBlockImages)
    const imageList = images || imageIds
    
    if (!imageList || imageList.length === 0) {
        return (
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
                <strong>Warning:</strong> ImageSlider missing images
            </div>
        )
    }

    return (
        <div className="flex justify-center">
            <div className="h-fit w-full lg:w-[900px]">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                >
                    {imageList.map((image, index) => (
                        <div
                            key={index}
                            className="flex h-full w-full items-center justify-center px-2 "
                        >
                            <img
                                src={image.src}
                                alt={image.alt || `Image ${index + 1}`}
                                className="h-auto w-full shadow-md"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}
