import React from 'react'
import resume from '../../Assets/Documents/sample.pdf'

const Overlay = ({ onClose }) => {
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
                <iframe
                    width="100%"
                    height="100%"
                    src={resume}
                    type="application/pdf"
                >
                    {' '}
                </iframe>
            </div>
        </div>
    )
}

export default Overlay
