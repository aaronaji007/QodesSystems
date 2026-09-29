"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  ArrowUpRight, 
  Building2, 
  ShieldCheck, 
  Cpu, 
  Smartphone, 
  Layers, 
  CheckCircle2,
  SlidersHorizontal
} from "lucide-react";

interface ExhibitItem {
  id: string;
  category: "cbs" | "cyber" | "digital" | "enterprise";
  categoryLabel: string;
  plateNumber: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  href: string;
  tags: string[];
  metrics: string;
}

const EXHIBIT_ITEMS: ExhibitItem[] = [
  {
    id: "qodes-cbs",
    category: "cbs",
    categoryLabel: "Core Banking Engine",
    plateNumber: "Plate 01",
    title: "Qodes Core Banking System (AI-Engineered)",
    subtitle: "Autonomous Financial Core Ledger",
    description: "Proprietary high-throughput banking core orchestrating multi-currency general ledgers, commercial loan origination, and real-time payment clearing.",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
    href: "/qodes-core-banking-system",
    tags: ["ISO 20022", "AI Orchestration", "Real-Time Clearing"],
    metrics: "Tier-1 Scale • <1.2ms Settlement"
  },
  {
    id: "apra-compliance",
    category: "cyber",
    categoryLabel: "Financial Security",
    plateNumber: "Plate 02",
    title: "APRA CPS 234 Security Assurance & Vaults",
    subtitle: "Prudential Regulatory Resilience",
    description: "Sovereign defensive frameworks designed to safeguard financial assets, ensure board-level compliance, and protect against zero-day advanced threats.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop",
    href: "/security-compliance",
    tags: ["APRA CPS 234", "Threat Modeling", "Sovereign Vaults"],
    metrics: "100% Audit Assurance"
  },
  {
    id: "sap-banking",
    category: "enterprise",
    categoryLabel: "Enterprise Modernization",
    plateNumber: "Plate 03",
    title: "SAP Core Banking Modernization",
    subtitle: "Enterprise Transformation Practice",
    description: "Comprehensive SAP Banking implementation with proactive architectural pre-acceptance reviews to catch structural flaws before user testing.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    href: "/sap-core-banking",
    tags: ["S/4HANA", "Pre-Acceptance QA", "Zero Operational Pauses"],
    metrics: "Two Decades Heritage"
  },
  {
    id: "penetration-testing",
    category: "cyber",
    categoryLabel: "Defensive Operations",
    plateNumber: "Plate 04",
    title: "Institutional Penetration Testing & Red Teaming",
    subtitle: "Offensive Security Simulation",
    description: "Multi-vector adversary simulation targeting banking applications, cloud infrastructure, and SWIFT perimeter nodes under strict ethical governance.",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
    href: "/penetration-testing",
    tags: ["Red Teaming", "CREST Aligned", "Zero-Day Audits"],
    metrics: "Continuous Threat Defense"
  },
  {
    id: "mobile-banking",
    category: "digital",
    categoryLabel: "Digital Channels",
    plateNumber: "Plate 05",
    title: "Omnichannel & Mobile Banking Suite",
    subtitle: "Next-Generation Consumer Experience",
    description: "High-security digital banking portal featuring biometric authorization, instant cardless transactions, and seamless integration into core ledgers.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=2070&auto=format&fit=crop",
    href: "/mobile-banking",
    tags: ["Biometric Auth", "NPP Instant Pay", "Micro-Frontends"],
    metrics: "Sub-Second UX"
  },
  {
    id: "temenos-t24",
    category: "cbs",
    categoryLabel: "Core Migration",
    plateNumber: "Plate 06",
    title: "Temenos T24 Upgrades & Migration",
    subtitle: "Mission-Critical Core Transformation",
    description: "End-to-end version upgrades and cloud migrations for Temenos Transact, eliminating legacy system drag with verified zero downtime.",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    href: "/temenos-t24-core-banking",
    tags: ["Transact Upgrade", "Cloud Migration", "Zero Downtime"],
    metrics: "99.999% SLA"
  }
];

