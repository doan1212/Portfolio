import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export const ImageSlider = ({ images }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
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
        <div className="items-center gap-10">
            <div className="gap-10">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="flex items-center justify-evenly "
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="h-3/4 w-3/4 px-2 md:h-full md:w-full items-center justify-center flex"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="h-auto w-full"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}