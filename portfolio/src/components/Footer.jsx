import { FiArrowUp, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const socials = [
  { label: "GitHub", href: "https://github.com", icon: FiGithub },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FiLinkedin },
  { label: "Instagram", href: "https://instagram.com", icon: FiInstagram },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-line px-6 md:px-10 py-10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg text-white font-semibold">R3plic4</p>
          <p className="text-sm text-white mt-1">© 2026 Rafi</p>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-5">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                data-cursor-hover
                className="text-white/70 hover:text-ink hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            data-cursor-hover
            aria-label="Back to top"
            className="flex items-center gap-2 text-sm text-white/70 hover:text-ink transition-colors duration-200"
          >
            Back to top
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
