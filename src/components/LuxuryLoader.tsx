import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function LuxuryLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="luxury-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-charcoal"
        >
          <div className="relative flex flex-col items-center">
            {/* Elegant glowing golden circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0.1, 0.4, 0.1], scale: [0.95, 1.05, 0.95] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -inset-16 rounded-full bg-radial from-luxury-gold/15 via-transparent to-transparent blur-2xl"
            />

            {/* Glowing gold ring */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="w-24 h-24 rounded-full border border-dashed border-luxury-gold/40 flex items-center justify-center"
            />

            {/* Monogram or text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="font-serif text-3xl tracking-widest text-luxury-gold"
              >
                M
              </motion.span>
            </div>

            {/* Brand Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-8 text-center"
            >
              <h1 className="font-serif text-sm tracking-[0.3em] uppercase text-soft-cream/90">
                Maya Beauty
              </h1>
              <p className="mt-2 text-[10px] tracking-[0.4em] uppercase text-luxury-gold/75">
                Center & Spa • Doha
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
