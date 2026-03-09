"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Building2,
  Bus,
} from "lucide-react";
import { locations, whatsappNumber, companyInfo } from "@/data/content";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    const whatsappMessage = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`
    );
    window.open(
      `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/workshop-bg.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200">
              Have questions or need a quote? Our team is ready to help you with
              all your air conditioning needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-8">
                Our Locations
              </h2>

              {/* Head Office */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                    <Building2 className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">
                      Head Office - Kelaniya
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Denso Japan Authorized Workshop
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-accent shrink-0 mt-1" size={16} />
                        <span className="text-gray-600 text-sm">
                          {locations.headOffice.address}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="text-accent shrink-0 mt-1" size={16} />
                        <div className="text-gray-600 text-sm">
                          {locations.headOffice.phones.map((phone, i) => (
                            <a
                              key={i}
                              href={`tel:${phone}`}
                              className="block hover:text-accent transition-colors"
                            >
                              {phone}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="text-accent shrink-0 mt-1" size={16} />
                        <a
                          href={`mailto:${locations.headOffice.email}`}
                          className="text-gray-600 text-sm hover:text-accent transition-colors"
                        >
                          {locations.headOffice.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* City Office */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shrink-0">
                    <Building2 className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">
                      City Office - Colombo 02
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Modern Hi-Tec Center
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-accent shrink-0 mt-1" size={16} />
                        <span className="text-gray-600 text-sm">
                          {locations.cityOffice.address}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="text-accent shrink-0 mt-1" size={16} />
                        <div className="text-gray-600 text-sm">
                          {locations.cityOffice.phones.map((phone, i) => (
                            <a
                              key={i}
                              href={`tel:${phone}`}
                              className="block hover:text-accent transition-colors"
                            >
                              {phone}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tours Office */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shrink-0">
                    <Bus className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">
                      Modern Tours & Travels
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Luxury Coach Rentals
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="text-accent shrink-0 mt-1" size={16} />
                        <span className="text-gray-600 text-sm">
                          {locations.tours.address}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="text-accent shrink-0 mt-1" size={16} />
                        <div className="text-gray-600 text-sm">
                          {locations.tours.phones.map((phone, i) => (
                            <a
                              key={i}
                              href={`tel:${phone}`}
                              className="block hover:text-accent transition-colors"
                            >
                              {phone}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Mail className="text-accent shrink-0 mt-1" size={16} />
                        <a
                          href={`mailto:${locations.tours.email}`}
                          className="text-gray-600 text-sm hover:text-accent transition-colors"
                        >
                          {locations.tours.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-primary rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-accent" size={24} />
                  <h3 className="font-bold">Business Hours</h3>
                </div>
                <div className="space-y-2 text-gray-200">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:30 AM - 5:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:30 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-primary mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="+94 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="Auto AC Repair">Auto AC Repair</option>
                      <option value="Spare Parts">Spare Parts Inquiry</option>
                      <option value="Misty AC">Residential/Commercial AC</option>
                      <option value="Tours">Tours & Travels</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-light text-white py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send via WhatsApp
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Your message will be sent directly to our WhatsApp for faster
                  response.
                </p>
              </form>

              {/* Quick Contact */}
              <div className="mt-8 p-6 bg-accent/10 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">
                      Prefer WhatsApp?
                    </p>
                    <a
                      href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      Chat with us directly
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Find Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Visit Our Locations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Kelaniya Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-64 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6831551442846!2d79.90684831477254!3d6.9554998949595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2591f31f26f5d%3A0x14c63fbe7b06d71!2sKelaniya%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-primary mb-2">Head Office - Kelaniya</h3>
                <p className="text-gray-600 text-sm">
                  {locations.headOffice.address}
                </p>
                <a
                  href={locations.headOffice.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-accent font-semibold hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Colombo Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-64 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7987551442846!2d79.85684831477254!3d6.9271998949595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25963f1f26f5d%3A0x14c63fbe7b06d71!2sColombo%2002%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-primary mb-2">City Office - Colombo 02</h3>
                <p className="text-gray-600 text-sm">
                  {locations.cityOffice.address}
                </p>
                <a
                  href={locations.cityOffice.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-accent font-semibold hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
