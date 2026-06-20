import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import FooterColumn from "@/components/ui/FooterColumn";
import Logo from "@/../public/images/company-logo.svg";

import { footerData } from "@/data/footer";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#F5F5F7]">
      {/* TOP BLUE LINE */}
      <div className="h-6 w-full bg-[#5E97C7]" />

      <Container>
        <div className="py-28">
          {/* MAIN GRID */}
          <div
            className="
              grid
              gap-20
              lg:grid-cols-[1.2fr_1fr_1fr_1fr]
            "
          >
            {/* COMPANY */}
            <div>
              {/* LOGO */}
              <Image src={Logo} alt="Company Logo" className="h-10 w-auto" priority />

              {/* COMPANY NAME */}
              <h2
                className="
                  mt-14
                  text-6xl
                  font-semibold
                  tracking-[-0.04em]
                  text-neutral-900
                "
              >
                {footerData.company.name}
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-10
                  max-w-md
                  text-2xl
                  leading-relaxed
                  text-neutral-600
                "
              >
                {footerData.company.description}
              </p>

              {/* BUTTON */}
              <button
                className="
                  mt-14
                  flex
                  items-center
                  gap-5
                  rounded-full
                  bg-black
                  px-7
                  py-5
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                <span className="text-lg font-medium">
                  Company Deck
                </span>

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-black
                  "
                >
                  <ArrowUpRight size={20} />
                </div>
              </button>
            </div>

            {/* SERVICES */}
            <FooterColumn
              title="Services"
              items={footerData.services}
            />

            {/* QUICK LINKS */}
            <FooterColumn
              title="Quick Links"
              items={footerData.quickLinks}
            />

            {/* SOCIALS */}
            <FooterColumn
              title="Follow Us"
              items={footerData.socials}
            />
          </div>

          {/* BOTTOM */}
          <div
            className="
              mt-28
              flex
              flex-col
              gap-8
              border-t
              border-neutral-300
              pt-10
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* COPYRIGHT */}
            <p
              className="
                text-lg
                text-neutral-600
              "
            >
              © 2026 Kebetulan Serius. All rights reserved.
            </p>

            {/* LEGAL */}
            <div className="flex flex-wrap items-center gap-10">
              {footerData.legal.map((item) => (
                <button
                  key={item}
                  className="
                    text-lg
                    text-neutral-600
                    transition-colors
                    duration-300
                    hover:text-black
                  "
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}