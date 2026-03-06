"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ChevronDown,
  ExternalLink,
  Grid3X3,
  List,
} from "lucide-react";
import { vehicleBrandsDetailed } from "@/data/vehicleBrands";

function BrandLogo({
  logo,
  name,
}: {
  logo: string;
  name: string;
}) {
  const [err, setErr] = useState(false);
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (err) {
    return (
      <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-3xl shadow-lg">
        {initials}
      </div>
    );
  }

  return (
    <div className="w-24 h-24 rounded-3xl bg-white shadow-lg flex items-center justify-center p-3 overflow-hidden">
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-full h-full object-contain"
        onError={() => setErr(true)}
      />
    </div>
  );
}

function VariantImage({
  image,
  name,
  brandName,
}: {
  image: string;
  name: string;
  brandName: string;
}) {
  const [err, setErr] = useState(false);

  if (err) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
        <svg
          className="w-12 h-12 text-gray-300 mb-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M5 17h14M3 12l2-2h14l2 2M7 17V12m10 5V12M5 10V8a2 2 0 012-2h10a2 2 0 012 2v2" />
        </svg>
        <span className="text-xs text-gray-400 text-center">{name}</span>
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={`${brandName} ${name}`}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      onError={() => setErr(true)}
    />
  );
}

export default function BrandDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const brand = vehicleBrandsDetailed.find((b) => b.slug === slug);
  const [expandedSeries, setExpandedSeries] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Brand Not Found
          </h1>
          <p className="text-gray-500 mb-8">
            The brand you are looking for does not exist.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const totalVariants = brand.models.reduce(
    (sum, m) => sum + m.variants.length,
    0
  );

  const categoryLabel: Record<string, string> = {
    luxury: "Luxury Vehicle",
    standard: "Standard Vehicle",
    commercial: "Commercial Vehicle",
    heavy: "Heavy Machinery",
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-black" />
        </div>
        <div className="absolute top-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors text-sm"
            >
              <ArrowLeft size={16} />
              Back to Products
            </Link>

            <div className="flex items-center gap-6">
              <BrandLogo logo={brand.logo} name={brand.name} />
              <div>
                <span className="text-accent/80 text-xs font-semibold uppercase tracking-widest">
                  {categoryLabel[brand.category]}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mt-1">
                  {brand.name}
                </h1>
                <p className="text-gray-300 mt-2">
                  {brand.models.length} model series &middot; {totalVariants}{" "}
                  variants &middot; Full AC component support
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-6">
              <div>
                <span className="text-2xl font-bold text-primary">
                  {brand.models.length}
                </span>
                <span className="text-gray-500 text-sm ml-1">Series</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-primary">
                  {totalVariants}
                </span>
                <span className="text-gray-500 text-sm ml-1">Models</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-accent">3</span>
                <span className="text-gray-500 text-sm ml-1">
                  AC Part Categories
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white rounded-lg p-1 border">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-all ${viewMode === "grid" ? "bg-primary text-white" : "text-gray-400 hover:text-gray-600"}`}
              >
                <Grid3X3 size={16} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-all ${viewMode === "list" ? "bg-primary text-white" : "text-gray-400 hover:text-gray-600"}`}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {brand.models.map((model, idx) => {
              const isExpanded =
                expandedSeries === model.series || expandedSeries === null;

              return (
                <motion.div
                  key={model.series}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedSeries(
                        expandedSeries === model.series
                          ? null
                          : model.series
                      )
                    }
                    className="w-full flex items-center justify-between p-6 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">
                          {idx + 1}
                        </span>
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-primary">
                          {brand.name} {model.series}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          {model.variants.length} variant
                          {model.variants.length !== 1 ? "s" : ""} available
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={20} className="text-gray-400" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          {viewMode === "grid" ? (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                              {model.variants.map((variant, vIdx) => (
                                <motion.div
                                  key={variant.name}
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: vIdx * 0.05,
                                  }}
                                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
                                >
                                  <div className="relative aspect-[4/3] overflow-hidden">
                                    <VariantImage
                                      image={variant.image}
                                      name={variant.name}
                                      brandName={brand.name}
                                    />
                                  </div>
                                  <div className="p-3">
                                    <p className="font-semibold text-primary text-sm text-center">
                                      {variant.name}
                                    </p>
                                    <p className="text-[10px] text-gray-400 text-center mt-0.5">
                                      AC Parts Available
                                    </p>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          ) : (
                            <div className="space-y-2">
                              {model.variants.map((variant, vIdx) => (
                                <motion.div
                                  key={variant.name}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: vIdx * 0.03,
                                  }}
                                  className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-all group"
                                >
                                  <div className="w-20 h-14 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                                    <VariantImage
                                      image={variant.image}
                                      name={variant.name}
                                      brandName={brand.name}
                                    />
                                  </div>
                                  <div className="flex-1">
                                    <p className="font-semibold text-primary">
                                      {brand.name} {variant.name}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                      Compressor &middot; Condenser &middot;
                                      Evaporator available
                                    </p>
                                  </div>
                                  <Link
                                    href="/contact"
                                    className="text-xs font-medium text-accent hover:text-accent-dark flex items-center gap-1"
                                  >
                                    Enquire
                                    <ExternalLink size={12} />
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need {brand.name} AC Parts?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Contact us with your vehicle model and we will provide a quick quote
            for genuine AC components with premium warranty.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-full font-semibold transition-all"
            >
              Get a Quote
              <ExternalLink size={18} />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all border border-white/20"
            >
              <ArrowLeft size={18} />
              All Brands
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
