import Container from "@/components/ui/Container";
import ShowcaseCard from "@/components/ui/ShowcaseCard";

import { showcase } from "@/data/showcase";

export default function ShowcaseSection() {
  return (
    <section
      className="
        overflow-hidden
        bg-[#5E97C7]
        py-24
      "
    >
      <Container>
        {/* TOP INFO */}
        <div className="flex items-start justify-between">
          <span
            className="
              text-2xl
              font-medium
              text-white
            "
          >
            {showcase.number}
          </span>

          <span
            className="
              text-2xl
              font-medium
              text-white
            "
          >
            {showcase.totalProjects}
          </span>
        </div>

        {/* TITLE */}
        <div className="mt-12 text-center">
          <h2
            className="
              text-6xl
              font-semibold
              leading-none
              tracking-[-0.05em]
              text-white
              md:text-8xl
            "
          >
            {showcase.title.normal}{" "}

            <span
              className="
                font-serif
                font-normal
                italic
              "
            >
              {showcase.title.italic}
            </span>
          </h2>
        </div>

        {/* CARD */}
        <ShowcaseCard image={showcase.image} />
      </Container>
    </section>
  );
}