import Image from "next/image";

import { Star, Phone } from "lucide-react";

import Container from "@/components/ui/Container";

import { heroData } from "@/data/hero";
import Flag from "@/../public/icons/flag.svg";
import BookACallImage from "@/../public/images/book-a-call.jpg";
import WhatsappIcon from "@/../public/icons/whatsapp.svg";

export default function HeroSection() {
  return (
    <section  className="relative overflow-hidden pb-24 pt-16 md:pb-32 md:pt-24">
      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* BADGE */}
          <div className=" mb-8 inline-flex items-center h-6 gap-2.5">
            <Image src={Flag} alt="Flag Icon" className="w-auto items-center gap-3 rounded-full border-neutral-200 bg-white px-2 py-1 shadow-xs" />
            
            <span className="text-[24px] font-medium text-neutral-700">
              {heroData.badge}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-neutral-900 md:text-7xl lg:text-[92px]">
            {heroData.title.normal}{" "}

            <span className="font-serif font-normal italic">
              {heroData.title.italic}
            </span>

            <br />

            <span className="font-serif font-normal italic">
              {heroData.title.italicSecond}
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-neutral-600 md:text-2xl">
            {heroData.description}
          </p>

          {/* RATING */}
          <div className="mt-12 flex flex-col items-center gap-3">
            <div className="flex items-center gap-4">
              <span className="text-5xl font-semibold tracking-tight text-neutral-900">
                {heroData.rating.score}
              </span>

              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={20} className="fill-orange-400 text-orange-400"/>
                ))}
              </div>
            </div>

            <span className="text-lg text-neutral-600">
              {heroData.rating.total}
            </span>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
            {/* BOOK CALL */}
            <button className="group flex items-center gap-4 rounded-full bg-black px-7 py-2 text-white shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <span className="text-base font-medium">
                Book a call
              </span>

              <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white/20">
                <Image src={BookACallImage} alt="Avatar" fill className="object-cover w-6 h-6"/>
              </div>
            </button>

            {/* WHATSAPP */}
            <button className="flex items-center gap-4 rounded-full bg-white px-7 py-2 text-neutral-900 shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white/20">
                <Image src={WhatsappIcon} alt="WhatsApp Icon" fill className="object-cover "/>
              </div>

              <span className="text-base font-medium">
                Let&apos;s Talk
              </span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}