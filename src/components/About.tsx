import { motion } from "motion/react";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold tracking-tighter text-emerald-900">About Me</h2>
            <div className="w-20 h-1 bg-emerald-600"></div>
            <p className="text-zinc-700 leading-relaxed">
              Namaku Jocelline Aurora Wijaya. Aku adalah siswi berusia 17 tahun di SMA Katolik Frateran Surabaya yang menemukan ketertarikan pada dunia pendakian sejak kelas 11, saat bergabung dengan ekstrakurikuler Pecinta Alam dari sekolah.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Awalnya sederhana—aku tumbuh di kota yang tidak memiliki gunung. Saat pindah ke Surabaya, rasa penasaran itu akhirnya terjawab: aku ingin mencoba sesuatu yang sebelumnya tidak pernah bisa aku lakukan. Pendakian pertamaku dimulai dari sebuah bukit di Mojokerto, Phutuk Siwur. Rasanya tidak mudah, tapi juga tidak terlalu berat—cukup untuk membuatku ingin kembali lagi. Sejak saat itu, perjalanan terus berlanjut.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="text-2xl font-bold text-emerald-900">2+</h4>
                <p className="text-sm text-emerald-600 font-medium">Years Experience</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-emerald-900">10+</h4>
                <p className="text-sm text-emerald-600 font-medium">Peaks Completed</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-stone-50 p-8 rounded-3xl border border-stone-100"
          >
            <h3 className="text-xl font-bold mb-6 text-emerald-900">Filosofi Hidupku</h3>
            <p className="text-zinc-700 italic leading-relaxed text-center py-4">
              "Jangan ambil apapun kecuali foto, jangan bunuh apapun kecuali waktu, dan jangan tinggalkan apapun kecuali jejak."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
