import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { REVIEWS } from '../data';
import { Star, MessageSquare } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

// Counter component for animated statistics
function AnimatedCounter({ target, suffix = '', duration = 1500 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-serif text-3xl sm:text-4xl md:text-5xl text-luxury-gold font-normal">
      {suffix === '★' ? (count / 10).toFixed(1) : count}
      {suffix !== '★' ? suffix : '★'}
    </span>
  );
}

export default function ReviewsSection() {
  const { t, locale, isRtl } = useTranslation();

  const stats = [
    { target: 145, suffix: '+', label: t('reviews.count.clients') },
    { target: 20, suffix: '+', label: t('reviews.count.awards') },
    { target: 15, suffix: '+', label: t('reviews.count.stylists') },
    { target: 49, suffix: '★', label: locale === 'ar' ? 'تقييم جوجل الممتاز' : 'Google Rating' },
  ];

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-warm-beige/25 border-b border-luxury-gold/10 relative overflow-hidden">
      {/* Aesthetic ambient lighting circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-radial from-luxury-gold/5 to-transparent blur-3xl" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-radial from-rose-gold/5 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Statistics Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 bg-white border border-luxury-gold/15 p-8 md:p-12 mb-24 shadow-xl shadow-luxury-gold/5">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`text-center flex flex-col items-center justify-center space-y-2 last:border-0 ${
                isRtl 
                  ? 'border-l border-luxury-gold/10 last:border-l-0' 
                  : 'border-r border-luxury-gold/10 last:border-r-0'
              }`}
            >
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-charcoal/80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-[10px] tracking-[0.35em] uppercase font-bold text-luxury-gold mb-3 block">
            {t('reviews.tag')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-charcoal font-normal">
            {t('reviews.title')} <br />
            <span className="italic font-light text-luxury-gold">
              {locale === 'ar' ? 'تقييمات متميزة من سيدات الدوحة' : 'Doha’s Glowing Reviews'}
            </span>
          </h2>
          <div className="flex items-center justify-center space-x-1.5 mt-6 text-luxury-gold rtl:space-x-reverse">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={15} fill="currentColor" className="animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />
            ))}
            <span className="text-xs uppercase tracking-[0.15em] font-bold text-charcoal ml-2 rtl:mr-2">
              {locale === 'ar' ? '٤.٩ / ٥.٠ (أكثر من ١٤٥ تقييم)' : '4.9 / 5.0 (145+ Reviews)'}
            </span>
          </div>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mt-6" />
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
              key={review.id}
              className="glass-card p-8 md:p-10 border border-luxury-gold/15 flex flex-col justify-between hover:border-luxury-gold/35 hover:shadow-xl hover:shadow-luxury-gold/5 transition-all duration-300 group"
            >
              <div className="space-y-6">
                {/* Rating & Quote Icon */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-1 text-luxury-gold rtl:space-x-reverse">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <MessageSquare size={18} className="text-luxury-gold/20 group-hover:text-luxury-gold/50 transition-colors" />
                </div>

                {/* Comment */}
                <p className="text-charcoal-light font-serif italic text-sm sm:text-base leading-relaxed tracking-wide">
                  "{t(`rev.${review.id}.comment` as any)}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center justify-between border-t border-luxury-gold/10 pt-6 mt-8">
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-charcoal font-bold">
                    {t(`rev.${review.id}.name` as any)}
                  </h4>
                  <p className="text-[10px] tracking-widest text-luxury-gold uppercase mt-1">
                    {t(`rev.${review.id}.role` as any)}
                  </p>
                </div>
                <span className="text-[10px] tracking-widest text-charcoal-light/40 uppercase">
                  {locale === 'ar' ? 'عميلة موثقة' : 'Verified Client'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
