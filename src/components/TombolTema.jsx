"use client";

import { useEffect, useState } from "react";

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
    <button
      type="button"
      onClick={gantiTema}
      className="rounded-lg border border-white px-3 py-1 text-sm font-semibold text-white hover:border-aksen hover:bg-aksen"
    >
      {gelap ? "Mode Terang" : "Mode Gelap"}
    </button>
  );
}
