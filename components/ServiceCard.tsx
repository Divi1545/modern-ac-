"use client";

import Link from "next/link";
import Image from "next/image";
import { Wrench, Package, Wind, Bus, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  image: string;
  index: number;
}

const iconMap: { [key: string]: React.ElementType } = {
  Wrench,
  Package,
  Wind,
  Bus,
};

export default function ServiceCard({
  id,
  title,
  shortDescription,
  icon,
  image,
  index,
}: ServiceCardProps) {
  const IconComponent = iconMap[icon] || Wrench;

  return (
    <div
      className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center shadow-lg">
            <IconComponent className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {shortDescription}
        </p>
        <Link
          href={`/services/${id}`}
          className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-accent transition-colors group/link"
        >
          Learn More
          <ArrowRight
            size={16}
            className="group-hover/link:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}
