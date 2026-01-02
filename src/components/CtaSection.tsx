import { motion } from 'framer-motion';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const CtaSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  
  const handleContactClick = () => {
    window.location.href = 'mailto:info@luxerisesolutions.com?subject=Inquiry%20from%20Website';
  };

  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-teal/10 rounded-full blur-2xl" />
      
      <div className="container-luxury relative" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-8"
          >
            Ready to <span className="text-gold">Elevate</span> Your Brand?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white/85 text-lg md:text-xl leading-relaxed mb-12"
          >
            Ready to elevate your brand and bring clarity to your marketing strategy? LuxeRise Solutions is here to help you build a refined, professional presence that supports growth and long-term success.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <button
              onClick={handleContactClick}
              className="inline-flex items-center justify-center px-12 py-5 font-bold text-base tracking-wide uppercase bg-gold text-charcoal rounded-lg transition-all duration-300 hover:bg-white hover:shadow-2xl hover:scale-105"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
