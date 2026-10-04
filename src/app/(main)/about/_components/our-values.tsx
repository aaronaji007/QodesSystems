"use client";

import React from "react";
import { ShieldCheck, Cpu, Target, Award, CheckCircle2 } from "lucide-react";
import SpotlightCard from "@/components/bits/SpotlightCard";

const values = [
  {
    title: "Institutional Integrity",
    description: "Every architectural decision and line of code is held to strict banking-grade governance, APRA prudential standards, and full regulatory transparency.",
    icon: ShieldCheck,
  },
  {
    title: "Zero-Downtime Reliability",
    description: "We design active-active, fault-tolerant financial architectures engineered to maintain uninterrupted transaction clearance under extreme load.",
    icon: Cpu,
  },
  {
    title: "Pre-Acceptance Verification",
    description: "Our principal solution architects conduct deep structural reviews early in every project lifecycle, eradicating architectural defects before user acceptance.",
    icon: Target,
  },
  {
    title: "Two Decades of Domain Track Record",
    description: "Deep hands-on implementation heritage spanning SAP Banking, Temenos T24, and next-generation autonomous core banking platforms.",
    icon: Award,
  },
];

const OurValuesComponent = () => {
  return (
    <section className="w-full bg-slate-50/60 py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
            Engineering Principles
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            The Principles Guiding Our Core Banking Engineering
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <SpotlightCard
                key={v.title}
                className="p-6 flex flex-col justify-between h-full bg-white border border-slate-200/80"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Standard</span>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurValuesComponent;
