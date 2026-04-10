
export default function ExhibitCard ({ exhibit, isCenter, onClick })  {
  return (
    <div
      className={`transition-all duration-300 ease-in-out ${isCenter ? 'scale-100' : 'scale-90 grayscale hover:grayscale-0'}`}
      onClick={onClick}
    >
      <img
        src={exhibit.image}
        alt={exhibit.title}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};



