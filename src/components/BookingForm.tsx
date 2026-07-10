import { useState, useEffect, FormEvent } from 'react';
import { SERVICES } from '../data';
import { Calendar, Phone, Mail, User, Clock, FileText, CheckCircle2, Copy, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';

interface BookingFormProps {
  preselectedService: string;
}

export default function BookingForm({ preselectedService }: BookingFormProps) {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [copied, setCopied] = useState(false);
  const { t, locale, isRtl } = useTranslation();

  // Set the preselected service from parents if changed
  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber || !email || !preferredDate || !preferredTime) {
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury API submission
    setTimeout(() => {
      // Generate standard random booking reference
      const ref = `MAYA-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingRef(ref);
      setIsSubmitting(false);
      setBookingConfirmed(true);
    }, 1200);
  };

  const handleCopyRef = () => {
    navigator.clipboard.writeText(bookingRef);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setService('');
    setPreferredDate('');
    setPreferredTime('');
    setSpecialRequests('');
    setBookingConfirmed(false);
    setBookingRef('');
  };

  const timeslots = [
    { value: '10:00 AM', label: locale === 'ar' ? '١٠:٠٠ صباحاً (الفترة الصباحية)' : '10:00 AM (Morning)' },
    { value: '11:30 AM', label: locale === 'ar' ? '١١:٣٠ صباحاً (الفترة الصباحية)' : '11:30 AM (Morning)' },
    { value: '01:00 PM', label: locale === 'ar' ? '٠١:٠٠ مساءً (بعد الظهر)' : '01:00 PM (Afternoon)' },
    { value: '02:30 PM', label: locale === 'ar' ? '٠٢:٣٠ مساءً (بعد الظهر)' : '02:30 PM (Afternoon)' },
    { value: '04:00 PM', label: locale === 'ar' ? '٠٤:٠٠ مساءً (مساءً)' : '04:00 PM (Late Afternoon)' },
    { value: '05:30 PM', label: locale === 'ar' ? '٠٥:٣٠ مساءً (مساءً)' : '05:30 PM (Evening)' },
    { value: '07:00 PM', label: locale === 'ar' ? '٠٧:٠٠ مساءً (مساءً)' : '07:00 PM (Evening)' },
    { value: '08:30 PM', label: locale === 'ar' ? '٠٨:٣٠ مساءً (ليلاً)' : '08:30 PM (Night)' },
  ];

  const successMsg = t('book.success.msg')
    .replace('{name}', fullName.split(' ')[0])
    .replace('{service}', service);

  return (
    <section id="booking-section" className="py-24 lg:py-32 bg-warm-beige/30 relative">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] tracking-[0.35em] uppercase font-bold text-luxury-gold mb-3 block">
            {t('book.tag')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-charcoal font-normal">
            {t('book.title')} <br />
            <span className="italic font-light text-luxury-gold">
              {locale === 'ar' ? 'احجزي جلستك الخاصة وموعدك المتميز' : 'Secure Your Salon Experience'}
            </span>
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mt-6" />
        </div>

        <AnimatePresence mode="wait">
          {!bookingConfirmed ? (
            <motion.div
              key="booking-form-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-luxury-gold/15 p-8 md:p-12 shadow-2xl shadow-luxury-gold/5"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Guest Personal Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className={`text-[10px] tracking-[0.2em] uppercase font-bold text-charcoal/80 flex items-center space-x-2 rtl:space-x-reverse`}>
                      <User size={12} className="text-luxury-gold" />
                      <span>{t('book.name')} *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={locale === 'ar' ? 'مثال: فاطمة آل ثاني' : 'e.g. Fatima Al-Thani'}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className={`w-full bg-soft-cream/40 border border-luxury-gold/15 py-3.5 px-4 text-sm text-charcoal focus:outline-none focus:border-luxury-gold focus:bg-white transition-all duration-300 ${
                        isRtl ? 'text-right' : 'text-left'
                      }`}
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-charcoal/80 flex items-center space-x-2 rtl:space-x-reverse">
                      <Phone size={12} className="text-luxury-gold" />
                      <span>{t('book.phone')} *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={locale === 'ar' ? 'مثال: 4567 7135 974+' : 'e.g. +974 7135 4567'}
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className={`w-full bg-soft-cream/40 border border-luxury-gold/15 py-3.5 px-4 text-sm text-charcoal focus:outline-none focus:border-luxury-gold focus:bg-white transition-all duration-300 ${
                        isRtl ? 'text-right' : 'text-left'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-charcoal/80 flex items-center space-x-2 rtl:space-x-reverse">
                      <Mail size={12} className="text-luxury-gold" />
                      <span>{t('book.email')} *</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={locale === 'ar' ? 'fatima@domain.qa :بريد إلكتروني' : 'e.g. fatima@domain.qa'}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full bg-soft-cream/40 border border-luxury-gold/15 py-3.5 px-4 text-sm text-charcoal focus:outline-none focus:border-luxury-gold focus:bg-white transition-all duration-300 ${
                        isRtl ? 'text-right' : 'text-left'
                      }`}
                    />
                  </div>

                  {/* Preferred Service Selection */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-charcoal/80 flex items-center space-x-2 rtl:space-x-reverse">
                      <Sparkles size={12} className="text-luxury-gold" />
                      <span>{t('book.service')} *</span>
                    </label>
                    <select
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className={`w-full bg-soft-cream/40 border border-luxury-gold/15 py-3.5 px-4 text-sm text-charcoal focus:outline-none focus:border-luxury-gold focus:bg-white transition-all duration-300 appearance-none cursor-pointer ${
                        isRtl ? 'text-right' : 'text-left'
                      }`}
                    >
                      <option value="">{locale === 'ar' ? '-- اختر الخدمة المطلوبة --' : '-- Choose a Ritual --'}</option>
                      {SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.name}>
                          {t(`service.${srv.id}.name` as any)}
                        </option>
                      ))}
                      <option value="Bespoke Beauty Consultation">
                        {locale === 'ar' ? 'استشارة تجميلية شخصية مخصصة' : 'Bespoke Beauty Consultation'}
                      </option>
                    </select>
                  </div>
                </div>

                {/* Preferred Date & Time Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Preferred Date */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-charcoal/80 flex items-center space-x-2 rtl:space-x-reverse">
                      <Calendar size={12} className="text-luxury-gold" />
                      <span>{t('book.date')} *</span>
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className={`w-full bg-soft-cream/40 border border-luxury-gold/15 py-3.5 px-4 text-sm text-charcoal focus:outline-none focus:border-luxury-gold focus:bg-white transition-all duration-300 cursor-pointer ${
                        isRtl ? 'text-right' : 'text-left'
                      }`}
                    />
                  </div>

                  {/* Preferred Time */}
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-charcoal/80 flex items-center space-x-2 rtl:space-x-reverse">
                      <Clock size={12} className="text-luxury-gold" />
                      <span>{t('book.time')} *</span>
                    </label>
                    <select
                      required
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className={`w-full bg-soft-cream/40 border border-luxury-gold/15 py-3.5 px-4 text-sm text-charcoal focus:outline-none focus:border-luxury-gold focus:bg-white transition-all duration-300 appearance-none cursor-pointer ${
                        isRtl ? 'text-right' : 'text-left'
                      }`}
                    >
                      <option value="">{locale === 'ar' ? '-- اختر الفترة المفضلة --' : '-- Select Time Slot --'}</option>
                      {timeslots.map((slot) => (
                        <option key={slot.value} value={slot.value}>
                          {slot.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase font-bold text-charcoal/80 flex items-center space-x-2 rtl:space-x-reverse">
                    <FileText size={12} className="text-luxury-gold" />
                    <span>{t('book.instructions')}</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder={
                      locale === 'ar' 
                        ? 'مثال: وجود حساسية معينة، باقة زفاف، تفضيل خبيرة شعر محددة، أو طلب جناح حمام خاص...' 
                        : 'e.g. Allergies, specific hair colors, bridal styling, or requesting a private hammam suite...'
                    }
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className={`w-full bg-soft-cream/40 border border-luxury-gold/15 py-3.5 px-4 text-sm text-charcoal focus:outline-none focus:border-luxury-gold focus:bg-white transition-all duration-300 ${
                      isRtl ? 'text-right' : 'text-left'
                    }`}
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    id="submit-appointment-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-white text-xs uppercase tracking-[0.3em] py-5 font-bold transition-colors duration-300 shadow-xl shadow-luxury-gold/10 flex items-center justify-center space-x-3 rtl:space-x-reverse cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{locale === 'ar' ? 'جاري التحقق من المواعيد...' : 'Verifying Calendar Slots...'}</span>
                      </>
                    ) : (
                      <span>{t('book.submit')}</span>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="booking-success-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-charcoal text-white p-8 md:p-12 border border-luxury-gold/30 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle background decorative circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-luxury-gold/5 blur-3xl pointer-events-none animate-pulse" />

              <div className="text-center max-w-xl mx-auto space-y-8 relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-luxury-gold/15 text-luxury-gold border border-luxury-gold/30">
                  <CheckCircle2 size={32} className="stroke-[1.5]" />
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold font-bold block animate-pulse">
                    {t('book.success.title')}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-normal leading-tight">
                    {locale === 'ar' ? `شكراً لكِ، ${fullName.split(' ')[0]}` : `Thank You, ${fullName.split(' ')[0]}`}
                  </h3>
                  <p className="text-soft-cream/70 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                    {successMsg}
                  </p>
                </div>

                {/* Digital Ticket / Receipt representation */}
                <div className={`bg-white/5 border border-white/10 p-6 space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-[9px] tracking-widest uppercase text-white/50">
                      {locale === 'ar' ? 'الرقم المرجعي للحجز' : 'Reference ID'}
                    </span>
                    <div className="flex items-center space-x-2 text-luxury-gold font-mono font-bold text-sm">
                      <span>{bookingRef}</span>
                      <button
                        onClick={handleCopyRef}
                        className="text-white/40 hover:text-luxury-gold transition-colors focus:outline-none cursor-pointer"
                        title="Copy Reference"
                      >
                        <Copy size={13} />
                      </button>
                    </div>
                  </div>

                  {copied && (
                    <p className={`text-[9px] tracking-widest text-luxury-gold font-bold uppercase animate-fade-in ${
                      isRtl ? 'text-left' : 'text-right'
                    }`}>
                      {locale === 'ar' ? 'تم نسخ المرجع!' : 'Reference Copied!'}
                    </p>
                  )}

                  <div className="grid grid-cols-2 gap-4 text-xs tracking-wider">
                    <div>
                      <span className="text-[9px] uppercase text-white/40 block mb-1">
                        {locale === 'ar' ? 'الطقس التجميلي' : 'Ritual'}
                      </span>
                      <span className="font-medium text-white/95">{service}</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase text-white/40 block mb-1">
                        {locale === 'ar' ? 'التاريخ والوقت' : 'Date & Time'}
                      </span>
                      <span className="font-medium text-white/95">{preferredDate} {locale === 'ar' ? 'في' : 'at'} {preferredTime}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/5">
                    <span className="text-[9px] uppercase text-white/40 block mb-1">
                      {locale === 'ar' ? 'بيانات العميلة' : 'Client Details'}
                    </span>
                    <p className="text-white/90 font-medium">{fullName} &bull; {phoneNumber}</p>
                  </div>
                </div>

                {/* Guidelines note */}
                <p className="text-[10px] tracking-widest uppercase text-luxury-gold/85 leading-relaxed bg-luxury-gold/5 py-3 border border-luxury-gold/15">
                  {locale === 'ar' 
                    ? 'يرجى التفضل بالوصول قبل الموعد بـ ١٠ دقائق للاستمتاع بضيافتنا العضوية الفاخرة.' 
                    : 'Kindly arrive 10 minutes prior to your slot to enjoy our organic refreshments.'}
                </p>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="text-xs uppercase tracking-[0.25em] text-white/60 hover:text-white underline font-semibold transition-colors duration-300 cursor-pointer"
                  >
                    {t('book.success.btn')}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
