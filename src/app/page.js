import Hero from "@/components/Hero";
import Kartu from "@/components/Kartu";
import SkillCard from "@/components/SkillCard";

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
    </main>
  );
}