export const ServiceList = () => {
  const [activeTab, setActiveTab] = useState<"all" | "cbs" | "cyber" | "digital" | "enterprise">("all");

  const filteredExhibits = activeTab === "all" 
    ? EXHIBIT_ITEMS 
    : EXHIBIT_ITEMS.filter((item) => item.category === activeTab);

  // Interactive Architecture Configurator state
  const [tier, setTier] = useState<"commercial" | "enterprise" | "global">("enterprise");
  const [capabilities, setCapabilities] = useState<string[]>(["cbs", "apra", "swift"]);

  const toggleCapability = (key: string) => {
    setCapabilities((prev) => 
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <section className="w-full bg-[#FAF9F6] py-20 lg:py-28 border-b border-stone-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 mb-12 border-b border-stone-200">
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-500">
              The Architecture Collection &bull; Engineering Catalog
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
              Curated Financial Systems &amp; Defensive Practices
            </h2>
            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
              Designed with architectural precision. Each discipline is engineered to eliminate operational friction, replace legacy technical debt, and ensure absolute regulatory compliance.
            </p>
          </div>

          {/* Interactive Exhibition Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-stone-200/60 p-1.5 rounded-xl border border-stone-200/80 self-start lg:self-end">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === "all" 
                  ? "bg-white text-stone-950 shadow-sm" 
                  : "text-stone-600 hover:text-stone-950"
              }`}
            >
              All Works ({EXHIBIT_ITEMS.length})
            </button>
            <button
              onClick={() => setActiveTab("cbs")}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === "cbs" 
                  ? "bg-white text-stone-950 shadow-sm" 
                  : "text-stone-600 hover:text-stone-950"
              }`}
            >
              Core Banking
            </button>
            <button
              onClick={() => setActiveTab("cyber")}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === "cyber" 
                  ? "bg-white text-stone-950 shadow-sm" 
                  : "text-stone-600 hover:text-stone-950"
              }`}
            >
              Cybersecurity
            </button>
            <button
              onClick={() => setActiveTab("digital")}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === "digital" 
                  ? "bg-white text-stone-950 shadow-sm" 
                  : "text-stone-600 hover:text-stone-950"
              }`}
            >
              Digital Channels
            </button>
            <button
              onClick={() => setActiveTab("enterprise")}
              className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                activeTab === "enterprise" 
                  ? "bg-white text-stone-950 shadow-sm" 
                  : "text-stone-600 hover:text-stone-950"
              }`}
            >
              SAP Enterprise
            </button>
          </div>
        </div>

        {/* Visual Lookbook Exhibit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExhibits.map((item) => (
            <div 
              key={item.id}
              className="group rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Plate with Hover Zoom */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[11px] font-semibold text-stone-800 shadow-xs border border-stone-200/50">
                      {item.plateNumber}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[11px] font-semibold text-sky-800 shadow-xs border border-stone-200/50">
                      {item.categoryLabel}
                    </span>
                  </div>
                </div>

                {/* Content Plaque */}
                <div className="p-7 space-y-3">
                  <span className="text-xs font-medium text-stone-400 block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl font-medium text-stone-900 tracking-tight leading-snug group-hover:text-[#0284C7] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-600 font-normal leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-stone-50 border border-stone-200 text-stone-600 text-xs font-normal"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-7 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-sky-700">
                  {item.metrics}
                </span>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:text-[#0284C7] transition-colors"
                >
                  <span>Explore Plate</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 2. INTERACTIVE ARCHITECTURE STUDIO (Fun Yet Professional Configurator) */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-white border border-stone-200/90 shadow-xl overflow-hidden relative">
          <div className="max-w-3xl space-y-4 mb-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-800">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Architecture Studio &bull; Topology Simulator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-normal text-stone-900 tracking-tight">
              Design Your Institutional Topology in Real-Time
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Test different core banking, compliance, and payment channel combinations to preview estimated deployment timelines, APRA CPS 234 governance readiness, and architectural throughput.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-6">
              {/* Step 1: Scale */}
              <div>
                <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider block mb-3">
                  1. Institution Tier &amp; Scale
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setTier("commercial")}
                    className={`p-3.5 rounded-xl border text-xs font-medium transition-all text-center ${
                      tier === "commercial"
                        ? "border-[#0284C7] bg-sky-50/50 text-[#0284C7] shadow-sm font-semibold"
                        : "border-stone-200 hover:border-stone-300 text-stone-700"
                    }`}
                  >
                    Regional Union
                  </button>
                  <button
                    onClick={() => setTier("enterprise")}
                    className={`p-3.5 rounded-xl border text-xs font-medium transition-all text-center ${
                      tier === "enterprise"
                        ? "border-[#0284C7] bg-sky-50/50 text-[#0284C7] shadow-sm font-semibold"
                        : "border-stone-200 hover:border-stone-300 text-stone-700"
                    }`}
                  >
                    Commercial Bank
                  </button>
                  <button
                    onClick={() => setTier("global")}
                    className={`p-3.5 rounded-xl border text-xs font-medium transition-all text-center ${
                      tier === "global"
                        ? "border-[#0284C7] bg-sky-50/50 text-[#0284C7] shadow-sm font-semibold"
                        : "border-stone-200 hover:border-stone-300 text-stone-700"
                    }`}
                  >
                    Tier-1 Global
                  </button>
                </div>
              </div>

              {/* Step 2: Capabilities */}
              <div>
                <label className="text-xs font-semibold text-stone-700 uppercase tracking-wider block mb-3">
                  2. Select Architectural Modules
                </label>
                <div className="space-y-2.5">
                  <button
                    onClick={() => toggleCapability("cbs")}
                    className={`w-full p-3.5 rounded-xl border text-xs flex items-center justify-between transition-all ${
                      capabilities.includes("cbs")
                        ? "border-emerald-300 bg-emerald-50/40 text-stone-900"
                        : "border-stone-200 hover:border-stone-300 text-stone-600"
                    }`}
                  >
                    <span className="font-medium">Autonomous Core Banking Ledger (CBS)</span>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                      capabilities.includes("cbs") ? "bg-emerald-600 text-white" : "border border-stone-300"
                    }`}>
                      {capabilities.includes("cbs") && "✓"}
                    </span>
                  </button>

                  <button
                    onClick={() => toggleCapability("apra")}
                    className={`w-full p-3.5 rounded-xl border text-xs flex items-center justify-between transition-all ${
                      capabilities.includes("apra")
                        ? "border-emerald-300 bg-emerald-50/40 text-stone-900"
                        : "border-stone-200 hover:border-stone-300 text-stone-600"
                    }`}
                  >
                    <span className="font-medium">APRA CPS 234 Sovereign Security Vaults</span>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                      capabilities.includes("apra") ? "bg-emerald-600 text-white" : "border border-stone-300"
                    }`}>
                      {capabilities.includes("apra") && "✓"}
                    </span>
                  </button>

                  <button
                    onClick={() => toggleCapability("swift")}
                    className={`w-full p-3.5 rounded-xl border text-xs flex items-center justify-between transition-all ${
                      capabilities.includes("swift")
                        ? "border-emerald-300 bg-emerald-50/40 text-stone-900"
                        : "border-stone-200 hover:border-stone-300 text-stone-600"
                    }`}
                  >
                    <span className="font-medium">Real-Time SWIFT ISO 20022 &amp; NPP Rails</span>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                      capabilities.includes("swift") ? "bg-emerald-600 text-white" : "border border-stone-300"
                    }`}>
                      {capabilities.includes("swift") && "✓"}
                    </span>
                  </button>

                  <button
                    onClick={() => toggleCapability("mobile")}
                    className={`w-full p-3.5 rounded-xl border text-xs flex items-center justify-between transition-all ${
                      capabilities.includes("mobile")
                        ? "border-emerald-300 bg-emerald-50/40 text-stone-900"
                        : "border-stone-200 hover:border-stone-300 text-stone-600"
                    }`}
                  >
                    <span className="font-medium">Mobile Banking &amp; Omnichannel Experience</span>
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                      capabilities.includes("mobile") ? "bg-emerald-600 text-white" : "border border-stone-300"
                    }`}>
                      {capabilities.includes("mobile") && "✓"}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Live Simulation Output Card */}
            <div className="lg:col-span-6 p-8 rounded-2xl bg-stone-900 text-white shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <span className="text-xs uppercase tracking-widest text-sky-400 font-semibold">
                  Live Architectural Topology
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Validated Conformance
                </span>
              </div>

              {/* Dynamic Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-stone-800/60 border border-stone-700/60">
                  <span className="text-[11px] text-stone-400 block mb-1">Target Throughput</span>
                  <span className="text-xl font-semibold text-white">
                    {tier === "global" ? "50,000+ TPS" : tier === "enterprise" ? "15,000 TPS" : "5,000 TPS"}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-stone-800/60 border border-stone-700/60">
                  <span className="text-[11px] text-stone-400 block mb-1">Expected Migration SLA</span>
                  <span className="text-xl font-semibold text-white">
                    Zero Downtime
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-stone-800/60 border border-stone-700/60">
                  <span className="text-[11px] text-stone-400 block mb-1">Compliance Readiness</span>
                  <span className="text-xl font-semibold text-emerald-400">
                    {capabilities.includes("apra") ? "APRA CPS 234 Ready" : "Baseline ISO"}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-stone-800/60 border border-stone-700/60">
                  <span className="text-[11px] text-stone-400 block mb-1">Estimated Timeline</span>
                  <span className="text-xl font-semibold text-white">
                    {tier === "global" ? "12–16 Weeks" : tier === "enterprise" ? "8–12 Weeks" : "4–6 Weeks"}
                  </span>
                </div>
              </div>

              {/* Active Nodes */}
              <div className="space-y-2 pt-2 border-t border-stone-800 text-xs">
                <span className="text-stone-400 block mb-1">Active Architecture Nodes ({capabilities.length}):</span>
                <div className="flex flex-wrap gap-2">
                  {capabilities.map((c) => (
                    <span key={c} className="px-2.5 py-1 rounded-md bg-stone-800 border border-stone-700 text-stone-200 text-xs">
                      {c.toUpperCase()} Engine
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-medium text-sm transition-all shadow-md"
                >
                  <span>Request Full Institutional Dossier</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceList;
