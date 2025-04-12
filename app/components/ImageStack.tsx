import React from 'react';

interface Props {
  images: string[];
  locationName: string;
}

const ImageStack: React.FC<Props> = ({ images, locationName }) => {
  return (
    <div className="relative w-[150px] h-[150px] p-4 bg-gray-50 rounded-lg shadow-xl">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Stacked Image ${idx + 1}`}
          className="absolute w-full h-full object-cover rounded-lg border-2 border-white"
          style={{
            transform: `rotate(${(idx - images.length / 2) * 12}deg)`,
            top: `${idx * 10}px`,
            left: `${idx * 10}px`,
            zIndex: images.length - idx,
          }}
        />
      ))}
      <span className="absolute bottom-2 left-2 text-sm font-semibold bg-white px-3 py-1 rounded-md shadow-md">
        {locationName}
      </span>
    </div>
  );
};

export default ImageStack;