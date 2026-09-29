"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const VitraConcept = () => {
  const [selectedSpecimen, setSelectedSpecimen] = useState<number>(0);

  const specimens = [
    {
      index: "01",
      title: "Core Banking Engine (AI-Engineered)",
      tag: "Edition 2026",
      material: "Distributed Ledger • Microservices",
      scale: "Tier-1 Commercial Scale",
      description: "A proprietary banking core designed with the precision of classic Swiss industrial craft. Unifies general ledgers, commercial credit, and multi-currency clearing into an immutable, high-throughput operating structure.",
      sla: "< 1.2ms Settlement Latency",
      compliance: "APRA CPS 234 & ISO 20022",
      imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
      href: "/qodes-core-banking-system"
    },
    {
      index: "02",
      title: "Defensive Vaults & APRA CPS 234",
      tag: "Sovereign Series",
      material: "Zero-Trust Architecture • Hardware Security",
      scale: "Regulated Banking Institutions",
      description: "Institutional cybersecurity frameworks crafted for high-consequence asset custody. Protects customer financial data against sovereign nation-state zero-day vectors while guaranteeing board-level regulatory assurance.",
      sla: "100% Audit Readiness",
      compliance: "APRA CPS 234 & ISO 27001",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
      href: "/security-compliance"
    },
    {
      index: "03",
      title: "Temenos T24 Core Modernisation",
      tag: "Transformation Monograph",
      material: "Transact Cloud • Legacy Replacement",
      scale: "Enterprise Upgrades",
      description: "Seamless version transformations and cloud migrations for Temenos banking platforms. Eliminates two decades of legacy code debt with surgical precision and verified zero operational downtime.",
      sla: "99.999% Service Level",
      compliance: "Global Banking Frameworks",
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
      href: "/temenos-t24-core-banking"
    },
    {
      index: "04",
      title: "Omnichannel Digital Banking Suite",
      tag: "Consumer Spatial Suite",
      material: "Biometric Authorization • Real-Time NPP",
      scale: "Web & Mobile Platforms",
      description: "An intuitive financial interface for the contemporary mobile consumer. Seamlessly connects biometric authentication and sub-second instant payments to deep core accounting ledgers.",
      sla: "Sub-Second UX Response",
      compliance: "CDR & Privacy Principles",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=2070&auto=format&fit=crop",
      href: "/mobile-banking"
    }
  ];

  return (
    <div className="w-full bg-[#FAF9F5] text-stone-900 font-sans selection:bg-[#2EA3DC]/20">
      
      {/* 1. EDITORIAL HEADER BANNER */}
      <div className="border-b border-stone-200/80 px-4 sm:px-8 py-3 text-xs tracking-wider text-stone-500 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3 uppercase font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2EA3DC]"></span>
          <span>Lookbook 2026 — Monograph No. 04</span>
          <span className="text-stone-300">•</span>
          <span>Australian Banking Architecture</span>
        </div>
        <div className="font-serif italic text-stone-400">
          Melbourne &bull; Sydney &bull; Global Operations
        </div>
      </div>

      {/* 2. COVER STORY HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Monograph Prose */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#0284C7]">
                Architectural Ledger Systems &bull; Catalogue 2026
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-stone-900 leading-[1.08] text-balance">
                High-consequence financial architecture. Built for the next twenty years.
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-stone-600 font-normal leading-relaxed text-balance max-w-2xl">
              Like timeless furniture and enduring civic architecture, true banking systems require structural discipline, honest materials, and sovereign resilience. Engineered by senior architects with two decades of Tier-1 banking heritage.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all shadow-sm"
              >
                <span>Commission Advisory</span>
                <ArrowRight className="w-4 h-4 text-[#2EA3DC]" />
              </Link>
              <Link
                href="/qodes-core-banking-system"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-medium text-sm transition-all shadow-sm"
              >
                <span>Explore Core Catalogue</span>
              </Link>
            </div>

            {/* Specimen Index Footnote */}
            <div className="pt-8 border-t border-stone-200 grid grid-cols-3 gap-6 text-xs text-stone-600">
              <div>
                <span className="font-serif italic block text-stone-400 mb-1">Volume 01</span>
                <span className="font-semibold text-stone-900">Tier-1 Core Ledgers</span>
              </div>
              <div>
                <span className="font-serif italic block text-stone-400 mb-1">Volume 02</span>
                <span className="font-semibold text-stone-900">APRA CPS 234 Defense</span>
              </div>
              <div>
                <span className="font-serif italic block text-stone-400 mb-1">Volume 03</span>
                <span className="font-semibold text-stone-900">Temenos T24 Upgrades</span>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Editorial Visual Plate */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-stone-200/90 shadow-xl bg-stone-100">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
                alt="Architectural financial space"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="text-xs uppercase tracking-widest text-stone-300 block font-medium">
                  Plate 01 &bull; Financial Sculpture
                </span>
                <h3 className="text-xl font-normal leading-snug">
                  The Sovereign Transaction Vault
                </h3>
                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  Melbourne engineering studio. Specimen commissioned for APRA-regulated financial institutions.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-stone-100/80 border border-stone-200/60 flex items-center justify-between text-xs text-stone-600">
              <span>Specimen Weight: 50,000+ Transactions / Sec</span>
              <span className="font-semibold text-stone-900">Verified SLA</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE SPECIMEN CATALOGUE */}
      <section className="w-full bg-[#F3F1EC] py-24 border-y border-stone-200 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-300/80 mb-12">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-500">
                The Catalogue &bull; Collection 2026
              </p>
              <h2 className="text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
                Curated Engineering Plates
              </h2>
            </div>
            <p className="text-sm text-stone-600 max-w-md leading-relaxed">
              Explore each architectural discipline commissioned by our principal engineering partners. Select a specimen to examine specifications.
            </p>
          </div>

          {/* Interactive Specimen Selector Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Selector List */}
            <div className="lg:col-span-5 space-y-3">
              {specimens.map((item, idx) => (
                <button
                  key={item.index}
                  onClick={() => setSelectedSpecimen(idx)}
                  className={`w-full text-left p-6 rounded-xl border transition-all ${
                    selectedSpecimen === idx
                      ? "bg-white border-stone-300 shadow-md"
                      : "bg-transparent border-transparent hover:bg-white/50 text-stone-600"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#0284C7]">
                      Plate {item.index} &bull; {item.tag}
                    </span>
                    <span className="text-xs text-stone-400 font-serif italic">
                      {item.scale}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium text-stone-900 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-500 line-clamp-2 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Right Detailed Plate Showcase */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-8 sm:p-10 shadow-lg space-y-8">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-stone-100">
                <Image
                  src={specimens[selectedSpecimen].imageUrl}
                  alt={specimens[selectedSpecimen].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-md text-xs font-semibold text-stone-800 shadow-xs">
                  Plate {specimens[selectedSpecimen].index} Specifications
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-stone-400 uppercase tracking-wider font-medium">
                  <span>{specimens[selectedSpecimen].material}</span>
                  <span className="text-emerald-700 font-semibold">{specimens[selectedSpecimen].compliance}</span>
                </div>
                
                <h3 className="text-2xl font-normal text-stone-900 tracking-tight">
                  {specimens[selectedSpecimen].title}
                </h3>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  {specimens[selectedSpecimen].description}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-100">
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="text-xs text-stone-400 block mb-1">Architectural SLA</span>
                    <span className="text-sm font-semibold text-stone-900">{specimens[selectedSpecimen].sla}</span>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
                    <span className="text-xs text-stone-400 block mb-1">Regulatory Posture</span>
                    <span className="text-sm font-semibold text-stone-900">APRA CPS 234 Verified</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <Link
                    href={specimens[selectedSpecimen].href}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-900 hover:text-[#0284C7] transition-colors"
                  >
                    <span>Read Monograph Dossier</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium transition-all"
                  >
                    <span>Request Topology</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. INSTITUTIONAL ACCREDITATION ACCORD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
        <div className="p-8 sm:p-12 rounded-2xl bg-stone-900 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#79C5EC]">
                Executive Advisory &bull; Institutional Commissions
              </p>
              <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-white">
                Initiate a discreet architectural dialogue with our principals.
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed max-w-2xl font-light">
                Whether modernising a legacy general ledger, planning a Temenos upgrade, or preparing for an APRA CPS 234 board review, our studio engages directly with institutional leadership.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/contact"
                className="w-full text-center py-4 rounded-lg bg-[#2EA3DC] hover:bg-[#258ec2] text-white font-medium text-sm transition-all shadow-md"
              >
                Schedule Private Consultation
              </Link>
              <span className="text-[11px] text-center text-stone-400">
                Melbourne &bull; Sydney &bull; Strictly Confidential
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default VitraConcept;
