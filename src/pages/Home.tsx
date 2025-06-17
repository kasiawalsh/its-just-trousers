import { Link } from "react-router-dom";
import schoolImage from "../assets/yellow-school-building.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-4">
      <div className="flex flex-row items-center justify-around bg-white p-6 rounded-lg shadow-md max-w-xl w-full border-2 border-gray-300 gap-4">
        <h1 className="text-4xl font-bold text-center font-edusa">
          It's Just Trousers
        </h1>
      </div>

      <div className="flex flex-row items-center justify-around bg-white p-6 rounded-lg shadow-md max-w-xl w-full border-2 border-gray-300 gap-2">
        <p className="text-justify text-gray-700">
          Welcome to Liam's story — the journey of a brave 13-year-old
          transgender boy who simply wants to be treated with dignity and
          respect. But when Liam asked to wear trousers instead of the
          school-mandated skirt, his request was denied even after providing
          professional medical advice requested by the school. Behind the school
          uniform policy lies a real person, not just a rule.
        </p>
        <img
          src={schoolImage}
          alt="School Building"
          className="w-16 h-16 ml-2 sm:ml-4"
        />
      </div>

      <div className="flex flex-row items-center justify-center bg-white p-6 rounded-lg shadow-md max-w-xl w-full border-2 border-gray-300">
        <div className="font-sans text-gray-700 text-left">
          <p className="font-edusa font-bold pb-4">
            Liam's gaol is to:
          </p>
          <ul className="list-disc list-inside text-left space-y-2">
            <li>
              <span className="font-edusa font-bold">Share his story and raise awareness</span> about gender expression and school uniform
              policies
            </li>
            <li>
            <span className="font-edusa font-bold">Provide helpful resources</span> for transgender and LGBTQ+ students
              facing bullying, discrimination, or lack of support
            </li>
            <li>
              <span className="font-edusa font-bold">Find legal support or representation</span> to help challenge his
              school's decision to deny his request for trousers
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row items-center justify-around bg-white p-6 rounded-lg shadow-md max-w-xl w-full border-2 border-gray-300">
        <div>
          <p className="font-edusa font-bold text-gray-700 text-left">
            Is it really just about trousers?
          </p>
          <p className="text-gray-700 text-justify max-w-xl mt-4">
            Liam's request to wear trousers was first made over a year ago.
            Despite countless meetings and even a formal complaint, the school
            has continued to deny his request. What began as a simple issue of
            uniform has become a much deeper struggle for recognition, dignity,
            and respect.
          </p>
          <p className="text-center pt-4">
            <Link
              to="/liams-story"
              className="hover:underline text-3xl text-orange-600 font-edusa font-bold"
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
