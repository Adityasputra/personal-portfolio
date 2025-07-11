export default function AboutMe() {
  return (
    <>
      <section className="py-12 px-4 md:px-20">
        <h2 className="text-2xl font-bold mb-6">Tentang Saya</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {[
            {
              title: "Biografi Singkat",
              content:
                "Saya adalah seorang pengembang web yang mencintai proses belajar. Perjalanan saya dimulai dari rasa penasaran hingga menjadi seorang fullstack developer.",
              span: "col-span-2 row-span-2",
            },
            {
              title: "Nilai Hidup",
              content:
                "Kejujuran, kerja keras, dan semangat berbagi adalah fondasi dalam hidup saya.",
              span: "col-span-1 row-span-1",
            },
            {
              title: "Prinsip",
              content:
                "Sederhana dalam gaya, namun kuat dalam makna dan tindakan.",
              span: "col-span-1 row-span-1",
            },
            {
              title: "Tujuan Karir",
              content:
                "Membangun produk digital yang bermanfaat dan bisa digunakan oleh banyak orang.",
              span: "col-span-2 row-span-1",
            },
            {
              title: "Motivasi Harian",
              content:
                "Saya percaya setiap baris kode bisa membawa dampak positif dalam kehidupan orang lain.",
              span: "col-span-1 row-span-2",
            },
            {
              title: "Filosofi Belajar",
              content:
                "Belajar bukan hanya menambah pengetahuan, tapi juga melatih kesabaran dan rasa ingin tahu.",
              span: "col-span-1 row-span-1",
            },
            {
              title: "Gagal dan Bangkit",
              content:
                "Kegagalan pernah menjadi guru terbaik saya. Dari sana saya belajar bertumbuh.",
              span: "col-span-2 row-span-1",
            },
            {
              title: "Kebiasaan Positif",
              content:
                "Menulis jurnal, membaca, dan melakukan coding challenge secara rutin.",
              span: "col-span-1 row-span-1",
            },
            {
              title: "Visi Jangka Panjang",
              content:
                "Menjadi seseorang yang tidak hanya ahli, tetapi juga memberi dampak sosial melalui teknologi.",
              span: "col-span-1 row-span-1",
            },
            {
              title: "Penutup",
              content:
                "Ini hanyalah permulaan. Saya terus berkembang, dan kisah saya masih panjang untuk ditulis.",
              span: "col-span-4 row-span-1",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-muted text-muted-foreground p-6 rounded-xl shadow ${item.span} hover:shadow-lg transition`}
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
