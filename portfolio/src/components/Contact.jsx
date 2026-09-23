import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const socials = [
  { label: "GitHub", href: "https://github.com/justafi", icon: FiGithub },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FiLinkedin },
  { label: "Instagram", href: "https://www.instagram.com/justafii", icon: FiInstagram },
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 md:py-36 px-6 md:px-10">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-16">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl md:text-5xl text-white font-semibold tracking-tight leading-tight"
          >
            Have a project in mind?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-lg text-white"
          >
            Let's work together.
          </motion.p>

          <motion.a
            href="mailto:justafi@gmail.com"
            data-cursor-hover
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="group mt-8 inline-flex items-center gap-2 text-xl text-white font-medium"
          >
            <span className="relative">
              justafi@gmail.com
              <span className="absolute left-0 -bottom-0.5 h-px w-full bg-ink scale-x-0 origin-left transition-transform duration-300 ease-smooth group-hover:scale-x-100" />
            </span>
            <FiArrowUpRight className="transition-transform duration-300 ease-smooth group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.a>

          <div className="mt-10 flex gap-5">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                data-cursor-hover
                className="text-white/70 hover:text-ink transition-colors duration-200"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm text-white mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-line py-2 text-base focus:outline-none focus:border-white transition-colors duration-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-white mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-line py-2 text-base focus:outline-none focus:border-white transition-colors duration-300"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-line py-2 text-base resize-none focus:outline-none focus:border-white transition-colors duration-300"
            />
          </div>

          <button
            type="submit"
            data-cursor-hover
            className="inline-flex items-center gap-2 border text-white border-white
             px-6 py-3 rounded-full font-medium transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:bg-white hover:text-ink"
          >
            {sent ? "Message Sent" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
