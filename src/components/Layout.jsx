import React, { useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

import Navbar from './Navbar';
import Footer from './Footer';
import BackToTopButton from './BackToTopButton';

const Layout = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
    });

    return () => smoother.kill();
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </div>
  );
};

export default Layout;