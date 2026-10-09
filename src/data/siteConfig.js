// Data bawaan. Nanti diganti oleh data dari API admin panel.
export const siteConfig = {
  nama: "Nexora",
  warnaUtama: "#22d3ee",
  warnaAksen: "#8b5cf6",
  heroJudul: "Kelola seluruh tim Anda dari satu pusat kendali.",
  heroDeskripsi:
    "Nexora menyatukan absensi, penggajian, ujian, dokumen, dan perizinan dalam satu platform yang cepat, rapi, dan siap tumbuh bersama perusahaan.",
  ctaTeks: "Coba Nexora",
  whatsappNomor: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890",
  whatsappPesan: "Halo Nexora, saya ingin melihat demo platform HR-nya.",
  email: "halo@nexora.gmail",
  kota: "Surabaya, Jawa Timur",
  seo: {
    metaTitle: "Nexora - Platform HR untuk Tim Modern",
    metaDescription:
      "Platform HR terpadu untuk absensi, gaji, exam, library, dan perizinan karyawan.",
    ogImage: "",
  },
};
