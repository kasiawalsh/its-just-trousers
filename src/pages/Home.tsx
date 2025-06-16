import { Link } from "react-router-dom";
import lineImage from "../assets/line.png";
import schoolImage from "../assets/yellow-school-building.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-4">
      <img src={lineImage} alt="Line Image" className="w-[400px]"></img>
      <div className="flex flex-row items-center justify-around bg-white p-6 rounded-lg shadow-md max-w-xl w-full border-2 border-gray-300 gap-4">
        <h1 className="text-4xl font-bold text-center font-edusa">
          It's Just Trousers
        </h1>
      </div>

      <div className="flex flex-row items-center justify-around bg-white p-6 rounded-lg shadow-md max-w-xl w-full border-2 border-gray-300 gap-2">
        <p className="text-gray-700">
          Behind a school uniform policy is a real person - a brave 13-year-old
          transgender boy Liam who just wants to be treated with respect.
        </p>
        <img
          src={schoolImage}
          alt="It's Just Trousers Logo"
          className="w-16 h-16 ml-2 sm:ml-4"
        ></img>
      </div>

      <div className="flex flex-row items-center justify-center bg-white p-6 rounded-lg shadow-md max-w-xl w-full border-2 border-gray-300">
        <div className="font-sans text-gray-700 text-left">
          <p className="font-edusa font-bold pb-4">
            Liam is taking a stand to:
          </p>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>
              Share his story as a transgender student navigating school life
            </li>
            <li>
              Raise awareness about gender expression and school uniform
              policies
            </li>
            <li>
              Provide helpful resources for transgender and LGBTQ+ students
              facing bullying, discrimination, or lack of support
            </li>
            <li>
              Find legal support or representation to help challenge his
              school's decision to deny his request for trousers
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row items-center justify-around bg-white p-6 rounded-lg shadow-md max-w-xl w-full border-2 border-gray-300">
        <div className="">
          <p className="font-edusa font-bold text-gray-700 text-left">
            Is it really just about trousers?
          </p>
          <p className="text-gray-700 text-left max-w-xl mt-4">
            When Liam asked to wear trousers instead of the school-mandated
            skirt, his request was denied even after providing medical advice
            requested by the school. What began as a uniform issue turned into
            something deeper - a struggle to be seen, heard, and respected for
            who he is.
          </p>
          <p className="text-center pt-4">
            <Link
              to="/liams-story"
              className="hover:underline text-3xl text-green-700 font-edusa font-bold"
            >
              Read Liam's story so far →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
