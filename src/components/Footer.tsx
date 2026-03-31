import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-100/60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold tracking-tighter mb-4">JOCELLINE.</h3>
            <p className="text-sm leading-relaxed">
              Menjelajahi keindahan alam Indonesia satu puncak demi satu puncak. 
              Tersedia untuk panduan pendakian dan kolaborasi pecinta alam.
            </p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-400 transition-colors"><Github size={20} /></a>
              <a href="#" className="hover:text-emerald-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-emerald-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-emerald-400 transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
            <p className="text-sm">jocellineaurorawijaya@gmail.com</p>
            <p className="text-sm mt-2">Surabaya, Indonesia</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-emerald-900 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Jocelline Aurora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
