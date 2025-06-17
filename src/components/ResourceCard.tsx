type ResourceCardProps = {
  title: string;
  description: string;
  link?: string;
};

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, link }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md min-w-[350px] max-w-xl w-full border-2 border-gray-300">
      <h3 className="font-sans font-bold text-xl text-center">{title}</h3>
      <p className="text-gray-700 pt-1 text-left">{description}</p>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2"
        >
          Learn More
        </a>
      ) : (
        <p className="text-gray-500 mt-2 italic">No link available</p>
      )}
    </div>
  );
};

export default ResourceCard;