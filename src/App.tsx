/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import ServicesSection from './components/ServicesSection';
import SpaExperience from './components/SpaExperience';
import ReviewsSection from './components/ReviewsSection';
import GallerySection from './components/GallerySection';
import BookingForm from './components/BookingForm';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import LuxuryLoader from './components/LuxuryLoader';
import VideoTour from './components/VideoTour';

export default function App() {
  const [preselectedService, setPreselectedService] = useState('');

  // Handle smooth scrolls to the booking section and optionally pre-selects a treatment
  const handleBookClick = (serviceName?: string) => {
    if (serviceName && typeof serviceName === 'string') {
      setPreselectedService(serviceName);
    } else {
      setPreselectedService('');
    }

    const bookingSec = document.getElementById('booking-section');
    if (bookingSec) {
      const offset = 80; // height of sticky header
      const elementPosition = bookingSec.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-soft-cream selection:bg-luxury-gold selection:text-white">
      {/* 1. Global Luxury Pre-loader */}
      <LuxuryLoader />

      {/* 2. Transparent & Sticky Header Navigation */}
      <Header onBookClick={() => handleBookClick()} />

      {/* 3. Immersive Parallax Hero Section */}
      <Hero onBookClick={() => handleBookClick()} />

      {/* 4. Elegant Editorial About Storyteller */}
      <About />

      {/* Cinematic virtual tour showcase */}
      <VideoTour />

      {/* 5. Custom Icon Bento Grid Details */}
      <WhyChoose />

      {/* 6. Dynamic Services Categories & Custom Search */}
      <ServicesSection onBookClick={handleBookClick} />

      {/* 7. Widescreen Healing Spa & Hammam Feature */}
      <SpaExperience onBookClick={() => handleBookClick('Royal Moroccan Hammam Experience')} />

      {/* 8. Lightbox Gallery Grid */}
      <GallerySection />

      {/* 9. Glassmorphic Review Cards & Animated Rolling Counters */}
      <ReviewsSection />

      {/* 11. Custom Concierge Booking Pass Form */}
      <BookingForm preselectedService={preselectedService} />

      {/* 12. Location, Hours, and Google Maps integration */}
      <ContactSection />

      {/* 13. Rich Charcoal Luxury Footer */}
      <Footer onBookClick={() => handleBookClick()} />

      {/* 14. Persistent Hotline Call & WhatsApp Buttons */}
      <FloatingWidgets />
    </div>
  );
}

