import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBackground}
          alt="Modern luxury office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative container-luxury pt-24 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white leading-tight mb-6 animate-fade-up">
            Luxury Marketing Solutions Designed to Elevate Your Brand
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            LuxeRise Solutions is a full-service marketing and consulting firm dedicated to helping small businesses build strong, recognizable brands through strategic marketing, creative execution, and intentional growth planning.
          </p>
          <button
            onClick={scrollToContact}
            className="btn-luxury animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
