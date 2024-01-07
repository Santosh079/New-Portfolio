// SimpleProjectCard.js
import React from 'react';

const ProjectCard = ({ title, description, link, image }) => {
  return (
    <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-900 text-sm"
  >
    <div className="bg-gray-200 rounded-md shadow-md mx-4">
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover mb-2"
      />
      <div className="text-gray-900 px-4 py-1">
        <h2 className="text-xl font-bold mb-1">{title}</h2>
        <p className="text-2sm text-gray-900 mb-3">{description}</p>
    
      </div>
    </div>
    </a>
  );
};

export default ProjectCard;
