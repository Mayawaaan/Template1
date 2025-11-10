import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Doctors from '../components/Doctors';
import Testimonials from '../components/Testimonials';
import BlogPreview from '../components/BlogPreview';
import Faq from '../components/Faq';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Doctors />
      <Testimonials />
      <BlogPreview />
      <Faq />
      <Contact />
    </>
  );
};

export default HomePage;