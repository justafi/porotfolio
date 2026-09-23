import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// 1. Import komponen VideoBackground yang tadi kita buat
import VideoBackground from "./components/VideoBackground";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!isFinePointer || prefersReducedMotion) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    };

    const handleOver = (e) => {
      const isInteractive = e.target.closest(
        "a, button, [data-cursor-hover]"
      );
      if (ringRef.current) {
        ringRef.current.style.transform = isInteractive
          ? `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%) scale(1.5)`
          : `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%) scale(1)`;
        ringRef.current.style.borderColor = isInteractive
          ? "rgba(47, 93, 80, 0.7)"
          : "rgba(18, 18, 18, 0.45)";
      }
    };

    let rafId;
    const tick = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      rafId = requestAnimationFrame(tick);
    };
    tick();

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(rafId);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

function App() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Animasi layar memudar saat web pertama kali dibuka */}
      <motion.div
        className="fixed inset-0 z-[100] bg-paper pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: revealed ? 0 : 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ pointerEvents: revealed ? "none" : "auto" }}
      />
      
      {/* 2. Komponen VideoBackground diletakkan di sini */}
      <VideoBackground />

      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;