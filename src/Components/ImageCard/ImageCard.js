export const ImageCardWithDescription = ({ content, img }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img src={img} alt="sketch" className="w-1/2 h-1/2 md:h-fit md:w-fit p-5" />
            <div className="text-md font-eloquialight text-emperor-700">
                {content}
            </div>
        </div>
    )
}

export const TwoImageCardWithDescription = ({ content, img1, img2}) => {
    return (
        <div className="flex flex-col items-start justify-start">
              <div className="text-md font-eloquialight text-emperor-700">
                {content}
            </div>
        <div className="flex flex-row items-center justify-center">
            <img src={img1} alt="img1" className="h-1/2 w-1/2 p-5" />
            <img src={img2} alt="img2" className="h-1/2 w-1/2 p-5" />
        </div>
        </div>
    )
}


