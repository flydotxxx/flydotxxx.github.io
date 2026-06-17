import { useRef } from "react";

/**
 * MagneticButton — child is pulled toward the cursor while hovered,
 * springing back on leave. Pure transform for performance.
 */
export const MagneticButton = ({ children, strength = 0.35, className = "", ...props }) => {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${mx * strength}px, ${my * strength}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0px, 0px)";
  };

  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
