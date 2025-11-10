import React, { useLayoutEffect, useRef } from 'react';
import { CheckCircle2, Zap, Heart } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const leadershipData = [
  {
    name: 'Dr. Evelyn Reed',
    title: 'Founder & Chief Medical Officer',
    image: '../../doctors/doc2.jpg',
  },
  {
    name: 'Dr. Samuel Chen',
    title: 'Head of Laboratory Sciences',
    image: '../../doctors/doc4.jpg',
  },
];

const AboutPage = () => {
  const mainRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header animation (on load)
      gsap.from('.about-header > *', {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
      });

      // 2. Mission & Vision animation (on scroll)
      const missionTL = gsap.timeline({
        scrollTrigger: {
          trigger: '.mission-section',
          toggleActions: 'play reverse play reverse',
          start: 'top 80%',
        },
      });
      missionTL
        .from('.mission-content > *', { opacity: 0, y: 30, stagger: 0.3, duration: 0.8, ease: 'power3.out' })
        .from('.mission-image', { opacity: 0, scale: 0.9, duration: 1, ease: 'power3.out' }, '-=0.6');

      // 3. Core Values animation (on scroll)
      const valuesTL = gsap.timeline({
        scrollTrigger: {
          trigger: '.values-section',
          toggleActions: 'play reverse play reverse',
          start: 'top 80%',
        },
      });
      valuesTL
        .from('.values-header > *', { opacity: 0, y: 30, stagger: 0.2, duration: 0.8, ease: 'power3.out' })
        .from('.value-card', { opacity: 0, y: 50, stagger: 0.2, duration: 0.6, ease: 'power3.out' }, '-=0.5');

      // 4. Leadership animation (on scroll)
      const leadershipTL = gsap.timeline({
        scrollTrigger: {
          trigger: '.leadership-section',
          toggleActions: 'play reverse play reverse',
          start: 'top 80%',
        },
      });
      leadershipTL
        .from('.leadership-header > *', { opacity: 0, y: 30, stagger: 0.2, duration: 0.8, ease: 'power3.out' })
        .from('.leadership-card', { opacity: 0, y: 50, stagger: 0.2, duration: 0.6, ease: 'power3.out' }, '-=0.5');

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="overflow-hidden">
      {/* Header Section */}
      <section className="bg-background py-20">
        <div className="about-header container mx-auto px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary">Pioneering a Healthier Future</h1>
          <p className="mt-4 text-lg text-text-primary/80 max-w-3xl mx-auto">
            We are a team of dedicated professionals committed to advancing healthcare through precise, reliable, and accessible diagnostic services.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-section py-24 bg-foreground">
        <div className="container mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="mission-content">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Our Mission</h2>
            <p className="text-text-primary/80 leading-relaxed mb-6">
              To empower patients and healthcare providers with accurate, timely, and insightful diagnostic information. We strive to be a cornerstone of community health by integrating cutting-edge technology with compassionate, patient-centered care.
            </p>
            <h2 className="text-3xl font-bold text-text-primary mb-4">Our Vision</h2>
            <p className="text-text-primary/80 leading-relaxed">
              To be the most trusted and innovative diagnostic center, setting new standards for quality, efficiency, and patient experience in the healthcare industry.
            </p>
          </div>
          <div className="mission-image rounded-lg overflow-hidden shadow-xl"> 
            <img src="../../aboutImg.jpg" alt="Scientist working in a lab" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section py-24 bg-foreground">
        <div className="container mx-auto px-8">
          <div className="values-header text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary">Our Core Values</h2>
            <div className="mt-6 w-24 h-1 bg-primary mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="value-card text-center p-6">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary text-text-light mb-4 mx-auto"><CheckCircle2 size={40} strokeWidth={1.5} /></div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Precision</h3>
              <p className="text-text-primary/80">We are committed to the highest standards of accuracy in every test we perform.</p>
            </div>
            <div className="value-card text-center p-6">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary text-text-light mb-4 mx-auto"><Zap size={40} strokeWidth={1.5} /></div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Innovation</h3>
              <p className="text-text-primary/80">We continuously invest in the latest technology to provide the best possible outcomes.</p>
            </div>
            <div className="value-card text-center p-6">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary text-text-light mb-4 mx-auto"><Heart size={40} strokeWidth={1.5} /></div>
              <h3 className="text-xl font-bold text-text-primary mb-2">Compassion</h3>
              <p className="text-text-primary/80">We treat every patient with dignity, respect, and empathy throughout their journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section py-24 bg-background">
        <div className="container mx-auto px-8">
          <div className="leadership-header text-center mb-16">
            <h2 className="text-4xl font-bold text-text-primary">Meet Our Leadership</h2>
            <p className="mt-4 text-lg text-text-primary/80 max-w-3xl mx-auto">
              Our center is guided by a team of experienced and passionate leaders in the medical field.
            </p>
            <div className="mt-6 w-24 h-1 bg-primary mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadershipData.map((leader, index) => (
              <div key={index} className="leadership-card bg-foreground rounded-xl shadow-lg overflow-hidden text-center">
                <img className="w-full h-64 object-cover object-center" src={leader.image} alt={`Photo of ${leader.name}`} loading="lazy" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-1">{leader.name}</h3>
                  <p className="text-secondary font-semibold">{leader.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;