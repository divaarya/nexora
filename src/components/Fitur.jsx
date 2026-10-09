import {
  Fingerprint,
  Wallet,
  GraduationCap,
  Library,
  CalendarCheck,
} from "lucide-react";
import "./Fitur.css";

function Fitur() {
  return (
    <section className="fitur" id="fitur">
      <p className="sec-label">Fitur</p>
      <h2 className="judul">Lima modul, satu platform.</h2>

      <div className="bento">
        <article className="kartu k-absen">
          <div>
            <Fingerprint size={22} className="k-ikon" />
            <h3>Absensi</h3>
            <p>
              Pantau kehadiran dan jam kerja tim secara langsung, lengkap dengan
              lokasi dan jadwal shift.
            </p>
          </div>
          <div className="viz-bar">
            {[40, 65, 50, 80, 70, 92, 60].map((h, i) => (
              <i key={i} style={{ height: h + "%" }} />
            ))}
          </div>
        </article>

        <article className="kartu k-gaji">
          <div>
            <Wallet size={22} className="k-ikon" />
            <h3>Gaji</h3>
            <p>Kelola informasi penggajian dengan lebih terstruktur.</p>
          </div>
          <div className="viz-angka">
            Rp6,57 jt
            <small>diterima bulan ini</small>
          </div>
        </article>

        <article className="kartu k-exam">
          <div>
            <GraduationCap size={22} className="k-ikon" />
            <h3>Exam</h3>
            <p>Buat dan kelola evaluasi kemampuan karyawan.</p>
          </div>
          <div className="viz-meter">
            <i style={{ width: "92%" }} />
            <span>Rata-rata nilai 92</span>
          </div>
        </article>

        <article className="kartu k-library">
          <div>
            <Library size={22} className="k-ikon" />
            <h3>Library</h3>
            <p>Simpan dan akses dokumen serta materi perusahaan.</p>
          </div>
          <div className="viz-rak">
            {[60, 90, 70, 100, 55, 80].map((h, i) => (
              <i key={i} style={{ height: h + "%" }} />
            ))}
          </div>
        </article>

        <article className="kartu k-izin">
          <div>
            <CalendarCheck size={22} className="k-ikon" />
            <h3>Perizinan</h3>
            <p>Kelola pengajuan izin dan cuti dengan proses sederhana.</p>
          </div>
          <div className="viz-chip">
            <b className="ok">Disetujui</b>
            <b>Menunggu</b>
            <b>Diajukan</b>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Fitur;
