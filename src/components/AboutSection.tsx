const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-luxury">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-primary font-medium text-sm tracking-widest uppercase mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-charcoal mb-8">
            About LuxeRise Solutions
          </h2>
          <div className="space-y-6 text-charcoal-light text-lg leading-relaxed">
            <p>
              At LuxeRise Solutions, we believe every small business deserves marketing that feels intentional, elevated, and aligned with its vision. We partner with entrepreneurs and business owners to create customized marketing strategies that reflect who they are, what they stand for, and where they want to go.
            </p>
            <p>
              Our approach blends creativity, strategy, and thoughtful execution to ensure your brand not only looks polished but communicates clearly and connects meaningfully with your audience. Whether you are building your brand from the ground up or refining your existing presence, LuxeRise Solutions provides guidance and support designed to help your business rise with confidence.
            </p>
          </div>
          
          {/* Decorative Element */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-primary/30" />
            <div className="w-3 h-3 rounded-full bg-primary/40" />
            <div className="w-16 h-px bg-primary/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
