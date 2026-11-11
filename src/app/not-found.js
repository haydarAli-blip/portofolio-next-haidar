import Link from "next/link";

export const metadata = {
  title: "404 - Halaman Tidak Ditemukan",
  description: "Halaman yang Anda cari tidak ditemukan.",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
      {/* Angka 404 Besar */}
      <h1 className="text-7xl font-extrabold text-primary md:text-9xl">404</h1>

      {/* Judul Halaman */}
      <h2 className="mt-4 text-2xl font-bold text-foreground md:text-3xl">
        Halaman tidak ditemukan
      </h2>

      {/* Kalimat Penjelasan */}
      <p className="mt-2 max-w-md text-muted-foreground">
        Maaf, halaman atau proyek yang Anda cari tidak ada atau telah dipindahkan.
      </p>

      {/* Tombol Kembali ke Beranda */}
      <Link
        href="/"
        className="mt-6 inline-block rounded-lg bg-primary px-6 py-2.5 font-semibold text-primary-foreground transition hover:opacity-90"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}

