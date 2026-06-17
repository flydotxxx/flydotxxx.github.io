import { useLanguage } from "@/context/LanguageContext";

/**
 * Ticker — infinite horizontal marquee of status phrases.
 * Pauses on hover. Two identical tracks for a seamless loop.
 */
export const Ticker = () => {
  const { t } = useLanguage();
  const items = t.ticker;

  const Track = ({ ariaHidden }) => (
    <div
      className="flex items-center shrink-0 animate-marquee"
      aria-hidden={ariaHidden}
    >
      {items.map((item, i) => (
        <div key={i} className="flex items-center">
          <span className="font-mono-label uppercase tracking-[0.22em] text-xs text-zinc-400 px-8 whitespace-nowrap">
            {item}
          </span>
          <span className="w-1.5 h-1.5 bg-white/40 rotate-45 shrink-0" />
        </div>
      ))}
    </div>
  );

  return (
    <div
      data-testid="status-ticker"
      className="marquee-track relative overflow-hidden border-y border-white/10 bg-[#070707] py-4 z-10"
    >
      <div className="flex w-max">
        <Track />
        <Track ariaHidden />
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#070707] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#070707] to-transparent" />
    </div>
  );
};
