export const ImageCardWithDescription = ({ content, text, img, imageId }) => {
    // Accept both 'content' (original) and 'text' (JSON) props
    const description = content || text
    const imageSrc = img || imageId
    
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={imageSrc} alt="sketch" className="w-5/6 h-5/6 md:h-fit md:w-fit p-5" />
            <div className="text-md font-eloquialight text-emperor-700">
                {description}
            </div>
        </div>
    )
}

export const TwoImageCardWithDescription = ({ content, text, img1, img2, imageId1, imageId2 }) => {
    // Accept both 'content' (original) and 'text' (JSON) props
    const description = content || text
    const image1Src = img1 || imageId1
    const image2Src = img2 || imageId2
    
    return (
        <div className="flex flex-col items-start justify-start ">
            <div className="text-md font-eloquialight text-emperor-700 mb-4 lg:mb-0">
                {description}
            </div>
            <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center">
                <img src={image1Src} alt="img1" className="lg:h-4/6 lg:w-4/6 h-full w-full p-5" />
                <img src={image2Src} alt="img2" className="lg:h-4/6 lg:w-4/6 h-full w-full p-5" />
            </div>
        </div>
    );
};




