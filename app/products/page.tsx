"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BrandsCarousel from "@/components/BrandsCarousel";
import { refrigerantGases, lubricantOils } from "@/data/content";

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/workshop/parts.jpg"
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
              Products Catalogue
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Genuine Auto AC Parts & Products
            </h1>
            <p className="text-xl text-gray-200">
              Browse our comprehensive catalogue of genuine automotive air
              conditioning components, refrigerant gases, and lubricants from
              leading brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Refrigerant Gases - Primary */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Premium Quality
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Refrigerant Gases
            </h2>
            <p className="text-gray-600">
              Genuine Honeywell and Denso refrigerant gases for optimal cooling
              performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {refrigerantGases.map((gas, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 bg-white">
                  <Image
                    src={gas.image}
                    alt={gas.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-primary text-center">
                    {gas.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lubricant Oils & Cleaners */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Maintenance Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Lubricants & Cleaners
            </h2>
            <p className="text-gray-600">
              Professional-grade lubricant oils, UV dyes, and cleaning solutions
              for AC maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {lubricantOils.map((oil, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-40 bg-gray-100">
                  <Image
                    src={oil.image}
                    alt={oil.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-primary text-sm text-center">
                    {oil.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <BrandsCarousel />

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Parts for Your Vehicle?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us with your vehicle details for a quick quote on genuine AC
            parts. Wholesale and retail inquiries welcome.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-semibold transition-all"
            >
              Request Quote
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/services/spare-parts"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all border border-white/20"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
