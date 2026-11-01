import Link from "next/link";
import Hero from "@/components/Hero";
import Kartu from "@/components/Kartu";
import SkillCard from "@/components/SkillCard";
import ProyekCard from "@/components/ProyekCard";
import { proyek } from "@/data/proyek";

const proyekTerbaru = proyek.slice(-3);

const hobi = [
  "Berlari",
  "Bermain Game",
  "Sepak Bola",
];

const CitaCita = [
  "Menjadi programmer",
  "Magang di perusahaan teknologi",
  "Bekerja sebagai Web Developer",
];

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan GitHub", level: "Pemula" },
  { nama: "Desain poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Pemula" },
];

const jadwalBelajar = [
  { hari: "Senin", waktu: "15.00 - 17.00", kegiatan: "Mengerjakan Tugas Sekolah" },
  { hari: "selasa", waktu: "15.00 - 17.00", kegiatan: "Mengerjakan Tugas Ubig" },
  { hari: "Rabu", waktu: "16.00 - 18.00", kegiatan: "Belajar Coding" },
  { hari: "Kamis", waktu: "19.00 - 21.00", kegiatan: "Merangkum Modul Ubig" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 space-y-6">
      <Hero
        nama="Haidar Ali Yusuf"
        tagline="Siswa kelas XI SMK, calon Junior Web Developer di Kelas Industri UBIG."
      />

      <Kartu judul="Tentang Saya">
        <p className="text-gray-700 leading-relaxed">
          Saya tinggal di Pasuruan, Jawa Timur dan senang mencoba hal baru di dunia teknologi. Saya ingin bisa membuat website yang bermanfaat.
        </p>
      </Kartu>

      <div className="grid gap-6 md:grid-cols-2">
        <Kartu judul="Hobi">
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {hobi.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Kartu>

        <Kartu judul="Cita-cita">
          <p className="mb-2 text-gray-700">
            Menjadi <strong className="font-semibold text-gray-900">Full Stack Web Developer</strong>. Langkah yang saya rencanakan:
          </p>
          <ol className="list-decimal pl-5 space-y-1 text-gray-700">
            {CitaCita.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </Kartu>
      </div>

      <Kartu judul="Keahlian">
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
          ))}
        </div>
      </Kartu>

      <Kartu judul="Jadwal Belajar">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-utama text-white">
                <th className="rounded-l-lg px-4 py-3 font-semibold">Hari</th>
                <th className="px-4 py-3 font-semibold">Waktu</th>
                <th className="rounded-r-lg px-4 py-3 font-semibold">Kegiatan</th>
              </tr>
            </thead>
            <tbody>
              {jadwalBelajar.map((item, index) => (
                <tr
                  key={item.hari}
                  className={
                    index !== jadwalBelajar.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }
                >
                  <td className="px-4 py-3.5 font-semibold text-gray-900">
                    {item.hari}
                  </td>
                  <td className="px-4 py-3.5 text-gray-600">{item.waktu}</td>
                  <td className="px-4 py-3.5 text-gray-600">{item.kegiatan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Kartu>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-utama">Proyek Terbaru</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {proyekTerbaru.map((item) => (
            <ProyekCard key={item.slug} proyek={item} />
          ))}
        </div>
        <Link href="/proyek" className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white">
          Lihat semua proyek
        </Link>
      </section>
    </main>   
  );
}