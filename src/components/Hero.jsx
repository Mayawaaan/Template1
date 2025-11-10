import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CalendarPlus, ClipboardList } from 'lucide-react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('.hero-title', { opacity: 0, y: 50, duration: 0.8, ease: 'power3.out' })
        .from('.hero-p', { opacity: 0, y: 30, duration: 0.6, ease: 'power3.out' }, '-=0.6')
        .from('.hero-img', { opacity: 0, scale: 0.9, duration: 1, ease: 'power3.out' }, '-=0.8');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="bg-deep-navy text-silver-gray overflow-hidden">
      <div className="container mx-auto flex px-4 md:px-8 py-16 md:py-28 md:flex-row flex-col items-center">
        {/* Left Column: Text Content & CTAs */}
        <div className="lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="hero-title text-2xl sm:text-4xl md:text-6xl mb-4 font-bold text-silver-gray leading-tight">
            Precision Diagnostics,
            <br className="hidden lg:inline-block" />
            <span className="text-royal-blue">Personalized Care.</span>
          </h1>
          <p className="hero-p mb-8 leading-relaxed text-lg text-silver-gray/80">
            Experience the future of healthcare with our state-of-the-art diagnostic services. Fast, accurate, and reliable results you can trust.
          </p>
          <div className="hero-btns flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book-appointment" className="inline-flex items-center justify-center text-white bg-royal-blue border-0 py-3 px-8 focus:outline-none hover:brightness-110 hover:shadow-lg hover:-translate-y-1 rounded-md text-lg font-semibold transition-all duration-300">
              <CalendarPlus className="mr-2 -ml-1 w-5 h-5" />
              Book Appointment
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center text-royal-blue bg-transparent border-2 border-royal-blue py-3 px-8 focus:outline-none hover:bg-royal-blue hover:text-white rounded-md text-lg font-semibold transition-all duration-300 hover:-translate-y-1">
              <ClipboardList className="mr-2 -ml-1 w-5 h-5" />
              Our Services
            </Link>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="hero-img lg:max-w-lg lg:w-full md:w-1/3 w-5/6">
          <img 
            className="object-cover object-center rounded-lg shadow-lg"
            alt="A modern medical laboratory environment" 
            src="../../heroImg.jpg" 
            loading="eager"
            fetchPriority="high"
            srcSet="../../heroImg-small.jpg 480w, ../../heroImg-medium.jpg 800w, ../../heroImg.jpg 1200w"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;