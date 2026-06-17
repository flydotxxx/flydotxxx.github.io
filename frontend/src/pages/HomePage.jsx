import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { GlobalOps } from "@/components/GlobalOps";

const ExploreHub = () => {
  const { t } = useLanguage();
  return (
    <section
      id="explore"
      data-testid="explore-hub"
      className="relative z-10 bg-[#050505] py-24 md:py-32 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono-label uppercase tracking-[0.25em] text-xs text-zinc-500">
            — {t.home.exploreLabel}
          </span>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] mt-5 max-w-2xl">
            {t.home.exploreHeading}
          </h2>
        </motion.div>

        <div className="mt-14 border-t border-white/10">
          {t.home.links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              data-testid={`hub-link-${l.to}`}
              className="group flex items-center justify-between gap-6 py-7 md:py-9 border-b border-white/10 transition-colors duration-300 hover:px-4 md:hover:px-6"
            >
              <div className="flex items-baseline gap-5 md:gap-10 min-w-0">
                <span className="font-mono-label text-xs text-zinc-600 shrink-0">
                  0{i + 1}
                </span>
                <span className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl tracking-tight truncate group-hover:translate-x-1 transition-transform duration-300">
                  {l.label}
                </span>
              </div>
              <div className="flex items-center gap-6 shrink-0">
                <span className="hidden lg:block font-body text-sm text-zinc-500 text-right max-w-xs">
                  {l.desc}
                </span>
                <ArrowUpRight className="w-6 h-6 text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <ExploreHub />
      <GlobalOps />
    </>
  );
}
