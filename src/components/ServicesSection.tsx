import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES, SERVICE_CATEGORIES } from '../data';
import { Clock, Tag, Search, ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import { TRANSLATIONS } from '../translations';

interface ServicesSectionProps {
  onBookClick: (serviceName?: string) => void;
}

export default function ServicesSection({ onBookClick }: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'hair' | 'spa' | 'skincare' | 'nails' | 'vip'>('hair');
  const [searchQuery, setSearchQuery] = useState('');
  const { t, locale, isRtl } = useTranslation();

  const currentCategoryObj = SERVICE_CATEGORIES.find((cat) => cat.id === activeCategory);

  // Filter services by category & search query (matching both EN and AR translations for ultimate UX)
  const filteredServices = SERVICES.filter((service) => {
    const matchesCategory = service.category === activeCategory;
    
    const nameEn = TRANSLATIONS['en'][`service.${service.id}.name` as keyof typeof TRANSLATIONS.en] || '';
    const descEn = TRANSLATIONS['en'][`service.${service.id}.desc` as keyof typeof TRANSLATIONS.en] || '';
    const nameAr = TRANSLATIONS['ar'][`service.${service.id}.name` as keyof typeof TRANSLATIONS.ar] || '';
    const descAr = TRANSLATIONS['ar'][`service.${service.id}.desc` as keyof typeof TRANSLATIONS.ar] || '';

    const query = searchQuery.toLowerCase();
    const matchesSearch =
      service.name.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query) ||
      nameEn.toLowerCase().includes(query) ||
      descEn.toLowerCase().includes(query) ||
      nameAr.includes(query) ||
      descAr.includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-24 lg:py-32 bg-soft-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-[10px] tracking-[0.35em] uppercase font-bold text-luxury-gold mb-3 block">
            {t('services.title')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-charcoal font-normal">
            {locale === 'ar' ? (
              <>
                علاجات تجميلية راقية <br />
                <span className="italic font-light text-luxury-gold">طقوس مخصصة لجمالك الفائق</span>
              </>
            ) : (
              <>
                Exquisite Beauty Services <br />
                <span className="italic font-light text-luxury-gold">Bespoke Rituals for You</span>
              </>
            )}
          </h2>
          <p className="text-charcoal-light/75 text-xs sm:text-sm mt-4 tracking-wider uppercase font-light">
            {locale === 'ar' 
              ? 'كل طقوسنا منسقة بعناية باستخدام أرقى منتجات التجميل الفرنسية والباريسية والإيطالية الفاخرة.'
              : 'Each treatment is curated with premium French, Parisian & Italian luxury products.'}
          </p>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mt-6" />
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSearchQuery('');
              }}
              className={`px-5 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative select-none cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-charcoal text-white'
                  : 'bg-white text-charcoal-light border border-luxury-gold/10 hover:border-luxury-gold/40'
              }`}
            >
              {t(`cat.${cat.id}`)}
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="active-cat-pill"
                  className="absolute inset-0 bg-transparent pointer-events-none"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Search Input Bar */}
        <div className="max-w-md mx-auto mb-16 relative">
          <Search size={16} className={`absolute top-1/2 -translate-y-1/2 text-luxury-gold ${isRtl ? 'right-4' : 'left-4'}`} />
          <input
            type="text"
            placeholder={t('services.search')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full bg-white border border-luxury-gold/15 py-4 text-xs uppercase tracking-wider placeholder-charcoal/40 text-charcoal focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all ${
              isRtl ? 'pr-12 pl-6 text-right' : 'pl-12 pr-6'
            }`}
          />
        </div>

        {/* Category Description Banner */}
        {currentCategoryObj && !searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            key={activeCategory}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-luxury-gold/10 p-6 md:p-10 mb-12"
          >
            <div className="lg:col-span-4 aspect-[4/3] lg:aspect-square overflow-hidden relative shadow-lg">
              <img
                src={currentCategoryObj.image}
                alt={t(`cat.${currentCategoryObj.id}`)}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Sparkles size={16} className="text-luxury-gold" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold font-bold">
                  {locale === 'ar' ? 'القسم المميز' : 'Featured Category'}
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl tracking-wide text-charcoal font-normal">
                {t(`cat.${currentCategoryObj.id}`)}
              </h3>
              <p className="text-charcoal-light/80 text-sm leading-relaxed max-w-2xl">
                {t(`cat.${currentCategoryObj.id}.desc`)}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onBookClick(`${t(`cat.${currentCategoryObj.id}`)}`)}
                  className="text-xs uppercase tracking-[0.2em] font-semibold text-luxury-gold hover:text-luxury-gold-dark inline-flex items-center space-x-2 rtl:space-x-reverse transition-colors duration-300 cursor-pointer"
                >
                  <span>{locale === 'ar' ? 'احجز في هذا القسم' : 'Book this category'}</span>
                  <ArrowRight size={14} className={isRtl ? "rotate-180" : ""} />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Services List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => {
                const serviceName = t(`service.${service.id}.name`);
                const serviceDesc = t(`service.${service.id}.desc`);
                const servicePrice = service.price === 'By Consultation' 
                  ? t('services.consultation') 
                  : (service.price === 'Upon Request' ? t('services.request') : service.price);
                const displayDuration = service.duration?.replace('min', t('services.duration')).replace('Days', t('services.duration.days'));

                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, delay: index * 0.05, ease: [0.25, 1, 0.5, 1] }}
                    key={service.id}
                    className="bg-white border border-luxury-gold/5 p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-luxury-gold/5 hover:border-luxury-gold/25 transition-all duration-300 relative group"
                  >
                    <div>
                      {/* Header: Name and Price */}
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                        <h4 className="font-serif text-lg text-charcoal font-medium group-hover:text-luxury-gold transition-colors duration-300">
                          {serviceName}
                        </h4>
                        {servicePrice && (
                          <span className="font-serif text-xs text-luxury-gold font-medium bg-warm-beige/35 px-4 py-1.5 whitespace-nowrap border border-luxury-gold/10">
                            {servicePrice}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-charcoal-light/75 text-xs sm:text-sm leading-relaxed tracking-wide mb-6">
                        {serviceDesc}
                      </p>
                    </div>

                    {/* Footer: Duration, Category and CTA */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-luxury-gold/10">
                      <div className="flex items-center space-x-4 rtl:space-x-reverse text-[11px] tracking-wider uppercase text-charcoal-light/60 font-medium">
                        {service.duration && (
                          <span className="flex items-center space-x-1.5 rtl:space-x-reverse">
                            <Clock size={13} className="text-luxury-gold" />
                            <span>{displayDuration}</span>
                          </span>
                        )}
                        <span className="flex items-center space-x-1.5 rtl:space-x-reverse">
                          <Tag size={12} className="text-luxury-gold" />
                          <span className="text-[10px] tracking-widest">{t(`cat.${service.category}`)}</span>
                        </span>
                      </div>

                      <button
                        onClick={() => onBookClick(serviceName)}
                        className="bg-charcoal hover:bg-luxury-gold text-white text-[10px] uppercase tracking-[0.25em] px-5 py-3 transition-all duration-300 font-semibold cursor-pointer"
                      >
                        {t('services.book')}
                      </button>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-1 lg:col-span-2 text-center py-16 bg-white border border-luxury-gold/10"
              >
                <p className="text-charcoal-light/70 text-sm tracking-widest uppercase">
                  {locale === 'ar' ? `لم يتم العثور على أي خدمات تطابق "${searchQuery}"` : `No treatments matching "${searchQuery}" found.`}
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-xs uppercase tracking-widest text-luxury-gold hover:underline font-semibold cursor-pointer"
                >
                  {t('Clear search filters')}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
