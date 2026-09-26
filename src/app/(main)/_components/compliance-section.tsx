"use client";

import React from "react";
import { ShieldCheck, Lock, CheckCircle, FileText, Landmark, Globe } from "lucide-react";
import SpotlightCard from "@/components/bits/SpotlightCard";

export const ComplianceSection = () => {
  const frameworks = [
    {
      title: "APRA CPS 234 Compliance",
      code: "CPS 234",
      description: "Comprehensive information security assurance designed to ensure APRA-regulated banking entities maintain resilience against cyber threats.",
      icon: ShieldCheck,
      details: "Audit-ready perimeter defense, vulnerability assessments, and incident response readiness.",
    },
    {
      title: "ISO/IEC 27001 Standard",
      code: "ISO 27001",
      description: "Rigorous alignment with international specifications for Information Security Management Systems (ISMS).",
      icon: Lock,
      details: "Systematic examination of information security risks and zero-compromise control policies.",
    },
    {
      title: "PCI-DSS Level 1 Ready",
      code: "PCI-DSS v4.0",
      description: "Payment Card Industry Data Security Standard technical controls for high-volume financial transaction routing.",
      icon: Landmark,
      details: "End-to-end tokenization, encrypted storage, and strict cryptographic key rotation procedures.",
    },
    {
      title: "Australian Privacy Principles",
      code: "Privacy Act 1988",
      description: "Full compliance with Australian data sovereignty, consumer data right (CDR), and financial data handling guidelines.",
      icon: Globe,
      details: "Local data residency, strict authorization bounds, and sovereign compliance oversight.",
    },
  ];

  return (
    <section className="w-full bg-white py-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono font-medium text-slate-700 uppercase tracking-wider mb-4 shadow-sm">
              <FileText className="w-3.5 h-3.5 text-sky-600" />
              <span>Institutional Governance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Regulatory Rigor Built Into Every Tier
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              We engineer banking systems and security operations to meet the world’s most exacting prudential standards.
            </p>
          </div>
          <div className="text-xs font-mono text-slate-400">
            AUSTRALIAN PRUDENTIAL REGULATION AUTHORITY (APRA) ALIGNED
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {frameworks.map((item) => {
            const Icon = item.icon;
            return (
              <SpotlightCard
                key={item.title}
                className="p-6 flex flex-col justify-between h-full bg-slate-50/40 border border-slate-200/80 hover:border-slate-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-medium text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {item.code}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex items-start gap-1.5 text-[11px] text-slate-500 font-mono">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{item.details}</span>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
