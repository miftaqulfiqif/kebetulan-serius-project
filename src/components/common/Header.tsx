import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

import { navigationItems } from "@/constants/navigation";

export default function Header() {
  return (
    <header className="w-full py-6">
      <Container>
        <div
          className="
            flex
            items-center
            justify-between
            rounded-[32px]
            border
            border-neutral-200
            bg-white
            px-8
            py-5
            shadow-[0_10px_30px_rgba(0,0,0,0.06)]
          "
        >
          {/* LEFT */}
          <Logo />

          {/* CENTER */}
          <nav className="hidden items-center gap-12 lg:flex">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  group
                  flex
                  items-center
                  gap-2
                  text-[17px]
                  font-medium
                  text-neutral-800
                  transition-all
                  duration-300
                  hover:text-black
                "
              >
                <span>{item.label}</span>

                {item.hasArrow && (
                  <div
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-neutral-200
                      transition-all
                      duration-300
                      group-hover:border-black
                    "
                  >
                    <ArrowUpRight
                      size={14}
                      className="rotate-45"
                    />
                  </div>
                )}
              </Link>
            ))}
          </nav>

          {/* RIGHT */}
          <button
            className="
              flex
              items-center
              gap-3
              rounded-full
              bg-black
              px-6
              py-4
              text-white
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:bg-neutral-900
            "
          >
            <span className="text-[16px] font-medium">
              Contact Us
            </span>

            <Phone size={18} />
          </button>
        </div>
      </Container>
    </header>
  );
}