import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const benefits = [
  'Personalized marketing strategies designed specifically for small businesses',
  'Elevated, luxury brand positioning that builds credibility and trust',
  'Strategic insight paired with creative execution',
  'Clear communication, thoughtful planning, and intentional growth support',
  'A collaborative approach that values your vision and goals',
];

const WhyUsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-emerald-dark to-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal/15 rounded-full blur-3xl" />
      
      <div className="container-luxury relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-4"
            >
              The LuxeRise Difference
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-10"
            >
              Why <span className="text-gold">LuxeRise Solutions</span>
            </motion.h2>
            
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gold flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-charcoal" strokeWidth={3} />
                  </span>
                  <span className="text-white/90 text-lg md:text-xl leading-relaxed">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Decorative Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="aspect-square max-w-lg mx-auto relative">
              {/* Abstract decorative shapes */}
              <div className="absolute top-0 right-0 w-56 h-56 bg-gold/30 rounded-full blur-sm" />
              <div className="absolute bottom-8 left-0 w-72 h-72 bg-teal/25 rounded-full blur-sm" />
              <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-white/10 rounded-2xl rotate-12 backdrop-blur-sm border border-white/20" />
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 border-3 border-gold/50 rounded-full" />
              
              {/* Center icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gold rounded-2xl flex items-center justify-center shadow-2xl">
                <Sparkles className="w-12 h-12 text-charcoal" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
