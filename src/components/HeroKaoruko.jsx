const HeroKaoruko = () => {
  return (
    <section
      className="w-full min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-white flex items-center justify-center relative overflow-hidden scroll-smooth"
      id="hero"
    >
      <div className="absolute inset-0 bg-[url('/kaoruko-wallpaper.jpg')] bg-cover bg-center opacity-20 blur-sm"></div>

      <div className="z-10 max-w-2xl px-6 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-rose-700 drop-shadow-lg mb-6">
          My Kisah 
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Di balik sikap pendiamnya, Kaoruko menyimpan perasaan yang tak bisa diungkapkan dengan kata.
          Ini adalah kisah tentang bunga yang pelan-pelan mekar... dalam hati seseorang.
        </p>

        <div className="mt-8">
          <a
            href="#feature"
            className="inline-block px-6 py-3 rounded-full bg-rose-600 text-white font-semibold hover:bg-rose-700 transition duration-300 shadow-md"
          >
            Lanjutkan Kisah →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroKaoruko;
