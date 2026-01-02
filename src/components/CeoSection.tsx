import ceoHeadshot from '@/assets/ceo-headshot.jpg';

const CeoSection = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-primary/30 rounded-lg" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-terracotta/20 rounded-lg" />
              
              <img
                src={ceoHeadshot}
                alt="Lashawn Blackston, CEO of LuxeRise Solutions"
                className="relative w-full aspect-[4/5] object-cover object-top rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-charcoal mb-6">
              Meet the CEO
            </h2>
            <div className="space-y-5 text-charcoal-light text-lg leading-relaxed">
              <p>
                LuxeRise Solutions is led by <strong className="text-charcoal font-medium">Lashawn Blackston</strong>, a visionary leader with a deep passion for creativity, strategy, and helping others bring their ideas to life. Lashawn is known for her ability to see the potential in brands before they fully see it themselves, guiding business owners toward clarity, confidence, and elevated presentation.
              </p>
              <p>
                With a natural eye for design and a strategic mindset, Lashawn approaches marketing as both an art and a solution. Her work is rooted in collaboration, authenticity, and a genuine desire to help small businesses rise beyond limitations and step into their full potential.
              </p>
            </div>
            
            {/* Signature-style element */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-heading text-xl text-charcoal font-medium">Lashawn Blackston</p>
              <p className="text-primary text-sm tracking-wide">Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoSection;
