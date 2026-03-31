import { motion } from "motion/react";
import { SKILLS } from "../constants";

export default function Skills() {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter text-emerald-900 mb-4">Keahlian & Perlengkapan</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Keterampilan teknis dan pengetahuan lapangan yang aku miliki dalam pendakian.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="p-6 rounded-2xl bg-stone-50 border border-stone-100"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-6">{category}</h3>
              <div className="space-y-6">
                {SKILLS.filter(s => s.category === category).map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-emerald-900">{skill.name}</span>
                      <span className="text-xs text-emerald-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-emerald-100 rounded-full overflow-hidden mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-emerald-600 rounded-full"
                      ></motion.div>
                    </div>
                    {skill.description && (
                      <p className="text-[10px] text-stone-500 leading-relaxed italic">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
