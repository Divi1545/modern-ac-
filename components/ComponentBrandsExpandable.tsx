"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, CheckCircle } from "lucide-react";
import { vehicleBrandsDetailed } from "@/data/vehicleBrands";
import type { VehicleBrand } from "@/data/vehicleBrands";

const MAIN_COMPONENTS = [
  { id: "compressor", name: "Compressor", color: "bg-primary text-white" },
  { id: "condenser", name: "Condenser", color: "bg-gray-50 text-primary" },
  { id: "evaporator", name: "Evaporator", color: "bg-accent text-white" },
];

function BrandLogo({ brand }: { brand: VehicleBrand }) {
  const [imgError, setImgError] = useState(false);

  if (imgError || !brand.logo) {
    const initials = brand.name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    return (
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0">
        {initials}
      </div>
    );
  }

  return (
    <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center p-1.5 overflow-hidden shrink-0">
      <img
        src={brand.logo}
        alt={`${brand.name} logo`}
        className="w-full h-full object-contain"
        onError={() => setImgError(true)}
      />
    </div>
  );
}

export default function ComponentBrandsExpandable() {
  const [expandedComponent, setExpandedComponent] = useState<string | null>(
    null
  );
  const [expandedBrand, setExpandedBrand] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Component Categories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            AC Spare Parts
          </h2>
          <p className="text-gray-600">
            Select a component to browse vehicle brands and models we support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {MAIN_COMPONENTS.map((comp) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className={`rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all ${
                expandedComponent === comp.id ? "ring-2 ring-accent ring-offset-2" : ""
              }`}
            >
              <button
                onClick={() => {
                  setExpandedComponent(expandedComponent === comp.id ? null : comp.id);
                  setExpandedBrand(null);
                }}
                className={`w-full flex items-center gap-4 p-5 text-left ${comp.color}`}
              >
                <CheckCircle
                  className={`shrink-0 ${comp.id === "condenser" ? "text-accent" : ""}`}
                  size={28}
                />
                <span className="font-bold text-lg">{comp.name}</span>
                <motion.div
                  animate={{ rotate: expandedComponent === comp.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-auto"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedComponent === comp.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-200 bg-gray-50 p-4 max-h-[70vh] overflow-y-auto">
                      <p className="text-sm text-gray-500 mb-3">
                        Select a brand to view models
                      </p>
                      <div className="space-y-2">
                        {vehicleBrandsDetailed.map((brand) => (
                          <div
                            key={brand.slug}
                            className="rounded-xl border bg-white overflow-hidden"
                          >
                            <button
                              onClick={() =>
                                setExpandedBrand(
                                  expandedBrand === brand.slug ? null : brand.slug
                                )
                              }
                              className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 transition-colors"
                            >
                              <BrandLogo brand={brand} />
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-primary">
                                  {brand.name}
                                </h4>
                                <p className="text-xs text-gray-500">
                                  {brand.models.length} series ·{" "}
                                  {brand.models.reduce(
                                    (s, m) => s + m.variants.length,
                                    0
                                  )}{" "}
                                  models
                                </p>
                              </div>
                              <motion.div
                                animate={{
                                  rotate: expandedBrand === brand.slug ? 90 : 0,
                                }}
                                transition={{ duration: 0.2 }}
                              >
                                <ChevronRight size={18} className="text-gray-400" />
                              </motion.div>
                            </button>

                            <AnimatePresence>
                              {expandedBrand === brand.slug && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-4 pb-4 pt-2 border-t border-gray-100 bg-gray-50/50">
                                    {brand.models.map((model) => (
                                      <div key={model.series} className="mb-3">
                                        <div className="flex items-center gap-2 mb-2">
                                          <ChevronRight
                                            size={12}
                                            className="text-accent shrink-0"
                                          />
                                          <span className="font-medium text-primary text-sm">
                                            {model.series}
                                          </span>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5 ml-4">
                                          {model.variants.map((v) => (
                                            <span
                                              key={v.name}
                                              className="text-xs px-2 py-1 bg-white rounded-lg border border-gray-100 text-gray-600"
                                            >
                                              {v.name}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
