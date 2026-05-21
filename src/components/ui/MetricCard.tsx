interface MetricCardProps {
  badge: string;
  badgeColor: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function MetricCard({
  badge,
  badgeColor,
  icon: Icon,
  title,
  description,
}: MetricCardProps) {
  return (
    <div
      className="
        rounded-[28px]
        border
        border-neutral-200
        bg-[#F8F8F8]
        p-10
      "
    >
      {/* BADGE */}
      <div
        className={`
          inline-flex
          rounded-full
          px-4
          py-2
          text-sm
          font-medium
          ${badgeColor}
        `}
      >
        {badge}
      </div>

      {/* ICON */}
      <div className="mt-10">
        <Icon
          size={56}
          className="text-neutral-800"
          strokeWidth={1.8}
        />
      </div>

      {/* CONTENT */}
      <div className="mt-10">
        <h3
          className="
            max-w-md
            text-5xl
            font-semibold
            leading-[1.1]
            tracking-[-0.04em]
            text-neutral-900
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-6
            max-w-xl
            text-xl
            leading-relaxed
            text-neutral-600
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}