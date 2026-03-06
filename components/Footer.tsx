"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { companyInfo, locations, services, navLinks } from "@/data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <div className="relative h-12 w-52 bg-white rounded-lg p-2">
                <Image
                  src="/images/logo.png"
                  alt="Modern Air Conditioning"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {companyInfo.description.slice(0, 200)}...
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent -mb-2"></span>
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent -mb-2"></span>
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-gray-300 hover:text-accent transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-accent -mb-2"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={20} className="text-accent shrink-0 mt-1" />
                <span className="text-gray-300 text-sm">
                  {locations.headOffice.address}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="text-accent shrink-0" />
                <div className="text-gray-300 text-sm">
                  {locations.headOffice.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone}`}
                      className="block hover:text-accent transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="text-accent shrink-0" />
                <a
                  href={`mailto:${locations.headOffice.email}`}
                  className="text-gray-300 text-sm hover:text-accent transition-colors"
                >
                  {locations.headOffice.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={20} className="text-accent shrink-0" />
                <span className="text-gray-300 text-sm">
                  Mon - Fri: 8:30 AM - 5:30 PM | Sat: 8:30 AM - 1:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Certifications bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <span>Denso Japan Authorized</span>
            <span className="w-1 h-1 bg-accent rounded-full"></span>
            <span>Honeywell USA Agent</span>
            <span className="w-1 h-1 bg-accent rounded-full"></span>
            <span>Subros India Agent</span>
            <span className="w-1 h-1 bg-accent rounded-full"></span>
            <span>44+ Years of Excellence</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-primary-dark">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} {companyInfo.fullName}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
