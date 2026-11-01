import { useEffect, useState } from "react";
import layers from "./layers.json";
import heroImg from "./assets/hero.svg";

const nav = [["home","Home"],["about","About"],["pendidikan","Pendidikan"],["skills","Skills"],["achievement","Achievement"],["organisasi","Organisasi"],["experience","Experience"],["sertifikat","Sertifikat"],["contact","Contact"]];
// grup menu tiap slide (1–16)
const group = ["home","about","pendidikan","skills","achievement","organisasi","experience","experience","experience","experience","experience","sertifikat","sertifikat","sertifikat","contact","contact"];
const alts = ["Sampul Bidan Portfolio 2020–2026","Hello, I'm May","Pendidikan","Soft skill, hard skill, software, dan bahasa","Achievement","Organisasi","Experience Internship","Experience Internship","Experience Internship","Experience Internship","Experience Lainnya","Sertifikat","Sertifikat","Sertifikat","Media sosial","Terima Kasih"];
const base = import.meta.env.BASE_URL;

const VB = { w: 1440, h: 810 };   // ukuran asli slide
// box = [kiri, atas, kanan, bawah] dalam ukuran asli slide
const links = [
  { label: "Instagram @maylanilinglingbela_", href: "https://www.instagram.com/maylanilinglingbela_/", box: [423, 147, 866, 225] },
  { label: "WhatsApp +6289508437622",         href: "https://wa.me/6289508437622",                 box: [305, 698, 578, 765] },
  { label: "TikTok @iiingggggg", href: "https://www.tiktok.com/@iiinggggggg", box: [75, 147, 378, 222] },
  { label: "Email lingbela05@gmail.com", href: "mailto:lingbela05@gmail.com", box: [691, 699, 1024, 759] },
];


export default function App() {
  const [on, setOn] = useState("home");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setOn(e.target.dataset.g)),
      { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll(".slide").forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
  const io = new IntersectionObserver(
    (es) => es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");   // tandai slide ini sudah terlihat
        io.unobserve(e.target);         // animasi jalan sekali saja
      }
    }),
    { threshold: 0.25 }                 // jalan saat 25% slide terlihat
  );
  document.querySelectorAll(".slide").forEach((el) => io.observe(el));
  return () => io.disconnect();
}, []);

  return (
    <>
      <i className="bar" aria-hidden="true" />
      <header className={`nav${open ? " open" : ""}`}>
        <div className="nav-box">
          <button className="burger" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
            <span>{nav.find(([id]) => id === on)?.[1]}</span><i aria-hidden="true" />
          </button>
          <nav id="menu" aria-label="Navigasi utama">
            {nav.map(([id, t]) => <a key={id} href={`#${id}`} className={on === id ? "on" : ""} onClick={() => setOpen(false)}>{t}</a>)}
          </nav>
        </div>
      </header>
      <main className="stage">
        {group.map((g, i) => {
          const first = group.indexOf(g) === i;
          return (
            <section key={i} id={first ? g : `slide-${i + 1}`} data-g={g} role="img" aria-label={alts[i]} className={`slide${i === 0 ? " first" : ""}`}>
              <div className="frame">
                {layers[i + 1].map((l, k) => (
                  <div key={k} className={`layer l-${l.c} d-${l.d}`} style={{ "--i": Math.min(k, 14) }}>
                    {i === 0 && k === 2 ? (
                <img
                  className="hero-photo"
                  src={heroImg}
                  alt="Bdn. Maylani Lingling Bela"
                  decoding="async"
                  draggable="false"
                />
              ) : (
                <img
                  src={`${base}layers/${i + 1}/${l.f}`}
                  alt=""
                  width="1920"
                  height="1080"
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                  draggable="false"
                />
              )}
                  </div>))}
              </div>

              {i === 14 && links.map(({ label, href, box: [x0, y0, x1, y1] }) => (
              <a
                key={href}
                className="hit"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  left: `${(x0 / VB.w) * 100}%`,
                  top: `${(y0 / VB.h) * 100}%`,
                  width: `${((x1 - x0) / VB.w) * 100}%`,
                  height: `${((y1 - y0) / VB.h) * 100}%`,
                }}
              />
            ))}
            </section>);
        })}
      </main>
    </>
  );
}
