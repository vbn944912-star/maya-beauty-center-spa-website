import { motion } from 'motion/react';
import { CONTACT_INFO } from '../data';
import { Phone, MapPin, Clock, Mail, ExternalLink } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function ContactSection() {
  const { t, locale, isRtl } = useTranslation();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-soft-cream relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Working Hours & Contact details (Left 5 columns) */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-[10px] tracking-[0.35em] uppercase font-bold text-luxury-gold mb-3 block">
                {t('contact.tag')}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-charcoal leading-tight font-normal">
                {locale === 'ar' ? (
                  <>
                    تفضلي بزيارة ملاذنا <br />
                    <span className="italic font-light text-luxury-gold">في قلب الدوحة</span>
                  </>
                ) : (
                  <>
                    Visit our Doha <br />
                    <span className="italic font-light text-luxury-gold">Beauty Oasis</span>
                  </>
                )}
              </h2>
              <div className="w-16 h-[1px] bg-luxury-gold mt-6" />
            </div>

            {/* Address & Contacts */}
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="w-10 h-10 bg-warm-beige flex items-center justify-center text-luxury-gold shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="text-[10px] tracking-widest uppercase text-charcoal-light/60 font-bold mb-1">
                    {t('contact.address')}
                  </h4>
                  <p className="text-sm font-medium text-charcoal leading-relaxed">
                    {t('contact.address.val')}
                  </p>
                  <a
                    href={CONTACT_INFO.mapCoordinates}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-luxury-gold hover:text-luxury-gold-dark font-semibold inline-flex items-center space-x-1 rtl:space-x-reverse mt-2 transition-colors"
                  >
                    <span>{t('contact.maps')}</span>
                    <ExternalLink size={12} className={isRtl ? "rotate-180" : ""} />
                  </a>
                </div>
              </div>

              {/* Direct Booking Phone */}
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="w-10 h-10 bg-warm-beige flex items-center justify-center text-luxury-gold shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="text-[10px] tracking-widest uppercase text-charcoal-light/60 font-bold mb-1">
                    {locale === 'ar' ? 'خط الحجوزات الساخن' : 'Reservation Hotline'}
                  </h4>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-lg font-serif text-charcoal font-medium hover:text-luxury-gold transition-colors duration-300"
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                  <p className="text-[10px] tracking-wider text-charcoal-light/60 uppercase mt-1">
                    {locale === 'ar' ? 'اتصال مباشر ومجاني بلمسة واحدة' : 'One-click mobile calling'}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="w-10 h-10 bg-warm-beige flex items-center justify-center text-luxury-gold shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <h4 className="text-[10px] tracking-widest uppercase text-charcoal-light/60 font-bold mb-1">
                    {locale === 'ar' ? 'المراسلات الإلكترونية' : 'Email Correspondence'}
                  </h4>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm font-medium text-charcoal hover:text-luxury-gold transition-colors duration-300"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-white border border-luxury-gold/15 p-8 shadow-xl shadow-luxury-gold/5 relative overflow-hidden">
              <div className="flex items-center space-x-2.5 rtl:space-x-reverse text-luxury-gold mb-6 border-b border-luxury-gold/10 pb-4">
                <Clock size={16} />
                <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-charcoal">
                  {t('contact.hours')}
                </span>
              </div>
              <div className="space-y-3.5">
                {CONTACT_INFO.workingHours.map((wh) => {
                  const dayName = t(`contact.hours.${wh.day.toLowerCase()}` as any);
                  const hourVal = locale === 'ar' 
                    ? wh.hours
                        .replace('AM', 'صباحاً')
                        .replace('PM', 'مساءً')
                        .replace('Closed', 'مغلق')
                        .replace('to', 'إلى')
                    : wh.hours;

                  return (
                    <div key={wh.day} className="flex justify-between items-center text-xs tracking-wide">
                      <span className="text-charcoal-light/60 uppercase font-medium">{dayName}</span>
                      <span className="font-semibold text-charcoal">{hourVal}</span>
                    </div>
                  );
                })}
              </div>
              
              {/* Note */}
              <p className="text-[10px] tracking-wider uppercase text-luxury-gold/80 text-center mt-6 pt-4 border-t border-luxury-gold/10 font-bold">
                {locale === 'ar' 
                  ? '* يوصى بالحجز المسبق خلال فترات ذروة العمل أيام الجمعة والسبت.' 
                  : '* Booking required during peak Friday/Saturday slots.'}
              </p>
            </div>
          </div>

          {/* Interactive Google Map (Right 7 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
            className="lg:col-span-7 w-full h-full min-h-[400px] lg:min-h-[550px] relative bg-warm-beige border border-luxury-gold/20 shadow-2xl overflow-hidden"
          >
            {/* Custom iframe map */}
            <iframe
              title="MAYA BEAUTY CENTER & SPA Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.411624467022!2d51.51268677616658!3d25.307123977643534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45db7ef7b98ec3%3A0xe53ec0f0c058c4df!2sAhmed%20Bin%20Ali%20St%2C%20Doha%2C%20Qatar!5e0!3m2!1sen!2sqa!4v1783672000000!5m2!1sen!2sqa"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.1) contrast(1.05)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            />
            
            {/* Elegant luxury overlay tag on map */}
            <div className={`absolute top-4 bg-charcoal/90 backdrop-blur-sm p-4 text-white border border-luxury-gold/20 max-w-[240px] pointer-events-none z-10 hidden sm:block ${
              isRtl ? 'right-4 text-right' : 'left-4 text-left'
            }`}>
              <h5 className="font-serif text-sm text-luxury-gold font-medium mb-1">
                {locale === 'ar' ? 'مركز مايا' : 'MAYA CENTER'}
              </h5>
              <p className="text-[10px] tracking-wider text-soft-cream/80 leading-relaxed uppercase">
                {t('contact.address.val')}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
