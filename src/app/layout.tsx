import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://yoann-bonge.vercel.app/"),
  title: "Yoann Bonge • Développeur web",
  description: "Portfolio de Yoann Bonge, développeur web front-end junior.",
  openGraph: {
    type: "website",
    url: "https://yoann-bonge.vercel.app/",
    title: "Yoann Bonge • Développeur web",
    description: "Portfolio de Yoann Bonge, développeur web front-end junior.",
    images: [
      {
        url: "/meta-image.jpg",
        width: 1239,
        height: 879,
        alt: "Aperçu du portfolio de Yoann Bonge",
      },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    url: "https://yoann-bonge.vercel.app/",
    title: "Yoann Bonge • Développeur web",
    description: "Portfolio de Yoann Bonge, développeur web front-end junior.",
    images: [
      {
        url: "/meta-image.jpg",
        alt: "Aperçu du portfolio de Yoann Bonge",
      },
    ],
  },
  icons: {
    icon: "/icons/favicon-32x32.png",
    shortcut: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
    other: {
      rel: "icon",
      sizes: "144x144",
      url: "/icons/android-chrome-144x144.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.className} overflow-y-auto overflow-x-hidden bg-gray-800 leading-relaxed text-gray-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        {children}
        {/* <div className="fixed bottom-4 left-4 z-50 text-[3rem] text-green-500">
          <span className="sm:hidden">XS</span>
          <span className="hidden sm:block md:hidden">SM</span>
          <span className="hidden md:block lg:hidden">MD</span>
          <span className="hidden lg:block xl:hidden">LG</span>
          <span className="hidden xl:block 2xl:hidden">XL</span>
          <span className="hidden 2xl:block">2XL</span>
        </div> */}
      </body>
    </html>
  );
}
