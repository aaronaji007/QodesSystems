"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const JournalConcept = () => {
  const [activeDossier, setActiveDossier] = useState<number>(0);

  const articles = [
    {
      kicker: "Leading Dispatch",
      title: "The Architecture of Financial Permanence",
      date: "Spring Edition • Melbourne",
      readTime: "6 Min Read",
      author: "Principal Banking Architecture Group",
      excerpt: "Why modern banking institutions are turning away from brittle micro-apps and returning to sovereign, high-throughput core ledger engines built to endure twenty years of regulatory scrutiny.",
      content: "Across Australia and global markets, the era of hasty fintech workarounds has concluded. Board-level focus has shifted toward institutional permanence: APRA CPS 234 compliance, ISO 20022 real-time clearing, and uncompromised core ledger stability.",
      stats: "50k TPS • <1.2ms Settlement • Zero Downtime",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      href: "/qodes-core-banking-system"
    },
    {
      kicker: "Prudential Inquiry",
      title: "APRA CPS 234 & The Sovereign Defense Mandate",
      date: "Special Report • Sydney",
      readTime: "4 Min Read",
      author: "Defensive Cybersecurity Practice",
      excerpt: "A comprehensive examination of information security governance under Australian prudential guidelines, evaluating board accountability and defensive perimeter resilience.",
      content: "Meeting APRA CPS 234 requires more than surface-level penetration testing. It demands hardware-enforced tenant isolation, continuous cryptographic rotation, and verified zero-day incident response protocols.",
      stats: "100% Audit Assurance • Tier-1 Standards",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
      href: "/security-compliance"
    },
    {
      kicker: "Enterprise Case Study",
      title: "Surgical Modernisation: Migrating Legacy Temenos T24",
      date: "Engineering Monograph",
      readTime: "5 Min Read",
      author: "Enterprise Modernisation Studio",
      excerpt: "How senior banking engineers systematically execute core version upgrades and cloud migrations with zero data loss and uninterrupted transaction flow.",
      content: "Replacing legacy core banking components is akin to replacing jet engines in mid-flight. Our proven methodology isolates core data pipelines, migrates schemas, and tests failover with mathematical rigor.",
      stats: "Zero Downtime • 99.999% Availability",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
      href: "/temenos-t24-core-banking"
    }
  ];

  return (
    <div className="w-full bg-[#FFFFFF] text-[#0A0A0A] font-sans selection:bg-[#2563EB]/15">
      
      {/* 1. BROADSHEET MASTHEAD */}
      <div className="border-b-2 border-black max-w-7xl mx-auto px-4 sm:px-8 pt-8 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-serif uppercase tracking-widest text-stone-600 pb-3 border-b border-stone-200">
          <span>Vol. XXIV &bull; Issue 04</span>
          <span className="font-semibold text-stone-900 tracking-[0.2em]">The Qodes Architecture Journal</span>
          <span>Melbourne &bull; Sydney &bull; Global Editions</span>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-between text-xs tracking-wider text-stone-500 uppercase font-medium">
          <span>Covering Core Banking &bull; APRA CPS 234 &bull; Temenos Modernisation &bull; Real-Time Clearing</span>
          <span className="text-[#0284C7] font-semibold">Live Operational Status: All Systems Nominal</span>
        </div>
      </div>

      {/* 2. FRONT PAGE LEAD STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 border-b border-stone-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story Column */}
          <div className="lg:col-span-8 space-y-6 lg:pr-8 lg:border-r border-stone-200">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#0284C7] block">
              Lead Architectural Dispatch &bull; Edition 2026
            </span>

            <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-stone-950 leading-[1.06] text-balance">
              High-consequence financial architecture. Built for the next twenty years.
            </h1>

            <div className="relative aspect-[16/9] w-full rounded-none overflow-hidden bg-stone-100 border border-stone-200">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
                alt="Financial Architecture Dispatch"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 text-white text-[11px] px-3 py-1 font-serif italic">
                Fig. 1 — Sovereign core ledger deployment, Melbourne Central Operations.
              </div>
            </div>

            <p className="text-lg sm:text-xl text-stone-700 font-normal leading-relaxed text-balance">
              Envisioned and engineered by enterprise veterans with two decades of banking delivery. We deploy proprietary AI-driven core banking platforms, modernize SAP architectures, and deliver zero-downtime Temenos upgrades with military-grade cybersecurity assurance.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-black hover:bg-stone-800 text-white font-medium text-xs uppercase tracking-wider transition-all"
              >
                <span>Schedule Executive Advisory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/qodes-core-banking-system"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-stone-300 hover:border-black text-stone-900 font-medium text-xs uppercase tracking-wider transition-all"
              >
                <span>Read Full Core Monograph</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Side Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="pb-6 border-b border-stone-200 space-y-3">
              <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold block">
                Editorial Commentary
              </span>
              <h3 className="text-xl font-normal leading-snug text-stone-900">
                “In sovereign financial technology, architectural honesty always outperforms marketing abstractions.”
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed font-light">
                Observations from twenty years of core transformation inside Australia’s leading commercial banking environments.
              </p>
            </div>

            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-stone-400 font-semibold block">
                Key Performance Ledger
              </span>

              <div className="p-4 bg-stone-50 border border-stone-200 space-y-2 text-xs">
                <div className="flex justify-between font-medium">
                  <span className="text-stone-500">Peak Concurrency:</span>
                  <span className="text-stone-900 font-semibold">50,000+ Transactions / Sec</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-stone-500">Atomic Settlement:</span>
                  <span className="text-stone-900 font-semibold">&lt; 1.2 Milliseconds</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-stone-500">Security Accreditation:</span>
                  <span className="text-emerald-700 font-semibold">APRA CPS 234 Verified</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-stone-100 border border-stone-200 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#0284C7] font-semibold block">
                Confidential Inquiry
              </span>
              <p className="text-xs text-stone-600 leading-relaxed font-light">
                Direct engagement with principal architects for banking leadership commissions and prudential compliance reviews.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-black hover:text-[#0284C7] transition-colors"
              >
                <span>Initiate Dialogue →</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE DOSSIER READER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 border-b border-stone-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b-2 border-black mb-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-500">
              The Dossier Archive &bull; Three Major Reports
            </span>
            <h2 className="text-3xl font-normal tracking-tight text-stone-900">
              In-Depth Architectural Investigations
            </h2>
          </div>
          <span className="text-xs text-stone-400 font-serif italic">
            Select an article to review technical findings
          </span>
        </div>

        {/* Tabbed Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <div
              key={idx}
              onClick={() => setActiveDossier(idx)}
              className={`p-6 border transition-all cursor-pointer flex flex-col justify-between space-y-6 ${
                activeDossier === idx
                  ? "border-black bg-stone-50 shadow-md"
                  : "border-stone-200 bg-white hover:border-stone-400"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-stone-400 uppercase tracking-wider">
                  <span className="text-[#0284C7] font-semibold">{art.kicker}</span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="text-xl font-normal leading-snug text-stone-950">
                  {art.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-stone-900">
                <span>{art.stats}</span>
                <span className="text-[#0284C7]">Inspect →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Dossier Full Preview Box */}
        <div className="mt-12 p-8 sm:p-12 border-2 border-black bg-stone-50 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-widest text-stone-500 border-b border-stone-300 pb-4">
            <span className="font-semibold text-black">{articles[activeDossier].kicker} &bull; Full Text Dispatch</span>
            <span>By {articles[activeDossier].author} &bull; {articles[activeDossier].date}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-normal text-stone-950 tracking-tight leading-snug">
            {articles[activeDossier].title}
          </h3>

          <p className="text-stone-700 text-sm sm:text-base leading-relaxed max-w-4xl font-light">
            {articles[activeDossier].content}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-stone-500 font-medium">
              Verified Compliance: APRA CPS 234 &bull; ISO/IEC 27001 &bull; PCI-DSS v4.0
            </div>
            <Link
              href={articles[activeDossier].href}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-xs font-medium uppercase tracking-wider hover:bg-stone-800 transition-all"
            >
              <span>Read Full Architectural Monograph</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </section>

      {/* 4. EXECUTIVE ADVISORY DISPATCH CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-stone-500">
            Advisory Initiation
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-stone-950 tracking-tight">
            Commission a confidential architectural dialogue.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
            Our principal engineering studio partners directly with financial institution boards, chief technology officers, and risk leaders.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white text-xs font-semibold uppercase tracking-wider hover:bg-stone-800 transition-all shadow-md"
            >
              <span>Schedule Confidential Advisory</span>
              <ArrowRight className="w-4 h-4 text-[#2EA3DC]" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default JournalConcept;
