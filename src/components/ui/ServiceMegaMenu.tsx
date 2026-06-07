"use client";

import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { allServices } from "@/data/services";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ServicesMegaMenu({
  open,
  onClose,
}: Props) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-[90]
          bg-black/20 backdrop-blur-sm
          transition-all duration-300
          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      />

      {/* Mega Menu */}
      <div
        className={`
          fixed left-0 right-0
          top-[88px]
          z-[95]
          transition-all duration-300
          ${
            open
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-5 opacity-0 invisible pointer-events-none"
          }
        `}
      >
        <div className="bg-white px-4 pb-4">
          <div className="mx-auto grid max-w-[1800px] grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {allServices.map((service) => (
              <div
                key={service.title}
                className="flex min-h-[380px] flex-col rounded-sm bg-neutral-100 p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-3xl italic leading-tight">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-neutral-600">
                      {service.subtitle}
                    </p>
                  </div>

                  <button className="flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:bg-black hover:text-white">
                    <ArrowUpRight size={18} />
                  </button>
                </div>

                <div className="mt-auto flex flex-wrap gap-3">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-4 py-2 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}