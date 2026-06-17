import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const PHOTOS = {
  Pierre: {
    src: "https://customer-assets.emergentagent.com/job_snow-performance-1/artifacts/59r0avhq_image.png",
    position: "center 15%",
  },
  Emeric: {
    src: "https://customer-assets.emergentagent.com/job_snow-performance-1/artifacts/7kograrh_image.png",
    position: "center 25%",
  },
};

const FounderCard = ({ member, idx, quoteLabel }) => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
    data-testid={`founder-card-${idx}`}
    className="group relative flex flex-col bg-[#0A0A0A] border border-white/10 hover:border-white/30 transition-colors duration-500"
  >
    <div className="relative h-80 sm:h-96 overflow-hidden bg-[#0A0A0A]">
      <img
        src={PHOTOS[member.name].src}
        alt={member.name}
        style={{ objectPosition: PHOTOS[member.name].position }}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent" />
      <span className="absolute top-5 left-6 font-mono-label text-xs tracking-[0.25em] text-zinc-300">
        0{idx + 1} / 02
      </span>
      <div className="absolute bottom-5 left-6 right-6">
        <h3 className="font-display font-black text-white text-3xl md:text-4xl tracking-tight leading-none">
          {member.name}
        </h3>
        <p className="font-mono-label uppercase tracking-[0.14em] text-[10px] text-zinc-300 mt-2.5">
          {member.role}
        </p>
      </div>
    </div>

    <div className="flex flex-col flex-1 p-7 md:p-9">
      <p className="font-body text-zinc-400 text-sm md:text-[15px] leading-relaxed">
        {member.bio}
      </p>

      <div className="mt-8 pt-7 border-t border-white/10">
        <div className="flex items-center gap-2 mb-4">
          <Quote className="w-3.5 h-3.5 text-zinc-600" />
          <span className="font-mono-label uppercase tracking-[0.2em] text-[10px] text-zinc-600">
            {quoteLabel}
          </span>
        </div>
        <blockquote className="font-display font-light text-white text-lg md:text-xl leading-snug tracking-tight">
          “{member.quote}”
        </blockquote>
        <p className="font-mono-label uppercase tracking-[0.18em] text-[10px] text-zinc-500 mt-5">
          — {member.name}
        </p>
      </div>
    </div>
  </motion.div>
);

export const FoundersSection = () => {
  const { t } = useLanguage();
  const f = t.founders;

  return (
    <section
      id="founders"
      data-testid="founders-section"
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
            — {f.label}
          </span>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] mt-5">
            {f.heading}
          </h2>
          <p className="font-body text-zinc-400 text-base md:text-lg leading-relaxed mt-6">
            {f.subheading}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-16">
          {f.members.map((member, idx) => (
            <FounderCard
              key={member.name}
              member={member}
              idx={idx}
              quoteLabel={f.quoteLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
