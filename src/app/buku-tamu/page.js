import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TextArea } from "@/components/ui/textarea";
import { kirimPesan } from "@/app/action";

export const metadata = {
    title: "Buku Tamu",
    description: "Tinggalkan kesan atau sapaan untuk Haidar Ali Yusuf",
};

export default function BukuTamu() {
    return (
        <main className="mx-auto w-full max-w-3xl px-4 py-10">
            <h1 className="text-3xl font-bold text-primary md:text-4xl">Buku Tamu</h1>
            <p className="mt-3 text-lg text-muted-foreground">Tinggalkankesan atau sapaan. Pesanmu langsung tampil di bawah</p>

            <Card className="mt-8">
                <CardContent>
                    <form action={kirimPesan} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="nama">Nama</Label>
                            <Input id="nama" name="nama" placeholder="Contoh: Haidar Ali Yusuf" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="pesan">Pesasn</Label>
                            <Textarea id="pesan" name="pesan" rows={4} maxLength={300} placeholder="Tulis kesan atau sapaanmu" />
                        </div>
                        <Button type="submit" size="lg">
                            Kirim Pesan
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </main>
    );
}