"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Intelligent Capital Advisory",
      href: "/#",
    },
    {
      label: "Leadership",
      href: "/#",
    },
    {
      label: "Ventures",
      href: "/ventures",
    },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 h-[76px] min-[901px]:h-[123px] w-full bg-[#f6f4f0] transition-all">
      <nav className="relative mx-auto flex h-full w-full max-w-[1040px] items-center justify-between px-5">

        {/* Desktop Left navigation */}
        <div className="hidden min-[901px]:flex items-center gap-[48px]">
          <Link
            href="/about"
            className="whitespace-nowrap font-liberation text-md font-normal leading-none text-[#202020] transition-opacity duration-200 hover:opacity-65"
          >
            About Us
          </Link>

          <Link
            href="#"
            className="whitespace-nowrap font-liberation text-md font-normal leading-none text-[#202020] transition-opacity duration-200 hover:opacity-65"
          >
            Intelligent Capital Advisory
          </Link>
        </div>

        {/* Logo: Centered on desktop, left-aligned on mobile */}
        <div className="flex items-center min-[901px]:absolute min-[901px]:left-1/2 min-[901px]:top-1/2 min-[901px]:-translate-x-1/2 min-[901px]:-translate-y-1/2">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/navbar/logo.png"
              alt="The U Group"
              className="object-contain w-[82px] h-[55px] min-[901px]:w-[102px] min-[901px]:h-[68px]"
              width={102}
              height={68}
              priority
            />
          </Link>
        </div>

        {/* Desktop Right navigation */}
        <div className="hidden min-[901px]:flex items-center gap-[40px]">
          <Link
            href="#"
            className="whitespace-nowrap font-liberation text-md font-normal leading-none text-[#202020] transition-opacity duration-200 hover:opacity-65"
          >
            Leadership
          </Link>

          <Link
            href="/ventures"
            className="whitespace-nowrap font-liberation text-md font-normal leading-none text-[#202020] transition-opacity duration-200 hover:opacity-65"
          >
            Ventures
          </Link>

          <a
            href="#"
            className="flex h-[29px] w-[80px] items-center justify-center bg-[#CEA44D] px-[14px] font-liberation text-[14px] font-normal text-white transition-colors duration-200 hover:bg-[#ad7f20]"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Button (Right aligned) */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="min-[901px]:hidden flex items-center justify-center p-2 text-[#202020] transition-opacity hover:opacity-70 focus:outline-none"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

      </nav>

      {/* Mobile Menu Drawer / Overlay */}
      {open && (
        <div className="fixed inset-x-0 top-[76px] bottom-0 z-40 bg-[#f6f4f0] border-t border-[#eae5dd] min-[901px]:hidden flex flex-col justify-between px-6 py-8 shadow-xl overflow-y-auto">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`font-liberation text-[18px] text-[#202020] transition-opacity duration-200 hover:opacity-65 pb-2 ${
                  pathname === item.href ? "font-bold text-[#CEA44D]" : "font-normal"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-6">
            <a
              href="#"
              onClick={() => setOpen(false)}
              className="flex h-[44px] w-full items-center justify-center bg-[#CEA44D] font-liberation text-[15px] font-normal text-white transition-colors duration-200 hover:bg-[#ad7f20]"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
