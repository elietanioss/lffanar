"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    links: { href: string; label: string }[];
    pathname: string;
}

const menuVariants: Variants = {
    closed: {
        opacity: 0,
        x: "100%",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
    open: {
        opacity: 1,
        x: "0%",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const linkVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 },
};

export function MobileMenu({ isOpen, onClose, links, pathname }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={menuVariants}
                    className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-3xl"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
                        <span className="text-sm font-mono uppercase tracking-widest text-slate-400">
                            Menu
                        </span>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                            aria-label="Close menu"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Links */}
                    <nav className="flex-1 flex flex-col justify-center px-10 gap-8">
                        {links.map((link) => {
                            const isActive =
                                pathname === link.href || pathname.startsWith(link.href + "/");

                            return (
                                <motion.div key={link.href} variants={linkVariants}>
                                    <Link
                                        href={link.href}
                                        onClick={onClose}
                                        className={`block text-3xl font-light tracking-tight transition-colors ${isActive ? "text-primary" : "text-slate-300 hover:text-white"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </nav>

                    {/* Footer Decoration */}
                    <div className="p-10 border-t border-white/10">
                        <div className="text-xs text-slate-500 font-mono">
                            LF Students Club • ULFSII
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
