import "./CaraKerja.css";

const langkah = [
  {
    no: "01",
    judul: "Daftarkan perusahaan",
    isi: "Buat akun dan masukkan data perusahaan beserta karyawan.",
  },
  {
    no: "02",
    judul: "Atur aturan kerja",
    isi: "Tentukan jam kerja, komponen gaji, jenis cuti, dan hak akses.",
  },
  {
    no: "03",
    judul: "Undang tim",
    isi: "Karyawan masuk lewat ponsel dan langsung bisa memakai semua modul.",
  },
  {
    no: "04",
    judul: "Pantau dari dashboard",
    isi: "HR melihat kehadiran, gaji, dan persetujuan dalam satu layar.",
  },
];

function CaraKerja() {
  return (
    <section className="cara" id="cara-kerja">
      <p className="sec-label">Cara kerja</p>
      <h2 className="judul">Aktif dalam empat langkah.</h2>

      <ol className="cara-grid">
        {langkah.map((l) => (
          <li className="cara-kartu" key={l.no}>
            <span className="cara-no">{l.no}</span>
            <h3>{l.judul}</h3>
            <p>{l.isi}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default CaraKerja;
