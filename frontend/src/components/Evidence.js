import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, ZoomIn, ShieldCheck, Sparkles } from "lucide-react";

export const Lightbox = ({ item, onClose }) => {
  const closeRef = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030712]/95 p-4 sm:p-8 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt || "Screenshot enlarged view"}
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      data-testid="lightbox-overlay"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        data-testid="lightbox-close-button"
        aria-label="Close enlarged screenshot"
        className="absolute right-4 top-4 rounded-full border border-slate-700 bg-[#0b0f19] p-3 text-slate-300 transition-colors hover:border-electric hover:text-white"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>
      <motion.img
        src={item.src}
        alt={item.alt}
        onClick={(e) => e.stopPropagation()}
        initial={reduce ? false : { scale: 0.94, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="max-h-[85vh] max-w-full rounded-xl border border-slate-700/80 object-contain shadow-[0_0_60px_rgba(37,99,235,0.25)]"
        data-testid="lightbox-image"
      />
    </motion.div>,
    document.body
  );
};

export const EvidenceCard = ({ item, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <figure
        className="card-premium card-hover group relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:border-electric/70 hover:shadow-[0_0_35px_rgba(37,99,235,0.22)]"
        data-testid={`evidence-card-${item.id}`}
      >
        {/* Animated Top Accent Shimmer Line */}
        <div
          className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
          aria-hidden="true"
        />

        <button
          type="button"
          onClick={() => setOpen(true)}
          data-testid={`evidence-open-${item.id}`}
          aria-label={`Enlarge screenshot: ${item.alt}`}
          className="relative block overflow-hidden border-b border-slate-800/80 bg-[#090e1c] text-left group/btn"
        >
          {/* Screenshot Image */}
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.025]"
          />

          {/* High-tech Scanning Light Sweep Animation */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-24 -skew-x-12 bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent animate-scanline"
            aria-hidden="true"
          />

          {/* Verified Live Evidence Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-[#050a16]/90 px-2.5 py-1 text-[10px] font-mono font-medium text-emerald-300 backdrop-blur shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <ShieldCheck className="h-3 w-3 text-emerald-400" />
            <span>VERIFIED DASHBOARD</span>
          </div>

          {/* Click to Enlarge Hover Pill */}
          <span
            className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-[#030712]/90 px-3 py-1.5 text-[11px] font-semibold text-electric-bright opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1 shadow-lg"
            aria-hidden="true"
          >
            <ZoomIn className="h-3.5 w-3.5 text-cyan-400" />
            Enlarge Evidence
          </span>
        </button>

        <figcaption className="flex flex-1 flex-col p-5 sm:p-6">{children}</figcaption>
      </figure>
      <AnimatePresence>{open && <Lightbox item={item} onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
};

export const EvidenceMetrics = ({ metrics }) => (
  <div className="grid grid-cols-2 gap-2.5">
    {metrics.map((m) => (
      <div
        key={m.label}
        className="rounded-xl border border-slate-800 bg-[#0d1424]/70 px-3.5 py-2.5 transition-all duration-300 hover:border-electric/50"
      >
        <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500 font-mono">{m.label}</p>
        <p className="mt-1 font-mono text-base sm:text-lg font-bold text-white tracking-tight">{m.value}</p>
        {m.prev && <p className="mt-0.5 text-[11px] text-slate-400">vs {m.prev} previously</p>}
      </div>
    ))}
  </div>
);
