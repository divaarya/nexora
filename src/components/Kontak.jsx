import { MessageCircle, Mail, MapPin } from "lucide-react";
import { buatLinkWa, formatNomor } from "@/lib/whatsapp";
import "./Kontak.css";

function Kontak({ site }) {
  const link = buatLinkWa(site.whatsappNomor, site.whatsappPesan);

  const baris = [
    {
      ikon: MessageCircle,
      label: "WhatsApp",
      isi: formatNomor(site.whatsappNomor),
      href: link,
    },
    {
      ikon: Mail,
      label: "Email",
      isi: site.email,
      href: `mailto:${site.email}`,
    },
    { ikon: MapPin, label: "Lokasi", isi: site.kota },
  ];

  return (
    <section className="kontak" id="kontak">
      <div className="kontak-panel">
        <div className="kontak-cahaya" />

        <h2 className="judul">Siap merapikan HR perusahaan Anda?</h2>
        <p className="kontak-sub">
          Ceritakan kebutuhan tim Anda. Kami bantu pilihkan paket yang paling
          sesuai.
        </p>

        <a className="btn-glow" href={link} target="_blank" rel="noreferrer">
          Hubungi kami via WhatsApp
        </a>

        <ul className="kontak-daftar">
          {baris.map((b) => {
            const Ikon = b.ikon;
            const isi = b.href ? (
              <a href={b.href} target="_blank" rel="noreferrer">
                {b.isi}
              </a>
            ) : (
              <span>{b.isi}</span>
            );
            return (
              <li key={b.label}>
                <Ikon size={18} />
                <div>
                  <small>{b.label}</small>
                  {isi}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Kontak;
