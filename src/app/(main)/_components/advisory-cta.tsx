"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const AdvisoryCta = () => {
  return (
    <section className="w-full bg-slate-900 text-white py-20 relative overflow-hidden">
      {/* Background Accent Lines */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/60 text-sky-400 text-xs font-mono uppercase tracking-wider mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Confidential Banking Advisory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
              Modernize Your Core Banking Architecture With Absolute Precision
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Connect directly with our principal banking architects and cybersecurity officers in Melbourne. We assess legacy debt, architect next-gen CBS implementations, and audit threat surfaces.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto lg:min-w-[240px]">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-sky-600/30"
            >
              <span>Schedule Advisory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/join-us"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200"
            >
              <span>Join Engineering Team</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryCta;
