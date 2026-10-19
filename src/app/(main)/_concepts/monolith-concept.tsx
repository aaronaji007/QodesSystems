"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Key, RefreshCw, Activity } from "lucide-react";

export const MonolithConcept = () => {
  const [hsmEnabled, setHsmEnabled] = useState<boolean>(true);
  const [failoverReady, setFailoverReady] = useState<boolean>(true);
  const [nppDirect, setNppDirect] = useState<boolean>(true);

  return (
    <div className="w-full bg-[#0D0F14] text-[#F1F5F9] font-sans selection:bg-[#38BDF8]/30">
      
      {/* 1. TITANIUM HARDWARE STRIP */}
      <div className="border-b border-white/10 px-4 sm:px-8 py-3 text-xs tracking-widest uppercase text-stone-400 flex flex-wrap items-center justify-between gap-4 font-medium">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]"></span>
          <span>Titanium Monolith &bull; Tier-1 Financial Atelier</span>
          <span className="text-stone-600">|</span>
          <span>APRA CPS 234 Verified Architecture</span>
        </div>
        <div className="text-stone-500">
          Melbourne &bull; Sydney &bull; Sovereign Vault Operations
        </div>
      </div>

      {/* 2. THE MONOLITH HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-20 pb-24 lg:pt-28 lg:pb-36 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#38BDF8]">
                Sovereign Banking Hardware &bull; Tier-1 Specification
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-normal tracking-tight text-white leading-[1.05] text-balance">
                Precision-engineered financial core monoliths.
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-stone-400 font-light leading-relaxed max-w-2xl text-balance">
              Designed with the unyielding integrity of aerospace instrumentation. Zero legacy compromise, military-grade cryptographic separation, and ultra-high transactional concurrency.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#2EA3DC] hover:bg-[#258ec2] text-white font-medium text-sm transition-all shadow-lg shadow-[#2EA3DC]/25"
              >
                <span>Commission Architecture Review</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/qodes-core-banking-system"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-stone-200 font-medium text-sm transition-all"
              >
                <span>Inspect Technical Blueprints</span>
              </Link>
            </div>

            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-6 text-xs text-stone-400 font-medium">
              <div>
                <span className="text-white block text-sm font-semibold mb-0.5">50,000+</span>
                <span>Peak Concurrency TPS</span>
              </div>
              <div>
                <span className="text-white block text-sm font-semibold mb-0.5">&lt; 1.2ms</span>
                <span>Atomic Ledger Latency</span>
              </div>
              <div>
                <span className="text-emerald-400 block text-sm font-semibold mb-0.5">100% SLA</span>
                <span>Zero Unplanned Downtime</span>
              </div>
            </div>
          </div>

          {/* Right Monolith Hardware Object Preview */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#141821] border border-white/15 p-8 shadow-2xl relative overflow-hidden space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-widest text-[#38BDF8] font-semibold">
                  Chassis Specification: QS-2026
                </span>
                <span className="text-xs text-emerald-400 flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Active Topology
                </span>
              </div>

              <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                  alt="Industrial hardware monolith"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-3">
                <h4 className="text-base font-medium text-white">
                  Sovereign Cryptographic Ledger Unit
                </h4>
                <p className="text-xs text-stone-400 leading-relaxed font-light">
                  Hardware-enforced tenant isolation conforming directly to APRA CPS 234 and ISO/IEC 27001 requirements.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. HARDWARE SPECIFICATION WORKBENCH (Interactive Atelier Switchboard) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-24 border-b border-white/10">
        <div className="space-y-4 mb-16">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#38BDF8]">
            Interactive Instrumentation
          </p>
          <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Configure Sovereign Node Topology
          </h2>
          <p className="text-stone-400 text-sm max-w-xl leading-relaxed">
            Toggle hardware and network security primitives to preview live resilience posture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Switchboard Toggles */}
          <div className="lg:col-span-6 space-y-4">
            
            <div 
              onClick={() => setHsmEnabled(!hsmEnabled)}
              className="p-6 rounded-2xl bg-[#141821] border border-white/10 hover:border-white/20 transition-all cursor-pointer flex items-center justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Key className="w-4 h-4 text-[#38BDF8]" />
                  <span className="text-sm font-semibold text-white">Dedicated Hardware Security Module (HSM)</span>
                </div>
                <p className="text-xs text-stone-400">Cryptographic key generation and root-of-trust isolation.</p>
              </div>
              <div className={`w-12 h-6 rounded-full transition-colors p-0.5 ${hsmEnabled ? "bg-[#2EA3DC]" : "bg-stone-700"}`}>
                <div className={`w-5 h-5 rounded-full bg-white transition-transform ${hsmEnabled ? "translate-x-6" : "translate-x-0"}`} />
              </div>
            </div>

            <div 
              onClick={() => setFailoverReady(!failoverReady)}
              className="p-6 rounded-2xl bg-[#141821] border border-white/10 hover:border-white/20 transition-all cursor-pointer flex items-center justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-[#38BDF8]" />
                  <span className="text-sm font-semibold text-white">Dual-Region Active-Active Replication</span>
                </div>
                <p className="text-xs text-stone-400">Zero RPO &lt;50ms automatic failover between Sydney and Melbourne.</p>
              </div>
              <div className={`w-12 h-6 rounded-full transition-colors p-0.5 ${failoverReady ? "bg-[#2EA3DC]" : "bg-stone-700"}`}>
                <div className={`w-5 h-5 rounded-full bg-white transition-transform ${failoverReady ? "translate-x-6" : "translate-x-0"}`} />
              </div>
            </div>

            <div 
              onClick={() => setNppDirect(!nppDirect)}
              className="p-6 rounded-2xl bg-[#141821] border border-white/10 hover:border-white/20 transition-all cursor-pointer flex items-center justify-between"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#38BDF8]" />
                  <span className="text-sm font-semibold text-white">NPP Direct Clearing Gateway</span>
                </div>
                <p className="text-xs text-stone-400">Real-time payment rails with native PayID resolution.</p>
              </div>
              <div className={`w-12 h-6 rounded-full transition-colors p-0.5 ${nppDirect ? "bg-[#2EA3DC]" : "bg-stone-700"}`}>
                <div className={`w-5 h-5 rounded-full bg-white transition-transform ${nppDirect ? "translate-x-6" : "translate-x-0"}`} />
              </div>
            </div>

          </div>

          {/* Right Live Topology Dossier */}
          <div className="lg:col-span-6 p-8 rounded-2xl bg-[#161B26] border border-white/15 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-wider text-stone-400 font-medium">
                Sovereign Blueprint Output
              </span>
              <span className="text-xs text-[#38BDF8] font-semibold">Tier-1 Conformance</span>
            </div>

            <div className="space-y-4 text-xs text-stone-300">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-stone-400">Security Standard:</span>
                <span className="font-semibold text-white">APRA CPS 234 &amp; ISO 27001</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-stone-400">RPO / RTO Target:</span>
                <span className="font-semibold text-emerald-400">{failoverReady ? "0 RPO / <50ms RTO" : "15m RPO / 2h RTO"}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-stone-400">Key Custody:</span>
                <span className="font-semibold text-white">{hsmEnabled ? "FIPS 140-2 Level 3 HSM" : "KMS Standard"}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-stone-400">Settlement Protocol:</span>
                <span className="font-semibold text-white">{nppDirect ? "ISO 20022 Sub-Second NPP" : "Batch Clearing"}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-[#2EA3DC] hover:bg-[#258ec2] text-white font-medium text-sm transition-all shadow-md"
              >
                <span>Request Custom Monolith Topology</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SOVEREIGN ADVISORY DISPATCH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-24">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#141821] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#38BDF8]">
              Executive Dialogue
            </span>
            <h3 className="text-2xl sm:text-3xl font-normal text-white tracking-tight">
              Begin an architecture commission with principal partners.
            </h3>
            <p className="text-stone-400 text-sm font-light leading-relaxed">
              We partner directly with bank boards, CTOs, and chief risk officers to engineer enduring technological resilience.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl bg-white text-stone-950 font-medium text-sm hover:bg-stone-100 transition-all shrink-0"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default MonolithConcept;
