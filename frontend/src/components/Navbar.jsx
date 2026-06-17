import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/brands", label: t.nav.brands, testid: "nav-brands-link" },
    { to: "/founders", label: t.nav.founders, testid: "nav-founders-link" },
    { to: "/operations", label: t.nav.operations, testid: "nav-operations-link" },
    { to: "/about", label: t.nav.about, testid: "nav-about-link" },
  ];

  const linkClass = ({ isActive }) =>
    `font-mono-label uppercase tracking-[0.18em] text-xs transition-colors duration-300 ${
      isActive ? "text-white" : "text-zinc-400 hover:text-white"
    }`;

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      data-testid="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 h-16 md:h-20 flex items-center justify-between">
        <Link
          to="/"
          data-testid="nav-logo"
          onClick={() => setOpen(false)}
          className="font-display font-bold tracking-tight text-lg md:text-xl text-white flex items-center gap-2"
        >
          <span className="inline-block w-2 h-2 bg-white rotate-45" />
          Charlotte
          <span className="text-zinc-500 font-light">LLC</span>
        </Link>

        <div className="flex items-center gap-6 md:gap-9">
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} data-testid={l.testid} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center border border-white/15 rounded-full p-0.5">
            <button
              data-testid="lang-toggle-en"
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full font-mono-label text-xs tracking-wider transition-all duration-300 ${
                lang === "en" ? "bg-white text-black" : "text-zinc-400 hover:text-white"
              }`}
            >
              EN
            </button>
            <button
              data-testid="lang-toggle-fr"
              onClick={() => setLang("fr")}
              className={`px-3 py-1 rounded-full font-mono-label text-xs tracking-wider transition-all duration-300 ${
                lang === "fr" ? "bg-white text-black" : "text-zinc-400 hover:text-white"
              }`}
            >
              FR
            </button>
          </div>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-white"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            data-testid="mobile-menu"
            className="md:hidden overflow-hidden border-t border-white/10 bg-black/80 backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {links.map((l, i) => (
                <button
                  key={l.to}
                  data-testid={`mobile-${l.testid}`}
                  onClick={() => {
                    setOpen(false);
                    navigate(l.to);
                  }}
                  className="text-left py-3 border-b border-white/5 font-display text-2xl text-white tracking-tight flex items-center justify-between"
                >
                  {l.label}
                  <span className="font-mono-label text-xs text-zinc-600">
                    0{i + 1}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
