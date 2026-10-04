"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const BiennaleConcept = () => {
  const [activePavilion, setActivePavilion] = useState<number>(0);

  const pavilions = [
    {
      roman: "I",
      hall: "Pavilion of the Core",
      subtitle: "Autonomous Financial Ledger Architecture",
      curatorNote: "An interrogation of legacy banking debt replaced by an unyielding, high-throughput core engine capable of sub-millisecond atomic transactions.",
      specs: ["50,000+ TPS Throughput", "ISO 20022 Native", "Multi-Currency Clearing"],
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
      href: "/qodes-core-banking-system"
    },
    {
      roman: "II",
      hall: "Pavilion of Sovereign Defense",
      subtitle: "APRA CPS 234 Resilience & Cryptographic Vaults",
      curatorNote: "Defensive spatial boundaries engineered to safeguard critical national financial infrastructure against sovereign zero-day threats.",
      specs: ["APRA CPS 234 Certified", "Hardware Security Modules", "Zero-Trust Mesh"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      href: "/security-compliance"
    },
    {
      roman: "III",
      hall: "Pavilion of Instant Rails",
      subtitle: "New Payments Platform (NPP) & Real-Time Clearing",
      curatorNote: "The dissolution of payment latency. Instantaneous interbank clearing protocols delivering 24/7/365 settlement across domestic and global rails.",
      specs: ["Sub-second Settlement", "PayID Orchestration", "99.999% Availability"],
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?q=80&w=2070&auto=format&fit=crop",
      href: "/remittance-management-system"
    },
    {
      roman: "IV",
      hall: "Pavilion of Enterprise Transformation",
      subtitle: "Temenos T24 & SAP Modernisation Practice",
      curatorNote: "The systematic metamorphosis of foundational enterprise structures. Re-engineering legacy core platforms with mathematically verified zero downtime.",
      specs: ["Transact Upgrade", "Cloud Native Topology", "Complete Data Integrity"],
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop",
      href: "/temenos-t24-core-banking"
    }
  ];

  return (
    <div className="w-full bg-[#121418] text-[#F3F4F6] font-sans selection:bg-[#2EA3DC]/30">
      
      {/* 1. BIENNALE RUNNING TICKER */}
      <div className="border-b border-white/10 px-4 sm:px-8 py-3 text-xs tracking-[0.2em] uppercase text-stone-400 flex flex-wrap items-center justify-between gap-4 font-medium">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#2EA3DC]"></span>
          <span>Biennale of Financial Architecture &bull; 2026</span>
          <span className="text-stone-600">/</span>
          <span>Pavilion Registry</span>
        </div>
        <div className="text-stone-400">
          Melbourne &bull; Sydney &bull; Global Financial Topologies
        </div>
      </div>

      {/* 2. MONUMENTAL HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-20 pb-28 lg:pt-28 lg:pb-36 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-8 space-y-8">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#38BDF8]">
              The International Exhibition &bull; Commission 2026
            </p>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.04] text-balance">
              The Sovereign Financial Architecture.
            </h1>

            <p className="text-lg sm:text-xl text-stone-400 font-light leading-relaxed max-w-2xl text-balance">
              Exhibiting the foundational ledger systems, defensive cryptography, and real-time payment topologies that power sovereign banking institutions across the Pacific.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#2EA3DC] hover:bg-[#258ec2] text-white font-medium text-sm transition-all shadow-lg shadow-[#2EA3DC]/20"
              >
                <span>Curator Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/qodes-core-banking-system"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-stone-300 font-medium text-sm transition-all"
              >
                <span>Explore Pavilions</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-[#1A1E26] border border-white/10 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between text-xs text-stone-400 uppercase tracking-widest border-b border-white/10 pb-3">
                <span>Curator Statement</span>
                <span className="text-[#38BDF8]">Edition 2026</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed font-light italic">
                “In an era of fragile fintech abstractions, true resilience is found only in the bedrock of rigorously audited core banking engines and sovereign cryptography.”
              </p>
              <div className="pt-2 text-[11px] text-stone-500 uppercase tracking-wider font-semibold">
                Principal Architects &bull; Qodes Systems
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THE FOUR MONUMENTAL PAVILIONS (Interactive Spatial Exhibition) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-28 border-b border-white/10">
        <div className="space-y-4 mb-16">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#38BDF8]">
            Spatial Directory &bull; Four Pavilions
          </p>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight">
            Curated Structural Installations
          </h2>
        </div>

        {/* Spatial Floorplan Navigation */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {pavilions.map((p, idx) => (
            <button
              key={p.roman}
              onClick={() => setActivePavilion(idx)}
              className={`p-4 rounded-xl text-left border transition-all ${
                activePavilion === idx
                  ? "bg-[#2EA3DC]/15 border-[#2EA3DC] text-white shadow-lg"
                  : "bg-white/5 border-white/10 text-stone-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span className="text-xs uppercase tracking-widest font-mono text-[#38BDF8] block mb-1">
                Room {p.roman}
              </span>
              <span className="text-sm font-medium tracking-tight block truncate">
                {p.hall}
              </span>
            </button>
          ))}
        </div>

        {/* Active Pavilion Focus Display */}
        <div className="rounded-3xl bg-[#1A1E26] border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[520px]">
              <Image
                src={pavilions[activePavilion].image}
                alt={pavilions[activePavilion].hall}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1E26] via-transparent to-transparent lg:hidden" />
              <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs text-white border border-white/10 uppercase tracking-widest">
                Room {pavilions[activePavilion].roman} Installation Plate
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#38BDF8] block">
                  Installation Index {pavilions[activePavilion].roman}
                </span>

                <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight leading-snug">
                  {pavilions[activePavilion].hall}
                </h3>

                <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                  {pavilions[activePavilion].curatorNote}
                </p>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-xs uppercase tracking-wider text-stone-500 block mb-2 font-medium">
                    Verified Topology Attributes:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {pavilions[activePavilion].specs.map((spec, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-stone-300"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={pavilions[activePavilion].href}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white hover:text-[#38BDF8] font-medium transition-colors"
                >
                  <span>Explore Technical Dossier</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-full bg-[#2EA3DC] text-white text-xs font-medium hover:bg-[#258ec2] transition-all"
                >
                  Commission Architecture
                </Link>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* 4. CURATOR SALON CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-24">
        <div className="p-8 sm:p-16 rounded-3xl bg-gradient-to-br from-[#1A1E26] to-[#0E1116] border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#38BDF8]">
              Salon Consultation
            </span>
            <h3 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
              Commission an architectural review of your financial topology.
            </h3>
            <p className="text-stone-400 text-sm font-light leading-relaxed">
              Our principal banking architects provide direct advisory for APRA CPS 234 compliance, Temenos migrations, and next-generation core ledger deployments.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-8 py-4 rounded-full bg-white text-stone-950 font-medium text-sm hover:bg-stone-100 transition-all shadow-xl shrink-0"
          >
            Schedule Advisory Dialogue
          </Link>
        </div>
      </section>

    </div>
  );
};

export default BiennaleConcept;
