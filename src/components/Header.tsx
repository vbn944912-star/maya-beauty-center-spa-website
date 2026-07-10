import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import { useTranslation } from '../context/LanguageContext';

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, setLocale, t, isRtl } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.spa'), href: '#spa-experience' },
    { label: t('nav.gallery'), href: '#gallery' },
    { label: t('nav.reviews'), href: '#reviews' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        id="luxury-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-soft-cream/95 backdrop-blur-md shadow-md py-4 border-b border-luxury-gold/10'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo brand */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex flex-col items-start select-none group"
          >
            <span className={`font-serif text-xl lg:text-2xl tracking-[0.25em] font-medium transition-colors duration-300 ${isScrolled ? 'text-charcoal' : 'text-white'}`}>
              MAYA
            </span>
            <span className={`text-[9px] tracking-[0.35em] uppercase font-light transition-colors duration-300 ${isScrolled ? 'text-luxury-gold' : 'text-luxury-gold/90'}`}>
              {locale === 'ar' ? 'مركز التجميل والسبا' : 'Beauty Center & Spa'}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`text-xs uppercase tracking-[0.2em] transition-colors duration-300 relative py-1 group ${
                  isScrolled ? 'text-charcoal-light hover:text-luxury-gold' : 'text-white/90 hover:text-luxury-gold'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 rtl:space-x-reverse">
            {/* Language Switcher */}
            <button
              onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}
              className={`flex items-center space-x-1.5 text-xs uppercase tracking-[0.25em] transition-all duration-300 font-semibold px-2 py-1 rounded border border-transparent hover:border-luxury-gold/20 hover:bg-luxury-gold/5 cursor-pointer ${
                isScrolled ? 'text-charcoal hover:text-luxury-gold' : 'text-white hover:text-luxury-gold'
              }`}
            >
              <Globe size={13} className="text-luxury-gold" />
              <span>{locale === 'en' ? 'العربية' : 'English'}</span>
            </button>

            <div className="w-[1px] h-4 bg-luxury-gold/20" />

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className={`flex items-center space-x-2 text-xs uppercase tracking-wider transition-colors duration-300 ${
                isScrolled ? 'text-charcoal hover:text-luxury-gold' : 'text-white hover:text-luxury-gold'
              }`}
            >
              <Phone size={14} className="text-luxury-gold" />
              <span>{t('nav.call')}</span>
            </a>
            <button
              id="header-book-btn"
              onClick={onBookClick}
              className="bg-luxury-gold hover:bg-luxury-gold-dark text-white text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-none transition-all duration-300 hover:shadow-lg shadow-luxury-gold/10 font-medium cursor-pointer"
            >
              {t('nav.book')}
            </button>
          </div>

          {/* Mobile Hamburger & Language Selector */}
          <div className="flex items-center space-x-3 lg:hidden rtl:space-x-reverse">
            <button
              onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}
              className={`text-xs font-semibold px-2.5 py-1.5 rounded transition-all ${
                isScrolled ? 'text-charcoal-light bg-charcoal/5' : 'text-white bg-white/10'
              }`}
              aria-label="Switch language"
            >
              {locale === 'en' ? 'عربي' : 'EN'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-1.5 focus:outline-none rounded-sm transition-colors duration-300 ${
                isScrolled ? 'text-charcoal hover:text-luxury-gold' : 'text-white hover:text-luxury-gold'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-35 bg-charcoal/45 backdrop-blur-md lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: isRtl ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRtl ? '-100%' : '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`absolute top-0 bottom-0 w-full max-w-xs bg-soft-cream p-8 flex flex-col justify-between ${
                isRtl ? 'left-0' : 'right-0'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex justify-between items-center pb-8 border-b border-luxury-gold/15">
                  <div className="flex flex-col">
                    <span className="font-serif text-xl tracking-[0.2em] text-charcoal font-medium">MAYA</span>
                    <span className="text-[8px] tracking-[0.3em] text-luxury-gold uppercase font-light">
                      {locale === 'ar' ? 'مركز التجميل والسبا' : 'Beauty Center & Spa'}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1 text-charcoal hover:text-luxury-gold"
                  >
                    <X size={22} />
                  </button>
                </div>

                <nav className="flex flex-col space-y-6 mt-10">
                  {navItems.map((item, index) => (
                    <motion.a
                      initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className="text-sm uppercase tracking-[0.25em] text-charcoal hover:text-luxury-gold transition-colors py-1 font-medium flex items-center"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full bg-luxury-gold opacity-60 ${isRtl ? 'ml-3' : 'mr-3'}`} />
                      {item.label}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Drawer footer / contact */}
              <div className="space-y-5 border-t border-luxury-gold/15 pt-8">
                {/* Language switch button inside drawer */}
                <button
                  onClick={() => {
                    setLocale(locale === 'en' ? 'ar' : 'en');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full border border-luxury-gold/30 hover:bg-luxury-gold/5 text-charcoal text-xs uppercase tracking-[0.2em] py-3.5 transition-all flex items-center justify-center space-x-2 rtl:space-x-reverse font-semibold"
                >
                  <Globe size={14} className="text-luxury-gold" />
                  <span>{locale === 'en' ? 'العربية' : 'English'}</span>
                </button>

                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center space-x-3 rtl:space-x-reverse text-xs uppercase tracking-widest text-charcoal hover:text-luxury-gold transition-colors"
                >
                  <Phone size={15} className="text-luxury-gold" />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onBookClick();
                  }}
                  className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-white text-xs uppercase tracking-[0.2em] py-4 transition-colors duration-300 font-semibold cursor-pointer"
                >
                  {t('book.submit')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
