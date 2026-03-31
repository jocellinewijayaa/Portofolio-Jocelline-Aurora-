import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 overflow-hidden mountain-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold tracking-wider uppercase mb-6">
              available to be a guide on several Indonesian mountains!
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-emerald-950 mb-6 leading-tight">
              Hi hello, <br />
              <span className="text-emerald-600">stranger!</span>
            </h1>
            <p className="text-lg text-stone-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Halo, Aku Jocelline. Siswi SMA Frateran yang hobinya naik gunung, hehe.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="px-8 py-3 bg-emerald-800 text-white rounded-full font-medium hover:bg-emerald-900 transition-all flex items-center gap-2 group">
                lihat pengalamanku
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-emerald-100 rounded-3xl rotate-6 -z-10"></div>
              <img 
                src="https://picsum.photos/seed/rinjani-mountain/800/800" 
                alt="Rinjani Mountain View" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
