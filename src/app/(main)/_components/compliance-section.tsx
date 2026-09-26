"use client";

import React from "react";
import { CornerDownRight, Check } from "lucide-react";

export const ComplianceSection = () => {
  const frameworks = [
    {
      title: "APRA CPS 234 Compliance",
      code: "CPS 234",
      description: "Information security assurance ensuring APRA-regulated banking entities maintain active resilience against emerging cyber threats.",
      details: "Audit-ready perimeter defense, vulnerability assessments, and incident response readiness.",
    },
    {
      title: "ISO/IEC 27001 Standard",
      code: "ISO 27001",
      description: "Rigorous alignment with international specifications for Information Security Management Systems (ISMS).",
      details: "Systematic examination of institutional security risks and zero-compromise control policies.",
    },
    {
      title: "PCI-DSS Level 1 Ready",
      code: "PCI-DSS v4.0",
      description: "Payment Card Industry Data Security Standard technical controls for high-volume financial transaction routing.",
      details: "End-to-end tokenization, encrypted storage, and strict cryptographic key rotation procedures.",
    },
    {
      title: "Australian Privacy Principles",
      code: "Privacy Act 1988",
      description: "Full compliance with Australian data sovereignty, consumer data right (CDR), and financial data handling guidelines.",
      details: "Local data residency, strict authorization bounds, and sovereign compliance oversight.",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-20 lg:py-28 border-b border-neutral-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-12 mb-12 border-b border-neutral-200 items-end">
          <div className="lg:col-span-5 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block">
              03 // PRUDENTIAL GOVERNANCE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-950 tracking-[-0.02em] leading-tight">
              Regulatory Rigor Built Into Every Tier
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-2xl">
              We engineer banking systems and security operations to meet the world’s most exacting prudential standards. Audited and verified for Australian institutional mandates.
            </p>
          </div>
        </div>

        {/* 4-Panel Swiss Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-neutral-200 bg-white">
          {frameworks.map((item, idx) => {
            return (
              <div
                key={item.title}
                className="p-8 border-r border-b border-neutral-200 flex flex-col justify-between hover:bg-neutral-50/60 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-neutral-400">
                      R_0{idx + 1}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-sky-800 bg-neutral-100 px-2 py-0.5 border border-neutral-200">
                      {item.code}
                    </span>
                  </div>

                  <h3 className="text-lg font-medium text-neutral-950 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-100 flex items-start gap-2 text-[11px] text-neutral-500 font-mono">
                  <CornerDownRight className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <span>{item.details}</span>
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
