"use client";

import React from "react";
import Link from "next/link";
import { 
  Server, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  TestTube2, 
  Users, 
  ArrowUpRight, 
  CheckCircle2,
  Lock,
  Zap,
  Activity
} from "lucide-react";
import SpotlightCard from "@/components/bits/SpotlightCard";

export const ServiceList = () => {
  return (
    <section className="w-full bg-slate-50/60 py-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono font-medium text-slate-700 uppercase tracking-wider mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            <span>Architecture &amp; Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Engineered for High-Consequence Financial Operations
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Eliminating operational friction, legacy technical debt, and compliance exposures. We architect, implement, and secure modern financial cores.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Flagship QODES CBS (Span 2 cols) */}
          <div className="md:col-span-2">
            <SpotlightCard className="h-full p-8 flex flex-col justify-between group hover:border-slate-400/80 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded bg-sky-50 border border-sky-200 text-[11px] font-mono uppercase tracking-wider text-sky-700 font-medium">
                    Proprietary Flagship
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-sky-700 transition-colors">
                  Qodes Core Banking System (AI-Engineered CBS)
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                  Envisioned and engineered by enterprise architects with over two decades of Tier-1 banking delivery. QODES CBS unifies deposit accounts, commercial lending, multi-currency ledgers, and real-time transaction clearing into an elastic, low-latency microservices architecture engineered to adapt dynamically to market demands.
                </p>

                {/* Key Architecture Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Multi-Currency Ledger", "Real-Time Clearing", "AI Decisioning Engine", "Sub-Millisecond Settlement", "APRA CPS 234 Native"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Ultra-high transaction throughput</span>
                </div>
                <Link
                  href="/qodes-core-banking-system"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 hover:text-sky-900 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Explore Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 2: SAP Core Banking (Span 1 col) */}
          <div className="md:col-span-1">
            <SpotlightCard className="h-full p-8 flex flex-col justify-between group hover:border-slate-400/80 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700">
                    <Server className="w-6 h-6" />
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-mono text-slate-600">
                    Enterprise
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-blue-700 transition-colors">
                  SAP Core Banking Transformation
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                  Comprehensive SAP Banking development and IT transformation. Our solution architects conduct proactive reviews at every phase to catch flaws long before acceptance testing, guaranteeing zero-defect deployments.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["S/4HANA Finance", "Pre-Acceptance Reviews", "Zero Architecture Drift"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">Architecture Advisory</span>
                <Link
                  href="/sap-core-banking"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-sky-700 transition-colors"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 3: Temenos T24 Upgrades (Span 1 col) */}
          <div className="md:col-span-1">
            <SpotlightCard className="h-full p-8 flex flex-col justify-between group hover:border-slate-400/80 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700">
                    <Activity className="w-6 h-6" />
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-mono text-slate-600">
                    Modernization
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-sky-700 transition-colors">
                  Temenos T24 Upgrades &amp; Migration
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                  Smooth version migrations and platform upgrades for Temenos T24/Transact applications. We eliminate operational downtime, lower TCO, and ensure compliance with the latest banking standards.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Temenos Transact", "Automated Migration", "Zero-Downtime"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">Core Migration</span>
                <Link
                  href="/temenos-t24-core-banking"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-sky-700 transition-colors"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 4: Institutional Cybersecurity & Threat Assurance (Span 2 cols) */}
          <div className="md:col-span-2">
            <SpotlightCard className="h-full p-8 flex flex-col justify-between group hover:border-slate-400/80 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-[11px] font-mono uppercase tracking-wider text-emerald-800 font-medium">
                    APRA CPS 234 Audit Ready
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-emerald-700 transition-colors">
                  Cybersecurity Assurance &amp; Vulnerability Remediation
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                  Rigorous penetration testing, application vulnerability audits, ICT environment testing, and source code reviews tailored for banking grade controls. We provide institutional resilience, ensuring full compliance with Australian Prudential Standard CPS 234 and ISO/IEC 27001.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["Offensive Pentesting", "Source Code Review", "CPS 234 Governance", "SWIFT Interface Audits", "ICT Infrastructure Hardening"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Zero-Trust Architecture</span>
                </div>
                <Link
                  href="/penetration-testing"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-900 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Explore Security Practice</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 5: Software Testing & Quality Engineering (Span 1 col) */}
          <div className="md:col-span-1">
            <SpotlightCard className="h-full p-8 flex flex-col justify-between group hover:border-slate-400/80 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-700">
                    <TestTube2 className="w-6 h-6" />
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-mono text-slate-600">
                    Testing
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-cyan-700 transition-colors">
                  Quality Engineering &amp; Testing
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                  Sophisticated test automation and quality management systems for complex core workflows, stress testing transaction spikes, and verifying APRA compliance.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Automated Regression", "Load & Stress Tests", "Compliance QA"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">Quality Assurance</span>
                <Link
                  href="/software-testing-services"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 hover:text-sky-700 transition-colors"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </SpotlightCard>
          </div>

          {/* Card 6: Staff Augmentation & Advisory (Span 2 cols) */}
          <div className="md:col-span-2">
            <SpotlightCard className="h-full p-8 flex flex-col justify-between group hover:border-slate-400/80 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded bg-slate-100 text-[11px] font-mono uppercase tracking-wider text-slate-700 font-medium">
                    Human Capital
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-amber-700 transition-colors">
                  Staff Augmentation &amp; Technology Advisory
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm mb-6">
                  People are the focal point for any mission-critical financial initiative. We embed vetted senior banking solution architects, Temenos T24 consultants, and cybersecurity engineers directly into your delivery teams to ensure flawless execution.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["Principal Banking Architects", "Temenos T24 Specialists", "Cybersecurity Officers", "Full-Stack FinTech Developers"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>Rapid On-Demand Deployment</span>
                </div>
                <Link
                  href="/staff-augmentation-services"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-sky-700 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Explore Augmentation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </SpotlightCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceList;
