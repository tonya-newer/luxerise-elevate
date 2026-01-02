const CtaSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl" />
      
      <div className="container-luxury relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold text-white mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10">
            Ready to elevate your brand and bring clarity to your marketing strategy? LuxeRise Solutions is here to help you build a refined, professional presence that supports growth and long-term success.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center px-10 py-4 font-medium text-sm tracking-wide uppercase bg-white text-charcoal rounded transition-all duration-300 hover:bg-cream hover:shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
