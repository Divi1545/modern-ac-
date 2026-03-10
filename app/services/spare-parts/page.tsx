"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Package, Shield, Truck, Award } from "lucide-react";
import BrandsCarousel from "@/components/BrandsCarousel";
import { services, productCategories, partnerBrands } from "@/data/content";

export default function SparePartsPage() {
  const service = services.find((s) => s.id === "spare-parts")!;

  const benefits = [
    {
      icon: Package,
      title: "Genuine OEM Parts",
      description: "Only authentic parts from certified manufacturers.",
    },
    {
      icon: Shield,
      title: "Premium Warranty",
      description: "All parts backed by comprehensive warranty coverage.",
    },
    {
      icon: Truck,
      title: "Island-wide Delivery",
      description: "Fast delivery to dealers across Sri Lanka.",
    },
    {
      icon: Award,
      title: "Competitive Pricing",
      description: "Best prices for wholesale and retail customers.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/about/002.jpg"
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

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Product Categories
            </h2>
            <p className="text-gray-600">
              We stock a comprehensive range of auto AC components for all makes and
              models.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {productCategories.map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all group cursor-default"
              >
                <div className="relative h-28 bg-gray-100">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  />
                </div>
                <div className="p-3 text-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="font-medium text-sm">{category.name}</span>
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
            Need Auto AC Parts?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for competitive pricing on genuine auto AC spare parts.
            Wholesale and retail inquiries welcome.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            Request Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
