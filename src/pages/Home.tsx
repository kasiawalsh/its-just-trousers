import trousersImage from "../assets/trousersImage.jpg";
import questionMarkImage from "../assets/questionMarkImage.jpg";
import { Link } from "react-router-dom";
import lineImage from "../assets/line.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-4">
      <img
          src={lineImage}
          alt="Line Image"
          className="w-[400px]"
        ></img>
      <div className="flex flex-row items-center justify-center bg-white p-6 rounded-lg shadow-md max-w-xl w-full border-2 border-gray-300">
        <img
          src={trousersImage}
          alt="It's Just Trousers Logo"
          className="w-12 h-16 mr-6"
        ></img>
        <h1 className="text-4xl font-bold text-center font-edusa">
          It's Just Trousers
        </h1>
      </div>

      <div className="flex flex-row items-center justify-center bg-white p-6 rounded-lg shadow-md max-w-xl w-full border-2 border-gray-300">
        <p className="font-sans text-lg text-gray-700 text-center">
          Liam's aim it to share his story, spread awareness, and providde
          helpful links to transgender and LGBTQ+ students facing bullying,
          discrimination, or a lack of support in school.
        </p>
      </div>
      <div className="flex flex-row items-center justify-center bg-white p-6 rounded-lg shadow-md max-w-xl w-full border-2 border-gray-300">
        <div className="pl-10">
          <p className="text-lg text-gray-700 text-center">
            Is it really just about trousers?
          </p>
          <p className="text-lg text-gray-700 text-center">
            <Link to="/liams-story" className="hover:underline text-green-700">Read Liam's story so far.</Link>
            
          </p>
        </div>
        <img
          src={questionMarkImage}
          alt="It's Just Trousers Logo"
          className="w-16 ml-6"
        ></img>
      </div>
    </div>
  );
};

export default Home;
