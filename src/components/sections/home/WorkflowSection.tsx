import Container from "@/components/ui/Container";
import WorkflowItem from "@/components/ui/WorkflowItem";

import { workflows } from "@/data/workflows";

export default function WorkflowSection() {
  return (
    <section className="pb-32 pt-24">
      <Container>
        {/* HEADER */}
        <div className="mx-auto max-w-5xl text-center">
          {/* BADGE */}
          <div
            className="
              inline-flex
              rounded-full
              bg-neutral-200
              px-5
              py-3
              text-sm
              font-medium
              text-neutral-700
            "
          >
            Workflow
          </div>

          {/* TITLE */}
          <h2
            className="
              mt-8
              text-5xl
              font-semibold
              leading-[1.05]
              tracking-[-0.04em]
              text-neutral-900
              md:text-7xl
            "
          >
            No Cap. We Build.{" "}

            <span
              className="
                font-serif
                font-normal
                italic
              "
            >
              We Ship. You Win.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-8
              max-w-4xl
              text-xl
              leading-relaxed
              text-neutral-600
            "
          >
            Most founders burn months chasing freelancers or
            stuck waiting on slow agencies. We don&apos;t do
            that. One team, full stack, startup speed —
            from idea to launch-ready in weeks, not quarters.
          </p>
        </div>

        {/* WORKFLOW ITEMS */}
        <div className="mt-24">
          {workflows.map((workflow) => (
            <WorkflowItem
              key={workflow.title}
              step={workflow.step}
              label={workflow.label}
              title={workflow.title}
              description={workflow.description}
              image={workflow.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}