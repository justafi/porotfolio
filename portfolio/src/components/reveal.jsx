import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function Reveal({ children }) {
  const ref = useRef(null);
  
  // amount: 0.8 artinya animasi BARU AKAN terpicu kalau elemen sudah 80% masuk layar
  const isInView = useInView(ref, { amount: 0.8, once: false });
  
  // Default saat baru di-load: elemen bersembunyi 50px di bawah
  const [hiddenY, setHiddenY] = useState(50);

  useEffect(() => {
    // Logika Pintar Arah Scroll:
    // Cek posisi elemen saat dia menghilang dari pandangan (isInView = false)
    if (!isInView && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Jika elemen keluar melewati batas ATAS layar, maka dia bersiap di atas (-50)
      // Jadi kalau kita scroll ke atas lagi, dia akan meluncur turun dari atas.
      if (rect.top < windowHeight / 2) {
        setHiddenY(-50);
      } 
      // Jika elemen keluar melewati batas BAWAH layar, dia bersiap di bawah (50)
      else {
        setHiddenY(50);
      }
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: hiddenY }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : hiddenY,
      }}
      transition={{ 
        duration: 2.5, // Durasi 2 detik yang sangat perlahan
        ease: [0.22, 1, 0.36, 1] // Easing (kurva kecepatan) yang super smooth
      }}
    >
      {children}
    </motion.div>
  );
}