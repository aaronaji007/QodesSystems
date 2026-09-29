"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2, Building, Sparkles } from "lucide-react";
import CountUp from "@/components/bits/CountUp";
import { useContent } from "@/context/content-context";

const GetStartedComponent = () => {
  const { getContent } = useContent();

  const pillText = getContent("hero_pill", "APRA CPS 234 & ISO 27001 Certified Banking Architecture");
  const headline = getContent("hero_headline", "High-Consequence Financial Architecture. Built For The Next 20 Years.");
  const subtitle = getContent("hero_subtitle", "Envisioned and engineered by enterprise veterans with two decades of banking delivery. We deploy proprietary AI-driven CBS, modernize SAP Banking architectures, and deliver zero-downtime Temenos T24 upgrades with military-grade cybersecurity assurance.");
  const ctaPrimary = getContent("hero_cta_primary", "Schedule Consultation");
  const ctaSecondary = getContent("hero_cta_secondary", "Explore Core Banking");

  const m1Val = getContent("hero_metric_1_val", "20+");
  const m1Label = getContent("hero_metric_1_label", "Years Heritage");
  const m1Desc = getContent("hero_metric_1_desc", "Over two decades of proven implementation track record across Tier-1 institutions.");

  const m2Val = getContent("hero_metric_2_val", "3 Suites");
  const m2Label = getContent("hero_metric_2_label", "Core Banking Engines");
  const m2Desc = getContent("hero_metric_2_desc", "Specialized delivery across SAP Banking, Temenos T24, and AI-orchestrated CBS.");

  const m3Val = getContent("hero_metric_3_val", "Zero");
  const m3Label = getContent("hero_metric_3_label", "Unplanned Downtime");
  const m3Desc = getContent("hero_metric_3_desc", "Mission-critical upgrade methodology built to eliminate operational pauses.");

  const m4Val = getContent("hero_metric_4_val", "100%");
  const m4Label = getContent("hero_metric_4_label", "Pre-Acceptance QA");
  const m4Desc = getContent("hero_metric_4_desc", "Identifying structural architectural risks early, long before user acceptance testing.");

  return (
    <section className="relative w-full bg-[#FAF9F6] text-[#0F172A] border-b border-stone-200/80 overflow-hidden font-sans">
      
      {/* 1. EDITORIAL CURATOR HEADER RIBBON */}
      <div className="w-full border-b border-stone-200/70 bg-[#F4F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-y-2 text-xs text-stone-600">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-stone-900 font-semibold tracking-wider uppercase text-[11px]">
              <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
              <span>QODES SYSTEMS</span>
            </span>
            <span className="text-stone-300">/</span>
            <span className="text-stone-700 font-medium text-[11px] tracking-wide">
              {pillText}
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-stone-500 font-medium">
            <span>Sydney &bull; Melbourne &bull; Global Operations</span>
          </div>
        </div>
      </div>

      {/* 2. GALLERY HERO: ASYMMETRIC VISUAL PLATE & EDITORIAL PROSE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 text-sky-800 text-xs font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Enterprise Financial Systems &amp; Advisory</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1] text-balance">
              {headline}
            </h1>

            <p className="text-lg sm:text-xl text-stone-600 font-normal leading-relaxed text-balance max-w-2xl">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-medium text-sm transition-all shadow-sm hover:shadow-md"
              >
                <span>{ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/qodes-core-banking-system"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-medium text-sm transition-all shadow-sm"
              >
                <span>{ctaSecondary}</span>
              </Link>
            </div>

            {/* Quick Assurance Badges */}
            <div className="pt-8 border-t border-stone-200/80 flex flex-wrap items-center gap-6 text-xs text-stone-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>APRA CPS 234 Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>ISO/IEC 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Downtime SLA</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Exhibition Visual Plate */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-200/90 bg-white group">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
                  alt="Financial Architecture"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
              </div>

              {/* Floating Museum Plaque */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-lg space-y-1.5">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-sky-700 font-semibold">
                  <span>Plate 01 / Financial Infrastructure</span>
                  <span>Sydney Headquarters</span>
                </div>
                <h3 className="text-base font-semibold text-stone-900">
                  Autonomous Core Banking &amp; Security Vault
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Mission-critical financial technology orchestrating real-time clearing, SWIFT ISO 20022 compliance, and institutional asset safety.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. SCULPTURAL METRICS EXHIBIT */}
      <div className="w-full border-t border-stone-200/80 bg-[#F4F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Metric 1 */}
            <div className="p-8 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-700 block mb-3">
                  Heritage &amp; Delivery
                </span>
                <div className="text-4xl lg:text-5xl font-light text-stone-900 tracking-tight mb-2">
                  {m1Val.includes("20") ? <CountUp to={20} suffix="+" duration={1.5} /> : m1Val}
                </div>
                <div className="text-sm font-semibold text-stone-800 mb-2">
                  {m1Label}
                </div>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed pt-4 border-t border-stone-100">
                {m1Desc}
              </p>
            </div>

            {/* Metric 2 */}
            <div className="p-8 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-700 block mb-3">
                  Enterprise Engines
                </span>
                <div className="text-4xl lg:text-5xl font-light text-stone-900 tracking-tight mb-2">
                  {m2Val.includes("3") ? <CountUp to={3} suffix=" Suites" duration={1.2} /> : m2Val}
                </div>
                <div className="text-sm font-semibold text-stone-800 mb-2">
                  {m2Label}
                </div>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed pt-4 border-t border-stone-100">
                {m2Desc}
              </p>
            </div>

            {/* Metric 3 */}
            <div className="p-8 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-700 block mb-3">
                  SLA Continuity
                </span>
                <div className="text-4xl lg:text-5xl font-light text-stone-900 tracking-tight mb-2">
                  {m3Val}
                </div>
                <div className="text-sm font-semibold text-stone-800 mb-2">
                  {m3Label}
                </div>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed pt-4 border-t border-stone-100">
                {m3Desc}
              </p>
            </div>

            {/* Metric 4 */}
            <div className="p-8 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-700 block mb-3">
                  Quality Assurance
                </span>
                <div className="text-4xl lg:text-5xl font-light text-stone-900 tracking-tight mb-2">
                  {m4Val}
                </div>
                <div className="text-sm font-semibold text-stone-800 mb-2">
                  {m4Label}
                </div>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed pt-4 border-t border-stone-100">
                {m4Desc}
              </p>
            </div>

          </div>

          {/* 4. INSTITUTIONAL ACCREDITATION SEALS */}
          <div className="mt-10 pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-700">
              Institutional Compliance &amp; Standards:
            </span>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 font-medium text-stone-800">
              <span className="px-3 py-1 rounded-full bg-white border border-stone-200 shadow-xs">APRA CPS 234</span>
              <span className="px-3 py-1 rounded-full bg-white border border-stone-200 shadow-xs">ISO/IEC 27001</span>
              <span className="px-3 py-1 rounded-full bg-white border border-stone-200 shadow-xs">PCI-DSS v4.0</span>
              <span className="px-3 py-1 rounded-full bg-white border border-stone-200 shadow-xs">SWIFT ISO 20022</span>
              <span className="px-3 py-1 rounded-full bg-white border border-stone-200 shadow-xs">NPP Australia</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default GetStartedComponent;
