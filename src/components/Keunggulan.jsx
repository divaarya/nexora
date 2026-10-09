import { Zap, ShieldCheck, Layers, TrendingUp } from "lucide-react";
import "./Keunggulan.css";

const daftar = [
  {
    ikon: Layers,
    judul: "Semua terhubung",
    isi: "Absensi, gaji, dan izin saling bertukar data sehingga tidak ada input ganda.",
  },
  {
    ikon: Zap,
    judul: "Cepat dan ringan",
    isi: "Halaman terbuka instan, nyaman dipakai dari ponsel maupun komputer.",
  },
  {
    ikon: ShieldCheck,
    judul: "Akses sesuai peran",
    isi: "Setiap orang hanya melihat data yang menjadi tanggung jawabnya.",
  },
  {
    ikon: TrendingUp,
    judul: "Siap berkembang",
    isi: "Dari belasan sampai ratusan karyawan, sistem tetap stabil.",
  },
];

function Keunggulan() {
  return (
    <section className="unggul" id="keunggulan">
      <div
        className="unggul-foto"
        style={{ backgroundImage: "url(/tentang.jpg)" }}
      >
        <div className="unggul-redup" />
        <div className="unggul-badge">
          <b>5 modul</b>
          <span>dalam satu platform</span>
        </div>
      </div>

      <div className="unggul-teks">
        <p className="sec-label">Keunggulan</p>
        <h2 className="judul">Dibangun untuk tim yang bergerak cepat.</h2>

        <ul className="unggul-daftar">
          {daftar.map((d) => {
            const Ikon = d.ikon;
            return (
              <li key={d.judul}>
                <span className="unggul-ikon">
                  <Ikon size={20} />
                </span>
                <div>
                  <h3>{d.judul}</h3>
                  <p>{d.isi}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Keunggulan;
