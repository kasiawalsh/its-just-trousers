import lineImage from "../assets/line.png";

const LiamsStory = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-4">
      <img
          src={lineImage}
          alt="Line Image"
          className="w-[400px]"
        ></img>
      <div className="flex flex-row items-center justify-center bg-white p-6 rounded-lg shadow-md max-w-xl w-full border-2 border-gray-300">
        <h1 className="text-4xl font-bold text-center font-edusa">
          Liam's Story So Far
        </h1>
      </div>
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xl w-full border-2 border-gray-300">
      <div className="font-sans text-lg text-gray-700 text-left">
        <p>Liam is a 13-year-old transgender boy who bravely came out
        and began living as himself at school. <span className="font-edusa font-bold">He just wanted to wear trousers as part of his school uniform.</span></p>
         <p className="pt-2">Despite his strength and clarity
        about his identity, the response he received from his school was far
        from supportive. Despite formal complaints, meetings with
        senior leadership, and the involvement of a social worker, the school
        continued to deny his identity. The school
        refused to make reasonable adjustments, disregarded safeguarding
        concerns, and failed to uphold its duties under the Equality Act 2010.</p>
        <p className="pt-2">When Liam wore trousers in line with his gender
        identity, he was sent home and told to return in a skirt.
        Liam's emotional well-being suffered deeply. He began experiencing
        anxiety, distress, and sleep difficulties, and his GP confirmed the
        impact on his mental health. </p>
        <p className="pt-2">Supported by professionals, Liam has made the painful decision not to
        return to school while being forced to wear clothing that invalidates
        who he is.  </p>
        <p className="pt-2 font-edusa font-bold">Liam's story is not just about trousers. It's about dignity,
        safety, and the right of every young person to be respected. No child
        should be punished for being themselves.</p>
  
        <p className="pt-2"><span className="font-edusa font-bold text-green-600">"I just want to go to school
        and be seen as who I really am."</span></p>
      </div>
    </div>
    </div>
  );
};
export default LiamsStory;
