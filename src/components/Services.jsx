import React, { useLayoutEffect, useRef } from 'react';
import { ScanLine, Beaker, HeartPulse, BrainCircuit, Stethoscope, MonitorSmartphone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const servicesData = [
  {
    title: 'Advanced Imaging',
    description: 'State-of-the-art MRI, CT scans, and X-ray services for precise and detailed diagnostics.',
    icon: <ScanLine className="w-8 h-8" />,
  },
  {
    title: 'Pathology & Lab Tests',
    description: 'Comprehensive blood tests, genetic testing, and biopsy analysis with rapid turnaround times.',
    icon: <Beaker className="w-8 h-8" />,
  },
  {
    title: 'Cardiology Services',
    description: 'ECG, stress tests, and cardiac monitoring to assess and manage heart health effectively.',
    icon: <HeartPulse className="w-8 h-8" />,
  },
  {
    title: 'Neurological Exams',
    description: 'EEG and nerve conduction studies to diagnose and monitor neurological conditions.',
    icon: <BrainCircuit className="w-8 h-8" />,
  },
  {
    title: 'Women\'s Health',
    description: 'Specialized mammography, ultrasound, and bone density scans for comprehensive care.',
    icon: <Stethoscope className="w-8 h-8" />,
  },
  {
    title: 'Telehealth Consultations',
    description: 'Consult with our specialists from the comfort of your home to discuss your results.',
    icon: <MonitorSmartphone className="w-8 h-8" />,
  },
];

const ServiceCard = ({ title, description, icon }) => (
  <div className="bg-blue-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-2 border-transparent hover:border-royal-blue">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-royal-blue text-white mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-silver-gray mb-3">{title}</h3>
    <p className="text-silver-gray leading-relaxed">{description}</p>
  </div>
);

const Services = () => {
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

      tl.from('.services-header > *', { opacity: 0, y: 30, stagger: 0.2, duration: 0.8, ease: 'power3.out' })
        .from('.service-card', { opacity: 0, y: 50, stagger: 0.15, duration: 0.6, ease: 'power3.out' }, '-=0.5');

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="services-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            Comprehensive Diagnostic Services
          </h2>
          <p className="mt-4 text-lg text-silver-gray/80 max-w-3xl mx-auto">
            We provide a wide range of cutting-edge diagnostic services to ensure you receive the most accurate results and the highest quality care.
          </p>
          <div className="mt-6 w-24 h-1 bg-royal-blue mx-auto rounded"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;