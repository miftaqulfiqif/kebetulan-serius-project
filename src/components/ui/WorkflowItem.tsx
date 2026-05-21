import Image from "next/image";

import { ArrowDown } from "lucide-react";

interface WorkflowItemProps {
  step: string;
  label: string;
  title: string;
  description: string;
  image: string;
}

export default function WorkflowItem({
  step,
  label,
  title,
  description,
  image,
}: WorkflowItemProps) {
  return (
    <div
      className="
        relative
        grid
        gap-12
        py-16
        lg:grid-cols-[220px_40px_1fr_360px]
      "
    >
      {/* LEFT LABEL */}
      <div className="flex flex-col items-start">
        <div
          className="
            rounded-full
            bg-neutral-200
            px-4
            py-2
            text-sm
            font-medium
            text-neutral-700
          "
        >
          {step}
        </div>

        <h3
          className="
            mt-8
            font-serif
            text-5xl
            font-semibold
            italic
            leading-tight
            tracking-tight
            text-neutral-900
          "
        >
          {label}
        </h3>
      </div>

      {/* TIMELINE */}
      <div className="relative hidden lg:flex lg:justify-center">
        <div className="w-px bg-neutral-300" />

        <div
          className="
            absolute
            top-0
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-black
            text-white
          "
        >
          <ArrowDown size={18} />
        </div>
      </div>

      {/* CONTENT */}
      <div>
        <h4
          className="
            max-w-2xl
            text-5xl
            font-semibold
            leading-[1.1]
            tracking-[-0.04em]
            text-neutral-900
          "
        >
          {title}
        </h4>

        <p
          className="
            mt-8
            max-w-2xl
            text-xl
            leading-relaxed
            text-neutral-600
          "
        >
          {description}
        </p>
      </div>

      {/* IMAGE */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          bg-[#A8B0BD]
          p-3
          shadow-xl
        "
      >
        <div
          className="
            relative
            aspect-[4/3]
            overflow-hidden
            rounded-[20px]
          "
        >
          <Image
            src={image}
            alt={title}
            fill
            className="
              object-cover
              transition-transform
              duration-500
              hover:scale-105
            "
          />
        </div>
      </div>
    </div>
  );
}