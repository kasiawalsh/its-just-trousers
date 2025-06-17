import { Link } from "react-router-dom";

const LiamsStory = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-4">
      <div className="flex flex-row items-center justify-center bg-white p-6 rounded-lg shadow-md max-w-xl w-full border-2 border-gray-300">
        <h1 className="text-3xl font-bold text-center font-edusa ">
          Liam's Story So Far
        </h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-xl w-full border-2 border-gray-300">
        <div className="font-sans text-lg text-gray-700 text-left">
          <p className="pt-2">
            It began with a simple request over a year ago: to wear trousers as
            part of the school uniform. For Liam, this wasn’t just about
            clothing, it was about being seen for who he truly is. With
            incredible courage, he came out and began living openly as himself
            at school.
          </p>
          <p className="pt-2">
            Despite his strength, the support of medical professionals, and
            backing from social care, at school, Liam was met not with understanding, but
            rejection. The school failed to support him, denying his identity
            and refusing to make basic uniform adjustments under the
            Equality Act 2010 — a clear failure of their safeguarding
            responsibilities.
          </p>
          <p className="pt-2">
            Formal complaints were made. Meetings with senior leadership were
            held. Still, the school continued to dismiss Liam's needs.
          </p>
          <p className="pt-2">
            One school-provided counsellor even asked, "Do you blame IVF for who
            you are right now?" and told him, "You still look like a girl."
            These are not the words of care, they are deeply harmful.
          </p>
          <p className="pt-2">
            When Liam wore trousers in line with his gender identity, he was
            excluded from the classroom, sent home, and told to return wearing a
            skirt. Would this happen to an adult? Denying him access to
            education unless he conformed to a gender identity that is not his
            own is not only cruel, it's discriminatory.
          </p>

          <p className="pt-2">
            This rejection has taken a significant toll on Liam's emotional
            well-being. School should be a place of safety, belonging, and
            growth, not exclusion.
          </p>
          <p className="pt-2">
            Liam's story is about far more than trousers. It's about dignity,
            identity, and the basic right of every young person to be respected
            for who they are.
          </p>

          <p className="pt-4">
            <span className="font-edusa font-bold text-green-600">
              "I just want to go to school and be seen as who I really am."
            </span>
          </p>
          <p className="pt-2">
            No child should be punished for being themselves.
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center bg-white p-6 rounded-lg shadow-md max-w-xl w-full border-4 border-red-400">
        <p className="font-edusa text-3xl font-medium text-center">
          If you can help Liam fight this injutice, please{" "}
          <Link
            to="/contact"
            className="text-orange-600 text-3xl font-bold hover:underline"
          >
            contact us
          </Link>
          .
        </p>
      </div>
    </div>
  );
};
export default LiamsStory;
