"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Bus,
  Users,
  Shield,
  Star,
  Award,
  Phone,
} from "lucide-react";
import { services, locations } from "@/data/content";

export default function ToursPage() {
  const service = services.find((s) => s.id === "tours")!;

  const fleetFeatures = [
    {
      icon: Bus,
      title: "Luxury Fleet",
      description: "Well-maintained mini-coaches and large coaches",
    },
    {
      icon: Users,
      title: "Experienced Drivers",
      description: "30+ years in tourist transportation",
    },
    {
      icon: Shield,
      title: "Safe Travel",
      description: "Registered and certified vehicles",
    },
    {
      icon: Star,
      title: "Premium Comfort",
      description: "All modern amenities on board",
    },
  ];

  const amenities = [
    "Air Conditioning",
    "Comfortable Seating",
    "Entertainment System",
    "WiFi (on select vehicles)",
    "First Aid Kit",
    "GPS Navigation",
    "Ample Luggage Space",
    "Professional Audio System",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/tours/coaster-bus.jpg"
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
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light mb-6 transition-colors"
            >
              <ArrowRight size={16} className="rotate-180" />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tours & Travels
            </h1>
            <p className="text-xl text-gray-200">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fleetFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Fleet */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Fleet
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                Luxury Coaches for Every Need
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                All our Modern Coaches and Mini Coaches are well maintained and
                equipped with all the facilities for a comfortable and safe journey.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our buses are driven by reliable, safe and well-experienced drivers
                who have served many years in Sri Lanka tourist transportation and
                are registered under Sri Lanka Tourist Transport Employees
                Association.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="text-accent shrink-0" size={16} />
                    <span className="text-sm text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/tours/bus-exterior.jpg"
                  alt="Coach Exterior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/tours/bus-interior.jpg"
                  alt="Coach Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gray-50 rounded-3xl p-8">
                <Image
                  src="/images/tours/slttea-cert.jpg"
                  alt="SLTTEA Certification"
                  width={400}
                  height={400}
                  className="mx-auto rounded-xl"
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
                Certified & Trusted
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                SLTTEA Registered
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We have a successful name under tours and travels which is
                registered under Sri Lanka Tourist Transport Employees Association
                (SLTTEA) and popular leading travel agencies in Sri Lanka.
              </p>

              <div className="bg-primary/5 rounded-xl p-6 flex items-center gap-4">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
                  <Award className="text-white" size={32} />
                </div>
                <div>
                  <div className="font-bold text-primary">30+ Years Excellence</div>
                  <div className="text-sm text-gray-600">
                    In Sri Lanka Tourist Transportation
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Book Your Journey Today
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Contact Modern Tours and Travels for luxury coach rental services
                tailored to your needs and budget.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white">
                  <Phone className="text-accent" size={20} />
                  <span>{locations.tours.phones.join(" / ")}</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <span className="text-accent">Email:</span>
                  <a
                    href={`mailto:${locations.tours.email}`}
                    className="hover:text-accent transition-colors"
                  >
                    {locations.tours.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-semibold transition-all"
              >
                Book Now
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
