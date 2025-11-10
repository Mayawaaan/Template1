import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BackToTopButton from './components/BackToTopButton'
import Footer from './components/Footer'

// Page Components
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import GalleryPage from './pages/GalleryPage'
import BookingPage from './pages/BookingPage'

// Section Components as Pages
import Services from './components/Services'
import Doctors from './components/Doctors'
import BlogPreview from './components/BlogPreview'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/blog" element={<BlogPreview />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-appointment" element={<BookingPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTopButton />
    </div>
  )
}

export default App