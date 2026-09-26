"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronRight } from "lucide-react";
import CountUp from "@/components/bits/CountUp";

const GetStartedComponent = () => {
  return (
    <section className="relative w-full bg-white pt-16 pb-20 border-b border-slate-200/80 overflow-hidden">
      {/* Precision Background Pattern */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Subtle Radial Glow */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-30 blur-3xl rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(2, 132, 199, 0.25) 0%, rgba(255, 255, 255, 0) 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Institutional Accreditation Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono uppercase tracking-wider text-slate-700 shadow-sm mb-8 transition-colors hover:border-sky-300">
          <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
          <span>APRA CPS 234 &amp; ISO 27001 Certified Architecture</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        </div>

        {/* Display Headline */}
        <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6">
          Autonomous Core Banking &amp; Critical Financial Infrastructure
        </h1>

        {/* Subtitle / Positioning Statement */}
        <p className="max-w-2xl text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-10">
          Envisioned and engineered by enterprise veterans with two decades of banking delivery. We deploy proprietary AI-driven CBS, modernize SAP Banking architectures, and deliver zero-downtime Temenos T24 upgrades with military-grade cybersecurity assurance.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-slate-900 text-white font-medium text-sm transition-all duration-200 hover:bg-slate-800 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Schedule Technical Advisory</span>
            <ArrowRight className="w-4 h-4 text-sky-400" />
          </Link>

          <Link
            href="/qodes-core-banking-system"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium text-sm transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900"
          >
            <span>Explore CBS Architecture</span>
          </Link>
        </div>

        {/* Verified Capability Pillars */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-slate-200/80 text-left">
          <div className="p-4 rounded-lg bg-slate-50/50 border border-slate-100">
            <div className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight font-mono">
              <CountUp to={20} suffix="+" duration={1.5} />
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-500 font-medium mt-1">
              Years Banking Heritage
            </div>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Two decades of proven implementation track record across large banking organizations.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50/50 border border-slate-100">
            <div className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight font-mono">
              <CountUp to={3} suffix=" Suites" duration={1.2} />
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-500 font-medium mt-1">
              Core Banking Engines
            </div>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Specialized expertise spanning SAP Banking, Temenos T24, and proprietary AI-driven CBS.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50/50 border border-slate-100">
            <div className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight font-mono">
              Zero
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-500 font-medium mt-1">
              Unplanned Downtime
            </div>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Mission-critical upgrade and technology migration methodology built to eliminate operational pauses.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50/50 border border-slate-100">
            <div className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight font-mono">
              100%
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-500 font-medium mt-1">
              Pre-Acceptance Reviews
            </div>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Identifying structural design flaws early in project phases, long before user acceptance testing.
            </p>
          </div>
        </div>

        {/* Regulatory Standards Banner */}
        <div className="w-full mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 font-mono uppercase tracking-wider text-slate-400">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>Institutional Governance Frameworks:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-[11px] text-slate-600">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              APRA CPS 234
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              ISO/IEC 27001
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              PCI-DSS v4.0
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              SWIFT Alliance Compliant
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              NPP Australia Ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedComponent;
