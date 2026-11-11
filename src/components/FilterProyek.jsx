"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProyekCard from "@/components/ProyekCard";

const daftarKategori = ["Semua", "HTML", "CSS", "JavaScript"];

export default function FilterProyek({ proyek }) {
    const [kategori, setKategori] = useState("Semua");
    const [kata, setKata] = useState("");

    const kataKecil = kata.toLowerCase();
    const hasil = proyek.filter((p) => {
        const cocokKategori = kategori === "Semua" || p.kategori === kategori;
        const cocokJudul = p.judul.toLowerCase().includes(kataKecil);
        const cocokDeskripsi = p.deskripsi.toLowerCase().includes(kataKecil);
        const cocokKata = cocokJudul || cocokDeskripsi;
        return cocokKategori && cocokKata;
    });

    return (
        <div className="mt-8">
            {/* Kode 3.5: Tombol Kategori memakai Button */}
            <div className="flex flex-wrap gap-2">
                {daftarKategori.map((k) => (
                    <Button
                        key={k}
                        variant={kategori === k ? "default" : "outline"}
                        onClick={() => setKategori(k)}
                    >
                        {k}
                    </Button>
                ))}
            </div>

            {/* Kotak Pencarian */}
            <div className="mt-6">
                <label htmlFor="cari" className="block font-semibold">
                    Cari proyek
                </label>
                <input
                    type="text"
                    id="cari"
                    value={kata}
                    onChange={(e) => setKata(e.target.value)}
                    placeholder="Contoh: kalkulator"
                    className="mt-1 w-full rounded-lg border border-input bg-card p-2 text-foreground placeholder:text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring md:w-80"
                />

                {/* Kode 3.6: Tombol Hapus pencarian memakai variant link */}
                {kata !== "" && (
                    <Button
                        variant="link"
                        onClick={() => setKata("")}
                        className="mt-2 px-0 text-aksen"
                    >
                        Hapus pencarian
                    </Button>
                )}
            </div>

            {/* Jumlah hasil */}
            <p className="mt-4 text-sm text-muted-foreground">
                Menampilkan {hasil.length} dari {proyek.length} proyek
            </p>

            <p className="mt-4 text-muted-foreground">
                Kategori terpilih: <span className="font-semibold text-foreground">{kategori}</span>
            </p>

            {/* Daftar Kartu Proyek */}
            <div className="mt-8 grid gap-6 md:grid-cols-3">
                {hasil.map((item) => (
                    <ProyekCard key={item.slug} proyek={item} />
                ))}
            </div>

            {hasil.length === 0 && (
                <p className="mt-6 rounded-xl border border-dashed border-input p-6 text-center text-muted-foreground">
                    Belum ada proyek yang cocok
                </p>
            )}
        </div>
    );
}
