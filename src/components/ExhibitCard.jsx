import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function ExhibitCard({ exhibit, isCenter, onClick }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = (e) => {
    if (e.target.tagName !== 'A') {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div
      className={`transition-all duration-300 ease-in-out flex ${isCenter ? 'scale-100' : 'scale-90 grayscale hover:grayscale-0'}`}
      onClick={handleCardClick}
    >
      <div className="relative">
        <img
          src={exhibit.image}
          alt={exhibit.title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      {isExpanded && (
        <div className="w-64 bg-white p-4 rounded-r-lg shadow-lg flex flex-col justify-between">
          <div>
            <Link
              to={`/exhibits`}
              className="block text-xl font-bold text-gray-800 hover:text-gray-600 mb-1"
            >
              {exhibit.title}
            </Link>
            <p className="text-lg font-accent italic text-gray-600 mb-4">
              {exhibit.artist}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-700">{exhibit.description}</p>
            <p className="text-xs text-gray-500 mt-1">{exhibit.timeframe}</p>
          </div>
        </div>
      )}
    </div>
  );
}

