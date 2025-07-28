const FooterMemory = () => {
  return (
    <footer className="bg-rose-100 text-rose-900 py-12 px-6 border-t border-rose-200 mt-20">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Untuk Kaoruko — dan bagian hati yang diam
        </h3>
        <p className="text-base md:text-lg leading-relaxed">
          Website ini dibuat sebagai penghormatan kecil untuk Kaoru Hana wa Rin to Saku.
          Kisahnya bukan cuma anime biasa buatku. Itu cerita tentang sisi manusia
          yang lembut, sunyi, dan kadang tak bisa diungkap dengan kata.
        </p>
        <p className="text-sm italic text-rose-700">
          Gw bukan karbitan, tapi kalau desain web ini masih jelek, gw minta maaf banget ya.
          gw cuma pengen nunjukin rasa suka sejujur-jujurnya.”
        </p>
        <div className="text-xs text-rose-600 mt-6">
          &copy; {new Date().getFullYear()} — Dibuat dengan hati.
        </div>
      </div>
    </footer>
  );
};

export default FooterMemory;
