"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import VehicleBrandCard from "./VehicleBrandCard";
import {
  vehicleBrandsDetailed,
  brandCategories,
} from "@/data/vehicleBrands";

export default function VehicleBrandsSection() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredBrands = useMemo(() => {
    return vehicleBrandsDetailed.filter((brand) => {
      const matchesSearch =
        search === "" ||
        brand.name.toLowerCase().includes(search.toLowerCase()) ||
        brand.models.some(
          (m) =>
            m.series.toLowerCase().includes(search.toLowerCase()) ||
            m.variants.some((v) =>
              v.name.toLowerCase().includes(search.toLowerCase())
            )
        );

      const matchesCategory =
        activeCategory === "all" || brand.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const totalModels = vehicleBrandsDetailed.reduce(
    (sum, b) => sum + b.models.reduce((s, m) => s + m.variants.length, 0),
    0
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Comprehensive Coverage
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            {vehicleBrandsDetailed.length}+ Vehicle Brands Supported
          </h2>
          <p className="text-gray-600">
            We stock AC components for virtually every vehicle make and model.
            Click on any brand to explore the full range of supported vehicles.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search brands, models, or variants..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={16} className="text-gray-400 shrink-0" />
            <div className="flex gap-1.5 overflow-x-auto pb-1">
              {brandCategories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat.key
                      ? "bg-primary text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-primary">
              {filteredBrands.length}
            </span>{" "}
            brands
            {search && (
              <span>
                {" "}
                matching &quot;{search}&quot;
              </span>
            )}
          </p>
          <div className="hidden sm:flex items-center gap-4 text-xs text-gray-400">
            <span>{vehicleBrandsDetailed.length} brands</span>
            <span>&middot;</span>
            <span>{totalModels}+ models</span>
          </div>
        </div>

        {filteredBrands.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {filteredBrands.map((brand, idx) => (
              <VehicleBrandCard key={brand.slug} brand={brand} index={idx} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-gray-50 rounded-2xl"
          >
            <p className="text-gray-500 text-lg mb-2">No brands found</p>
            <p className="text-gray-400 text-sm">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("all");
              }}
              className="mt-4 text-accent hover:text-accent-dark font-medium text-sm"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
