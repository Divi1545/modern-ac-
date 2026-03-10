"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Award, CheckCircle } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/content";

export default function ProjectsPage() {
  const categories = [
    "All",
    "Commercial",
    "Government",
    "Healthcare",
    "Education",
    "Industrial",
    "Banking",
  ];

  const featuredProjects = [
    {
      name: "Duty Free - Katunayake",
      image: "/images/about/0010.jfif",
      description:
        "Complete air conditioning solution for the Katunayake Duty Free complex.",
    },
    {
      name: "SL Navy Maritime - Trinco",
      image: "/images/about/0011.jpg",
      description:
        "Marine air conditioning systems for Sri Lanka Navy vessels.",
    },
    {
      name: "Cool Room Project - Anuradhapura",
      image: "/images/about/0012.JPG",
      description:
        "Industrial refrigeration for the Ministry of Small Enterprise & Development.",
    },
    {
      name: "Base Hospital - Nintavur",
      image: "/images/about/0012.JPG",
      description:
        "Healthcare HVAC solutions ensuring optimal patient comfort.",
    },
    {
      name: "Sayura Ship - SL Navy",
      image: "/images/drive/0014.jpg",
      description:
        "Marine air conditioning systems for the SL Navy Sayura Ship.",
    },
    {
      name: "Airport And Aviation Services Limited",
      image: "/images/drive/0015.jpg",
      description:
        "Air conditioning solutions for Airport and Aviation Services.",
    },
    {
      name: "Ceylon Petroleum Corporation",
      image: "/images/drive/0016.jpg",
      description:
        "HVAC solutions for Ceylon Petroleum Corporation facilities.",
    },
    {
      name: "Asian Hardware Colombo",
      image: "/images/drive/0017.jpg",
      description:
        "Commercial air conditioning installation for Asian Hardware.",
    },
    {
      name: "John Ward - Katunayake",
      image: "/images/drive/0018.jpg",
      description:
        "Complete AC solution for John Ward in Katunayake.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/projects/projects-hero.jpg"
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
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Projects Delivered with Excellence
            </h1>
            <p className="text-xl text-gray-200">
              Modern Airconditioning has successfully delivered a wide range of
              air-conditioning projects across Sri Lanka, built on decades of
              technical expertise and precision execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "35+", label: "Major Projects" },
              { value: "44+", label: "Years Experience" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "7+", label: "Industries Served" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Highlights
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600">
              Showcasing selected projects successfully delivered by Modern Air
              Con (Pvt) Ltd.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">
                      {project.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Images */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Project Snapshots
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              "/images/projects/gallery-1.jpg",
              "/images/projects/gallery-2.jpg",
              "/images/projects/gallery-3.jpg",
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="relative h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <Image
                  src={img}
                  alt={`Project ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Complete Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              All Projects
            </h2>
            <p className="text-gray-600">
              Our project portfolio covers automotive, residential, commercial,
              and industrial air-conditioning solutions.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === "All"
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-primary hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <ProjectCard
                key={idx}
                name={project.name}
                category={project.category}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let us help you with your next air conditioning project. From
            consultation to completion, we deliver excellence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            Discuss Your Project
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
