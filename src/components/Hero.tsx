import { motion } from 'motion/react';
import { HERO_IMAGE, CONTACT_INFO } from '../data';
import { Star, ChevronDown, Calendar, Phone } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {
  const { t, locale } = useTranslation();

  const handleScrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      const offset = 80;
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal"
    >
      {/* Immersive Video background with fallback poster */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-charcoal">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105 transition-transform duration-[10000ms] select-none opacity-80"
          poster={HERO_IMAGE}
        >
          {/* Primary client uploaded source */}
          <source src="/assets/video.mp4" type="video/mp4" />
          <source src="/assets/maya_promo.mp4" type="video/mp4" />
          {/* Elite public luxury wellness video stream as high-performance backup */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-massage-therapist-applying-oil-to-a-womans-back-42216-large.mp4" type="video/mp4" />
        </video>
        {/* Deep luxurious dark vignette overlays to ensure copy legibility */}
        <div className="absolute inset-0 bg-black/45 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/50 z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center">
        {/* Highlight Badge */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-soft-cream/10 backdrop-blur-md border border-white/10 px-4 py-2 mb-8"
        >
          <div className="flex items-center text-luxury-gold">
            <Star size={14} fill="currentColor" />
            <span className="mx-1 text-xs font-semibold tracking-wider text-soft-cream">4.9/5</span>
          </div>
          <div className="w-[1px] h-3 bg-white/20" />
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-white/95">
            {t('hero.rating')}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
          className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] mb-6 font-normal max-w-4xl"
        >
          {t('hero.title1')} <br />
          <span className="italic font-light text-luxury-gold">{t('hero.title2')}</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35 }}
          className="text-[11px] sm:text-xs md:text-sm tracking-[0.25em] uppercase font-light text-white/80 max-w-3xl leading-relaxed mb-10"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            id="hero-book-btn"
            onClick={onBookClick}
            className="w-full sm:w-auto bg-luxury-gold hover:bg-luxury-gold-dark text-white text-xs uppercase tracking-[0.25em] px-10 py-5 font-semibold transition-all duration-300 shadow-xl shadow-luxury-gold/15 hover:-translate-y-0.5 flex items-center justify-center space-x-2 rtl:space-x-reverse cursor-pointer"
          >
            <Calendar size={14} />
            <span>{t('hero.book')}</span>
          </button>
          
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/20 text-xs uppercase tracking-[0.25em] px-10 py-5 font-semibold transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center space-x-2 rtl:space-x-reverse backdrop-blur-sm"
          >
            <Phone size={14} className="text-luxury-gold" />
            <span>{t('nav.call')}</span>
          </a>
        </motion.div>
      </div>

      {/* Floating Indicators / Scroll Down Indicator */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
        <motion.button
          onClick={handleScrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1, duration: 1 },
            y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" }
          }}
          className="text-white/60 hover:text-luxury-gold transition-colors flex flex-col items-center space-y-2 text-[9px] uppercase tracking-[0.3em] cursor-pointer"
          aria-label="Scroll down"
        >
          <span>{t('hero.explore')}</span>
          <ChevronDown size={14} className="text-luxury-gold" />
        </motion.button>
      </div>
    </section>
  );
}
