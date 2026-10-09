"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import "./Harga.css";

const paket = [
  {
    nama: "Mulai",
    bulanan: 0,
    tahunan: 0,
    catatan: "Untuk tim hingga 10 karyawan",
    fitur: ["Absensi dan lokasi", "Perizinan dasar", "Library dokumen"],
  },
  {
    nama: "Pro",
    bulanan: 8500,
    tahunan: 6500,
    catatan: "per karyawan, per bulan",
    unggulan: true,
    fitur: [
      "Semua fitur Mulai",
      "Penggajian dan slip digital",
      "Exam karyawan",
      "Rekap lembur",
    ],
  },
  {
    nama: "Skala",
    bulanan: 15500,
    tahunan: 12500,
    catatan: "per karyawan, per bulan",
    fitur: [
      "Semua fitur Pro",
      "Persetujuan bertingkat",
      "Library tanpa batas",
      "Dukungan prioritas",
    ],
  },
];

function rupiah(angka) {
  if (angka === 0) return "Gratis";
  return "Rp" + angka.toLocaleString("id-ID");
}

function Harga() {
  const [tahunan, setTahunan] = useState(false);

  return (
    <section className="harga" id="harga">
      <p className="sec-label">Harga</p>
      <h2 className="judul">Pilih paket sesuai kebutuhan.</h2>

      <div className="harga-pilih">
        <button
          className={!tahunan ? "aktif" : ""}
          onClick={() => setTahunan(false)}
        >
          Bulanan
        </button>
        <button
          className={tahunan ? "aktif" : ""}
          onClick={() => setTahunan(true)}
        >
          Tahunan
        </button>
      </div>

      <div className="harga-grid">
        {paket.map((p) => (
          <div
            className={p.unggulan ? "harga-kartu unggulan" : "harga-kartu"}
            key={p.nama}
          >
            {p.unggulan && <span className="harga-label">Paling dipilih</span>}
            <h3>{p.nama}</h3>
            <p className="harga-angka">
              {rupiah(tahunan ? p.tahunan : p.bulanan)}
            </p>
            <p className="harga-catatan">{p.catatan}</p>

            <ul>
              {p.fitur.map((f) => (
                <li key={f}>
                  <Check size={16} />
                  {f}
                </li>
              ))}
            </ul>

            <a href="#kontak" className="harga-tombol">
              Pilih {p.nama}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Harga;
