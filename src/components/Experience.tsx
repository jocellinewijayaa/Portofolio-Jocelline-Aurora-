import { motion } from "motion/react";
import { EXPERIENCES, MOUNTAINS } from "../constants";

export default function Experience() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter text-emerald-900 mb-4">Pendakian & Pengalaman</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Catatan perjalanan dan keterlibatanku dalam berbagai organisasi serta dunia pecinta alam.
          </p>
        </div>

        {/* Mountains Grid */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-emerald-900 mb-8 border-l-4 border-emerald-600 pl-4">Daftar Puncak & Bukit</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {MOUNTAINS.map((mtn, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm hover:border-emerald-200 hover:bg-emerald-50 transition-all text-center"
              >
                <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-600 mb-1">{mtn.type}</span>
                <h4 className="text-sm font-bold text-emerald-900">{mtn.name}</h4>
                <p className="text-[10px] text-stone-500 mt-1">{mtn.location}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-xl font-bold text-emerald-900 mb-8 border-l-4 border-emerald-600 pl-4">Pengalaman Organisasi</h3>
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-emerald-900">{exp.role}</h3>
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase rounded tracking-wider">
                    {exp.period}
                  </span>
                </div>
                <p className="text-emerald-700 font-medium mb-4">{exp.company}</p>
                <p className="text-stone-600 text-sm leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
