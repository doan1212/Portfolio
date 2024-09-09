import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export const Slider = ({ images }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    return (
        <div className="items-center gap-10 justify-center">
            <div className="gap-10">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    className="flex items-center justify-evenly"
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="h-1/2 w-1/2 px-2 md:h-full md:w-full justify-center"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="h-auto w-full items-center justify-center"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Slider
