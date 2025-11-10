import React, { useState, useLayoutEffect, useRef } from 'react';
import { User, Phone, Send, Calendar, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import toast, { Toaster } from 'react-hot-toast';

const BookingPage = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: 'Advanced Imaging',
  });

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('.booking-header > *', {
        opacity: 0, y: 40, stagger: 0.2, duration: 0.8, ease: 'power3.out'
      }).from('.booking-form', {
        opacity: 0, y: 50, duration: 1, ease: 'power3.out'
      }, '-=0.6');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to your server here.
    toast.success(`Thank you, ${formData.name}! Your appointment request for ${formData.service} has been received.`);
  };

  return (
    <section ref={sectionRef} className="bg-deep-navy text-white py-24 overflow-hidden">
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: { background: '#363636', color: '#fff' },
        }}
      />
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="booking-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-silver-gray">
            Book Your Appointment
          </h2>
          <p className="mt-4 text-lg text-silver-gray/80 max-w-3xl mx-auto">
            Schedule your visit with us. Fill out the form below and our team will get in touch to confirm your booking.
          </p>
          <div className="mt-6 w-24 h-1 bg-royal-blue mx-auto rounded"></div>
        </div>

        {/* Booking Form */}
        <div className="booking-form max-w-4xl mx-auto bg-foreground p-8 rounded-lg shadow-xl">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-silver-gray">Your Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <User className="w-5 h-5 text-royal-blue" />
                  </div>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="bg-deep-navy border border-silver-gray/20 text-silver-gray text-sm rounded-lg focus:ring-royal-blue focus:border-royal-blue block w-full pl-10 p-3 transition duration-300" placeholder="John Doe" required />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-silver-gray">Phone Number</label>
                 <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Phone className="w-5 h-5 text-royal-blue" />
                  </div>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="bg-deep-navy border border-silver-gray/20 text-silver-gray text-sm rounded-lg focus:ring-royal-blue focus:border-royal-blue block w-full pl-10 p-3 transition duration-300" placeholder="(123) 456-7890" required />
                </div>
              </div>
              <div>
                <label htmlFor="date" className="block mb-2 text-sm font-medium text-silver-gray">Select Date</label>
                <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Calendar className="w-5 h-5 text-royal-blue" />
                  </div>
                <input type="date" id="date" name="date" value={formData.date} onChange={handleInputChange} className={`bg-deep-navy border border-silver-gray/20 text-sm rounded-lg focus:ring-royal-blue focus:border-royal-blue block w-full pl-10 p-3 transition duration-300 ${formData.date ? 'text-white' : 'text-silver-gray/60'}`} required />
                </div>
              </div>
              <div>
                <label htmlFor="time" className="block mb-2 text-sm font-medium text-silver-gray">Preferred Time</label>
                <div className='relative'>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Clock className="w-5 h-5 text-royal-blue" />
                    </div>
                    <input type="time" id="time" name="time" value={formData.time} onChange={handleInputChange} className={`bg-deep-navy border border-silver-gray/20 text-sm rounded-lg focus:ring-royal-blue focus:border-royal-blue block w-full pl-10 p-3 transition duration-300 ${formData.time ? 'text-white' : 'text-silver-gray/60'}`} required />
                </div>
              </div>
            </div>
            <div className="mb-8">
              <label htmlFor="service" className="block mb-2 text-sm font-medium text-silver-gray">Service of Interest</label>
              <select id="service" name="service" value={formData.service} onChange={handleInputChange} className="bg-deep-navy border border-silver-gray/20 text-white text-sm rounded-lg focus:ring-royal-blue focus:border-royal-blue block w-full p-3 transition duration-300">
                <option>Advanced Imaging</option>
                <option>Pathology & Lab Tests</option>
                <option>Cardiology Services</option>
                <option>Other</option>
              </select>
            </div>
            <div className="text-center">
              <button type="submit" className="inline-flex items-center bg-royal-blue text-white py-3 px-10 rounded-md font-semibold cursor-pointer transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:-translate-y-1 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royal-blue">
                <Send className="mr-2 -ml-1 w-5 h-5" />
                Request Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingPage;