"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const ScandiConcept = () => {
  const [activeCollection, setActiveCollection] = useState<"all" | "core" | "sap-erp" | "security">("all");

  const systems = [
    {
      id: "qodes-cbs",
      category: "core",
      name: "Qodes Core Banking System",
      subtitle: "Proprietary Banking Platform",
      description: "Our modern, high-throughput core banking engine engineered for real-time transactions, multi-currency accounting, and rapid deployment.",
      tags: ["Real-Time Ledger", "Multi-Currency", "Rapid Rollout"],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
      href: "/qodes-core-banking-system",
      badge: "Australia & India Ready"
    },
    {
      id: "sap-core",
      category: "core",
      name: "SAP Core Banking",
      subtitle: "Enterprise Banking Platform",
      description: "End-to-end implementation, architecture review, and modernization for SAP Transactional Banking, Loans, Deposits, and financial ledgers.",
      tags: ["SAP Banking", "Loans & Deposits", "Architecture Review"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      href: "/sap-core-banking",
      badge: "Enterprise Verified"
    },
    {
      id: "temenos-t24",
      category: "core",
      name: "Temenos T24 Core Banking",
      subtitle: "Upgrade & Migration Practice",
      description: "Surgical version upgrades, Model Bank deployments, cloud migrations, and zero-downtime cutover management.",
      tags: ["Temenos Transact", "Version Upgrades", "Zero Downtime"],
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
      href: "/temenos-t24-core-banking",
      badge: "Model Bank Aligned"
    },
    {
      id: "oracle-flexcube",
      category: "core",
      name: "Oracle FLEXCUBE Core Banking",
      subtitle: "Implementation & AMS",
      description: "Enterprise Oracle FLEXCUBE deployment, module customization, payment interface integration, and 24/7 production maintenance.",
      tags: ["FLEXCUBE Universal", "Interface Integration", "24/7 AMS"],
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
      href: "/oracle-flexcube-core-banking",
      badge: "24/7 Support"
    },
    {
      id: "sap-erp",
      category: "sap-erp",
      name: "SAP ERP Implementation & Support",
      subtitle: "Full Lifecycle Delivery & AMS",
      description: "Complete SAP ERP rollout, business blueprinting, custom ABAP/Fiori development, and round-the-clock SLA-governed application management (AMS).",
      tags: ["SAP Implementation", "24/7 Support (AMS)", "Custom ABAP & Fiori"],
      image: "https://plus.unsplash.com/premium_photo-1714618828448-abf8732500c6?q=80&w=1800&auto=format&fit=crop",
      href: "/sap-services",
      badge: "SLA Guaranteed"
    },
    {
      id: "security",
      category: "security",
      name: "APRA CPS 234 & Cyber Assurance",
      subtitle: "Governance & Audit Readiness",
      description: "Prudential governance frameworks, penetration testing, and zero-trust controls tailored for Australian and Indian banking compliance.",
      tags: ["APRA CPS 234", "Penetration Testing", "Audit Readiness"],
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
      href: "/security-compliance",
      badge: "APRA Conforming"
    }
  ];

  const filtered = activeCollection === "all" 
    ? systems 
    : systems.filter(s => s.category === activeCollection);

  return (
    <div className="w-full bg-white text-stone-900 font-sans selection:bg-[#0B99D9]/20">
      {/* 1. AIRY EXECUTIVE HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.22em] font-semibold text-stone-500">
                Enterprise Banking &amp; SAP Solutions &bull; Australia &amp; India
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight leading-[1.12] text-balance">
                Core Banking Systems &amp; Enterprise SAP ERP.
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-stone-600 font-light leading-relaxed max-w-2xl text-balance">
              Specialized delivery, modernization, and 24/7 support for <strong className="font-medium text-stone-900">SAP Core Banking, Temenos T24, Qodes CBS, and Oracle FLEXCUBE</strong> — paired with complete <strong className="font-medium text-stone-900">SAP ERP implementation and support</strong> across Australia and India.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all shadow-sm"
              >
                <span>Initiate Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#0B99D9]" />
              </Link>
              <Link
                href="#systems"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-800 font-medium text-sm transition-all shadow-sm"
              >
                <span>Explore Core Banking &amp; SAP</span>
              </Link>
            </div>

            {/* Credibility Note */}
            <div className="pt-6 border-t border-stone-200/80 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-stone-500 font-normal">
              <span>Two decades of Tier-1 banking heritage</span>
              <span className="text-stone-300">•</span>
              <span>Dedicated operations in Australia &amp; India</span>
              <span className="text-stone-300">•</span>
              <span>APRA CPS 234 Aligned</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
                alt="Qodes Systems Core Banking Advisory"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-stone-900/10" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-stone-200/60 space-y-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#0B99D9] block">
                  Core Specialization
                </span>
                <h4 className="text-base font-medium text-stone-900">
                  4 Proven Banking Engines
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  SAP Core Banking, Temenos T24, Qodes CBS &amp; Oracle FLEXCUBE.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THE SYSTEMS COLLECTION (Brand Blue Feature Section) */}
      <section id="systems" className="w-full bg-[#0B99D9] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-12 border-b border-white/20">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-sky-100">
                Core Specialization &bull; Equal Focus
              </p>
              <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
                Core Banking Systems &amp; SAP ERP
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-sky-950/25 border border-white/20 backdrop-blur-sm self-start md:self-end">
              <button
                onClick={() => setActiveCollection("all")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCollection === "all" ? "bg-white text-[#0B99D9] shadow-sm font-semibold" : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                All Solutions
              </button>
              <button
                onClick={() => setActiveCollection("core")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCollection === "core" ? "bg-white text-[#0B99D9] shadow-sm font-semibold" : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                Core Banking (4 Systems)
              </button>
              <button
                onClick={() => setActiveCollection("sap-erp")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCollection === "sap-erp" ? "bg-white text-[#0B99D9] shadow-sm font-semibold" : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                SAP ERP Implementation &amp; Support
              </button>
              <button
                onClick={() => setActiveCollection("security")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCollection === "security" ? "bg-white text-[#0B99D9] shadow-sm font-semibold" : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                Security &amp; Assurance
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl bg-white text-stone-900 border border-sky-100/30 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold text-stone-800 shadow-xs border border-stone-200/50">
                      {item.subtitle}
                    </div>
                  </div>

                  <div className="p-7 space-y-3">
                    <h3 className="text-xl font-medium text-stone-900 tracking-tight group-hover:text-[#0B99D9] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed font-light">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-stone-50 border border-stone-200 text-xs text-stone-600 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="text-xs uppercase tracking-wider font-semibold text-stone-900 group-hover:text-[#0B99D9] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0B99D9]" />
                  </Link>

                  <span className="text-xs text-stone-400 font-medium">{item.badge}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. STUDIO INVITATION - BRAND BLUE FEATURE SECTION */}
      <section className="w-full bg-[#0B99D9] py-24 text-center text-white relative overflow-hidden border-t border-white/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-6 relative z-10">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-sky-100">
            Executive Consultation
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            Discuss your Core Banking or SAP ERP roadmap.
          </h2>
          <p className="text-sky-50 text-base sm:text-lg leading-relaxed font-light max-w-2xl mx-auto">
            Whether you are upgrading Temenos T24, evaluating SAP Core Banking, deploying Oracle FLEXCUBE, or optimizing SAP ERP support, our senior banking architects across Australia and India are ready to collaborate.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-sky-50 text-stone-950 font-medium text-sm transition-all shadow-lg hover:shadow-xl"
            >
              <span>Connect With A Principal Architect</span>
              <ArrowRight className="w-4 h-4 text-[#0B99D9]" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ScandiConcept;
