import { useState } from 'react';

const fanarts = [
  {
    url: 'https://i.pinimg.com/736x/b8/51/f8/b851f857549057353364193efe96357f.jpg',
    alt: 'Kaoruko with soft smile',
  },
  {
    url: 'https://i.pinimg.com/736x/99/39/07/9939073945c9dd727aacebff5c4dbba8.jpg',
    alt: 'Kaoruko bankai mode',
  },
  {
    url: 'https://i.pinimg.com/736x/13/e4/f8/13e4f826135abf992db7a2112d3c4d44.jpg',
    alt: 'Kaoruko sukuna mark mode',
  },
  {
    url: 'https://i.pinimg.com/736x/fa/93/89/fa9389c887f57fcd818568723e7b5665.jpg',
    alt: 'Kaoruko looking cute using glasses',
  },
  {
    url: 'https://i.pinimg.com/736x/ea/76/3c/ea763cd78710ed5f27f6b7a46013814c.jpg',
    alt: 'Kaoruko cute give A flower',
  },
];

const GalleryLove = () => {
  const [preview, setPreview] = useState(null);

  return (
    <section id="gallery" className="bg-white py-20 px-6 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-rose-700 mb-12">
          Momen Diam Kaoruko 💗
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {fanarts.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setPreview(img)}
              className="relative cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-white group"
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-72 object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-sm md:text-base px-2 text-center">
                {img.alt}
              </div>
            </div>
          ))}
        </div>
      </div>

      {preview && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          onClick={() => setPreview(null)}
        >
          <img
            src={preview.url}
            alt={preview.alt}
            className="max-h-[90vh] max-w-full object-contain rounded-xl shadow-lg border-4 border-white"
          />
        </div>
      )}
    </section>
  );
};

export default GalleryLove;
