import { motion } from 'framer-motion';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-luxury" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4"
          >
            About Us
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-10"
          >
            About <span className="text-primary">LuxeRise Solutions</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8 text-charcoal-light text-lg md:text-xl leading-relaxed"
          >
            <p>
              At LuxeRise Solutions, we believe every small business deserves marketing that feels intentional, elevated, and aligned with its vision. We partner with entrepreneurs and business owners to create customized marketing strategies that reflect who they are, what they stand for, and where they want to go.
            </p>
            <p>
              Our approach blends creativity, strategy, and thoughtful execution to ensure your brand not only looks polished but communicates clearly and connects meaningfully with your audience. Whether you are building your brand from the ground up or refining your existing presence, LuxeRise Solutions provides guidance and support designed to help your business rise with confidence.
            </p>
          </motion.div>
          
          {/* Decorative Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-14 flex items-center justify-center gap-4"
          >
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-primary rounded-full" />
            <div className="w-4 h-4 rounded-full bg-gold" />
            <div className="w-20 h-1 bg-gradient-to-l from-transparent to-primary rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
