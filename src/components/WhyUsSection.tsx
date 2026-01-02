import { Check } from 'lucide-react';

const benefits = [
  'Personalized marketing strategies designed specifically for small businesses',
  'Elevated, luxury brand positioning that builds credibility and trust',
  'Strategic insight paired with creative execution',
  'Clear communication, thoughtful planning, and intentional growth support',
  'A collaborative approach that values your vision and goals',
];

const WhyUsSection = () => {
  return (
    <section className="section-padding bg-sage-light">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-medium text-sm tracking-widest uppercase mb-4">
              The LuxeRise Difference
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-charcoal mb-8">
              Why LuxeRise Solutions
            </h2>
            <ul className="space-y-5">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </span>
                  <span className="text-charcoal-light text-lg leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Decorative Element */}
          <div className="hidden lg:block relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Abstract decorative shapes */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full" />
              <div className="absolute bottom-12 left-0 w-64 h-64 bg-terracotta/15 rounded-full" />
              <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-primary/10 rounded-lg rotate-12" />
              <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border-2 border-primary/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
