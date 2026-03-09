"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/content";

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive AC Solutions for Every Need
            </h1>
            <p className="text-xl text-gray-200">
              From automotive AC repair to residential cooling, we offer
              end-to-end air conditioning services backed by 44+ years of
              expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard
                  id={service.id}
                  title={service.title}
                  shortDescription={service.shortDescription}
                  icon={service.icon}
                  image={service.image}
                  index={idx}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote on any of our
            services.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            Get Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
