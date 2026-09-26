"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight,
  CornerDownRight,
  Server, 
  Cpu, 
  ShieldCheck, 
  TestTube2, 
  Users, 
  Activity,
  Zap,
  Lock
} from "lucide-react";

export const ServiceList = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-20 lg:py-28 border-b border-neutral-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Swiss Asymmetric Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-12 mb-12 border-b border-neutral-200 items-end">
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block">
              02 // CORE DISCIPLINES &amp; PRACTICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-950 tracking-[-0.02em] leading-tight">
              Engineered for High-Consequence Financial Operations
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-end">
            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-2xl">
              Eliminating operational friction, legacy technical debt, and compliance exposures. We architect, implement, and secure modern financial cores across Australia and Asia-Pacific.
            </p>
          </div>
        </div>

        {/* Architectural Swiss Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-neutral-200 bg-white">
          
          {/* Card 1: Flagship QODES CBS */}
          <div className="p-8 lg:p-10 border-r border-b border-neutral-200 flex flex-col justify-between hover:bg-neutral-50/60 transition-colors group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-neutral-400">SEC_01</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-sky-700 bg-sky-50 px-2 py-0.5 border border-sky-200">
                  FLAGSHIP CBS
                </span>
              </div>

              <h3 className="text-xl font-medium text-neutral-950 mb-3 tracking-tight group-hover:text-sky-800 transition-colors">
                Qodes Core Banking System (AI-Engineered)
              </h3>
              <p className="text-neutral-600 text-sm font-light leading-relaxed mb-6">
                Proprietary autonomous core banking platform engineered by enterprise veterans. Unifies deposit accounts, commercial lending, multi-currency general ledgers, and real-time transaction clearing.
              </p>

              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-neutral-600 mb-8">
                <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200">ISO 20022</span>
                <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200">AI Engine</span>
                <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200">APRA CPS 234</span>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
              <span className="font-mono text-xs text-neutral-400">LATENCY: &lt;1.2MS</span>
              <Link
                href="/qodes-core-banking-system"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-neutral-950 font-semibold group-hover:text-sky-700"
              >
                <span>SPECIFICATION</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 2: SAP Core Banking */}
          <div className="p-8 lg:p-10 border-r border-b border-neutral-200 flex flex-col justify-between hover:bg-neutral-50/60 transition-colors group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-neutral-400">SEC_02</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 bg-neutral-100 px-2 py-0.5 border border-neutral-200">
                  ENTERPRISE
                </span>
              </div>

              <h3 className="text-xl font-medium text-neutral-950 mb-3 tracking-tight group-hover:text-sky-800 transition-colors">
                SAP Core Banking Transformation
              </h3>
              <p className="text-neutral-600 text-sm font-light leading-relaxed mb-6">
                Comprehensive SAP Banking development and IT transformation. Solution architects conduct proactive reviews at each lifecycle stage to catch structural flaws long before user acceptance testing.
              </p>

              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-neutral-600 mb-8">
                <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200">S/4HANA</span>
                <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200">Pre-Acceptance QA</span>
                <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200">Zero Drift</span>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
              <span className="font-mono text-xs text-neutral-400">AUDIT PROVEN</span>
              <Link
                href="/sap-core-banking"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-neutral-950 font-semibold group-hover:text-sky-700"
              >
                <span>SPECIFICATION</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 3: Temenos T24 Upgrades */}
          <div className="p-8 lg:p-10 border-r border-b border-neutral-200 flex flex-col justify-between hover:bg-neutral-50/60 transition-colors group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-neutral-400">SEC_03</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 bg-neutral-100 px-2 py-0.5 border border-neutral-200">
                  MODERNIZATION
                </span>
              </div>

              <h3 className="text-xl font-medium text-neutral-950 mb-3 tracking-tight group-hover:text-sky-800 transition-colors">
                Temenos T24 Upgrades &amp; Migration
              </h3>
              <p className="text-neutral-600 text-sm font-light leading-relaxed mb-6">
                Smooth version migrations and platform upgrades for Temenos T24/Transact applications. Eliminating operational pauses, reducing technical debt, and maintaining strict regulatory alignment.
              </p>

              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-neutral-600 mb-8">
                <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200">Transact</span>
                <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200">Zero-Downtime</span>
                <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200">Direct ETL</span>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
              <span className="font-mono text-xs text-neutral-400">MIGRATION CORE</span>
              <Link
                href="/temenos-t24-core-banking"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-neutral-950 font-semibold group-hover:text-sky-700"
              >
                <span>SPECIFICATION</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 4: Institutional Cybersecurity */}
          <div className="p-8 lg:p-10 border-r border-b border-neutral-200 flex flex-col justify-between hover:bg-neutral-50/60 transition-colors group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-neutral-400">SEC_04</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                  APRA CPS 234
                </span>
              </div>

              <h3 className="text-xl font-medium text-neutral-950 mb-3 tracking-tight group-hover:text-emerald-800 transition-colors">
                Cybersecurity Assurance &amp; Penetration Testing
              </h3>
              <p className="text-neutral-600 text-sm font-light leading-relaxed mb-6">
                Rigorous penetration testing, application vulnerability audits, ICT environment testing, and source code reviews tailored specifically for banking-grade perimeter defense and prudential mandates.
              </p>

              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-neutral-600 mb-8">
                <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200">Red Team Pentest</span>
                <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200">Static SAST</span>
                <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200">Zero-Trust</span>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
              <span className="font-mono text-xs text-neutral-400">ISO 27001 AUDIT</span>
              <Link
                href="/penetration-testing"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-neutral-950 font-semibold group-hover:text-emerald-700"
              >
                <span>SPECIFICATION</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 5: Quality Engineering */}
          <div className="p-8 lg:p-10 border-r border-b border-neutral-200 flex flex-col justify-between hover:bg-neutral-50/60 transition-colors group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-neutral-400">SEC_05</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 bg-neutral-100 px-2 py-0.5 border border-neutral-200">
                  ASSURANCE
                </span>
              </div>

              <h3 className="text-xl font-medium text-neutral-950 mb-3 tracking-tight group-hover:text-sky-800 transition-colors">
                Quality Engineering &amp; Testing
              </h3>
              <p className="text-neutral-600 text-sm font-light leading-relaxed mb-6">
                Sophisticated test automation and quality management systems for complex core financial workflows, load stress testing transaction spikes, and verifying APRA audit trails.
              </p>

              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-neutral-600 mb-8">
                <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200">Stress Testing</span>
                <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200">ACID QA</span>
                <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200">API Contract</span>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
              <span className="font-mono text-xs text-neutral-400">100% REGRESSION</span>
              <Link
                href="/software-testing-services"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-neutral-950 font-semibold group-hover:text-sky-700"
              >
                <span>SPECIFICATION</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Card 6: Staff Augmentation */}
          <div className="p-8 lg:p-10 border-r border-b border-neutral-200 flex flex-col justify-between hover:bg-neutral-50/60 transition-colors group">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs text-neutral-400">SEC_06</span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 bg-neutral-100 px-2 py-0.5 border border-neutral-200">
                  HUMAN CAPITAL
                </span>
              </div>

              <h3 className="text-xl font-medium text-neutral-950 mb-3 tracking-tight group-hover:text-sky-800 transition-colors">
                Staff Augmentation &amp; Advisory
              </h3>
              <p className="text-neutral-600 text-sm font-light leading-relaxed mb-6">
                Vetted senior banking solution architects, Temenos T24 consultants, and cybersecurity engineers embedded directly into your delivery teams for flawless enterprise transformation execution.
              </p>

              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-neutral-600 mb-8">
                <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200">Principal Architects</span>
                <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200">SecOps Leads</span>
                <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-200">On-Demand</span>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
              <span className="font-mono text-xs text-neutral-400">AUSTRALIAN TALENT</span>
              <Link
                href="/staff-augmentation-services"
                className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-neutral-950 font-semibold group-hover:text-sky-700"
              >
                <span>SPECIFICATION</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceList;
