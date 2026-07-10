import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Film } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function VideoTour() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t, locale, isRtl } = useTranslation();

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="video-tour" className="py-24 bg-charcoal text-white overflow-hidden relative border-y border-luxury-gold/15">
      {/* Decorative Subtle Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse text-luxury-gold mb-3">
            <Film size={14} />
            <span className="text-[10px] tracking-[0.35em] uppercase font-bold block">
              {t('video.tag')}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-white font-normal">
            {t('video.title')} <br />
            <span className="italic font-light text-luxury-gold">MAYA BEAUTY CENTER &amp; SPA</span>
          </h2>
          <p className="text-white/60 text-xs sm:text-sm mt-4 tracking-wider uppercase font-light max-w-xl mx-auto">
            {t('video.subtitle')}
          </p>
          <div className="w-16 h-[1px] bg-luxury-gold mx-auto mt-6" />
        </div>

        {/* Cinematic Video Player Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="relative aspect-video max-w-5xl mx-auto border border-luxury-gold/20 shadow-2xl overflow-hidden group"
        >
          {/* Video element */}
          <video
            ref={videoRef}
            src="/assets/video.mp4"
            className="w-full h-full object-cover select-none"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            {/* Fallback sources for ultimate robust delivery */}
            <source src="/assets/video.mp4" type="video/mp4" />
            <source src="/assets/maya_promo.mp4" type="video/mp4" />
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-massage-therapist-applying-oil-to-a-womans-back-42216-large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Gentle cinematic overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/20 opacity-80 pointer-events-none transition-opacity duration-500 group-hover:opacity-90" />

          {/* Luxury Floating Logo or Emblem in top corner */}
          <div className={`absolute top-6 flex items-center space-x-2 rtl:space-x-reverse bg-charcoal/40 backdrop-blur-md px-4 py-2 border border-white/10 ${
            isRtl ? 'right-6' : 'left-6'
          }`}>
            <Sparkles size={14} className="text-luxury-gold animate-pulse" />
            <span className="font-serif text-[10px] tracking-widest uppercase text-luxury-gold">MAYA DOHA</span>
          </div>

          {/* Controls Bar */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="bg-luxury-gold hover:bg-luxury-gold-dark text-white p-3.5 rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
            </button>

            {/* Middle Title Overlay */}
            <div className="hidden md:block text-center select-none bg-charcoal/30 backdrop-blur-sm py-2 px-6 border border-white/5">
              <p className="text-[10px] tracking-[0.25em] uppercase font-semibold text-white">
                {t('video.overlay')}
              </p>
            </div>

            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white p-3.5 rounded-full transition-transform hover:scale-105 cursor-pointer"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
          </div>

          {/* Mobile Big Overlay Play Button if Paused */}
          {!isPlaying && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-charcoal/40 backdrop-blur-sm cursor-pointer z-20"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-20 h-20 rounded-full bg-luxury-gold text-white flex items-center justify-center shadow-2xl"
              >
                <Play size={32} fill="currentColor" className={isRtl ? 'mr-1' : 'ml-1'} />
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
