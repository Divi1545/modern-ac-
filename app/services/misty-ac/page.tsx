"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Volume2,
  Leaf,
  Settings,
  Thermometer,
  Wind,
} from "lucide-react";
import { services } from "@/data/content";

export default function MistyACPage() {
  const service = services.find((s) => s.id === "misty-ac")!;

  const features = [
    { icon: Zap, title: "Power Saving", description: "Up to 60% energy efficient" },
    { icon: Volume2, title: "Quiet Operation", description: "Ultra-silent performance" },
    { icon: Leaf, title: "Eco-Friendly", description: "R410A non-ozone depleting" },
    { icon: Settings, title: "Easy Setup", description: "Quick installation" },
    { icon: Thermometer, title: "Auto Temperature", description: "Smart climate control" },
    { icon: Wind, title: "Air Swing", description: "Automatic vane position" },
  ];

  const products = [
    {
      name: "Inverter Split AC - 12,000 BTU",
      description: "Perfect for bedrooms and small living spaces",
      features: ["Inverter Technology", "Energy Efficient", "Quiet Operation"],
      image: "/images/misty/007_008.jpg",
    },
    {
      name: "Inverter Split AC - 24,000 BTU",
      description: "Ideal for large rooms and open-plan spaces",
      features: ["High Capacity", "Fast Cooling", "Smart Controls"],
      image: "/images/misty/007_008.jpg",
    },
  ];

  const commercialSolutions = [
    "VRV Systems for large buildings",
    "Ducted air conditioning",
    "Ceiling cassette systems",
    "Multi-split systems",
    "Chiller systems",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/misty/misty-hero.jpg"
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
              Residential & Commercial AC Solutions
            </h1>
            <p className="text-xl text-gray-200">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Why Misty
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Premium Features
            </h2>
            <p className="text-gray-600">
              Misty air conditioners combine cutting-edge technology with energy
              efficiency for the perfect indoor climate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <feature.icon size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              For Homes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Residential Solutions
            </h2>
            <p className="text-gray-600">
              Enjoy comfort and energy savings with our inverter split air
              conditioners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((f, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Solutions */}
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
                For Businesses
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                Commercial Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Misty provides comprehensive air conditioning solutions for light
                commercial and larger commercial buildings, including VRV, ducted,
                and ceiling cassette systems.
              </p>

              <div className="space-y-4">
                {commercialSolutions.map((solution, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-accent" size={20} />
                    <span className="text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/about/009.jpg"
                alt="Commercial AC Solutions"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Cool Your Space with Misty
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation and quote on residential or
            commercial air conditioning solutions.
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
