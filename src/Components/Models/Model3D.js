
// 3D model viewer component
const Model3D = ({src}) => {
    return (
      <div className=" flex flex-col justify-center md:grid grid-cols-2 gap-10">
      {src.map((model, index) => (
          <iframe
              key={index}
              src={model}
              className=" w-[50%] h-[50%] md:w-[600px] md:h-[400px] p-10"
              title={`3D Model ${index}`}
              allowFullScreen
          />
      ))}
  </div>
    );
        
};

export default Model3D;
