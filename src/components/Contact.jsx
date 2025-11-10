import React, { useLayoutEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Contact = () => {
  const sectionRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse',
        }
      });

      tl.from('.contact-header > *', { opacity: 0, y: 30, stagger: 0.2, duration: 0.8, ease: 'power3.out' })
        .from('.form-group', { opacity: 0, y: 40, stagger: 0.1, duration: 0.5, ease: 'power3.out' }, '-=0.5')
        .from('.submit-btn', { opacity: 0, y: 20, duration: 0.5, ease: 'power3.out' }, '-=0.3');

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-deep-navy py-24 overflow-hidden">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="contact-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-silver-gray">
            Get In Touch
          </h2>
          <p className="text-white mt-4 text-lg text-silver-gray/80 max-w-3xl mx-auto">
            Have a question or need to schedule a visit? Fill out the form below, and we'll get back to you as soon as possible.
          </p>
          <div className="mt-6 w-24 h-1 bg-royal-blue mx-auto rounded"></div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <form action="#" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="form-group">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-silver-gray">Your Name</label>
                <input type="text" id="name" name="name" className="bg-deep-navy border border-silver-gray/20 text-silver-gray text-sm rounded-lg focus:ring-royal-blue focus:border-royal-blue block w-full p-3 transition duration-300" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-silver-gray">Your Email</label>
                <input type="email" id="email" name="email" className="bg-deep-navy border border-silver-gray/20 text-silver-gray text-sm rounded-lg focus:ring-royal-blue focus:border-royal-blue block w-full p-3 transition duration-300" placeholder="john.doe@example.com" required />
              </div>
            </div>
            <div className="form-group mb-6">
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-silver-gray">Subject</label>
              <input type="text" id="subject" name="subject" className="bg-deep-navy border border-silver-gray/20 text-silver-gray text-sm rounded-lg focus:ring-royal-blue focus:border-royal-blue block w-full p-3 transition duration-300" placeholder="Question about services" required />
            </div>
            <div className="form-group mb-8">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-silver-gray">Your Message</label>
              <textarea id="message" name="message" rows="6" className="bg-deep-navy border border-silver-gray/20 text-silver-gray text-sm rounded-lg focus:ring-royal-blue focus:border-royal-blue block w-full p-3 transition duration-300" placeholder="Write your message here..."></textarea>
            </div>
            <div className="submit-btn text-center">
              <button type="submit" className="inline-flex items-center bg-royal-blue text-white py-3 px-10 rounded-md font-semibold cursor-pointer transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:-translate-y-1 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royal-blue">
                <Send className="mr-2 -ml-1 w-5 h-5" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;