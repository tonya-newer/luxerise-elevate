import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const ContactSection = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Website Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:info@luxerisesolutions.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening Email Client",
      description: "Your default email application will open with your message.",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-muted">
      <div className="container-luxury" ref={ref}>
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary font-semibold text-sm tracking-widest uppercase mb-4"
          >
            Get In Touch
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-charcoal mb-6"
          >
            Contact <span className="text-primary">Us</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-charcoal-light text-lg md:text-xl"
          >
            Get in touch to learn how LuxeRise Solutions can support your marketing and branding needs.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-5 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-light to-teal-light flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-charcoal text-lg mb-2">Address</h3>
                <p className="text-charcoal-light text-lg">
                  4860 Cox Rd Ste 200<br />
                  Glen Allen, VA 23060
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-light to-teal-light flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-charcoal text-lg mb-2">Email</h3>
                <a 
                  href="mailto:info@luxerisesolutions.com" 
                  className="text-charcoal-light text-lg hover:text-primary transition-colors font-medium"
                >
                  info@luxerisesolutions.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5 p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-light to-teal-light flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-charcoal text-lg mb-2">Phone</h3>
                <a 
                  href="tel:+18049081414" 
                  className="text-charcoal-light text-lg hover:text-primary transition-colors font-medium"
                >
                  (804) 908-1414
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            onSubmit={handleSubmit} 
            className="space-y-6 bg-white p-8 rounded-2xl shadow-lg"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-xl border-2 border-border bg-white text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:border-primary transition-colors text-lg"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-xl border-2 border-border bg-white text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:border-primary transition-colors text-lg"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-5 py-4 rounded-xl border-2 border-border bg-white text-charcoal placeholder:text-muted-foreground focus:outline-none focus:ring-0 focus:border-primary transition-colors resize-none text-lg"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="btn-luxury w-full flex items-center justify-center gap-3 text-base py-5"
            >
              Send Message
              <Send className="w-5 h-5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
