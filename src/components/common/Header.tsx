"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Logo from "@/../public/images/company-logo.svg";
import CallCalling from "@/../public/icons/call-calling.svg";

import { navigationItems } from "@/constants/navigation";
import ServicesMegaMenu from "../ui/ServiceMegaMenu";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (label: string) => {
    setActiveMenu((prev) => (prev === label ? null : label));
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white">
        <div className="mx-3 flex items-center justify-between gap-16 bg-white px-16 py-4">
          {/* LEFT */}
          <div className="flex flex-col items-start justify-center gap-2.5 border-r-2 border-[#CDCDCD] pr-8">
            <Image
              src={Logo}
              alt="Company Logo"
              className="h-8 w-auto"
              priority
            />
          </div>

          {/* CENTER */}
          <nav className="hidden items-center gap-12 lg:flex">
            {navigationItems.map((item) => {
              if (item.hasMegaMenu) {
                const isOpen = activeMenu === item.label;

                return (
                  <button
                    key={item.label}
                    onClick={() => toggleMenu(item.label)}
                    className="group flex items-center gap-2 text-[17px] font-medium text-neutral-800 transition-all duration-300 hover:text-black"
                  >
                    <span>{item.label}</span>

                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 transition-all duration-300 group-hover:border-black">
                      <ArrowUpRight
                        size={14}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-135" : "rotate-90"
                        }`}
                      />
                    </div>
                  </button>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-2 text-[17px] font-medium text-neutral-800 transition-all duration-300 hover:text-black"
                >
                  <span>{item.label}</span>

                  {item.hasArrow && (
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-200 transition-all duration-300 group-hover:border-black">
                      <ArrowUpRight size={14} className="rotate-90" />
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT */}
          <button className="flex items-center gap-3 rounded-full bg-black px-6 py-4 text-white transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-900">
            <span className="text-[16px] font-medium">
              Contact Us
            </span>

            <Image
              src={CallCalling}
              alt="Call Icon"
              className="h-5 w-auto"
            />
          </button>
        </div>
      </header>

      <ServicesMegaMenu
        open={activeMenu === "Services"}
        onClose={closeMenu}
      />
    </>
  );
}