import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export const ImageSlider = ({ images }) => {
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

    return (
        <div className="flex justify-center">
            <div className="h-fit w-full lg:w-[900px]">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="flex h-full w-full items-center justify-center px-2 "
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="h-auto w-full shadow-md"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}
