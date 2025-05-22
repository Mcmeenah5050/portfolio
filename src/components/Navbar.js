"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6  py-4 flex justify-between ">
        {/* Logo  */}
        <div className="text-3xl font-extrabold tracking-wide text-white">
          <Link href="/">AKANDE AMINAT</Link>
        </div>
        {/* desktop menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </div>
        {/* mobile button  */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* mobile menu  */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="block text-gray-200 hover:text-[#D3E97A] text-lg"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
