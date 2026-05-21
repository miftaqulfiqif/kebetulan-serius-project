import Image from "next/image";

interface ShowcaseCardProps {
  image: string;
}

export default function ShowcaseCard({
  image,
}: ShowcaseCardProps) {
  return (
    <div
      className="
        relative
        mx-auto
        mt-16
        w-full
        max-w-[620px]
        rounded-[8px]
        bg-[#F7F7F7]
        p-5
        shadow-2xl
      "
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[20px]
        "
      >
        <div className="relative aspect-[4/3]">
          <Image
            src={image}
            alt="Project Showcase"
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