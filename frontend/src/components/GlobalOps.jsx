import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ScrambleText } from "@/components/ScrambleText";

const fmt = (tz, lang) =>
  new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: tz,
  });

const CityClock = ({ city, idx }) => {
  const { lang } = useLanguage();
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const tick = () => setTime(fmt(city.tz, lang).format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [city.tz, lang]);

  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.12 }}
      data-testid={`ops-clock-${idx}`}
      className="group relative border border-white/10 hover:border-white/30 bg-[#0A0A0A] p-7 md:p-8 transition-colors duration-500"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono-label uppercase tracking-[0.18em] text-[10px] text-zinc-500">
          {city.region}
        </span>
        <span className="flex items-center gap-1.5 font-mono-label uppercase tracking-[0.18em] text-[10px] text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {city.live}
        </span>
      </div>

      <div className="font-display font-bold text-white text-2xl md:text-3xl tracking-tight mt-5">
        {city.city}
      </div>

      <div className="font-mono-label text-3xl md:text-4xl text-white tabular-nums mt-3">
        {time}
      </div>

      <div className="mt-5 pt-4 border-t border-white/10">
        <ScrambleText
          text={city.role}
          className="font-mono-label uppercase tracking-[0.18em] text-[10px] text-zinc-500"
        />
      </div>
    </motion.div>
  );
};

export const GlobalOps = () => {
  const { t } = useLanguage();
  const ops = t.ops;

  return (
    <section
      id="operations"
      data-testid="operations-section"
      className="relative z-10 bg-[#050505] pt-32 md:pt-40 pb-24 md:pb-32 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="font-mono-label uppercase tracking-[0.25em] text-xs text-zinc-500">
            — {ops.label}
          </span>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] mt-5">
            {ops.heading}
          </h2>
          <p className="font-body text-zinc-400 text-base md:text-lg leading-relaxed mt-6">
            {ops.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-14">
          {ops.cities.map((city, idx) => (
            <CityClock
              key={city.tz}
              city={{ ...city, live: ops.live }}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
