import { motion } from "framer-motion";
import experience from "../data/experience";
import Reveal from "./reveal"; // 1. Jangan lupa import Reveal

function Experience() {
  return (
    <section id="experience" className="py-28 md:py-36 px-6 md:px-10 relative z-10">
      <div className="mx-auto max-w-6xl">
        
        {/* 2. Judul dibungkus Reveal */}
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-white">
            My Experience
          </h2>
        </Reveal>

        <div className="relative max-w-2xl">
          {/* Garis vertikal dibiarkan pakai motion agar efek "tumbuh" (scaleY) tetap ada, 
              tapi amount-nya disamakan 0.8 agar serempak dengan Reveal */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[5px] top-2 bottom-2 w-px bg-line"
          />

          {/* 3. Ul standar, stagger dihapus karena Reveal sudah mandiri otomatis */}
          <ul className="space-y-12">
            {experience.map((entry) => (
              
              /* 4. Setiap isi pengalaman dibungkus Reveal */
              <Reveal key={entry.id}>
                <li className="relative pl-10">
                  <span className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full bg-accent border-2 border-paper" />
                  <p className="text-sm text-white mb-1">{entry.year}</p>
                  <h3 className="text-lg font-medium text-white">{entry.title}</h3>
                  <p className="mt-1 text-white leading-relaxed max-w-lg">
                    {entry.description}
                  </p>
                </li>
              </Reveal>
              
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;