"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronDown, 
  Building2, 
  Layers, 
  Cpu, 
  Sparkles
} from "lucide-react";

export interface ServicePillar {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface ServiceModule {
  title: string;
  subtitle?: string;
  items: string[];
}

export interface ServiceDetailProps {
  category: "Core Banking Systems" | "Cybersecurity & Assurance" | "Banking Products" | "Enterprise Consulting";
  title: string;
  subtitle: string;
  breadcrumbs: { label: string; href?: string }[];
  leadParagraphs: string[];
  imageUrl: string;
  imageAlt: string;
  badgeText?: string;
  pillars?: ServicePillar[];
  modules?: ServiceModule[];
  keyBenefits?: string[];
  ctaHeadline?: string;
  ctaSubtext?: string;
}

export default function ServiceDetailView({
  category,
  title,
  subtitle,
  breadcrumbs,
  leadParagraphs,
  imageUrl,
  imageAlt,
  badgeText = "Tier-1 Institutional Delivery",
  pillars,
  modules,
  keyBenefits,
  ctaHeadline = "Evaluate Your Institutional Architecture With Our Principals",
  ctaSubtext = "Connect directly with our senior core banking architects and cybersecurity officers in Melbourne. We assess legacy constraints, design modern target states, and deliver zero-downtime execution.",
}: ServiceDetailProps) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="w-full bg-white text-slate-900 overflow-hidden">
      
      {/* 1. HERO HEADER WITH BREADCRUMB */}
      <section className="relative w-full bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200/80 pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div 
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-slate-900 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-slate-900 font-medium">{crumb.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && (
                  <ChevronRight className="w-3 h-3 text-slate-400" />
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Category Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-mono font-medium tracking-wide mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
            <span>{category}</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-[1.12] mb-6">
              {title}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed mb-8">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all duration-200 shadow-sm hover:shadow"
              >
                <span>Schedule Technical Review</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-medium text-sm transition-all hover:bg-slate-50"
              >
                <span>About Our Firm</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2. OVERVIEW & FEATURED ARCHITECTURE IMAGE */}
      <section className="w-full py-16 lg:py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-700 font-semibold">
                <Building2 className="w-4 h-4" />
                <span>Executive Architectural Overview</span>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                {leadParagraphs.map((para, i) => (
                  <p key={i} className="text-slate-700">
                    {para}
                  </p>
                ))}
              </div>

              {keyBenefits && keyBenefits.length > 0 && (
                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold mb-4">
                    Key Value Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {keyBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 font-medium leading-snug">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Media Preview */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-4">
                <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 group">
                  <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono flex items-center justify-between">
                    <span className="bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                      {badgeText}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 font-mono space-y-1">
                  <div className="flex items-center justify-between">
                    <span>Audit Assurance:</span>
                    <span className="text-slate-900 font-semibold">APRA CPS 234 Aligned</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Target Delivery:</span>
                    <span className="text-slate-900 font-semibold">Zero-Downtime Guarantee</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CAPABILITY PILLARS (IF PROVIDED) */}
      {pillars && pillars.length > 0 && (
        <section className="w-full py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-700 font-semibold mb-3">
                <Cpu className="w-4 h-4" />
                <span>Architecture Pillars</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Engineered for High-Throughput &amp; Zero Failure
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-5">
                    {pillar.icon || <Sparkles className="w-5 h-5" />}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. EXPANDABLE TECHNICAL MODULES / ACCORDIONS (IF PROVIDED) */}
      {modules && modules.length > 0 && (
        <section className="w-full py-16 lg:py-24 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-700 font-semibold mb-3">
                <Layers className="w-4 h-4" />
                <span>Modular Specifications</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Detailed Practice &amp; Delivery Modules
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Click any module below to inspect implementation deliverables and technology capabilities.
              </p>
            </div>

            <div className="space-y-4 max-w-4xl">
              {modules.map((mod, index) => {
                const isOpen = openAccordion === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                    >
                      <div>
                        <h4 className="font-bold text-base text-slate-900">
                          {mod.title}
                        </h4>
                        {mod.subtitle && (
                          <p className="text-xs text-slate-500 font-mono mt-0.5">
                            {mod.subtitle}
                          </p>
                        )}
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? "rotate-180 text-sky-600" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50">
                        <ul className="space-y-2.5">
                          {mod.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-3 text-sm text-slate-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 5. BOTTOM ADVISORY CTA BANNER */}
      <section className="w-full bg-slate-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div 
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-800/80 text-sky-400 text-xs font-mono uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Principal Executive Advisory</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                {ctaHeadline}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                {ctaSubtext}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all shadow-md hover:shadow-sky-600/30"
              >
                <span>Initiate Technical Advisory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
