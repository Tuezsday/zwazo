import React, { useState } from 'react';

interface Photo {
  id: number;
  url: string;
  title: string;
  location: string;
}

const photos: Photo[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    title: 'Mountain Vista',
    location: 'Colorado, USA'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d',
    title: 'Forest Path',
    location: 'Oregon, USA'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
    title: 'Autumn Colors',
    location: 'Vermont, USA'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    title: 'Morning Fog',
    location: 'California, USA'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    title: 'Sunlit Forest',
    location: 'Washington, USA'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
    title: 'Mountain Lake',
    location: 'Alberta, Canada'
  }
];

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="aspect-w-4 aspect-h-3 overflow-hidden">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="mt-2">
              <h3 className="text-lg font-medium">{photo.title}</h3>
              <p className="text-gray-600">{photo.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="max-w-7xl w-full">
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-medium">{selectedPhoto.title}</h3>
              <p className="text-gray-300">{selectedPhoto.location}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}