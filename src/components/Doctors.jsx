import React, { useLayoutEffect, useRef } from 'react';
import { Linkedin, Twitter } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const doctorsData = [
  {
    name: 'Dr. Evelyn Reed',
    specialty: 'Cardiologist',
    image: '../../doctors/doc2.jpg',
  },
  {
    name: 'Dr. Marcus Thorne',
    specialty: 'Neurologist',
    image: '../../doctors/doc1.jpg',
  },
  {
    name: 'Dr. Lena Petrova',
    specialty: 'Radiologist',
    image: '../../doctors/doc3.jpg',
  },
  {
    name: 'Dr. Samuel Chen',
    specialty: 'Pathologist',
    image: '../../doctors/doc4.jpg',
  },
];

const DoctorCard = ({ name, specialty, image }) => (
  <div className="bg-black/50 rounded-xl shadow-lg overflow-hidden text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl border-2 border-transparent hover:border-cyan-blue">
    <img className="w-full h-66 object-cover object-center" src={image} alt={`Dr. ${name}`} loading="lazy" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-silver-gray/60 mb-1">{name}</h3>
      <p className="text-black/60 font-semibold mb-4">{specialty}</p>
      <div className="flex justify-center gap-5">
        <a href="#" className="text-silver-gray/60 hover:text-royal-blue transition-colors duration-300"><Linkedin size={24} /></a>
        <a href="#" className="text-silver-gray/60 hover:text-royal-blue transition-colors duration-300"><Twitter size={24} /></a>
      </div>
    </div>
  </div>
);

const Doctors = () => {
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

      tl.from('.doctors-header > *', { opacity: 0, y: 30, stagger: 0.2, duration: 0.8, ease: 'power3.out' })
        .from('.doctor-card', { opacity: 0, y: 50, stagger: 0.15, duration: 0.6, ease: 'power3.out' }, '-=0.5');

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="doctors-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Meet Our Specialists
          </h2>
          <p className="mt-4 text-lg text-silver-gray/80 max-w-3xl mx-auto">
            Our team of dedicated and experienced medical professionals is here to provide you with exceptional care.
          </p>
          <div className="mt-6 w-24 h-1 bg-royal-blue mx-auto rounded"></div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctorsData.map((doctor, index) => (
            <div className="doctor-card" key={index}>
              <DoctorCard
              key={index}
              name={doctor.name}
              specialty={doctor.specialty}
              image={doctor.image}
            />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;