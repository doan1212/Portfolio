import { useEffect, useState } from 'react'
import { Button } from './../../Components/Button/Button'
import resume from '../../Assets/Documents/doantran_resume_09092024.pdf'

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
        <div className="fixed bottom-0 left-0 right-0 top-0 z-[2000] flex flex-col items-start justify-center bg-white">
            <div className="flex w-full flex-row justify-end gap-3 bg-nypink-50 px-5 py-3">
                <a href={resume} download="DoanTran_Resume.pdf">
                    <Button
                        type="solid-primary"
                        size="smmd"
                        children={'Download'}
                    />
                </a>
                <Button
                    type="solid-secondary"
                    size="md"
                    children={'Close'}
                    onClick={onClose}
                />
            </div>
            <div className="h-full w-full">{children}</div>
        </div>
    )
}

export default Overlay
