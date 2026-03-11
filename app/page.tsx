"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Award,
  Users,
  Clock,
  Shield,
  Phone,
} from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import BrandsCarousel from "@/components/BrandsCarousel";
import {
  companyInfo,
  titles,
  services,
  locations,
} from "@/data/content";
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

export default function Home() {
  const stats = [
    { icon: Clock, value: "44+", label: "Years of Excellence" },
    { icon: Users, value: "10,000+", label: "Happy Customers" },
    { icon: Award, value: "48+", label: "Vehicle Brands Served" },
    { icon: Shield, value: "100%", label: "Genuine Parts" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-50 to-white"></div>
        </div>

        {/* Subtle wave shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-accent/15 to-transparent rounded-full -translate-y-1/4 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/15 to-transparent rounded-full translate-y-1/4 -translate-x-1/4"></div>
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl"></div>

        {/* Wave SVG at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-[1]">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,70 L1440,120 L0,120 Z" fill="#4fc3f7" fillOpacity="0.08"/>
            <path d="M0,80 C360,40 720,100 1080,60 C1260,40 1380,50 1440,45 L1440,120 L0,120 Z" fill="#1e3a5f" fillOpacity="0.05"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                  Denso Japan Authorized Service Dealer
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight"
              >
                Sri Lanka&apos;s Premier{" "}
                <span className="text-accent-dark">Auto AC</span> Specialists
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 mb-8 max-w-xl"
              >
                With over 44 years of excellence, Modern Air Conditioning
                delivers top-quality automotive AC repair, genuine spare parts,
                and residential solutions across Sri Lanka.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl hover:shadow-primary/30"
                >
                  Get Free Quote
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-primary px-8 py-4 rounded-full font-semibold transition-all shadow-md border border-gray-200"
                >
                  Our Services
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                {["Denso Authorized", "Honeywell Agent", "Premium Warranty"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="flex items-center gap-2 text-gray-500 text-sm"
                    >
                      <CheckCircle size={16} className="text-accent-dark" />
                      {badge}
                    </span>
                  )
                )}
              </motion.div>
            </div>

            {/* Hero image/card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-4">
                    {titles.slice(0, 4).map((title, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle
                          size={20}
                          className="text-accent shrink-0 mt-0.5"
                        />
                        <span className="text-gray-600 text-sm">{title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <a
                      href={`tel:${locations.headOffice.phones[0]}`}
                      className="flex items-center gap-3 text-primary hover:text-accent transition-colors"
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Phone size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Call us now</p>
                        <p className="font-bold">
                          {locations.headOffice.phones[0]}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  44+ Years
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary/30 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative -mt-10 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={32} className="text-accent" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                Trusted Automotive AC Experts Since 1981
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {companyInfo.description}
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Over the years, Modern has swiftly evolved and broadened its
                operations to include importing, distributing, and affiliating
                with a large number of dealers. We have developed an impressive
                repertoire of innovative, high-quality services.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Award className="text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-primary">Certified</div>
                    <div className="text-sm text-gray-500">Denso Authorized</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Shield className="text-accent" />
                  </div>
                  <div>
                    <div className="font-bold text-primary">Warranty</div>
                    <div className="text-sm text-gray-500">Premium Coverage</div>
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about/2nd.png"
                  alt="Modern AC Office"
                  fill
                  className="object-cover object-center"
                  quality={95}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Comprehensive AC Solutions
            </h2>
            <p className="text-gray-600">
              From automotive AC repair to residential cooling systems, we
              provide end-to-end air conditioning solutions backed by decades of
              expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                shortDescription={service.shortDescription}
                icon={service.icon}
                image={service.image}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Brands Carousel */}
      <BrandsCarousel />

      {/* Vehicle Brands Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              We Service All Makes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              {vehicleBrandsDetailed.length}+ Vehicle Brands Supported
            </h2>
            <p className="text-gray-600">
              From luxury European cars to heavy machinery, our experts can
              service air conditioning systems for virtually any vehicle.
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

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/hero/workshop-bg.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Premium AC Service?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact us today for a free consultation and quote. Our expert
              technicians are ready to help you with all your air conditioning
              needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-semibold transition-all"
              >
                Get Free Quote
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
      </section>
    </>
  );
}
