import skills from "../data/skills";
import Reveal from "./reveal";

function Stack() {
  return (
    <section id="stack" className="py-28 md:py-36 px-6 md:px-10 relative z-10">
      <div className="mx-auto max-w-6xl">
        
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-white">
            My Stack
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-14">
          {skills.map((group) => (
            <div key={group.category}>
              
              <Reveal>
                <p className="text-sm text-white mb-5">{group.category}</p>
              </Reveal>

              <ul className="space-y-3">
                {group.items.map(({ name, icon: Icon }) => (
                  <Reveal key={name}>
                    <li className="group flex items-center gap-3 py-1.5 cursor-default">
                      <Icon
                        className="text-xl text-white/80 transition-transform duration-300 ease-smooth group-hover:-translate-y-1"
                        aria-hidden="true"
                      />
                      <span className="text-base transition-opacity duration-300 group-hover:opacity-70 text-white">
                        {name}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Stack;