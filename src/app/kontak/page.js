export default function Kontak() {
    return (
        <main className="mx-auto max-w-5xl px-4 py-10">
            <h1 className="text-3xl font-bold text-utama md:text-4xl">Hubungi Saya</h1>
            <form className="space-y-4">
                <div>
                    <label htmlFor="nama" className="block font-semibold">Nama Lengkap</label>
                    <input type="text" id="nama" name="nama" placeholder="Haidar Ali Yusuf" required className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2" />
                </div>
                <div>
                    <label htmlFor="email" className="block font-semibold">
                        Email
                    </label>
                </div>
            </form>
            <p className="mt-3 text-lg text-gray-700">Halaman ini akan berisi form kontak </p>
        </main>
    )
}