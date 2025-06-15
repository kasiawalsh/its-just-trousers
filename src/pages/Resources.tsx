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
          Speak to school about uniform 
          GP 
          CAHMS 
          caouncl safegiarding 
          Mash 
          ask for social worker
          LADO 
          Ofstead
          Formal complaint
          Gendered Intelligence
          Trans actual UK
          Equality advisory resource center
          EASS
          Young Minds
          Mermaids 
          Stonewall 
          Just like us 
          Galop
          The Proud Trust 
          MP 
          link to video 

        </p>
      </div>
    </div>
  );
};

export default Resources;
