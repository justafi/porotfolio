import Reveal from "./reveal"; // Pastikan komponen Reveal.jsx yang tadi sudah ada

const info = [
  { label: "Location", value: "Indonesia" },
  { label: "Education", value: "Information Systems" },
  { label: "Interests", value: "Web Development, UI/UX, Technology" },
];

function About() {
  return (
    <section id="about" className="py-28 md:py-36 px-6 md:px-10 relative z-10">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 md:gap-20">
        
        {/* Kolom Kiri */}
        <div>
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-white">
              About Me
            </h2>
          </Reveal>

          <div className="mt-6 space-y-4 max-w-md">
            <Reveal>
              <p className="text-white leading-relaxed">
                I'm an Information Systems student who enjoys exploring web
                development, UI/UX design, and application development.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-white leading-relaxed">
                I like turning ideas into simple, functional, and intuitive
                digital experiences.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Kolom Kanan */}
        <dl className="space-y-6 self-start">
          {info.map((entry) => (
            <Reveal key={entry.label}>
              <div className="border-t border-line pt-4">
                <dt className="text-sm text-white">{entry.label}</dt>
                <dd className="mt-1 text-lg font-medium text-white">{entry.value}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
        
      </div>
    </section>
  );
}

export default About;