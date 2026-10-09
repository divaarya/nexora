import "./Testimoni.css";

const daftar = [
  {
    isi: "Rekap absensi yang dulu butuh dua hari kini selesai dalam hitungan menit. Tim HR akhirnya punya waktu untuk hal lain.",
    nama: "Reza Aditya",
    jabatan: "Kepala HR, Logistik Nusantara",
  },
  {
    isi: "Slip gaji, izin, dan materi pelatihan ada di satu tempat. Karyawan baru langsung paham alurnya tanpa dibimbing lama.",
    nama: "Dewi Lestari",
    jabatan: "Founder, Studio Kreatif Hijau",
  },
  {
    isi: "Pengajuan cuti tidak lagi menumpuk di grup pesan. Semua tercatat dan atasan bisa menyetujui dari ponsel.",
    nama: "Hendra Wijaya",
    jabatan: "Direktur, Klinik Prima",
  },
];

function inisial(nama) {
  return nama
    .split(" ")
    .map((k) => k[0])
    .join("")
    .slice(0, 2);
}

function Testimoni() {
  return (
    <section className="testi" id="testimoni">
      <p className="sec-label">Testimoni</p>
      <h2 className="judul">Dipercaya tim yang sibuk.</h2>

      <div className="testi-grid">
        {daftar.map((t) => (
          <figure className="testi-kartu" key={t.nama}>
            <blockquote>{t.isi}</blockquote>
            <figcaption>
              <span className="testi-avatar">{inisial(t.nama)}</span>
              <div>
                <b>{t.nama}</b>
                <small>{t.jabatan}</small>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Testimoni;
