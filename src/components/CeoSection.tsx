import { motion } from 'framer-motion';
import ceoHeadshot from '@/assets/ceo-headshot.jpg';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const CeoSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="section-padding bg-white">
      <div className="container-luxury" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-lg mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -top-5 -left-5 w-full h-full border-3 border-primary/40 rounded-2xl" />
              <div className="absolute -bottom-5 -right-5 w-40 h-40 bg-gradient-to-br from-gold to-gold-light rounded-2xl" />
              
              <img
                src={ceoHeadshot}
                alt="Lashawn Blackston, CEO of LuxeRise Solutions"
                className="relative w-full aspect-[4/5] object-cover object-top rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-8">
              Meet the <span className="text-primary">CEO</span>
            </h2>
            <div className="space-y-6 text-charcoal-light text-lg md:text-xl leading-relaxed">
              <p>
                LuxeRise Solutions is led by <strong className="text-charcoal font-semibold">Lashawn Blackston</strong>, a visionary leader with a deep passion for creativity, strategy, and helping others bring their ideas to life. Lashawn is known for her ability to see the potential in brands before they fully see it themselves, guiding business owners toward clarity, confidence, and elevated presentation.
              </p>
              <p>
                With a natural eye for design and a strategic mindset, Lashawn approaches marketing as both an art and a solution. Her work is rooted in collaboration, authenticity, and a genuine desire to help small businesses rise beyond limitations and step into their full potential.
              </p>
            </div>
            
            {/* Signature-style element */}
            <div className="mt-10 pt-8 border-t-2 border-primary/20">
              <p className="font-heading text-2xl md:text-3xl text-charcoal font-bold">Lashawn Blackston</p>
              <p className="text-primary font-semibold text-sm tracking-wider uppercase mt-1">Founder & CEO</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CeoSection;
