import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-gray-900 py-12 text-white border-b border-white/10">
        <div className="max-content">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Contact Us</h1>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            <p className="text-gray-400 max-w-md text-sm md:text-base">
              Have a project in mind? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-white">
        <div className="max-content">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 flex flex-col gap-8">
              <div>
                <h2 className="text-2xl mb-8">Get in Touch</h2>
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Phone</h4>
                      <p className="text-gray-600 text-sm">Nitin Agvan: +91 9421335309</p>
                      <p className="text-gray-600 text-sm">Sachin Kalkute: +91 9730482525</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Email</h4>
                      <p className="text-gray-600 text-sm break-all">creativedevelopers555@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Office Address</h4>
                      <p className="text-gray-600 text-sm">Maharashtra, Karnataka & other rural areas, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href="https://wa.me/919421335309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg"
                >
                  <MessageSquare size={20} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-gray-50 p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Full Name</label>
                  <input
                    type="text"
                    required
                    className="bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    required
                    className="bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-bold text-gray-700">Subject</label>
                  <input
                    type="text"
                    required
                    className="bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-sm font-bold text-gray-700">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="btn-primary w-full md:w-auto flex items-center justify-center gap-2">
                    Send Message <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold bg-gray-100">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4 opacity-20" />
            <p className="uppercase tracking-widest text-sm">Google Maps Placeholder</p>
            <p className="text-xs mt-2">Serving Maharashtra & Karnataka</p>
          </div>
        </div>
      </section>
    </main>
  );
}
