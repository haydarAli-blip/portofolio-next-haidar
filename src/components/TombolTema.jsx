"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function TombolTema() {
  const [gelap, setGelap] = useState(false);

  // Dijalankan sekali setelah tombol tampil di browser: pakai tema yang tersimpan
  useEffect(() => {
    if (localStorage.getItem("tema") === "gelap") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  function gantiTema() {
    const isGelap = document.documentElement.classList.toggle("dark");
    localStorage.setItem("tema", isGelap ? "gelap" : "terang");
    setGelap(isGelap);
  }

  return (
    <Button
      variant="outline"
      onClick={gantiTema}
      className="border-white bg-transparent text-white hover:bg-aksen hover:text-white"
    >
      {gelap ? "Mode Terang" : "Mode Gelap"}
    </Button>
  );
}
