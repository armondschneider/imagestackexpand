"use client";
import React, { useState } from 'react';
import ImageStack from './ImageStack';

interface Props {
  name: string;
  images: string[];
}

export default function LocationTile({ name, images }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      {/* Modal overlay */}
      {expanded && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setExpanded(false)}
        >
          <div
            className="relative rounded-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${name} - Image ${idx + 1}`}
                className="mb-4 w-auto h-40 object-cover rounded-xl"
              />
            ))}
          </div>
        </div>
      )}

      {/* Location tile */}
      <div
        className="relative cursor-pointer rounded-2xl p-6 bg-gray-50 hover:bg-gray-200 transition-all duration-200 w-96 h-96 flex flex-col items-center justify-center"
        onClick={() => setExpanded(true)}
      >
        {expanded ? null : (
          <div className="relative w-40 h-40">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${name} - Image ${idx + 1}`}
                className="absolute w-24 h-24 object-cover rounded-xl"
                style={{
                  top: `${idx * 8}px`,
                  left: `${idx * 8}px`,
                  zIndex: images.length - idx,
                }}
              />
            ))}
          </div>
        )}
        <span className="absolute bottom-3 left-3 text-sm font-semibold bg-white px-4 py-2 rounded-full">
          {name}
        </span>
      </div>
    </div>
  );
}