import React, { useLayoutEffect, useRef } from 'react';
import { Twitter, Linkedin, Facebook, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Footer = () => {
  const footerRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const quickLinks = [
    { title: 'Home', href: '#' },
    { title: 'About Us', href: '#' },
    { title: 'Services', href: '#' },
    { title: 'Contact Us', href: '#' },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-col', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 95%',
          toggleActions: 'play none none none',
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-accent text-text-light/80 overflow-hidden">
      <div className="container mx-auto py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div className="footer-col mb-6 lg:mb-0">
            <h3 className="text-xl font-bold text-text-light mb-4">🧬 Diagnostic Center</h3>
            <p className="text-sm text-text-light/70">
              Providing precise diagnostics with cutting-edge technology and expert care for a healthier future.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3 className="text-lg font-semibold text-text-light mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.title}>
                  <a href={link.href} className="hover:text-primary transition-colors duration-300">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-col">
            <h3 className="text-lg font-semibold text-text-light mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 shrink-0" />
                <span>123 Health St, MedCity, MC 45678</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 shrink-0" />
                <span>contact@diagnostic.center</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="footer-col">
            <h3 className="text-lg font-semibold text-text-light mb-4">Follow Us</h3>
            <div className="flex space-x-5">
              <a href="#" aria-label="Twitter" className="text-text-light/70 hover:text-primary transition-colors duration-300"><Twitter size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="text-text-light/70 hover:text-primary transition-colors duration-300"><Linkedin size={20} /></a>
              <a href="#" aria-label="Facebook" className="text-text-light/70 hover:text-primary transition-colors duration-300"><Facebook size={20} /></a>
              <a href="#" aria-label="WhatsApp" className="text-text-light/70 hover:text-primary transition-colors duration-300"><MessageSquare size={20} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-text-light/20 text-center text-sm text-text-light/60">
          <p>&copy; {new Date().getFullYear()} Diagnostic Center. All Rights Reserved.</p>
          <div className="flex justify-center items-center mt-4">
            <p className="mr-2">Powered by</p>
            <a href="https://zsyio.com/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:opacity-80 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1.3335C11.1333 1.3335 10.3333 2.1335 10.3333 3.00016C10.3333 3.86683 11.1333 4.66683 12 4.66683C12.8667 4.66683 13.6667 3.86683 13.6667 3.00016C13.6667 2.1335 12.8667 1.3335 12 1.3335ZM21 10.3335C21 9.46683 20.2 8.66683 19.3333 8.66683C18.4667 8.66683 17.6667 9.46683 17.6667 10.3335V12.0002H6.33333V10.3335C6.33333 9.46683 5.53333 8.66683 4.66667 8.66683C3.8 8.66683 3 9.46683 3 10.3335C3 11.1668 3.73333 11.9335 4.56667 12.0002L4.66667 12.0002V13.6668H19.3333V12.0002L19.4333 12.0002C20.2667 11.9335 21 11.1668 21 10.3335ZM12 19.3335C11.1333 19.3335 10.3333 20.1335 10.3333 21.0002C10.3333 21.8668 11.1333 22.6668 12 22.6668C12.8667 22.6668 13.6667 21.8668 13.6667 21.0002C13.6667 20.1335 12.8667 19.3335 12 19.3335Z" />
              </svg>
              <span className="ml-1 font-semibold">Zsyio</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;