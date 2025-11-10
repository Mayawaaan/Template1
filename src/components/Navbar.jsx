import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, CalendarPlus } from 'lucide-react';
import { gsap } from 'gsap';

// The links to be displayed in the navigation bar
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'About us', href: '/about' },
    { title: 'Services', href: '/services' },
    { title: 'Gallery', href: '/gallery' },
    { title: 'Doctors', href: '/doctors' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contact us', href: '/contact' },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav-logo', { opacity: 0, y: -20, duration: 0.8, ease: 'power3.out', delay: 0.2 });
      gsap.from('.nav-link', { opacity: 0, y: -20, duration: 0.8, ease: 'power3.out', stagger: 0.1, delay: 0.4 });
    }, navRef);
    return () => ctx.revert();
  }, []);

  return (
    <nav ref={navRef} className={ `sticky top-0 z-30 transition-all duration-300 ${isScrolled ? 'bg-deep-navy/80 backdrop-blur-lg shadow-lg text-blue-900' : 'bg-deep-navy text-white'}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <div className="nav-logo text-2xl font-bold text-royal-blue z-20">
          <Link to="/">🧬 Diagnostic Center</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.title} className="nav-link">
              <NavLink 
                to={link.href} 
                className={({ isActive }) => 
                  `font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after: bottom-4px after:w-0 after: h-1 after:bg-royal-blue after:transition-all after:duration-300 hover:text-royal-blue hover:after:w-full ${isActive ? 'text-royal-blue after:w-full' : 'text-silver-gray/90 hover:text-white'}`
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/book-appointment" className="nav-cta hidden lg:flex items-center bg-royal-blue text-white py-3 px-6 rounded-md font-semibold cursor-pointer transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:-translate-y-1">
          <CalendarPlus className="mr-2 -ml-1 w-5 h-5" />
          Book Appointment
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden z-20">
          <button onClick={() => setIsOpen(!isOpen)} className="text-silver-gray focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden z-10 flex flex-col items-center justify-center`}>
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => <li key={link.title}><NavLink to={link.href} className="text-2xl font-medium text-silver-gray hover:text-royal-blue p-2 rounded-md" onClick={() => setIsOpen(false)}>{link.title}</NavLink></li>)}
          </ul>
          <Link to="/book-appointment" onClick={() => setIsOpen(false)} className="mt-10 bg-royal-blue text-white py-3 px-8 rounded-md font-semibold cursor-pointer text-lg">Book Appointment</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar