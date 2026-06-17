import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { NetworkCanvas } from "@/components/NetworkCanvas";
import { ScrambleText } from "@/components/ScrambleText";
import { MagneticButton } from "@/components/MagneticButton";

const HERO_BG =
  "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGRhcmslMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzgxNjk4MzYyfDA&ixlib=rb-4.1.0&q=85";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { y: 26, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export const Hero = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const scrollDown = () => {
    const el = document.getElementById("explore");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
        <NetworkCanvas />
        <div className="absolute -top-1/3 right-0 w-[60vw] h-[60vw] rounded-full bg-white/[0.04] blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full pt-28 pb-20"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-white/15 rounded-full bg-white/5 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <ScrambleText
            text={t.hero.badge}
            className="font-mono-label uppercase tracking-[0.2em] text-[10px] md:text-xs text-zinc-300"
          />
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display font-black tracking-tight text-white text-5xl sm:text-7xl lg:text-8xl leading-[0.95] max-w-4xl"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          variants={item}
          className="font-body text-zinc-300 text-base md:text-lg leading-relaxed mt-8 max-w-2xl"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-12"
        >
          <MagneticButton
            data-testid="hero-cta-brands"
            onClick={() => navigate("/brands")}
            className="group inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 font-medium text-sm hover:bg-zinc-200"
          >
            {t.hero.ctaBrands}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </MagneticButton>
          <MagneticButton
            data-testid="hero-cta-about"
            strength={0.25}
            onClick={() => navigate("/about")}
            className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 font-medium text-sm hover:bg-white hover:text-black hover:!duration-300"
          >
            {t.hero.ctaAbout}
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        data-testid="hero-scroll-cue"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono-label uppercase tracking-[0.25em] text-[10px] text-zinc-500">
          {t.hero.scroll}
        </span>
        <ArrowDown className="w-4 h-4 text-zinc-500 animate-bounce" />
      </motion.button>
    </section>
  );
};
