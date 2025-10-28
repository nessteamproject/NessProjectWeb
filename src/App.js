import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 shadow-lg fixed top-0 w-full z-50">
        <h1
          className="text-2xl font-bold text-blue-400 cursor-pointer"
          onClick={() => scroll.scrollToTop()}
        >
          Ness Project
        </h1>
        <ul className="flex gap-6">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={600}
              offset={-80}
              className="hover:text-blue-400 cursor-pointer"
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={600}
              offset={-80}
              className="hover:text-blue-400 cursor-pointer"
            >
              Tentang
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={600}
              offset={-80}
              className="hover:text-blue-400 cursor-pointer"
            >
              Layanan
            </Link>
          </li>
          <li>
            <Link
              to="benefits"
              smooth={true}
              duration={600}
              offset={-80}
              className="hover:text-blue-400 cursor-pointer"
            >
              Manfaat Website
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-80}
              className="hover:text-blue-400 cursor-pointer"
            >
              Kontak
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="text-center py-28 px-6">
        <h2 className="text-4xl font-bold mb-4 text-blue-400">
          Bikin Website Profesional untuk Bisnismu 🚀
        </h2>
        <p className="max-w-xl mx-auto text-gray-300 mb-8">
          Ness Project adalah tim pengembang web yang membantu kamu membangun
          website modern, responsif, dan menarik untuk meningkatkan citra serta
          kepercayaan bisnis kamu di dunia digital.
        </p>
        <a
  href="https://wa.me/6285822522586?text=Halo%20kak%20Ica!%20Saya%20tertarik%20untuk%20membuat%20website,%20boleh%20minta%20informasi%20lebih%20lanjut%3F"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold text-white transition-all inline-block"
>
  Konsultasi Sekarang
</a>

      </section>

      {/* Tentang Kami */}
      <section id="about" className="px-8 py-16 bg-gray-800 text-center">
        <h3 className="text-3xl font-semibold text-blue-400 mb-6">Tentang Kami</h3>
        <p className="max-w-2xl mx-auto text-gray-300">
          Kami adalah pengembang dan desainer web yang berfokus pada tampilan
          profesional dan fungsionalitas maksimal. Dengan pengalaman di bidang
          teknologi informasi, Ness Project hadir untuk membantu individu,
          UMKM, maupun perusahaan dalam menciptakan solusi digital yang efektif
          dan efisien.
        </p>
      </section>

      {/* Layanan Kami */}
      <section id="services" className="px-6 py-16 text-center bg-gray-950">
  <h3 className="text-3xl font-semibold text-blue-400 mb-12">
    Layanan Kami
  </h3>

  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-blue-400/30 transition">
      <h4 className="text-xl font-bold mb-2">Pembuatan Website</h4>
      <p className="text-gray-400">
        Kami bantu wujudkan website impianmu — dari landing page, profil usaha,
        portofolio, toko online, hingga website sekolah atau organisasi.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-blue-400/30 transition">
      <h4 className="text-xl font-bold mb-2">UI/UX Design</h4>
      <p className="text-gray-400">
        Desain yang menarik, mudah digunakan, dan nyaman di semua perangkat.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-blue-400/30 transition">
      <h4 className="text-xl font-bold mb-2">Redesign Website</h4>
      <p className="text-gray-400">
        Ubah tampilan website lamamu jadi lebih modern, menarik, dan responsif
        agar tetap relevan dan profesional.
      </p>
    </div>

    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-blue-400/30 transition">
      <h4 className="text-xl font-bold mb-2">Perawatan & Update Website</h4>
      <p className="text-gray-400">
        Kami bantu menjaga website kamu tetap aman, cepat, dan selalu
        up-to-date.
      </p>
    </div>
  </div>
</section>


      {/* Manfaat Website */}
      <section id="why-website" className="px-8 py-20 bg-gray-950 text-center text-gray-300">
  <h3 className="text-3xl font-semibold text-blue-400 mb-8">
    Kenapa Perlu Punya Website?
  </h3>

  <p className="max-w-2xl mx-auto mb-10">
    Di dunia digital sekarang, punya website bukan cuma pilihan — tapi langkah penting
    buat bikin bisnismu terlihat profesional dan mudah ditemukan.
  </p>

  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
    <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-blue-400/30 transition">
      <h4 className="text-lg font-semibold text-blue-400 mb-2">🌐 Terlihat Profesional</h4>
      <p>Website membuat bisnismu lebih kredibel di mata pelanggan.</p>
    </div>

    <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-blue-400/30 transition">
      <h4 className="text-lg font-semibold text-blue-400 mb-2">🔍 Mudah Ditemukan</h4>
      <p>Bisa muncul di Google dan menjangkau lebih banyak orang.</p>
    </div>

    <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-blue-400/30 transition">
      <h4 className="text-lg font-semibold text-blue-400 mb-2">⏰ Aktif 24 Jam</h4>
      <p>Pelanggan bisa mengunjungi kapan saja tanpa batas waktu.</p>
    </div>

    <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-blue-400/30 transition">
      <h4 className="text-lg font-semibold text-blue-400 mb-2">💸 Efisien</h4>
      <p>Promosi lebih hemat dibandingkan iklan konvensional.</p>
    </div>

    <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-blue-400/30 transition">
      <h4 className="text-lg font-semibold text-blue-400 mb-2">🚀 Tingkatkan Penjualan</h4>
      <p>Website bisa jadi sarana langsung untuk transaksi dan promosi produk.</p>
    </div>

    <div className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-blue-400/30 transition">
      <h4 className="text-lg font-semibold text-blue-400 mb-2">💼 Perkuat Branding</h4>
      <p>Bangun identitas merek dan tunjukkan nilai bisnis kamu secara profesional.</p>
    </div>
  </div>
</section>


 {/* Kontak */}
      <section id="contact" className="px-8 py-20 text-center bg-gray-950 dark:bg-gray-800">
        <h3 className="text-3xl font-semibold text-blue-400 mb-6">Hubungi Kami</h3>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Tertarik bekerja sama atau ingin konsultasi lebih dulu? Tim kami siap membantu kamu mewujudkan website impianmu.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:nessteamproject@gmail.com"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold text-white shadow-lg transition transform hover:-translate-y-1"
          >
            ✉️ Kirim Email
          </a>

          <a
            href="https://wa.me/6285822522586?text=Halo%20kak%20Ica!%20Saya%20tertarik%20untuk%20membuat%20website,%20boleh%20minta%20informasi%20lebih%20lanjut%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold text-white shadow-lg transition transform hover:-translate-y-1"
          >
            📞 Hubungi via WhatsApp (Ica)
          </a>
        </div>
      </section>
{/* Footer */}
<footer className="py-6 text-center text-gray-500 border-t border-gray-700 bg-gray-950">
  <div className="max-w-7xl mx-auto px-6">
    <p>© {new Date().getFullYear()} Ness Project. Semua Hak Dilindungi.</p>
  </div>
</footer>



    </div>
  );
}

export default App;
