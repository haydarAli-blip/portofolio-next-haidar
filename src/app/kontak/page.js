import FormKontak from "@/components/FormKontak";

export const metadata = {
  title: "Kontak | Haidar Ali Yusuf",
  description: "Hubungi Haidar Ali Yusuf melalui form kontak atau media sosial.",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-utama md:text-4xl">Hubungi Saya</h1>
      <p className="mt-3 text-lg text-gray-700">
        Silakan isi formulir di bawah ini untuk mengirim pesan kepada saya.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {/* Kolom 1 & 2: Form Kontak */}
        <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:col-span-2">
          <FormKontak />
        </section>

        {/* Kolom 3: Kotak Temukan Saya di */}
        <section className="h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-utama">Temukan Saya di</h2>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-aksen hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-aksen hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
