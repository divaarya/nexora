import { Sora } from "next/font/google";
import { getSite } from "@/lib/getSite";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export async function generateMetadata() {
  const site = await getSite();

  const title = site.seo.metaTitle || "Nexora - Smart Business Platform";
  const description =
    site.seo.metaDescription ||
    "Nexora membantu bisnis mengelola pekerjaan dan meningkatkan produktivitas melalui solusi digital yang modern.";

  return {
    metadataBase: new URL("https://nexora-vert-five-87.vercel.app"),

    title,
    description,

    openGraph: {
      title,
      description,
      siteName: "Nexora",
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Nexora - Smart Business Platform",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image.png"],
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
