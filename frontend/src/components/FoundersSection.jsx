import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const FounderCard = ({ member, idx, quoteLabel }) => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
    data-testid={`founder-card-${idx}`}
    className="group relative flex flex-col bg-[#0A0A0A] border border-white/10 hover:border-white/30 transition-colors duration-500 p-7 md:p-10"
  >
    <div className="flex items-start gap-5">
      {/* Monogram */}
      <div className="relative shrink-0 w-16 h-16 md:w-20 md:h-20 border border-white/15 bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center overflow-hidden">
        <span className="font-display font-black text-white text-2xl md:text-3xl">
          {member.name.charAt(0)}
        </span>
        <span className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />
      </div>
      <div className="pt-1">
        <span className="font-mono-label uppercase tracking-[0.2em] text-[10px] text-zinc-600">
          0{idx + 1}
        </span>
        <h3 className="font-display font-bold text-white text-2xl md:text-3xl tracking-tight leading-none mt-1.5">
          {member.name}
        </h3>
        <p className="font-mono-label uppercase tracking-[0.14em] text-[10px] text-zinc-500 mt-2">
          {member.role}
        </p>
      </div>
    </div>

    <p className="font-body text-zinc-400 text-sm md:text-[15px] leading-relaxed mt-8">
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
  </motion.div>
);

export const FoundersSection = () => {
  const { t } = useLanguage();
  const f = t.founders;

  return (
    <section
      id="founders"
      data-testid="founders-section"
      className="relative z-10 bg-[#050505] py-24 md:py-32 lg:py-40 scroll-mt-20"
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
