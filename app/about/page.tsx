"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import { companyInfo, titles, locations } from "@/data/content";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/drive/003.jpg"
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sri Lanka&apos;s Most Trusted AC Specialists Since 1981
            </h1>
            <p className="text-xl text-gray-200">
              For over four decades, Modern Air Conditioning has been the
              leading provider of automotive and residential air conditioning
              solutions in Sri Lanka.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                A Legacy of Excellence
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {companyInfo.description}
                </p>
                <p>
                  Over the years, Modern has swiftly evolved and broadened its
                  operations to include importing, distributing, and affiliating
                  with a large number of dealers. We have developed an impressive
                  repertoire of innovative, high-quality services and gained
                  satisfaction from a vast network of clients throughout Sri Lanka.
                </p>
                <p>
                  With our extensive experience, we are dedicated to fostering
                  strong business relationships with all our partners and clients
                  built on trust and commitment, ensuring that MODERN consistently
                  delivers exceptional value.
                </p>
              </div>

              {/* Titles/Certifications */}
              <div className="mt-8 space-y-3">
                {titles.slice(0, 4).map((title, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-accent shrink-0" size={20} />
                    <span className="text-gray-700">{title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about/003.png"
                  alt="Modern AC Workshop"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-accent text-white p-8 rounded-2xl shadow-xl">
                <div className="text-5xl font-bold">44+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Denso Certification Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <Image
                  src="/images/drive/002.jpg"
                  alt="Modern AC Certification"
                  width={600}
                  height={400}
                  className="rounded-xl w-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Certification
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                Sri Lanka&apos;s Only Denso Authorized Service Center
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Modern Auto Airconditioning and Mechanical Engineers has been
                certified as the only Authorized Service Dealer for the sales and
                service of DENSO JAPAN products in Sri Lanka.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our Denso Japan Authorized Service centers are now located in the
                heart of Colombo and Kelaniya, Sri Lanka. (Certificate No:
                002/2012)
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Our Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Visit Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Our Locations
            </h2>
            <p className="text-gray-600">
              Visit our state-of-the-art service centers in Kelaniya and Colombo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Head Office */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src="/images/about/2nd.png"
                  alt="Head Office - Kelaniya with Modern AC building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Head Office - Kelaniya
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-accent shrink-0 mt-1" size={18} />
                    <span className="text-gray-600">
                      {locations.headOffice.address}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-accent shrink-0 mt-1" size={18} />
                    <div className="text-gray-600">
                      {locations.headOffice.phones.map((phone, i) => (
                        <a
                          key={i}
                          href={`tel:${phone}`}
                          className="block hover:text-accent"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold mt-6 hover:text-accent transition-colors"
                >
                  Get Directions
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* City Office */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl overflow-hidden"
            >
              <div className="relative h-64">
                <Image
                  src="/images/about/0019.png"
                  alt="Colombo Office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-primary mb-4">
                  City Office - Colombo 02
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-accent shrink-0 mt-1" size={18} />
                    <span className="text-gray-600">
                      {locations.cityOffice.address}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="text-accent shrink-0 mt-1" size={18} />
                    <div className="text-gray-600">
                      {locations.cityOffice.phones.map((phone, i) => (
                        <a
                          key={i}
                          href={`tel:${phone}`}
                          className="block hover:text-accent"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold mt-6 hover:text-accent transition-colors"
                >
                  Get Directions
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Modern Air
            Conditioning for all their AC needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            Contact Us Today
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
