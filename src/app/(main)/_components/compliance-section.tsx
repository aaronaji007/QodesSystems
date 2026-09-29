"use client";

import React from "react";
import { ShieldCheck, Award, Lock, FileCheck2, CheckCircle2 } from "lucide-react";

export const ComplianceSection = () => {
  const frameworks = [
    {
      title: "APRA CPS 234 Compliance",
      badge: "Prudential Standard",
      icon: ShieldCheck,
      description: "Information security assurance ensuring APRA-regulated banking entities maintain active resilience against emerging cyber threats.",
      details: "Audit-ready perimeter defense, vulnerability assessments, and board-level incident response readiness.",
    },
    {
      title: "ISO/IEC 27001 Standard",
      badge: "ISMS Certification",
      icon: Award,
      description: "Rigorous alignment with international specifications for Information Security Management Systems (ISMS).",
      details: "Systematic examination of institutional security risks and zero-compromise security control policies.",
    },
    {
      title: "PCI-DSS Level 1 Ready",
      badge: "Payment Security",
      icon: Lock,
      description: "Payment Card Industry Data Security Standard technical controls for high-volume financial transaction routing.",
      details: "End-to-end tokenization, encrypted storage, and strict cryptographic key rotation procedures.",
    },
    {
      title: "Australian Privacy Principles",
      badge: "Data Sovereignty",
      icon: FileCheck2,
      description: "Full compliance with Australian data sovereignty, consumer data right (CDR), and financial data handling guidelines.",
      details: "Local Australian data residency, strict authorization bounds, and sovereign compliance oversight.",
    },
  ];

  return (
    <section className="w-full bg-[#FAF9F6] py-20 lg:py-28 border-b border-stone-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-12 mb-12 border-b border-stone-200 items-end">
          <div className="lg:col-span-5 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/70 text-stone-700 text-xs font-semibold uppercase tracking-wider">
              <span>Prudential Governance &bull; Regulatory Seals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
              Institutional Rigor Built Into Every Architecture
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl">
              We engineer banking systems and security operations to meet the world’s most exacting prudential standards. Audited and verified for Australian institutional mandates.
            </p>
          </div>
        </div>

        {/* 4-Panel Exhibition Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {frameworks.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-[#0284C7]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200/60">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-medium text-stone-900 mb-3 tracking-tight group-hover:text-[#0284C7] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 font-normal leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-stone-100 flex items-start gap-2 text-xs text-stone-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item.details}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
