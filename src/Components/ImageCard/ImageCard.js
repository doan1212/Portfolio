export const ImageCardWithDescription = ({ content, img }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={img} alt="sketch" className="w-5/6 h-5/6 md:h-fit md:w-fit p-5" />
            <div className="text-md font-eloquialight text-emperor-700">
                {content}
            </div>
        </div>
    )
}

export const TwoImageCardWithDescription = ({ content, img1, img2 }) => {
    return (
        <div className="flex flex-col items-start justify-start ">
            <div className="text-md font-eloquialight text-emperor-700 mb-4 lg:mb-0">
                {content}
            </div>
            <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center">
                <img src={img1} alt="img1" className="lg:h-4/6 lg:w-4/6 h-full w-full p-5" />
                <img src={img2} alt="img2" className="lg:h-4/6 lg:w-4/6 h-full w-full p-5" />
            </div>
        </div>
    );
};




