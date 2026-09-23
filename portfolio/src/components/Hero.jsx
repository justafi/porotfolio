import { FiArrowRight } from "react-icons/fi";
import Reveal from "./reveal"; 

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 md:px-10 pt-24 pb-16 relative z-10"
    >
      <div className="mx-auto max-w-6xl w-full">
        
        <Reveal>
          {/* Tambahkan drop-shadow-glow agar teks memiliki bayangan hitam pekat di sekelilingnya */}
          <p className="text-sm md:text-base text-white mb-6 tracking-tight drop-shadow-glow">
            THIS IS ME.
          </p>
        </Reveal>

        <Reveal>
          {/* Gunakan text-ink (kuning) dan drop-shadow-neon agar nama menyala */}
          <h1 className="font-display font-semibold text-[13vw] leading-[0.95] tracking-tightest md:text-[6.5rem] lg:text-[7.5rem] text-ink drop-shadow-neon">
            Hi, I'm Hoef.
          </h1>
        </Reveal>

        <Reveal>
          {/* Tambahkan drop-shadow-glow */}
          <p className="mt-8 max-w-xl text-lg md:text-xl text-white leading-relaxed drop-shadow-glow font-medium">
            I'm an Information Systems student interested in Data.
          </p>
        </Reveal>

        {/* ... (kode tombol tetap sama) ... */}
        
      </div>
    </section>
  );
}

export default Hero;