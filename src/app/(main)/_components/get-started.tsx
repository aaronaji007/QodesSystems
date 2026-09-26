"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CornerDownRight, Check } from "lucide-react";
import CountUp from "@/components/bits/CountUp";
import { useContent } from "@/context/content-context";

const GetStartedComponent = () => {
  const { getContent } = useContent();

  const pillText = getContent("hero_pill", "APRA CPS 234 & ISO 27001 Certified Architecture");
  const headline = getContent("hero_headline", "Autonomous Core Banking & Critical Financial Infrastructure");
  const subtitle = getContent("hero_subtitle", "Envisioned and engineered by enterprise veterans with two decades of banking delivery. We deploy proprietary AI-driven CBS, modernize SAP Banking architectures, and deliver zero-downtime Temenos T24 upgrades with military-grade cybersecurity assurance.");
  const ctaPrimary = getContent("hero_cta_primary", "Schedule Technical Advisory");
  const ctaSecondary = getContent("hero_cta_secondary", "Explore CBS Architecture");

  const m1Val = getContent("hero_metric_1_val", "20+");
  const m1Label = getContent("hero_metric_1_label", "Years Banking Heritage");
  const m1Desc = getContent("hero_metric_1_desc", "Two decades of proven implementation track record across large banking organizations.");

  const m2Val = getContent("hero_metric_2_val", "3 Suites");
  const m2Label = getContent("hero_metric_2_label", "Core Banking Engines");
  const m2Desc = getContent("hero_metric_2_desc", "Specialized expertise spanning SAP Banking, Temenos T24, and proprietary AI-driven CBS.");

  const m3Val = getContent("hero_metric_3_val", "Zero");
  const m3Label = getContent("hero_metric_3_label", "Unplanned Downtime");
  const m3Desc = getContent("hero_metric_3_desc", "Mission-critical upgrade and technology migration methodology built to eliminate operational pauses.");

  const m4Val = getContent("hero_metric_4_val", "100%");
  const m4Label = getContent("hero_metric_4_label", "Pre-Acceptance Reviews");
  const m4Desc = getContent("hero_metric_4_desc", "Identifying structural design flaws early in project phases, long before user acceptance testing.");

  return (
    <section className="relative w-full bg-[#FFFFFF] text-[#0F172A] border-b border-neutral-200 overflow-hidden font-sans">
      
      {/* 1. TOP METADATA DOSSIER BAR */}
      <div className="w-full border-b border-neutral-200 bg-neutral-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-y-2 text-xs font-mono text-neutral-500">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-neutral-950 font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>QODES // PLATFORM OVERVIEW</span>
            </span>
            <span className="text-neutral-300">/</span>
            <span className="uppercase tracking-widest text-[11px] text-sky-700 font-semibold">
              {pillText}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest text-neutral-500">
            <span className="hidden sm:inline">SYDNEY &bull; MELBOURNE</span>
            <span className="text-neutral-300 hidden sm:inline">|</span>
            <span>SYSTEM_STATUS: NOMINAL</span>
          </div>
        </div>
      </div>

      {/* 2. SWISS ASYMMETRICAL HERO GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Index & System Attributes */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
                00 // INDEX &amp; MANDATE
              </span>
              <span className="font-mono text-sm font-semibold uppercase tracking-wider text-sky-700 block">
                HIGH-CONSEQUENCE SYSTEMS
              </span>
            </div>

            <div className="hidden lg:block pt-8 text-xs font-mono text-neutral-400 space-y-3 border-t border-neutral-200">
              <div className="flex items-center justify-between">
                <span>ESTABLISHED:</span>
                <span className="text-neutral-800 font-semibold">2004 (20+ YRS)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>HEADQUARTERS:</span>
                <span className="text-neutral-800 font-semibold">AUSTRALIA</span>
              </div>
              <div className="flex items-center justify-between">
                <span>TARGET SLA:</span>
                <span className="text-neutral-800 font-semibold">99.999% CONTINUITY</span>
              </div>
              <div className="flex items-center justify-between">
                <span>STANDARDS:</span>
                <span className="text-neutral-800 font-semibold">APRA CPS 234</span>
              </div>
            </div>
          </div>

          {/* Right Column: Massive Headline, Narrative, and Actions */}
          <div className="lg:col-span-9 space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[-0.03em] text-neutral-950 leading-[1.05] whitespace-pre-line">
              {headline}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-neutral-200 items-end">
              <p className="md:col-span-8 text-lg sm:text-xl text-neutral-600 font-light leading-relaxed whitespace-pre-line">
                {subtitle}
              </p>

              <div className="md:col-span-4 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="group flex items-center justify-between px-6 py-4 bg-neutral-950 hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-widest transition-all"
                >
                  <span>{ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4 text-sky-400 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/qodes-core-banking-system"
                  className="flex items-center justify-between px-6 py-3.5 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-800 font-mono text-xs uppercase tracking-widest transition-all"
                >
                  <span>{ctaSecondary}</span>
                  <CornerDownRight className="w-3.5 h-3.5 text-neutral-400" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. SWISS 4-COLUMN METRICS LEDGER */}
      <div className="w-full border-t border-neutral-200 bg-neutral-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-neutral-200 bg-white">
            
            {/* Metric 1 */}
            <div className="p-8 border-r border-b border-neutral-200 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-4">
                  01 // TRACK RECORD
                </span>
                <div className="text-3xl lg:text-4xl font-light text-neutral-950 font-mono tracking-tight mb-2">
                  {m1Val.includes("20") ? <CountUp to={20} suffix="+" duration={1.5} /> : m1Val}
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold mb-2">
                  {m1Label}
                </div>
              </div>
              <p className="text-xs text-neutral-500 font-light leading-relaxed pt-4 border-t border-neutral-100">
                {m1Desc}
              </p>
            </div>

            {/* Metric 2 */}
            <div className="p-8 border-r border-b border-neutral-200 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-4">
                  02 // CORE PLATFORMS
                </span>
                <div className="text-3xl lg:text-4xl font-light text-neutral-950 font-mono tracking-tight mb-2">
                  {m2Val.includes("3") ? <CountUp to={3} suffix=" Suites" duration={1.2} /> : m2Val}
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold mb-2">
                  {m2Label}
                </div>
              </div>
              <p className="text-xs text-neutral-500 font-light leading-relaxed pt-4 border-t border-neutral-100">
                {m2Desc}
              </p>
            </div>

            {/* Metric 3 */}
            <div className="p-8 border-r border-b border-neutral-200 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-4">
                  03 // RESILIENCE
                </span>
                <div className="text-3xl lg:text-4xl font-light text-neutral-950 font-mono tracking-tight mb-2">
                  {m3Val}
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold mb-2">
                  {m3Label}
                </div>
              </div>
              <p className="text-xs text-neutral-500 font-light leading-relaxed pt-4 border-t border-neutral-100">
                {m3Desc}
              </p>
            </div>

            {/* Metric 4 */}
            <div className="p-8 border-r border-b border-neutral-200 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-4">
                  04 // ARCHITECTURE REVIEWS
                </span>
                <div className="text-3xl lg:text-4xl font-light text-neutral-950 font-mono tracking-tight mb-2">
                  {m4Val}
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-sky-800 font-semibold mb-2">
                  {m4Label}
                </div>
              </div>
              <p className="text-xs text-neutral-500 font-light leading-relaxed pt-4 border-t border-neutral-100">
                {m4Desc}
              </p>
            </div>

          </div>

          {/* 4. REGULATORY SPECIFICATION BRACKETS */}
          <div className="mt-8 pt-6 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-neutral-500">
            <span className="text-[11px] uppercase tracking-widest text-neutral-400">
              GOVERNANCE CONFORMANCE:
            </span>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-[11px] text-neutral-700">
              <span>[ APRA CPS 234 ]</span>
              <span>[ ISO/IEC 27001 ]</span>
              <span>[ PCI-DSS v4.0 ]</span>
              <span>[ SWIFT ALLIANCE ]</span>
              <span>[ NPP AUSTRALIA ]</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default GetStartedComponent;
