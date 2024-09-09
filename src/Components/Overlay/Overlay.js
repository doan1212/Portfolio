import { useEffect, useState } from 'react'


const Overlay = ({ onClose, type, data, children }) => {
    const image = new Image()
    const [isLandscape, setIsLandscape] = useState(false)

    useEffect(() => {
        if (type === 'img') {
            image.src = data
            if (image.width > image.height) {
                setIsLandscape(true)
            } else if (image.width == image.height) {
                setIsLandscape(false)
            } else {
                setIsLandscape(false)
            }
        }
    }, [data, type])

    return (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-20 flex flex-col items-start justify-center bg-white">
            <div className="flex w-full justify-end bg-nypink-50 px-5 py-3">
                <button
                    onClick={onClose}
                    className="rounded bg-red-500 p-2 text-sm text-white"
                >
                    Close
                </button>
            </div>
            <div className="h-full w-full">
                {type === 'img' ? (
                    <div className="flex h-full w-full items-center justify-center">
                        <img
                            src={data}
                            alt=""
                            className={
                                isLandscape
                                    ? 'w-[100vh] md:h-auto md:w-[80vh]'
                                    : 'w-[50vh] md:h-[80vh] md:w-auto'
                            }
                        />
                    </div>
                ) : (
                    children
                )}
            </div>
        </div>
    )
}

export default Overlay
