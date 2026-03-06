"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { navLinks, locations } from "@/data/content";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? "shadow-lg py-2" : "py-4"
      }`}
    >
      {/* Top bar */}
      <div className="hidden lg:block bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${locations.headOffice.phones[0]}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone size={14} />
              {locations.headOffice.phones[0]}
            </a>
            <span className="text-white/60">|</span>
            <a
              href={`mailto:${locations.headOffice.email}`}
              className="hover:text-accent transition-colors"
            >
              {locations.headOffice.email}
            </a>
          </div>
          <div className="text-white/80">
            Denso Japan Authorized Service Dealer in Sri Lanka
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-14 w-56 md:h-16 md:w-64 hover:opacity-90 transition-opacity">
              <Image
                src="/images/logo.png"
                alt="Modern Air Conditioning"
                fill
                className="object-contain object-left"
                priority
                sizes="256px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.children && setActiveDropdown(link.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                    activeDropdown === link.name
                      ? "text-accent"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {link.name}
                  {link.children && <ChevronDown size={16} />}
                </Link>

                {/* Dropdown */}
                {link.children && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100 animate-fadeIn">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-light text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <nav className="container mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => !link.children && setIsOpen(false)}
                  className="block py-3 text-gray-700 font-medium border-b border-gray-100"
                >
                  {link.name}
                </Link>
                {link.children && (
                  <div className="pl-4 bg-gray-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2.5 text-sm text-gray-600 border-b border-gray-100"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 bg-primary text-white text-center py-3 rounded-lg font-semibold"
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </header>
  );
}
