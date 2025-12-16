import type { Metadata } from "next";
import Image from "next/image";
import { Orbitron, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThreeRoot } from "../components/three/ThreeRoot";
import { Navigation3DOverlay } from "../components/three/Navigation3DOverlay";

const headingFont = Orbitron({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Fira_Code({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LF Students Club ULFSII",
  description:
    "A hyper‑geometric 3D experience for the Lebanese Forces Students Club – LU Faculty of Sciences II (Fanar).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} app-shell antialiased`}
      >
        {/* Persistent 3D canvas layer */}
        <ThreeRoot />

        {/* 2.5D overlay UI that sits on top of the canvas */}
        <div className="app-shell__content">
          <header className="pointer-events-auto fixed inset-x-0 top-0 z-20 flex items-center justify-between px-4 py-4 sm:px-8 lg:px-16">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <Image
                  src="/lf-logo.png"
                  alt="LF Students Club logo"
                  width={36}
                  height={36}
                  className="h-8 w-8"
                  priority
                />
              </div>
              <div className="hidden text-xs font-mono uppercase tracking-[0.18em] text-slate-400 sm:block">
                LF Students Club • ULFSII
              </div>
            </div>
            <Navigation3DOverlay />
          </header>

          <main className="app-shell__page">{children}</main>
        </div>
      </body>
    </html>
  );
}
