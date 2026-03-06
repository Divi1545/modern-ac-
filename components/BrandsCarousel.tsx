"use client";

import Image from "next/image";
import { partnerBrands } from "@/data/content";

export default function BrandsCarousel() {
  // Double the brands for seamless infinite scroll
  const brands = [...partnerBrands, ...partnerBrands];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-3xl font-bold text-center text-primary mb-4">
          Our Partner Brands
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          We work with the world&apos;s leading automotive air conditioning brands
          to provide you with genuine, high-quality products.
        </p>
      </div>

      {/* Infinite scrolling carousel */}
      <div className="relative">
        <div className="flex animate-scroll">
          {brands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 mx-8 w-32 h-24 bg-white rounded-xl shadow-md flex items-center justify-center p-4 hover:shadow-lg transition-shadow"
            >
              <div className="relative w-24 h-14 shrink-0">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
