import React from 'react';


const Mockup = ({img}) => {
  return (
    <div className="flex items-center justify-center w-full h-full ">
    <div className="outline-zinc-7005 relative h-[300px] md:h-[650px] w-[500px] md:w-[1000px] rounded-b-md rounded-t-3xl bg-transparent p-8 shadow-lg outline">
        <div className="absolute left-1/2 top-[10px] h-3 w-3 -translate-x-1/2 transform rounded-full bg-zinc-700"></div>
        <div className="h-full w-full overflow-y-scroll bg-white outline outline-zinc-700">
            <div
                className="h-[800px] md:h-[1670px] bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
            ></div>
        </div>
        <div className="absolute bottom-[-26px] left-1/2 mx-auto h-6  w-[110%] md:w-[120%] -translate-x-1/2 transform rounded-b-xl outline outline-zinc-700"></div>
        <div className="absolute bottom-[-12px] left-0 right-0 mx-auto h-3 w-[15%] rounded-b-xl bg-zinc-600"></div>
    </div>
</div>
  );
};

export default Mockup;
