import React, { useState, useLayoutEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const faqData = [
  {
    question: 'How long does it take to get my test results?',
    answer: 'Most standard test results are available within 24-48 hours. Specialized tests may take longer. You can access your results through our secure online portal as soon as they are ready.',
  },
  {
    question: 'Do I need an appointment for a blood test?',
    answer: 'While walk-ins are welcome, we highly recommend booking an appointment to minimize your wait time. You can book an appointment online or by calling our center directly.',
  },
  {
    question: 'What should I do to prepare for my diagnostic test?',
    answer: 'Preparation varies depending on the test. Some tests require fasting (no food or drink) for 8-12 hours. You will receive specific instructions when you book your appointment. Please follow them carefully for accurate results.',
  },
  {
    question: 'Is direct billing available for my insurance provider?',
    answer: 'We offer direct billing for most major insurance providers. Please bring your insurance card with you, and our staff will assist you with the billing process.',
  },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-silver-gray/20 py-6">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-silver-gray focus:outline-none"
      >
        <span className="hover:text-royal-blue transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 text-royal-blue transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pt-4 text-silver-gray/80 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
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

      tl.from('.faq-header > *', { opacity: 0, y: 30, stagger: 0.2, duration: 0.8, ease: 'power3.out' })
        .from('.accordion-item', { opacity: 0, y: 40, stagger: 0.1, duration: 0.5, ease: 'power3.out' }, '-=0.5');

    }, sectionRef);

    return () => ctx.revert();
  }, []);
  const [openIndices, setOpenIndices] = useState([]);

  const handleItemClick = (index) => {
    setOpenIndices(prevOpenIndices => {
      if (prevOpenIndices.includes(index)) {
        return prevOpenIndices.filter(i => i !== index);
      } else {
        return [...prevOpenIndices, index];
      }
    });
  };

  return (
    <section ref={sectionRef} className="bg-deep-navy py-24 overflow-hidden">
      <div className="container mx-auto px-8 max-w-4xl">
        {/* Section Header */}
        <div className="faq-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-silver-gray">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
            Find quick answers to common questions about our services and procedures.
          </p>
          <div className="mt-6 w-24 h-1 bg-royal-blue mx-auto rounded"></div>
        </div>

        {/* Accordion */}
        <div>
          {faqData.map((item, index) => (
            <div className="accordion-item" key={index}>
              <AccordionItem
                question={item.question}
                answer={item.answer}
                isOpen={openIndices.includes(index)}
                onClick={() => handleItemClick(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;