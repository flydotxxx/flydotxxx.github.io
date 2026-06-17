import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { CountUp } from "@/components/CountUp";

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative z-10 bg-[#0A0A0A] border-b border-white/10 pt-32 md:pt-40 pb-24 md:pb-32 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <span className="font-mono-label uppercase tracking-[0.25em] text-xs text-zinc-500">
              — {t.about.label}
            </span>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] mt-5">
              {t.about.heading}
            </h2>
          </motion.div>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 lg:pt-10"
          >
            <div className="space-y-6 max-w-2xl">
              {t.about.body.map((p, i) => (
                <p
                  key={i}
                  className="font-body text-zinc-400 text-base md:text-lg leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-14 border-t border-white/10 pt-10">
              {t.about.stats.map((s, i) => (
                <div key={i} data-testid={`about-stat-${i}`}>
                  <div className="font-display font-black text-white text-3xl md:text-5xl tracking-tight">
                    <CountUp value={s.value} />
                  </div>
                  <div className="font-mono-label uppercase tracking-[0.15em] text-[10px] md:text-xs text-zinc-500 mt-2">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
