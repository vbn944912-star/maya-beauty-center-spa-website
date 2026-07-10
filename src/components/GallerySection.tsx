import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { t, locale, isRtl } = useTranslation();

  const categories = [
    { id: 'all', label: t('gallery.cat.all') },
    { id: 'hair', label: t('gallery.cat.hair') },
    { id: 'spa', label: t('gallery.cat.spa') },
    { id: 'facials', label: t('gallery.cat.facials') },
    { id: 'nails', label: t('gallery.cat.nails') },
    { id: 'interior', label: t('gallery.cat.interior') },
    { id: 'bridal', label: t('gallery.cat.bridal') },
  ];

  // Filter items by category
  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    const originalIndex = GALLERY_ITEMS.findIndex(x => x.id === item.id);
    setLightboxIndex(originalIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev! - 1));
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev! + 1));
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-soft-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-[10px] tracking-[0.35em] uppercase font-bold text-luxury-gold mb-3 block">
            {t('gallery.tag')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-charcoal font-normal">
            {t('gallery.title')}<br />
            <span className="italic font-light text-luxury-gold">
              {locale === 'ar' ? 'مصممة خصيصاً بروح الأناقة الفرنسية الفاخرة' : 'Crafted with Parisian Elegance'}
            </span>
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mt-6" />
        </div>

        {/* Gallery Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2.5 text-[11px] uppercase tracking-widest font-semibold transition-all duration-300 border cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-charcoal text-white border-charcoal'
                  : 'bg-white text-charcoal border-luxury-gold/10 hover:border-luxury-gold/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Masonry with Framer Motion Layout animations */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                key={item.id}
                onClick={() => openLightbox(item)}
                className="group relative aspect-[3/4] overflow-hidden bg-charcoal border border-luxury-gold/5 shadow-md cursor-pointer select-none"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={t(`gallery.item.${item.id}`)}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-108"
                  loading="lazy"
                />

                {/* Glassmorphic card overlay details on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <div className="absolute inset-x-4 bottom-4 glass-card p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20 flex justify-between items-center border border-white/40">
                  <div>
                    <span className="text-[9px] tracking-widest uppercase text-luxury-gold font-bold block mb-1">
                      {t(`gallery.cat.${item.category}`)}
                    </span>
                    <h4 className="font-serif text-sm text-charcoal font-medium">
                      {t(`gallery.item.${item.id}`)}
                    </h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-luxury-gold text-white flex items-center justify-center shrink-0">
                    <Maximize2 size={12} />
                  </div>
                </div>

                {/* Subtle top indicator */}
                <div className={`absolute top-4 bg-charcoal/65 backdrop-blur-sm px-2 py-1 border border-white/10 text-[8px] uppercase tracking-widest text-soft-cream/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isRtl ? 'left-4' : 'right-4'
                }`}>
                  {locale === 'ar' ? 'تلوين وتكبير' : 'Enlarge'}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4 md:p-10 select-none"
            onClick={closeLightbox}
          >
            {/* Top Close Bar */}
            <div className="absolute top-0 inset-x-0 p-6 flex justify-between items-center z-50">
              <div className={`flex flex-col ${isRtl ? 'text-right' : 'text-left'}`}>
                <span className="text-luxury-gold text-xs uppercase tracking-[0.25em] font-bold">
                  {t(`gallery.cat.${GALLERY_ITEMS[lightboxIndex].category}`)}
                </span>
                <span className="font-serif text-white text-lg font-medium">
                  {t(`gallery.item.${GALLERY_ITEMS[lightboxIndex].id}`)}
                </span>
              </div>
              <button
                onClick={closeLightbox}
                className="w-12 h-12 rounded-full border border-white/20 text-white hover:text-luxury-gold hover:border-luxury-gold flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Left Nav Button */}
            <button
              onClick={handlePrev}
              className={`absolute w-12 h-12 rounded-full border border-white/10 text-white hover:text-luxury-gold hover:border-luxury-gold flex items-center justify-center transition-all bg-charcoal/40 backdrop-blur-sm z-30 cursor-pointer ${
                isRtl ? 'right-6 rotate-180' : 'left-6'
              }`}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Main Lightbox Image Frame */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-5xl max-h-[75vh] w-full h-full flex items-center justify-center pointer-events-none"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_ITEMS[lightboxIndex].image}
                alt={t(`gallery.item.${GALLERY_ITEMS[lightboxIndex].id}`)}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-full object-contain pointer-events-auto shadow-2xl border border-white/10"
              />
            </motion.div>

            {/* Right Nav Button */}
            <button
              onClick={handleNext}
              className={`absolute w-12 h-12 rounded-full border border-white/10 text-white hover:text-luxury-gold hover:border-luxury-gold flex items-center justify-center transition-all bg-charcoal/40 backdrop-blur-sm z-30 cursor-pointer ${
                isRtl ? 'left-6 rotate-180' : 'right-6'
              }`}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Bottom Counter Bar */}
            <div className="absolute bottom-6 text-center text-white/50 text-xs tracking-widest font-mono z-30">
              {lightboxIndex + 1} / {GALLERY_ITEMS.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
