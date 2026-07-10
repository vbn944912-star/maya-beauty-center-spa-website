import { motion } from 'motion/react';
import { HAMMAM_IMAGE, SPA_IMAGE } from '../data';
import { Flower, Sparkles } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

interface SpaExperienceProps {
  onBookClick: () => void;
}

export default function SpaExperience({ onBookClick }: SpaExperienceProps) {
  const { t, locale, isRtl } = useTranslation();

  return (
    <section id="spa-experience" className="bg-charcoal text-white overflow-hidden relative">
      {/* Decorative background subtle glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-luxury-gold/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-rose-gold/5 blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Detailed luxury storytelling text on Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-6 flex flex-col justify-center space-y-8"
          >
            <div className="flex items-center space-x-2 rtl:space-x-reverse text-luxury-gold">
              <Flower size={16} className="stroke-[1.5]" />
              <span className="text-[11px] tracking-[0.35em] uppercase font-bold">
                {t('spa.tag')}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight font-normal">
              {locale === 'ar' ? (
                <>
                  استرخاء. تجديد. <br />
                  <span className="italic font-light text-luxury-gold">حيوية ونشاط فاخر.</span>
                </>
              ) : (
                <>
                  Relax. Refresh. <br />
                  <span className="italic font-light text-luxury-gold">Rejuvenate.</span>
                </>
              )}
            </h2>

            <div className="w-16 h-[1px] bg-luxury-gold" />

            <div className="space-y-6 text-soft-cream/80 text-sm leading-relaxed tracking-wide">
              <p>{t('spa.p1')}</p>
              <p>{t('spa.p2')}</p>
              <p>{t('spa.p3')}</p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto bg-luxury-gold hover:bg-luxury-gold-dark text-white text-xs uppercase tracking-[0.25em] px-10 py-5 font-semibold transition-all duration-300 cursor-pointer"
              >
                {t('spa.book')}
              </button>
              
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-luxury-gold">
                <Sparkles size={14} />
                <span className="text-[10px] tracking-widest uppercase font-semibold">
                  {t('spa.suites')}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Luxury image collage on Right */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative">
            
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              className="col-span-12 md:col-span-10 relative overflow-hidden aspect-[4/3] shadow-2xl z-10"
            >
              <img
                src={SPA_IMAGE}
                alt="Therapeutic Stone Ritual"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none transition-transform duration-[4000ms] hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/10 mix-blend-multiply" />
            </motion.div>

            {/* Sub-overlapping Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
              className={`col-span-8 md:col-span-6 overflow-hidden aspect-square shadow-2xl z-20 border-4 border-charcoal hidden md:block md:absolute md:-bottom-12 ${
                isRtl ? 'md:-left-6' : 'md:-right-6'
              }`}
            >
              <img
                src={HAMMAM_IMAGE}
                alt="Traditional Moroccan Hammam Room"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none"
                loading="lazy"
              />
            </motion.div>

            {/* Minimal gold line art box */}
            <div className={`absolute -top-6 w-32 h-32 border border-luxury-gold/20 hidden md:block ${
              isRtl ? '-right-6' : '-left-6'
            }`} />
          </div>

        </div>
      </div>
    </section>
  );
}
