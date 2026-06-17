import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CountUp } from "@/components/CountUp";

const SNOW_LOGO =
  "https://customer-assets.emergentagent.com/job_snow-performance-1/artifacts/rb1et78f_AttachedFile1.jpg";
const SPY_IMAGE =
  "https://images.pexels.com/photos/37730211/pexels-photo-37730211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

/* Per-brand header visual */
const BrandVisual = ({ brandKey, name }) => {
  if (brandKey === "telecom") {
    return (
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[#141414] to-[#0A0A0A] flex items-center justify-center">
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative flex items-center gap-3">
          <span className="inline-block w-4 h-4 bg-white rotate-45" />
          <span className="font-display font-bold tracking-tight text-white text-2xl">
            Charlotte
          </span>
        </div>
        <span className="absolute bottom-4 left-6 font-mono-label uppercase tracking-[0.2em] text-[10px] text-zinc-500">
          Telecommunications
        </span>
      </div>
    );
  }
  if (brandKey === "snow") {
    return (
      <div className="relative h-44 overflow-hidden bg-white flex items-center justify-center">
        <img
          src={SNOW_LOGO}
          alt={name}
          className="h-32 w-auto object-contain"
        />
      </div>
    );
  }
  // spy.lu
  return (
    <div className="relative h-44 overflow-hidden">
      <img
        src={SPY_IMAGE}
        alt={name}
        className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
      <span className="absolute top-5 left-6 font-display font-bold text-white text-2xl tracking-tight">
        spy.lu
      </span>
    </div>
  );
};

const BrandCard = ({ brand, visitLabel, idx }) => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
    data-testid={`brand-card-${brand.key}`}
    className="group relative flex flex-col bg-[#0A0A0A] border border-white/10 hover:border-white/40 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-20px_rgba(255,255,255,0.12)] transition-all duration-300 ease-out"
  >
    <div className="relative overflow-hidden">
      <span className="absolute top-4 right-5 z-10 font-mono-label text-xs tracking-[0.25em] text-zinc-400">
        {brand.index} / 03
      </span>
      <BrandVisual brandKey={brand.key} name={brand.name} />
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
  </motion.div>
);

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
