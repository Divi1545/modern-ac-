"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { VehicleBrand } from "@/data/vehicleBrands";

interface VehicleBrandCardProps {
  brand: VehicleBrand;
  index: number;
}

const categoryColors: Record<string, string> = {
  luxury: "from-amber-500/10 to-amber-600/5 border-amber-200",
  standard: "from-blue-500/10 to-blue-600/5 border-blue-200",
  commercial: "from-green-500/10 to-green-600/5 border-green-200",
  heavy: "from-orange-500/10 to-orange-600/5 border-orange-200",
};

const categoryBadge: Record<string, string> = {
  luxury: "bg-amber-100 text-amber-700",
  standard: "bg-blue-100 text-blue-700",
  commercial: "bg-green-100 text-green-700",
  heavy: "bg-orange-100 text-orange-700",
};

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
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-xl shadow-md">
        {initials}
      </div>
    );
  }

  return (
    <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center p-2 overflow-hidden">
      <img
        src={brand.logo}
        alt={`${brand.name} logo`}
        className="w-full h-full object-contain"
        onError={() => setImgError(true)}
      />
    </div>
  );
}

export default function VehicleBrandCard({ brand, index }: VehicleBrandCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const totalVariants = brand.models.reduce(
    (sum, m) => sum + m.variants.length,
    0
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      viewport={{ once: true }}
      className={`rounded-2xl border bg-gradient-to-br ${categoryColors[brand.category] || categoryColors.standard} overflow-hidden transition-shadow hover:shadow-lg`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center gap-4 p-4 text-left"
      >
        <BrandLogo brand={brand} />

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-bold text-primary text-lg">{brand.name}</h3>
            <span
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider ${categoryBadge[brand.category] || categoryBadge.standard}`}
            >
              {brand.category}
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-0.5">
            {brand.models.length} series &middot; {totalVariants} models
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/products/brands/${brand.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="hidden sm:inline-flex text-xs font-medium text-accent hover:text-accent-dark px-3 py-1.5 rounded-full border border-accent/30 hover:bg-accent/10 transition-all"
          >
            View All
          </Link>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-gray-400"
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-3">
              <div className="h-px bg-gray-200" />

              {brand.models.map((model) => (
                <div key={model.series}>
                  <div className="flex items-center gap-2 mb-2">
                    <ChevronRight size={14} className="text-accent" />
                    <span className="font-semibold text-primary text-sm">
                      {model.series}
                    </span>
                    <span className="text-xs text-gray-400">
                      ({model.variants.length})
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 ml-5">
                    {model.variants.map((variant) => (
                      <VariantCard
                        key={variant.name}
                        name={variant.name}
                        image={variant.image}
                        brandName={brand.name}
                      />
                    ))}
                  </div>
                </div>
              ))}

              <div className="pt-2 sm:hidden">
                <Link
                  href={`/products/brands/${brand.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark"
                >
                  View all {brand.name} models
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function VariantCard({
  name,
  image,
  brandName,
}: {
  name: string;
  image: string;
  brandName: string;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white/80 backdrop-blur rounded-xl p-2 hover:bg-white hover:shadow-md transition-all group cursor-default">
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 mb-1.5">
        {!imgError ? (
          <img
            src={image}
            alt={`${brandName} ${name}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-2">
            <svg
              className="w-8 h-8 text-gray-300 mb-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M5 17h14M3 12l2-2h14l2 2M7 17V12m10 5V12M5 10V8a2 2 0 012-2h10a2 2 0 012 2v2" />
            </svg>
            <span className="text-[9px] text-gray-400 text-center leading-tight">
              {name}
            </span>
          </div>
        )}
      </div>
      <p className="text-xs font-medium text-gray-700 text-center truncate">
        {name}
      </p>
    </div>
  );
}
