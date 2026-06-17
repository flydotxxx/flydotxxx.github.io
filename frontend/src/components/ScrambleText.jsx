import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_\\/[]{}=+*^?#";

/**
 * ScrambleText — decodes from random glyphs to the target text.
 * Re-runs whenever `text` changes (e.g. language toggle).
 */
export const ScrambleText = ({ text, className = "", as: Tag = "span", speed = 1 }) => {
  const [display, setDisplay] = useState(text);
  const rafRef = useRef(null);

  useEffect(() => {
    const target = String(text);
    let frame = 0;
    const queue = target.split("").map((char, i) => ({
      char,
      start: Math.floor(i * 1.5 * (1 / speed)),
      end: Math.floor(i * 1.5 * (1 / speed)) + 8 + Math.floor(Math.random() * 18),
    }));
    const maxEnd = queue.reduce((m, q) => Math.max(m, q.end), 0) + 2;

    const tick = () => {
      let output = "";
      let done = 0;
      for (const q of queue) {
        if (q.char === " ") {
          output += " ";
          done++;
          continue;
        }
        if (frame >= q.end) {
          output += q.char;
          done++;
        } else if (frame >= q.start) {
          output += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setDisplay(output);
      if (done === queue.length || frame > maxEnd) {
        setDisplay(target);
        return;
      }
      frame++;
      rafRef.current = requestAnimationFrame(tick);
    };

    tick();
    return () => cancelAnimationFrame(rafRef.current);
  }, [text, speed]);

  return (
    <Tag className={className} aria-label={text}>
      {display}
    </Tag>
  );
};
