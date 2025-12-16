"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu } from "lucide-react";
import { MobileMenu } from "../ui/MobileMenu";

const LINKS: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics/registration", label: "Registration" },
  { href: "/academics/courses", label: "Courses" },
  { href: "/academics/masters", label: "Masters" },
  { href: "/your-space", label: "Your Space" },
];

export function Navigation3DOverlay() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center gap-4 rounded-full border border-white/10 bg-black/40 px-4 py-2 shadow-lg shadow-black/70 backdrop-blur-xl">
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative inline-flex items-center"
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative nav-link px-3 py-1.5">{link.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Burger Button */}
        <button
          className="md:hidden p-1 text-slate-300 hover:text-white transition-colors"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        links={LINKS}
        pathname={pathname}
      />
    </>
  );
}



