import { Experience, Skill, Project, Mountain, PlannedProject } from "./types";

export const EXPERIENCES: Experience[] = [
  {
    company: "Ekstrakurikuler Pecinta Alam SMA Frateran",
    role: "Anggota Aktif",
    period: "2024 - Present",
    description: "Berpartisipasi dalam berbagai kegiatan lapangan, pelatihan navigasi darat, dan manajemen perjalanan pendakian."
  },
  {
    company: "OSIS SMA Katolik Frateran Surabaya",
    role: "Anggota Bidang Hubungan Masyarakat",
    period: "2024 - 2025",
    description: "Mengelola komunikasi internal dan eksternal organisasi serta mendukung berbagai program kerja sekolah."
  },
  {
    company: "OSIS SMA Katolik Frateran Surabaya",
    role: "Anggota Bidang Daya Pikir dan Kreasi Ilmiah",
    period: "2025 - 2026",
    description: "Mengembangkan program-program kreatif berbasis ilmiah dan edukatif bagi siswa."
  },
  {
    company: "Dewan Ambalan Kepramukaan SMA Katolik Frateran Surabaya",
    role: "Koordinator Giat Aktual (Anggota Inti)",
    period: "2025 - 2026",
    description: "Mengoordinasikan kegiatan aktual kepramukaan dan memastikan kelancaran program kerja ambalan."
  }
];

export const MOUNTAINS: Mountain[] = [
  { name: "Gunung Pundak", location: "Jawa Timur", type: "Gunung" },
  { name: "Gunung Penanggungan", location: "Jawa Timur", type: "Gunung" },
  { name: "Bukit Sara Klopo", location: "Jawa Timur", type: "Bukit" },
  { name: "Bukit Cendono", location: "Jawa Timur", type: "Bukit" },
  { name: "Puthuk Gragal", location: "Jawa Timur", type: "Bukit" },
  { name: "Puthuk Kentongan", location: "Jawa Timur", type: "Bukit" },
  { name: "Puthuk Watu", location: "Jawa Timur", type: "Bukit" },
  { name: "Gunung Buthak", location: "Jawa Timur", type: "Gunung" },
  { name: "Gunung Lawu", location: "Jawa Timur", type: "Gunung" },
  { name: "Gunung Rinjani", location: "Lombok", type: "Gunung" }
];

export const SKILLS: Skill[] = [
  { 
    name: "Manajemen Logistik & Kuliner Lapangan", 
    level: 95, 
    category: "Keahlian Teknis",
    description: "Memiliki keterampilan khusus dalam mengolah bahan makanan di alam terbuka, termasuk teknik memasak nasi menggunakan dandang di tengah kondisi cuaca ekstrem seperti angin kencang dan hujan."
  },
  { 
    name: "Shelter & Camp Management", 
    level: 90, 
    category: "Keahlian Teknis",
    description: "Ahli dalam mendirikan berbagai jenis tenda, mulai dari tenda prisma tradisional hingga tenda dome modern, dengan memperhatikan keamanan dan kenyamanan lokasi perkemahan."
  },
  { 
    name: "Packing & Weight Distribution", 
    level: 95, 
    category: "Keahlian Teknis",
    description: "Mampu melakukan penataan perlengkapan (packing) di dalam carrier secara sistematis sesuai urutan prioritas dan distribusi berat untuk menjaga keseimbangan tubuh saat pendakian."
  },
  { name: "Navigasi Darat", level: 85, category: "Pengetahuan" },
  { name: "First Aid & Medical Support", level: 80, category: "Pengetahuan" },
  { name: "Survival Instinct", level: 75, category: "Pengetahuan" }
];

export const PROJECTS: Project[] = [
  {
    title: "Gunung Penanggungan",
    description: "Pendakian via jalur Jolotundo. Menjelajahi situs-situs bersejarah dan candi-candi kuno sepanjang perjalanan menuju puncak Pawitra.",
    tags: ["Jawa Timur", "1653 MDPL"],
    image: "https://picsum.photos/seed/penanggungan-summit/800/1000"
  },
  {
    title: "Gunung Rinjani",
    description: "Pengalaman mendaki gunung di luar pulau pertama kali. Menjelajahi keindahan Segara Anak dan kegagahan puncak Rinjani di Lombok.",
    tags: ["Lombok", "3726 MDPL"],
    image: "https://picsum.photos/seed/rinjani/800/600"
  },
  {
    title: "Phutuk Siwur",
    description: "Pendakian pertamaku di Mojokerto. Tempat di mana rasa penasaran akan gunung pertama kali terjawab.",
    tags: ["Mojokerto", "Bukit"],
    image: "https://picsum.photos/seed/putusiwur/800/600"
  }
];

export const PLANNED_PROJECTS: PlannedProject[] = [
  {
    title: "Ekspedisi Arjuno-Welirang",
    date: "April 2026",
    location: "Malang, Jawa Timur",
    description: "Persiapan intensif untuk pendakian lintas puncak Arjuno dan Welirang, fokus pada ketahanan fisik dan manajemen logistik tim."
  },
  {
    title: "Canyoneering Coban Anjay",
    date: "Juni 2026",
    location: "Pacet, Mojokerto",
    description: "Kegiatan outdoor eksploratif berupa canyoneering di Coban Anjay, melibatkan teknik rappelling dan navigasi sungai."
  }
];
