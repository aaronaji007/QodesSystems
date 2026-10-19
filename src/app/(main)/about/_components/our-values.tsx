"use client";

import React from "react";
import { ShieldCheck, Cpu, Target, Award, CheckCircle2 } from "lucide-react";
import SpotlightCard from "@/components/bits/SpotlightCard";

const values = [
  {
    title: "Institutional Integrity",
    description: "Every architectural decision is held to strict banking-grade governance, APRA prudential standards, and full regulatory transparency.",
    icon: ShieldCheck,
  },
  {
    title: "Zero-Downtime Reliability",
    description: "We design active-active, fault-tolerant financial architectures engineered to maintain uninterrupted transaction clearance under load.",
    icon: Cpu,
  },
  {
    title: "Pre-Acceptance Verification",
    description: "Our principal solution architects conduct deep structural reviews early in every project lifecycle, eradicating defects before user testing.",
    icon: Target,
  },
  {
    title: "Two Decades of Track Record",
    description: "Deep hands-on implementation heritage spanning SAP Banking, Temenos T24, Qodes CBS, and Oracle FLEXCUBE platforms.",
    icon: Award,
  },
];

const OurValuesComponent = () => {
  return (
    <section className="w-full bg-stone-50/60 py-20 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="text-xs uppercase tracking-wider text-[#0B99D9] font-semibold">
            Engineering Principles
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
            The Principles Guiding Our Banking Practices
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <SpotlightCard
                key={v.title}
                className="p-7 flex flex-col justify-between h-full bg-white border border-stone-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0B99D9] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium text-stone-900 mb-2.5 tracking-tight">
                    {v.title}
                  </h3>
                  <p className="text-sm text-stone-600 font-light leading-relaxed">
                    {v.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-100 mt-6 flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Institutional Standard</span>
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
