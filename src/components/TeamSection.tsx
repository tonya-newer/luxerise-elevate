import { motion } from 'framer-motion';
import teamPhoto from '@/assets/team-photo.jpg';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const TeamSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-luxury" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1"
          >
            <div className="relative max-w-xl mx-auto lg:mx-0">
              <img
                src={teamPhoto}
                alt="The LuxeRise Solutions team"
                className="relative w-full h-auto object-contain rounded-xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2"
          >
            <span className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4">
              Our Team
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6 lg:mb-8">
              Meet the Team Behind{' '}
              <span className="text-primary">LuxeRise Solutions</span>
            </h2>
            <div className="space-y-5 text-charcoal-light text-base sm:text-lg md:text-xl leading-relaxed">
              <p>
                At LuxeRise Solutions, our strength lies in the people behind the strategy. Our team is made up of dedicated professionals who bring creativity, insight, and a collaborative mindset to every project we take on.
              </p>
              <p>
                Each team member plays a vital role in delivering thoughtful marketing solutions that are aligned with our clients' goals. From brand development to campaign execution, we work together to ensure every detail is intentional, strategic, and designed to create lasting impact.
              </p>
              <p>
                Led by visionary leadership and supported by a diverse, skilled team, LuxeRise Solutions is committed to helping businesses build a strong presence, connect authentically with their audience, and move forward with confidence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
