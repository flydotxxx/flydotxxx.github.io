import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ScrambleText } from "@/components/ScrambleText";
import { CountUp } from "@/components/CountUp";

const IMAGES = {
  telecom:
    "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxmaWJlciUyMG9wdGljJTIwc2VydmVyJTIwbmV0d29ya3xlbnwwfHx8fDE3ODE2OTgzNjJ8MA&ixlib=rb-4.1.0&q=85",
  spy: "https://images.pexels.com/photos/37730211/pexels-photo-37730211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  snow: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwyfHxkYXJrJTIwZGF0YSUyMGNlbnRlciUyMHNlcnZlcnxlbnwwfHx8fDE3ODE2OTgzNjF8MA&ixlib=rb-4.1.0&q=85",
};

const BrandCard = ({ brand, visitLabel, idx }) => {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    const rx = (py - 0.5) * -6;
    const ry = (px - 0.5) * 6;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
  };

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="[transform-style:preserve-3d]"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        data-testid={`brand-card-${brand.key}`}
        className="spotlight-card group relative flex flex-col bg-[#0A0A0A] border border-white/10 hover:border-white/30 transition-[border-color,transform] duration-300 ease-out will-change-transform"
      >
        <div className="relative z-[1] flex flex-col flex-1">
          <div className="relative h-44 overflow-hidden">
            <img
              src={IMAGES[brand.key]}
              alt={brand.name}
              className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
            <ScrambleText
              text={`${brand.index} / 03`}
              className="absolute top-5 left-6 font-mono-label text-xs tracking-[0.25em] text-zinc-300"
            />
          </div>

          <div className="flex flex-col flex-1 p-7 md:p-8">
            <h3 className="font-display font-bold text-white text-xl md:text-2xl tracking-tight leading-snug">
              {brand.name}
            </h3>
            <p className="font-mono-label uppercase tracking-[0.15em] text-[11px] text-zinc-500 mt-2">
              {brand.tagline}
            </p>
            <p className="font-body text-zinc-400 text-sm leading-relaxed mt-5 flex-1">
              {brand.description}
            </p>

            <div className="mt-7 border-t border-white/10 divide-y divide-white/10">
              {brand.stats.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2.5"
                  data-testid={`brand-${brand.key}-stat-${i}`}
                >
                  <span className="font-mono-label uppercase tracking-[0.18em] text-[10px] text-zinc-600">
                    {s.label}
                  </span>
                  <CountUp
                    value={s.value}
                    className="font-mono-label text-xs text-white font-medium tabular-nums"
                  />
                </div>
              ))}
            </div>

            <a
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`visit-${brand.key}-btn`}
              className="group/btn mt-7 inline-flex items-center justify-between border border-white/20 text-white px-5 py-3.5 hover:bg-white hover:text-black transition-colors duration-300"
            >
              <span className="font-mono-label uppercase tracking-[0.18em] text-xs">
                {visitLabel} {brand.domainLabel}
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const BrandsSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="brands"
      data-testid="brands-section"
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
            — {t.brands.label}
          </span>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] mt-5">
            {t.brands.heading}
          </h2>
          <p className="font-body text-zinc-400 text-base md:text-lg leading-relaxed mt-6">
            {t.brands.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {t.brands.items.map((brand, idx) => (
            <BrandCard
              key={brand.key}
              brand={brand}
              visitLabel={t.brands.visit}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
