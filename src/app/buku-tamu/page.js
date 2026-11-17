import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import FormBukuTamu from "@/components/FormBukuTamu";
import { supabase } from "@/lib/supabase";

export const metadata = {
    title: "Buku Tamu",
    description: "Tinggalkan kesan atau sapaan untuk Haidar Ali Yusuf",
};

export default async function BukuTamu() {
    const { data: daftarPesan } = await supabase
        .from("buku_tamu")
        .select("*")
        .order("disematkan", { ascending: false })
        .order("created_at", { ascending: false });

    return (
        <main className="mx-auto w-full max-w-3xl px-4 py-10">
            <h1 className="text-3xl font-bold text-primary md:text-4xl">Buku Tamu</h1>
            <p className="mt-3 text-lg text-muted-foreground">
                Tinggalkan kesan atau sapaan. Pesanmu langsung tampil di bawah
            </p>

            <Card className="mt-8">
                <CardContent className="pt-6">
                    <FormBukuTamu />
                </CardContent>
            </Card>

            <h2 className="mt-12 text-2xl font-bold text-primary">Pesan Terbaru</h2>
            <div className="mt-4 space-y-4">
                {daftarPesan &&
                    daftarPesan.map((item) => (
                        <Card key={item.id}>
                            <CardContent className="pt-6 space-y-1">
                                <h3 className="font-semibold">{item.nama}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {new Date(item.created_at).toLocaleDateString("id-ID")}
                                </p>
                                {item.disematkan && <Badge>Disematkan</Badge>}
                                <p className="pt-2">{item.pesan}</p>
                            </CardContent>
                        </Card>
                    ))}
            </div>
        </main>
    );
}
