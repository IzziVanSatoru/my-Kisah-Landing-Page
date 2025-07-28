const features = [
  {
    title: 'Bab 1: Tatapan Pertama',
    desc: 'Waktu itu dia hanya menatapku sebentar... tapi rasanya seperti bunga sakura pertama di musim semi yang belum sempat gugur.',
    emoji: '🌸',
  },
  {
    title: 'Bab 2: Langkah yang Berpapasan',
    desc: 'Kami pernah berjalan di lorong yang sama, tidak saling menyapa. Tapi diam-diam, aku berharap waktu berhenti di sana.',
    emoji: '👣',
  },
  {
    title: 'Bab 3: Suara yang Lembut',
    desc: 'Dia berbicara pelan, kadang tidak terdengar. Tapi aku selalu mengingat setiap katanya lebih jelas dari lagu favoritku.',
    emoji: '🎧',
  },
  {
    title: 'Bab 4: Hari yang Tidak Terlupakan',
    desc: 'Ada hari ketika senyumnya muncul begitu tulus. Dan sejak saat itu, aku tahu: hatiku bukan lagi milikku sendiri.',
    emoji: '📆',
  },
  {
    title: 'Bab 5: Namanya di Dalam Doa',
    desc: 'Aku tak pernah mengucap cintaku. Tapi dalam setiap doa malamku, namanya selalu menjadi yang pertama kusebut.',
    emoji: '🕊️',
  },
];

const FeatureShowcase = () => {
  return (
    <section id="feature" className="bg-rose-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-rose-700 mb-16">
          Bab-Bab Kisah yang Tak Pernah Terucap
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-rose-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300 text-left"
            >
              <div className="text-5xl mb-4">{item.emoji}</div>
              <h3 className="text-2xl font-semibold text-rose-600 mb-3">{item.title}</h3>
              <p className="text-gray-700 text-md leading-relaxed italic">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
