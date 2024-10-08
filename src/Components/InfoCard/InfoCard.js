import NavigationButton from '../Navigation/NavigationButton'
import { Link } from 'react-router-dom'

const InfoCard = ({ title, content, image, ...props }) => {
    return (
        <div className="flex flex-col gap-10 rounded-xl p-5 transition duration-300 ease-out md:hover:scale-110 md:hover:transform md:hover:shadow-2xl md:hover:shadow-wisteria-300 md:hover:ease-in md:flex-row md:gap-20 h-[450px] ">
            <div className="flex w-full items-center justify-center md:w-1/2">
                <div className="h-fit w-fit">
                    <Link to={props.link}>
                        <img
                            src={image}
                            alt="info card"
                            className="rounded-xl "
                        />
                    </Link>
                </div>
            </div>
            <div className="flex w-full flex-col justify-center gap-5 md:w-1/2">
                <Link to={props.link}>
                    <div>{title}</div>
                </Link>
                <div className="font-eloquialight text-base text-gray-500">
                    {content}
                </div>
                {props.link && (
                    <a href={props.link} className="text-nypink-400">
                        <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                        >
                            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                        </svg>
                    </a>
                )}
            </div>
        </div>
    )
}

const ReverseInfoCard = ({ title, content, image, ...props }) => {
    return (
        <div className="flex flex-col gap-10 rounded-xl p-5 transition duration-300 ease-out md:hover:scale-110 md:hover:transform md:hover:shadow-2xl md:hover:shadow-wisteria-300 md:hover:ease-in md:flex-row md:gap-20 h-[450px]">
            <div className="order-2 flex w-full flex-col justify-center gap-5 md:order-1 md:w-1/2">
                <div>{title}</div>
                <div className="font-eloquialight text-base text-gray-500">
                    {content}
                </div>
                {props.link && (
                    <a href={props.link} className="text-nypink-400">
                        <svg
                            className="h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                        >
                            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z" />
                        </svg>
                    </a>
                )}
            </div>
            <div className="order-1 flex w-full items-center justify-center md:order-2 md:w-1/2">
                <div className="h-fit w-fit">
                    <Link to={props.link}>
                        <img
                            src={image}
                            alt="info card"
                            className="rounded-xl "
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export { InfoCard, ReverseInfoCard }
