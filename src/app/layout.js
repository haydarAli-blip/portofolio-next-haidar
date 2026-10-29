import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Haidar Ali Yusuf | Portofolio",
    template:" %s | Haidar Ali Yusuf"
  },
  description: "Portofolio Haidar Ali Yusuf, Siswa SMK calon Junior Web Developer di Kelas Industri UBIG.",
  
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-latar text-gray-800">
        <nav/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
