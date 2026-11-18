"use client";

import { useActionState } from "react";
import TombolKirim from "@/components/TombolKirim";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function FormProyek({ aksi, proyek, teksTombol }) {
    const [state, formAction] = useActionState(aksi, { proyek });

    return (
        <form action={formAction} className="space-y-4">
            <input type="hidden" name="id" value={proyek?.id || ""} />

            <div className="space-y-2">
                <Label htmlFor="judul">Judul</Label>
                <Input
                    id="judul"
                    name="judul"
                    defaultValue={state?.proyek?.judul}
                    placeholder="Contoh: Buku Tamu Digital"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="slug">Slug (alamat halaman detail)</Label>
                <Input
                    id="slug"
                    name="slug"
                    defaultValue={state?.proyek?.slug}
                    placeholder="Contoh: buku-tamu"
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="kategori">Kategori</Label>
                    <Input
                        id="kategori"
                        name="kategori"
                        defaultValue={state?.proyek?.kategori}
                        placeholder="HTML / CSS / JavaScript / Next.js"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="minggu">Minggu</Label>
                    <Input
                        id="minggu"
                        name="minggu"
                        defaultValue={state?.proyek?.minggu}
                        placeholder="Contoh: Minggu 15"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="deskripsi">Deskripsi</Label>
                <Textarea
                    id="deskripsi"
                    name="deskripsi"
                    rows={3}
                    defaultValue={state?.proyek?.deskripsi}
                    placeholder="Tulis ringkasan singkat proyek ini"
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="fitur">Fitur (satu baris satu fitur)</Label>
                <Textarea
                    id="fitur"
                    name="fitur"
                    rows={4}
                    defaultValue={
                        Array.isArray(state?.proyek?.fitur)
                            ? state.proyek.fitur.join("\n")
                            : state?.proyek?.fitur || ""
                    }
                    placeholder={"Server Actions\nValidasi Formulir\nPenyimpanan Supabase"}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="gambar_url">URL Gambar</Label>
                <Input
                    id="gambar_url"
                    name="gambar_url"
                    defaultValue={state?.proyek?.gambar_url}
                    placeholder="/proyek/porto.png"
                />
            </div>

            <TombolKirim teks={teksTombol} />

            {state?.error && <p className="text-sm text-aksen">{state.error}</p>}
        </form>
    );
}
