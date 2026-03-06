"use client";

import { Building2 } from "lucide-react";

interface ProjectCardProps {
  name: string;
  category: string;
  index: number;
}

const categoryColors: { [key: string]: string } = {
  Commercial: "bg-blue-100 text-blue-700",
  Government: "bg-green-100 text-green-700",
  Healthcare: "bg-red-100 text-red-700",
  Industrial: "bg-orange-100 text-orange-700",
  Education: "bg-purple-100 text-purple-700",
  Banking: "bg-yellow-100 text-yellow-700",
  International: "bg-teal-100 text-teal-700",
};

export default function ProjectCard({ name, category, index }: ProjectCardProps) {
  const colorClass = categoryColors[category] || "bg-gray-100 text-gray-700";

  return (
    <div
      className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
          <Building2 className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">{name}</h4>
          <span className={`text-xs px-3 py-1 rounded-full font-medium ${colorClass}`}>
            {category}
          </span>
        </div>
      </div>
    </div>
  );
}
