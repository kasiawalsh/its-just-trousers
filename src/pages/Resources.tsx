import ResourceCard from "../components/ResourceCard";
import resources from "../data/resources.json";

const Resources = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-4">
      <h1 className="text-4xl font-edusa font-bold text-center mb-8">Resources and useful information</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {resources.map((res, index) => (
          <ResourceCard
            key={index}
            title={res.title}
            description={res.description}
            link={res.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Resources;

{
  /* <img
src={lineImage}
alt="Line Image"
className="w-[400px]"
></img> */
}

// Speak to school about uniform
// GP
// CAHMS
// caouncl safegiarding
// Mash
// ask for social worker
// LADO
// Ofstead
// Formal complaint
// Gendered Intelligence
// Trans actual UK
// Equality advisory resource center
// EASS
// Young Minds
// Mermaids
// Stonewall
// Just like us
// Galop
// The Proud Trust
// MP
// link to video
