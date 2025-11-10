import React from 'react';

const galleryImages = [
'../../gallery/med1.jpg',
'../../gallery/med2.jpg',
'../../gallery/med3.jpg',
'../../gallery/med4.jpg',
'../../gallery/med5.jpg',
'../../gallery/med6.jpg',
'../../gallery/med7.jpg',
'../../gallery/med8.jpg',
'../../gallery/med9.jpg',

];

const GalleryPage = () => {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Our Facility Gallery
          </h2>
          <p className="mt-4 text-lg text-text-primary/80 max-w-3xl mx-auto text-blue-600">
            A glimpse into our modern and welcoming diagnostic center.
          </p>
          <div className="mt-6 w-24 h-1 bg-primary mx-auto rounded"></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-72 object-cover transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;