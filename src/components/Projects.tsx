import { motion } from "motion/react";
import { PROJECTS, PLANNED_PROJECTS } from "../constants";
import { ExternalLink, Calendar, MapPin } from "lucide-react";

export default function Projects() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter text-emerald-900 mb-4">beberapa puncak yang paling bermakna bagi ku</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Beberapa puncak gunung yang telah aku capai dan dokumentasi perjalanannya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="p-3 bg-white rounded-full text-emerald-900 hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-emerald-50 text-emerald-600 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Planned Projects Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter text-emerald-900 mb-4">Planned Projects</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Rencana kegiatan outdoor dan ekspedisi mendatang yang sedang dalam tahap persiapan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PLANNED_PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-8 -mt-8 group-hover:bg-emerald-100 transition-colors"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-emerald-900 mb-4">{project.title}</h3>
                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex items-center gap-2 text-emerald-600 text-sm">
                    <Calendar size={16} />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-500 text-sm">
                    <MapPin size={16} />
                    <span>{project.location}</span>
                  </div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
