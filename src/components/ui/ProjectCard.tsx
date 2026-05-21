import Image from "next/image";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  className?: string;
}

export default function ProjectCard({
  title,
  category,
  image,
  className = "",
}: ProjectCardProps) {
  return (
    <div className={className}>
      {/* IMAGE */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[28px]
          bg-neutral-200
        "
      >
        <div className="relative aspect-[4/3]">
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

      {/* FOOTER */}
      <div className="mt-4 flex items-center justify-between gap-4">
        <h3
          className="
            text-2xl
            font-medium
            tracking-tight
            text-neutral-900
          "
        >
          {title}
        </h3>

        <span
          className="
            whitespace-nowrap
            text-lg
            text-neutral-400
          "
        >
          {category}
        </span>
      </div>
    </div>
  );
}