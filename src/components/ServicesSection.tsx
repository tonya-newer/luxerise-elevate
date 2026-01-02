import { motion } from 'framer-motion';
import { 
  Palette, 
  TrendingUp, 
  Share2, 
  Pencil, 
  Target, 
  Megaphone, 
  Users, 
  MessageSquare, 
  Package 
} from 'lucide-react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const services = [
  {
    icon: Palette,
    title: 'Strategic Branding & Brand Development',
    description: 'Build a memorable brand identity that resonates with your audience.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing Strategy',
    description: 'Data-driven strategies to maximize your online presence and growth.',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Consistent, engaging content that builds community and loyalty.',
  },
  {
    icon: Pencil,
    title: 'Content Creation & Campaign Design',
    description: 'Compelling visuals and copy that tell your brand story.',
  },
  {
    icon: Target,
    title: 'Market Research & Brand Positioning',
    description: 'Insights that position your brand for competitive advantage.',
  },
  {
    icon: Megaphone,
    title: 'Advertising & Promotional Strategy',
    description: 'Strategic campaigns that reach the right audience at the right time.',
  },
  {
    icon: Users,
    title: 'Public Relations & Campaign Management',
    description: 'Build credibility and manage your public narrative effectively.',
  },
  {
    icon: MessageSquare,
    title: 'Marketing Consulting & Strategy Sessions',
    description: 'Expert guidance tailored to your unique business needs.',
  },
  {
    icon: Package,
    title: 'Digital & Physical Product Development',
    description: 'From concept to market-ready products with strategic vision.',
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-luxury" ref={ref}>
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4"
          >
            What We Offer
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6"
          >
            Our <span className="text-primary">Services</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-charcoal-light text-lg md:text-xl leading-relaxed"
          >
            We offer tailored marketing solutions designed to support businesses at every stage of growth. Each service is approached with strategy, creativity, and a focus on long-term brand value while maintaining a refined, luxury presence.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="service-card group bg-white"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-light to-teal-light flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-teal transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
