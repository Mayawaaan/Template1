import React, { useLayoutEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const testimonialsData = [
  {
    quote: "The team was incredibly professional and made me feel comfortable throughout the entire process. I got my results back faster than I expected!",
    name: 'Sarah L.',
    title: 'Verified Patient',
    image: '../../testimonials/test1.jpg',
  },
  {
    quote: "Booking an appointment was seamless, and the facility is top-notch. The staff are friendly and highly efficient. A very positive experience.",
    name: 'Michael B.',
    title: 'Verified Patient',
    image: '../../testimonials/test2.jpg',
  },
  {
    quote: "I was anxious about my tests, but the clear communication and compassionate care I received made all the difference. Highly recommended.",
    name: 'Jessica P.',
    title: 'Verified Patient',
    image: '../../testimonials/test3.jpg',
  },
];

const TestimonialCard = ({ quote, name, title, image }) => (
  <figure className="text-white flex flex-col items-center justify-center p-8 text-center bg-deep-navy border-b border-deep-navy md:border-r rounded-lg shadow-sm">
    <blockquote className="max-w-2xl mx-auto mb-4 text-silver-gray/80 lg:mb-8">
      <Quote className="w-10 h-10 text-royal-blue opacity-20" />
      <p className="my-4 font-light">{quote}</p>
    </blockquote>
    <figcaption className="flex items-center justify-center space-x-3">
      <img className="rounded-full w-12 h-12 object-cover" src={image} alt={`Photo of ${name}`} loading="lazy" />
      <div className="space-y-0.5 font-medium text-left text-silver-gray">
        <div>{name}</div>
        <div className="text-sm font-light text-silver-gray/60">{title}</div>
      </div>
    </figcaption>
  </figure>
);

const Testimonials = () => {
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

      tl.from('.testimonials-header > *', { opacity: 0, y: 30, stagger: 0.2, duration: 0.8, ease: 'power3.out' })
        .from('.testimonial-card', { opacity: 0, y: 50, stagger: 0.15, duration: 0.6, ease: 'power3.out' }, '-=0.5');

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-deep-navy overflow-hidden">
      <div className="py-24 px-8 mx-auto max-w-screen">
        {/* Section Header */}
        <div className="testimonials-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-silver-gray">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
            Real stories from people we've helped on their health journey.
          </p>
          <div className="mt-6 w-24 h-1 bg-royal-blue mx-auto rounded"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                image={testimonial.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;