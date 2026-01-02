import { motion } from 'framer-motion';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:info@luxerisesolutions.com?subject=Inquiry%20from%20Website';
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Modern luxury office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
        {/* Additional gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/40 via-transparent to-emerald-dark/30" />
      </div>

      {/* Content */}
      <div className="relative container-luxury pt-40 md:pt-44 lg:pt-48 pb-20">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white leading-tight mb-8"
          >
            Luxury Marketing Solutions{' '}
            <span className="text-gold">Designed to Elevate</span> Your Brand
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-3xl"
          >
            LuxeRise Solutions is a marketing and consulting firm dedicated to helping businesses build strong, recognizable brands through strategic marketing, creative execution, and intentional growth planning.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center px-10 py-5 font-bold text-base tracking-wide uppercase bg-primary text-white rounded-lg transition-all duration-300 hover:bg-emerald-dark hover:shadow-2xl hover:scale-105"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-7 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-2 h-3 bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
