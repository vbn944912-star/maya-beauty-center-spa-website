import { motion } from 'motion/react';
import { ABOUT_SIDE_IMAGE, CONTACT_INFO } from '../data';
import { Check } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function About() {
  const { t, locale, isRtl } = useTranslation();

  const values = [
    locale === 'ar' ? 'خبراء تجميل محترفون مدربون عالمياً' : 'Professional beauty specialists',
    locale === 'ar' ? 'تجربة سبا فاخرة فئة خمس نجوم' : 'Five-star luxury spa experience',
    locale === 'ar' ? 'محيط باعث على الراحة والاسترخاء التام' : 'Tranquil & serene environment',
    locale === 'ar' ? 'خدمة عملاء راقية واستثنائية' : 'Exceptional customer care',
    locale === 'ar' ? 'أفخم العلامات التجارية ومنتجات التجميل' : 'Premium luxury beauty products',
    locale === 'ar' ? 'دقة متناهية واهتمام بالغ بأدق التفاصيل' : 'Meticulous attention to detail',
    locale === 'ar' ? 'أجواء دافئة مريحة وخصوصية تامة للضيوف' : 'Private & comfortable atmosphere',
    locale === 'ar' ? 'علاجات مخصصة بالكامل تناسب كل ضيفة' : 'Bespoke personalized treatments',
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-soft-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Image composition on left */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
              <img
                src={ABOUT_SIDE_IMAGE}
                alt="Maya Spa Treatment"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none transition-transform duration-[4000ms] hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-luxury-gold/5 mix-blend-multiply" />
            </div>

            {/* Accent gold card overlay */}
            <div className={`absolute -bottom-8 bg-charcoal text-white p-8 hidden md:block max-w-[280px] ${
              isRtl ? '-left-8' : '-right-8'
            }`}>
              <span className="font-serif text-3xl text-luxury-gold block mb-2">
                {locale === 'ar' ? 'منذ ٢٠١٨' : 'Since 2018'}
              </span>
              <p className="text-[11px] tracking-wider uppercase text-soft-cream/75 leading-relaxed">
                {locale === 'ar' 
                  ? 'نعيد صياغة الفخامة والجمال الخالد في قلب الدوحة.' 
                  : 'Defining luxury and timeless elegance in the heart of Doha.'}
              </p>
            </div>
          </motion.div>

          {/* Story telling on right */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-[11px] tracking-[0.3em] uppercase font-semibold text-luxury-gold mb-3 block">
              {t('about.tag')}
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl tracking-tight text-charcoal leading-tight mb-8 font-normal">
              {locale === 'ar' ? (
                <>
                  ملاذ الدوحة الفاخر <br />
                  <span className="italic font-light text-luxury-gold">حيث يلتقي الجمال بالكمال والاحترافية</span>
                </>
              ) : (
                <>
                  Doha’s Luxury Sanctuary <br />
                  <span className="italic font-light text-luxury-gold">Where Beauty Meets Perfection</span>
                </>
              )}
            </h2>

            <p className="text-charcoal-light/90 text-sm sm:text-base leading-relaxed tracking-wide mb-6">
              {t('about.p1')}
            </p>

            <p className="text-charcoal-light/80 text-sm leading-relaxed tracking-wide mb-10">
              {t('about.p2')}
            </p>

            {/* Luxury Checkmark grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-luxury-gold/20 pt-8">
              {values.map((val) => (
                <div key={val} className="flex items-center space-x-3 rtl:space-x-reverse group">
                  <div className="w-5 h-5 rounded-full bg-luxury-gold/10 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-white transition-all duration-300 shrink-0">
                    <Check size={11} className="stroke-[3]" />
                  </div>
                  <span className="text-xs tracking-wider text-charcoal font-medium">
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
