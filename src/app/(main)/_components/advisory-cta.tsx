"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CornerDownRight } from "lucide-react";
import { useContent } from "@/context/content-context";

export const AdvisoryCta = () => {
  const { getContent } = useContent();

  const headline = getContent("cta_headline", "Architect Your Bank's Next Generation Technology");
  const subtext = getContent("cta_subtext", "Connect directly with our principal banking architects to evaluate core modernisation, Temenos migrations, or APRA CPS 234 cybersecurity reviews.");

  return (
    <section className="w-full bg-[#0A0F1D] text-white py-20 lg:py-28 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end pb-12 border-b border-neutral-800">
          
          <div className="lg:col-span-8 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-sky-400 block">
              04 // ADVISORY INITIATION &bull; CONFIDENTIAL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-[-0.02em] text-white leading-tight whitespace-pre-line">
              {headline}
            </h2>
            <p className="text-neutral-400 text-base sm:text-lg max-w-2xl font-light leading-relaxed whitespace-pre-line">
              {subtext}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <Link
              href="/contact"
              className="group flex items-center justify-between w-full px-6 py-4 bg-white text-neutral-950 font-mono text-xs uppercase tracking-widest hover:bg-neutral-100 transition-all"
            >
              <span>Schedule Advisory</span>
              <ArrowRight className="w-4 h-4 text-sky-600 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/join-us"
              className="flex items-center justify-between w-full px-6 py-3.5 bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono text-xs uppercase tracking-widest hover:text-white hover:border-neutral-700 transition-all"
            >
              <span>Join Engineering Team</span>
              <CornerDownRight className="w-3.5 h-3.5 text-neutral-500" />
            </Link>
          </div>

        </div>

        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-neutral-500 uppercase tracking-widest">
          <span>QODES SYSTEMS PTY LTD &bull; MELBOURNE &bull; SYDNEY</span>
          <span>INSTITUTIONAL ASSURANCE // APRA CPS 234</span>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryCta;
