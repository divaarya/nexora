import "./Hero.css";

const modul = ["Absensi", "Gaji", "Exam", "Library", "Perizinan"];

function Hero({ site }) {
  return (
    <section className="hero">
      <div className="hero-teks">
        <p className="hero-label">
          <span className="hero-titik" />
          Platform HR generasi baru
        </p>

        <h1>{site.heroJudul}</h1>
        <p className="hero-desc">{site.heroDeskripsi}</p>

        <div className="hero-aksi">
          <a href="#kontak" className="btn-glow">
            {site.ctaTeks}
          </a>
          <a href="#fitur" className="btn-garis">
            Lihat fitur
          </a>
        </div>

        <ul className="hero-modul">
          {modul.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>

      <div className="hero-visual">
        <div className="hero-cahaya" />
        <div className="frame">
          <div className="frame-bar">
            <i />
            <i />
            <i />
            <span>nexora.app/dashboard</span>
          </div>

          <div
            className="frame-isi"
            style={{ backgroundImage: "url(/hero.jpg)" }}
          >
            <div className="frame-gelap" />

            <div className="stat stat-a">
              <small>Hadir hari ini</small>
              <b>128</b>
            </div>
            <div className="stat stat-b">
              <small>Izin menunggu</small>
              <b>7</b>
            </div>
            <div className="stat stat-c">
              <small>Gaji bulan ini</small>
              <b>Siap dibayar</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
