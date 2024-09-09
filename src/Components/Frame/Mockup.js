import React from 'react'

const Mockup = ({ img }) => {
    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="outline-zinc-7005 relative h-[300px] w-[500px] rounded-b-md rounded-t-3xl bg-transparent p-8 shadow-lg outline md:h-[650px] md:w-[1000px]">
                <div className="absolute left-1/2 top-[10px] h-3 w-3 -translate-x-1/2 transform rounded-full bg-zinc-700"></div>
                <div className="h-full w-full overflow-y-scroll bg-white outline outline-zinc-700">
                    <div
                        className="h-[600px] bg-cover bg-center sm:h-[800px] md:h-[1670px]"
                        style={{ backgroundImage: `url(${img})` }}
                    ></div>
                </div>
                <div className="absolute bottom-[-18px] left-1/2 mx-auto h-4 w-[110%] -translate-x-1/2 transform rounded-b-xl outline outline-zinc-700 md:bottom-[-26px] md:h-6 md:w-[120%]"></div>
                <div className="absolute bottom-[-12px] left-0 right-0 mx-auto h-3 w-[15%] rounded-b-xl bg-zinc-600"></div>
            </div>
        </div>
    )
}

export default Mockup
