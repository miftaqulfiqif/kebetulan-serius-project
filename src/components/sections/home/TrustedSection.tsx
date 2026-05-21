import Container from "@/components/ui/Container";
import TechLogo from "@/components/ui/TechLogo";

import { techStacks } from "@/data/tech-stack";

export default function TrustedSection() {
  return (
    <section className="pb-32 pt-24">
      <Container>
        <div className="mx-auto max-w-6xl text-center">
          {/* TITLE */}
          <h2
            className="
              text-4xl
              font-semibold
              leading-tight
              tracking-tight
              text-neutral-900
              md:text-6xl
            "
          >
            Trusted by Innovators,{" "}

            <span
              className="
                font-serif
                font-normal
                italic
              "
            >
              Powered
            </span>{" "}
            by World-Class Tech.
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-xl
              leading-relaxed
              text-neutral-600
            "
          >
            From early-stage startups to growing enterprises -
            we build what scales.
          </p>

          {/* TECH STACK GRID */}
          <div
            className="
              mt-20
              grid
              grid-cols-2
              gap-x-10
              gap-y-12
              md:grid-cols-3
              lg:grid-cols-5
            "
          >
            {techStacks.map((tech) => (
              <div
                key={tech.name}
                className="flex justify-center"
              >
                <TechLogo
                  icon={tech.icon}
                  name={tech.name}
                  color={tech.color}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}