// 16 slide asli (SVG) — tidak diubah sama sekali.
// `nav: true` = slide yang memiliki menu Home / About / Project / Contact.
// `id`   = target anchor untuk menu.
export const slides = [
  { n: 1,  id: "cover",       nav: false, alt: "Sampul Bidan Portfolio 2020–2026, Bdn. Maylani Lingling Bela, S.Keb" },
  { n: 2,  id: "home",        nav: true,  alt: "Hello, I'm May — profil singkat lulusan DIII, S1 Kebidanan, dan Profesi Bidan" },
  { n: 3,  id: "about",       nav: true,  alt: "Pendidikan: Profesi Bidan, S1 Kebidanan, dan DIII Kebidanan" },
  { n: 4,  id: "skills",      nav: true,  alt: "Soft skill, hard skill, software skill, dan bahasa" },
  { n: 5,  id: "project",     nav: true,  alt: "Achievement: Wisudawan Terbaik I Program Studi DIII Kebidanan" },
  { n: 6,  id: "organisasi",  nav: true,  alt: "Organisasi 2021–2022: Himpunan Mahasiswa Jurusan DIII Kebidanan" },
  { n: 7,  id: "exp-1",       nav: true,  alt: "Experience Internship: RSUD Labuang Baji dan PKM Antang Perumnas" },
  { n: 8,  id: "exp-2",       nav: true,  alt: "Experience Internship: PKM Antang Perumnas dan TPMB Hj. Risma Maros" },
  { n: 9,  id: "exp-3",       nav: true,  alt: "Experience Internship: RSKDIA Sitti Fatima Makassar dan Klinik Pratama Affadeo" },
  { n: 10, id: "exp-4",       nav: true,  alt: "Experience Internship: PKM Kampili Gowa" },
  { n: 11, id: "exp-lainnya", nav: true,  alt: "Experience Lainnya: webinar dan Pelatihan Asuhan Persalinan Normal (APN)" },
  { n: 12, id: "sertifikat-1", nav: true, alt: "Sertifikat: Piagam Penghargaan Kampus Merdeka" },
  { n: 13, id: "sertifikat-2", nav: true, alt: "Sertifikat: Sertifikat Kompetensi dan Surat Tanda Registrasi Bidan Profesi" },
  { n: 14, id: "sertifikat-3", nav: true, alt: "Sertifikat: seminar dan Pelatihan Klinik Asuhan Persalinan Normal" },
  { n: 15, id: "contact",     nav: true,  alt: "Media sosial: TikTok, Instagram, WhatsApp, dan email" },
  { n: 16, id: "terima-kasih", nav: false, alt: "Terima Kasih" },
];

// Area klik menu, dalam koordinat asli slide (viewBox 1440 × 810).
// Pill menu: x 48.14–875.5, y 40.2–98.0. Batas antar item = titik tengah antar label.
export const NAV_BOX = { x: 48.14, y: 40.2, w: 827.4, h: 57.8 };
export const NAV_ITEMS = [
  { label: "Home",    target: "home",    x0: 48.14, x1: 255.5 },
  { label: "About",   target: "about",   x0: 255.5, x1: 452.6 },
  { label: "Project", target: "project", x0: 452.6, x1: 649.7 },
  { label: "Contact", target: "contact", x0: 649.7, x1: 875.54 },
];
