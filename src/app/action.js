"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase";



export async function kirimPesan(formData) {
    const nama = formData.get("nama");
    const pesan = formData.get("Pesan");
    console.log("Pesan baru dari", nama, "-", pesan);

    const { error } = await supabase.from("buku_tamu").insert({ nama, pesan});

    if (error) {
        console.log("Gagal menyimpan:", error.message);
        return;
    }
    console.log("Pesan tersimpan dari", nama);
}