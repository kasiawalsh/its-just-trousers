import lineImage from '../assets/line.png';

const Resources = () => {
  return (
    
    <div className="flex flex-col items-center gap-4 px-4">
      <img
          src={lineImage}
          alt="Line Image"
          className="w-[400px]"
        ></img>
      <div className="flex flex-row items-center justify-center bg-white p-6 rounded-lg shadow-md max-w-xl w-full border-2 border-gray-300">
        <h1 className="text-4xl font-bold text-center font-edusa">
          Helpful links and resources
        </h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-xl w-full border-2 border-gray-300">
        <p className="font-sans text-lg text-gray-700 text-center">
          
         
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
    </div>
  );
};

export default Resources;
