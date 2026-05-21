interface TechLogoProps {
  icon: React.ElementType;
  name: string;
  color: string;
}

export default function TechLogo({
  icon: Icon,
  name,
  color,
}: TechLogoProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        opacity-80
        transition-all
        duration-300
        hover:scale-105
        hover:opacity-100
      "
    >
      <Icon
        size={42}
        style={{ color }}
      />

      <span
        className="
          text-2xl
          font-semibold
          tracking-tight
          text-neutral-700
        "
      >
        {name}
      </span>
    </div>
  );
}