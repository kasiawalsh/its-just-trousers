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
            It all started with a request made over a year ago to wear trousers
            as part school uniform. Liam bravely came out and began living as
            himself at school. Despite his strength and clarity about his
            identity, and the backing of medical professionals, the response he
            received from his school was far from supportive.
          </p>
          <p className="pt-2">
            Despite formal complaints, meetings with senior leadership, and the
            involvement of a social worker, the school is continuing to deny his
            identity. The school is refusing to make reasonable adjustments,
            disregarded safeguarding concerns, and failed to uphold its duties
            under the Equality Act 2010.
          </p>
          <p className="pt-2">
            A coucellor provided by the school asked Liam "Do you blame IVF for
            who you are right now?", and said to him "You still look like a
            girl."
          </p>
          <p className="pt-2">
            When Liam wore trousers in alignment with his gender identity, he
            was barred from the classroom, sent home, and told to return wearing
            a skirt. This rejection took a serious toll on his emotional
            well-being. The lack of acceptance from his school, a place that
            should nurture and support young people, deeply affected him. Liam
            began experiencing anxiety, distress, and sleep difficulties, and
            his GP later confirmed the significant impact on his mental health.
          </p>

          <p className="pt-4 font-edusa font-bold">
            Liam's story is not just about trousers. It's about dignity, safety,
            and the right of every young person to be respected. No child should
            be punished for being themselves.
          </p>

          <p className="pt-4 max-w-sm text-center mx-auto">
            <span className="font-edusa font-bold text-green-600">
              "I just want to go to school and be seen as who I really am."
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center bg-white p-6 rounded-lg shadow-md max-w-xl w-full border-4 border-red-400">
        <p className="font-edusa text-3xl font-medium text-center">
          If you can support Liam or want to get in touch, please{" "}
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
