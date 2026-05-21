interface FooterColumnProps {
  title: string;
  items: string[];
}

export default function FooterColumn({
  title,
  items,
}: FooterColumnProps) {
  return (
    <div>
      {/* TITLE */}
      <h3
        className="
          font-serif
          text-5xl
          font-semibold
          italic
          tracking-tight
          text-neutral-900
        "
      >
        {title}
      </h3>

      {/* ITEMS */}
      <div className="mt-12 flex flex-col gap-8">
        {items.map((item) => (
          <button
            key={item}
            className="
              w-fit
              text-left
              text-2xl
              font-medium
              text-neutral-700
              transition-colors
              duration-300
              hover:text-black
            "
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}