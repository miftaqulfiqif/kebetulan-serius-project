import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";

import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section className="pb-32 pt-24">
      <Container>
        {/* HEADER */}
        <div className="mb-14 flex items-center justify-between">
          <h2
            className="
              text-6xl
              font-semibold
              tracking-[-0.04em]
              text-neutral-900
            "
          >
            Our{" "}

            <span
              className="
                font-serif
                font-normal
                italic
              "
            >
              Projects
            </span>
          </h2>

          {/* BUTTON */}
          <button
            className="
              flex
              items-center
              gap-4
              rounded-full
              bg-black
              px-6
              py-4
              text-white
              transition-all
              duration-300
              hover:scale-[1.02]
            "
          >
            <span className="text-sm font-medium">
              All Projects
            </span>

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
              "
            >
              <ArrowUpRight size={18} />
            </div>
          </button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-12 gap-6">
          {/* ROW 1 */}
          <ProjectCard {...projects[0]} className="col-span-12 md:col-span-4"/>

          <ProjectCard {...projects[1]} className="col-span-12 md:col-span-8"/>

          {/* ROW 2 */}
          <ProjectCard {...projects[2]} className="col-span-12 md:col-span-4"/>

          <ProjectCard {...projects[3]} className="col-span-12 md:col-span-4"/>

          <ProjectCard {...projects[4]} className="col-span-12 md:col-span-4"/>

          {/* ROW 3 */}
          <ProjectCard {...projects[5]} className="col-span-12 md:col-span-7"/>

          <ProjectCard {...projects[6]} className="col-span-12 md:col-span-5"/>
        </div>
      </Container>
    </section>
  );
}