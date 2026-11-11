export default function Footer() {
  const tahun = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-utama p-6 text-center text-white">
      <p>&copy; {tahun} Haidar Ali Yusuf</p>
    </footer>
  );
}