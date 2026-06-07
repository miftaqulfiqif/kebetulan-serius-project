import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import ServiceItem from "@/components/ui/ServiceItem";

import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="pb-32 pt-24">
      <Container>
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-28">
          {/* LEFT CONTENT */}
          <div>
            {/* TITLE */}
            <h2
              className="
                text-5xl
                font-semibold
                leading-[1.1]
                tracking-[-0.04em]
                text-neutral-900
                md:text-7xl
              "
            >
              Chosen by{" "}

              <span
                className="
                  font-serif
                  font-normal
                  italic
                "
              >
                Startups, SMEs & Enterprises
              </span>{" "}
              To Build Digital Products That Last.
            </h2>

            {/* SUBTITLE */}
            <div className="mt-16">
              <h3
                className="
                  text-3xl
                  font-semibold
                  tracking-tight
                  text-neutral-900
                "
              >
                We Design, Build & Ship End to End.
              </h3>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-xl
                  leading-relaxed
                  text-neutral-600
                "
              >
                From UI/UX design to full-stack development
                and SaaS delivery, we handle every layer so
                you can focus on growing your business.
                Fast timelines. No fluff. Real results.
              </p>
            </div>

            {/* PRICING */}
            <div className="mt-16">
              <span className="text-sm text-neutral-500">
                Starting From
              </span>

              <div className="mt-3 flex items-end gap-2">
                <span
                  className="
                    text-7xl
                    font-semibold
                    leading-none
                    tracking-tight
                    text-neutral-900
                  "
                >
                  $999
                </span>

                <span className="mb-2 text-lg text-neutral-600">
                  /project
                </span>
              </div>

              <p className="mt-3 text-sm text-neutral-500">
                Flexible pricing · Cancel anytime
              </p>
            </div>

            {/* BUTTON */}
            <button
              className="
                mt-10
                flex
                items-center
                gap-5
                rounded-full
                bg-black
                px-8
                py-5
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:scale-[1.02]
              "
            >
              <span className="text-base font-medium">
                See pricing & availability
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
                <ArrowUpRight size={22} />
              </div>
            </button>
          </div>

          {/* RIGHT SERVICES */}
          <div className="flex flex-col">
            {services.map((service) => (
              <ServiceItem
                key={service}
                title={service}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}