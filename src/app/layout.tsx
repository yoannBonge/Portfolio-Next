import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yoann Bonge • Développeur web",
  description: "Mon portfolio de développeur web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.className} overflow-y-auto overflow-x-hidden bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
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
