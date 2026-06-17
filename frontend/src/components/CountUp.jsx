import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const parse = (value) => {
  const m = String(value).match(/^(\D*)(\d[\d.,]*)(.*)$/);
  if (!m) return null;
  return { prefix: m[1], numStr: m[2], suffix: m[3] };
};

const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * CountUp — animates the leading number of a value when scrolled into view.
 * Non-numeric values (e.g. "USA") render as-is.
 */
export const CountUp = ({ value, duration = 1400, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const parsed = parse(value);
    if (!parsed) {
      setDisplay(value);
      return;
    }
    if (!inView) {
      const usesComma = parsed.numStr.includes(",");
      const decimals = (parsed.numStr.split(/[.,]/)[1] || "").length;
      const zero = (0).toFixed(decimals);
      setDisplay(parsed.prefix + (usesComma ? zero.replace(".", ",") : zero) + parsed.suffix);
      return;
    }

    const usesComma = parsed.numStr.includes(",");
    const clean = parsed.numStr.replace(",", ".");
    const target = parseFloat(clean);
    const decimals = (clean.split(".")[1] || "").length;
    const intLen = clean.split(".")[0].length;
    const pad = parsed.numStr.startsWith("0") ? intLen : 0;

    let raf;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const cur = target * easeOutExpo(t);
      let str = cur.toFixed(decimals);
      if (pad) {
        const [ip, dp] = str.split(".");
        str = ip.padStart(pad, "0") + (dp ? "." + dp : "");
      }
      if (usesComma) str = str.replace(".", ",");
      setDisplay(parsed.prefix + str + parsed.suffix);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};
