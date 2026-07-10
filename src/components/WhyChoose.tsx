import { motion } from 'motion/react';
import { Sparkles, Scissors, Flower, ShieldCheck, Heart, Sparkle, Award, Sun, Flame, MessageSquareHeart } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function WhyChoose() {
  const { t, locale, isRtl } = useTranslation();

  const points = [
    {
      title: locale === 'ar' ? 'خبراء تجميل متميزون' : 'Premium Beauty Experts',
      desc: locale === 'ar' 
        ? 'يتكون فريقنا من أخصائيين متميزين مدربين عالمياً يتقنون فنون الجمال وأدق التفاصيل.' 
        : 'Our team comprises elite, globally trained master stylists and therapists dedicated to flawless execution.',
      icon: Sparkles,
    },
    {
      title: locale === 'ar' ? 'تجربة سبا فاخرة' : 'Luxury Spa Experience',
      desc: locale === 'ar' 
        ? 'خطوة إلى عالم مجهز بتشطيبات سبا الفنادق الفاخرة فئة الخمس نجوم، ومستويات هدوء تامة لراحة مطلقة.' 
        : 'Tranquil aromatherapy, gentle steam rooms, and acoustic insulation evoke a five-star hotel sanctuary.',
      icon: Flower,
    },
    {
      title: locale === 'ar' ? 'مصففو شعر محترفون' : 'Professional Hair Stylists',
      desc: locale === 'ar' 
        ? 'خبراء تلوين وتصفيف الشعر الذين يمنحون الأولوية لصحة شعرك ويصممون تركيبات مخصصة تبرز جمالك الخاص.' 
        : 'Couture hair colorists designing customized pigments and balayages that emphasize your natural glow.',
      icon: Scissors,
    },
    {
      title: locale === 'ar' ? 'علاجات تجميلية متقدمة' : 'Advanced Beauty Treatments',
      desc: locale === 'ar' 
        ? 'نقدم أحدث العلاجات مثل هيدرافيشل إم دي (HydraFacial MD®) والتركيبات النباتية الفاخرة الخالية من الأضرار.' 
        : 'Incorporating clinical skin therapy like HydraFacial MD® and advanced dermal hydration protocols.',
      icon: Award,
    },
    {
      title: locale === 'ar' ? 'منتجات وعلامات فاخرة' : 'Premium Brands & Products',
      desc: locale === 'ar' 
        ? 'نحن نشارك حصرياً علامات تجميل عالمية فاخرة، لضمان الفعالية الطبية والمثالية الحسية في كل قطرة.' 
        : 'We partner exclusively with luxury brands like Oribe, Kérastase, L’Oréal Professionnel, and Chanel.',
      icon: Flame,
    },
    {
      title: locale === 'ar' ? 'أجهزة وتكنولوجيا حديثة' : 'Modern Equipment',
      desc: locale === 'ar' 
        ? 'مجهز بأحدث تقنيات التجميل، وكراسي علاجية مريحة للغاية ومحطات شعر مريحة بمستوى عالمي.' 
        : 'Equipped with state-of-the-art beauty technology, advanced treatment chairs, and ergonomic hair stations.',
      icon: Sun,
    },
    {
      title: locale === 'ar' ? 'أجواء باعثة على الاسترخاء' : 'Relaxing Atmosphere',
      desc: locale === 'ar' 
        ? 'صوتيات طبيعية منسقة، وإضاءة خافتة دافئة، وتصاميم رخامية غنية لضمان التخلص التام من الضغوط.' 
        : 'Curated natural acoustics, warm dimming lamps, and rich marble textures for ultimate decompression.',
      icon: Sparkle,
    },
    {
      title: locale === 'ar' ? 'معايير نظافة فائقة' : 'Outstanding Hygiene',
      desc: locale === 'ar' 
        ? 'صحتك وسلامتك هما الأهم لدينا. نحن نتبع بروتوكولات تعقيم وتطهير صارمة بمستوى طبي لكافة الأدوات.' 
        : 'Highest medical-grade hygiene protocols with vacuum autoclaving and sanitized individual kits.',
      icon: ShieldCheck,
    },
    {
      title: locale === 'ar' ? 'فريق ودود ومرحب' : 'Friendly Team',
      desc: locale === 'ar' 
        ? 'ضيافة دافئة وخدمات استقبال مخصصة لا تشوبها شائبة تضع راحتك وسعادتك دائماً في المقام الأول.' 
        : 'Warm hospitality and impeccable personalized host services that put your relaxation first.',
      icon: Heart,
    },
    {
      title: locale === 'ar' ? 'استشارات شخصية مخصصة' : 'Personalized Consultations',
      desc: locale === 'ar' 
        ? 'يبدأ كل علاج بتحليل عميق لملفك الشخصي واحتياجاتك لضمان تحقيق أهدافك التجميلية بشكل فريد.' 
        : 'Every treatment starts with an in-depth cosmetic profile analysis to meet your unique beauty goals.',
      icon: MessageSquareHeart,
    },
  ];

  return (
    <section id="why-choose" className="py-24 bg-warm-beige/35 border-t border-b border-luxury-gold/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <span className="text-[10px] tracking-[0.35em] uppercase font-bold text-luxury-gold mb-3 block">
            {t('why.tag')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-charcoal font-normal">
            {locale === 'ar' ? (
              <>
                لماذا تختار التميز والريادة <br />
                <span className="italic font-light text-luxury-gold">في مركز مايا؟</span>
              </>
            ) : (
              <>
                Why Discerning Clients <br />
                <span className="italic font-light text-luxury-gold">Choose Maya</span>
              </>
            )}
          </h2>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mt-6" />
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {points.map((pt, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.05, ease: [0.25, 1, 0.5, 1] }}
              key={pt.title}
              className="group relative bg-white border border-luxury-gold/10 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-luxury-gold/5 hover:-translate-y-1"
            >
              <div>
                {/* Icon wrapper */}
                <div className="w-12 h-12 bg-warm-beige flex items-center justify-center text-luxury-gold mb-6 group-hover:bg-luxury-gold group-hover:text-white transition-all duration-300">
                  <pt.icon size={20} className="stroke-[1.5]" />
                </div>

                <h3 className="font-serif text-base text-charcoal font-medium mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                  {pt.title}
                </h3>
                
                <p className="text-charcoal-light/75 text-[11px] leading-relaxed tracking-wide">
                  {pt.desc}
                </p>
              </div>

              {/* Aesthetic subtle bottom bar */}
              <div className="w-0 h-[2px] bg-luxury-gold absolute bottom-0 left-0 transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
