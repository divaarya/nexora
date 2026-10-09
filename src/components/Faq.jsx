"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import "./Faq.css";

const daftar = [
  {
    tanya: "Apakah ada paket gratis?",
    jawab:
      "Ada. Paket Mulai gratis untuk tim hingga 10 karyawan, sudah termasuk absensi, perizinan dasar, dan library.",
  },
  {
    tanya: "Berapa lama proses pengaturan awal?",
    jawab:
      "Setelah data perusahaan dan karyawan dimasukkan, tim bisa langsung memakai sistem di hari yang sama.",
  },
  {
    tanya: "Apakah gaji terhubung dengan absensi?",
    jawab:
      "Ya. Kehadiran, lembur, dan izin masuk otomatis ke perhitungan gaji sehingga tidak perlu menghitung ulang.",
  },
  {
    tanya: "Bisakah dipakai untuk pelatihan karyawan?",
    jawab:
      "Bisa. Simpan materi di Library, lalu ukur pemahaman karyawan lewat Exam dan lihat hasilnya per orang.",
  },
  {
    tanya: "Bagaimana dengan keamanan data?",
    jawab:
      "Hak akses diatur per peran, sehingga data sensitif seperti gaji hanya terlihat oleh yang berwenang.",
  },
];

function Faq() {
  const [buka, setBuka] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="faq-kiri">
        <p className="sec-label">Tanya jawab</p>
        <h2 className="judul">Pertanyaan yang sering muncul.</h2>

        <div
          className="faq-foto"
          style={{ backgroundImage: "url(/faq.jpg)" }}
          role="img"
          aria-label="Tim dukungan siap membantu"
        />

        <p className="faq-lanjut">
          Belum menemukan jawabannya? <a href="#kontak">Hubungi kami</a>
        </p>
      </div>

      <div className="faq-daftar">
        {daftar.map((d, i) => (
          <div
            className={buka === i ? "faq-item buka" : "faq-item"}
            key={d.tanya}
          >
            <button
              className="faq-tanya"
              onClick={() => setBuka(buka === i ? -1 : i)}
              aria-expanded={buka === i}
            >
              <span>{d.tanya}</span>
              {buka === i ? <Minus size={18} /> : <Plus size={18} />}
            </button>
            {buka === i && <p className="faq-jawab">{d.jawab}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
