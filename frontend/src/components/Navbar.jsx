import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      data-testid="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-16 md:h-20 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-bold tracking-tight text-lg md:text-xl text-white flex items-center gap-2"
        >
          <span className="inline-block w-2 h-2 bg-white rotate-45" />
          Charlotte
          <span className="text-zinc-500 font-light">LLC</span>
        </button>

        <div className="flex items-center gap-6 md:gap-10">
          <button
            data-testid="nav-brands-link"
            onClick={() => scrollTo("brands")}
            className="hidden sm:block font-mono-label uppercase tracking-[0.18em] text-xs text-zinc-400 hover:text-white transition-colors duration-300"
          >
            {t.nav.brands}
          </button>
          <button
            data-testid="nav-founders-link"
            onClick={() => scrollTo("founders")}
            className="hidden md:block font-mono-label uppercase tracking-[0.18em] text-xs text-zinc-400 hover:text-white transition-colors duration-300"
          >
            {t.nav.founders}
          </button>
          <button
            data-testid="nav-about-link"
            onClick={() => scrollTo("about")}
            className="hidden sm:block font-mono-label uppercase tracking-[0.18em] text-xs text-zinc-400 hover:text-white transition-colors duration-300"
          >
            {t.nav.about}
          </button>

          <div className="flex items-center border border-white/15 rounded-full p-0.5">
            <button
              data-testid="lang-toggle-en"
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full font-mono-label text-xs tracking-wider transition-all duration-300 ${
                lang === "en"
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              data-testid="lang-toggle-fr"
              onClick={() => setLang("fr")}
              className={`px-3 py-1 rounded-full font-mono-label text-xs tracking-wider transition-all duration-300 ${
                lang === "fr"
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              FR
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};
