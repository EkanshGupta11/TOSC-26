"use client";

import React, { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface PageShellProps {
  children: ReactNode;
  showVideo?: boolean;
  className?: string;
}

export function PageShell({
  children,
  showVideo = true,
  className = "",
}: PageShellProps) {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* BACKGROUND VIDEO & AMBIENT MESH */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {showVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        )}

        {/* Ambient Dark Gradient & Glass Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        <div className="absolute -left-[10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute -right-[10%] top-[40%] h-[600px] w-[600px] rounded-full bg-white/5 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* FLOATING NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT AREA */}
      <main className={`relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6 md:pt-32 ${className}`}>
        {children}
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
