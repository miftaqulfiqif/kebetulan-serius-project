import { ArrowUpRight } from "lucide-react";

interface ServiceItemProps {
  title: string;
}

export default function ServiceItem({
  title,
}: ServiceItemProps) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        border-b
        border-neutral-300
        py-7
      "
    >
      <div className="flex items-center gap-5">
        <ArrowUpRight
          size={20}
          className="text-neutral-700"
        />

        <span
          className="
            text-xl
            font-medium
            tracking-tight
            text-neutral-900
          "
        >
          {title}
        </span>
      </div>
    </div>
  );
}