import { Facebook, Linkedin, Instagram } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-navy py-14">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="LuxeRise Solutions" 
              className="h-14 md:h-16 w-auto brightness-0 invert" 
            />
          </div>

          {/* Copyright */}
          <p className="text-white/80 text-base text-center font-medium">
            © LuxeRise Solutions LLC | All Rights Reserved
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-gold hover:text-charcoal transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-gold hover:text-charcoal transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center text-white hover:bg-gold hover:text-charcoal transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
