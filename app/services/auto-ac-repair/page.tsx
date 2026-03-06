"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Wrench,
  Gauge,
  ThermometerSnowflake,
  Settings,
  Phone,
} from "lucide-react";
import { services, locations } from "@/data/content";
import { vehicleBrandsDetailed } from "@/data/vehicleBrands";
import { useState } from "react";

function BrandLogoSmall({ name, logo }: { name: string; logo: string }) {
  const [err, setErr] = useState(false);
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

  if (err) {
    return (
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-bold text-xs group-hover:from-white/30 group-hover:to-white/20 group-hover:text-white">
        {initials}
      </div>
    );
  }
  return (
    <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center p-1.5 overflow-hidden">
      <img src={logo} alt={name} className="w-full h-full object-contain" onError={() => setErr(true)} />
    </div>
  );
}

export default function AutoACRepairPage() {
  const service = services.find((s) => s.id === "auto-ac-repair")!;

  const serviceTypes = [
    {
      icon: Gauge,
      title: "AC Diagnosis",
      description:
        "Professional diagnostic services using the latest technology to identify AC issues accurately.",
    },
    {
      icon: ThermometerSnowflake,
      title: "Gas Recharge",
      description:
        "Complete refrigerant recharge with genuine Honeywell and Denso gases.",
    },
    {
      icon: Wrench,
      title: "Compressor Repair",
      description:
        "Expert repair and replacement of AC compressors for all vehicle makes.",
    },
    {
      icon: Settings,
      title: "System Conversion",
      description:
        "Convert old R12 systems to eco-friendly R134a refrigerant systems.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/workshop/mercedes-repair.jpg"
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
              {service.title}
            </h1>
            <p className="text-xl text-gray-200">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                Professional AC Services
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our expert technicians are equipped with the latest diagnostic
                tools and genuine parts to handle any automotive AC issue.
              </p>

              <div className="space-y-4">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                  >
                    <CheckCircle className="text-accent shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-6">
                {serviceTypes.map((type, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                      <type.icon className="text-accent" size={24} />
                    </div>
                    <h3 className="font-bold text-primary mb-2">{type.title}</h3>
                    <p className="text-sm text-gray-600">{type.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Workshop
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              State-of-the-Art Facilities
            </h2>
            <p className="text-gray-600">
              Our well-equipped workshops feature the latest technology and
              trained technicians.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: "/images/drive/004.jpg", alt: "Modern AC Workshop" },
              { src: "/images/drive/005.jpg", alt: "Modern AC Service Center" },
              { src: "/images/drive/006.jpg", alt: "Modern AC Facility" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Brands */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              All Makes & Models
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              We Service {vehicleBrandsDetailed.length}+ Vehicle Brands
            </h2>
            <p className="text-gray-600">
              From luxury European cars to heavy machinery, our experts can handle
              any vehicle.
            </p>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
            {vehicleBrandsDetailed.map((brand) => (
              <Link
                key={brand.slug}
                href={`/products/brands/${brand.slug}`}
                className="group flex flex-col items-center gap-1.5 p-3 bg-gray-50 hover:bg-primary rounded-xl transition-all hover:shadow-md"
              >
                <BrandLogoSmall name={brand.name} logo={brand.logo} />
                <span className="text-[11px] font-medium text-gray-700 group-hover:text-white text-center leading-tight truncate w-full">
                  {brand.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need AC Repair?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Bring your vehicle to our Denso Authorized Service Centers for
                professional diagnosis and repair.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-semibold transition-all"
                >
                  Book Appointment
                  <ArrowRight size={20} />
                </Link>
                <a
                  href={`tel:${locations.headOffice.phones[0]}`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all border border-white/20"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
