import { Sora } from "next/font/google";
import { getSite } from "@/lib/getSite";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export async function generateMetadata() {
  const site = await getSite();
  return {
    title: site.seo.metaTitle,
    description: site.seo.metaDescription,
    openGraph: {
      title: site.seo.metaTitle,
      description: site.seo.metaDescription,
      images: site.seo.ogImage ? [site.seo.ogImage] : [],
    },
  };
}

export default async function RootLayout({ children }) {
  const site = await getSite();
  return (
    <html lang="id">
      <body
        className={sora.className}
        style={{
          "--warna-utama": site.warnaUtama,
          "--warna-aksen": site.warnaAksen,
        }}
      >
        {children}
      </body>
    </html>
  );
}
