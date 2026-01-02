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
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-luxury">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium text-sm tracking-widest uppercase mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-charcoal mb-6">
            Our Services
          </h2>
          <p className="max-w-3xl mx-auto text-charcoal-light text-lg leading-relaxed">
            We offer tailored marketing solutions designed to support small businesses at every stage of growth. Each service is approached with strategy, creativity, and a focus on long-term brand value while maintaining a refined, luxury presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group"
            >
              <div className="w-14 h-14 rounded-lg bg-sage-light flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="text-charcoal-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
