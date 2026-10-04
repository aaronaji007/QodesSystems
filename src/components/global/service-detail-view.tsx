"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ChevronRight, 
  Plus,
  Minus,
  Check,
  Terminal,
  FileText,
  CornerDownRight
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
  ctaHeadline = "Initiate Architectural Review",
  ctaSubtext = "Connect directly with our senior core banking architects and cybersecurity officers in Melbourne. We assess legacy constraints, design modern target states, and deliver zero-downtime execution.",
}: ServiceDetailProps) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="w-full bg-[#FFFFFF] text-[#0F172A] selection:bg-[#0F172A] selection:text-white font-sans antialiased">
      
      {/* 1. TOP METADATA DOSSIER BAR (Hairline divider & system stamps) */}
      <section className="w-full border-b border-neutral-200 bg-neutral-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-y-2 text-xs font-mono text-neutral-500">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.href ? (
                  <Link 
                    href={crumb.href} 
                    className="hover:text-neutral-950 transition-colors uppercase tracking-wider"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-neutral-950 font-semibold uppercase tracking-wider">{crumb.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && (
                  <span className="text-neutral-300">/</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Institutional Specs */}
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest text-neutral-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>SYS_READY // V4.2</span>
            </span>
            <span className="hidden sm:inline text-neutral-300">|</span>
            <span className="hidden sm:inline">SYDNEY &bull; MELBOURNE</span>
            <span className="text-neutral-300">|</span>
            <span className="text-sky-700 font-semibold">{category}</span>
          </div>
        </div>
      </section>

      {/* 2. SWISS ASYMMETRICAL HERO (Editorial Header & Leading Premise) */}
      <section className="w-full border-b border-neutral-200 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            
            {/* Col Left: Section Number & Categorical Stamp */}
            <div className="lg:col-span-3 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
                  01 // SPECIFICATION
                </span>
                <span className="font-mono text-sm font-semibold uppercase tracking-wider text-sky-700 block">
                  {badgeText}
                </span>
              </div>
              <div className="hidden lg:block pt-12 text-xs font-mono text-neutral-400 space-y-2 border-t border-neutral-200">
                <p>INSTITUTIONAL GRADE</p>
                <p>APRA CPS 234 / ISO 20022</p>
                <p>99.999% SLA RESILIENCE</p>
              </div>
            </div>

            {/* Col Right: Massive Typographic Headline & Subtitle */}
            <div className="lg:col-span-9">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[-0.03em] text-neutral-950 leading-[1.06] mb-8">
                {title}
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-neutral-200">
                <p className="md:col-span-8 text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed">
                  {subtitle}
                </p>
                <div className="md:col-span-4 flex flex-col justify-end">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-between w-full px-5 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-mono uppercase tracking-widest transition-all"
                  >
                    <span>Schedule Review</span>
                    <ArrowRight className="w-4 h-4 text-sky-400 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. HERO GEOMETRIC FIGURE PLATE (Framed photography with technical caption) */}
      <section className="w-full border-b border-neutral-200 bg-neutral-50/40 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            
            {/* Main Visual Plate */}
            <div className="lg:col-span-9">
              <div className="relative aspect-[21/10] sm:aspect-[21/9] w-full border border-neutral-200 bg-neutral-900 overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 80vw"
                  className="object-cover opacity-90 transition-opacity hover:opacity-100"
                />
                <div className="absolute top-3 left-3 bg-neutral-950/80 backdrop-blur-sm text-neutral-300 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 border border-neutral-800">
                  FIG 1.0 &mdash; ARCHITECTURAL SCHEMATIC
                </div>
              </div>
            </div>

            {/* Right Meta Column */}
            <div className="lg:col-span-3 space-y-4 font-mono text-xs">
              <div className="p-5 border border-neutral-200 bg-white space-y-3">
                <div className="text-neutral-400 uppercase tracking-widest text-[11px]">
                  VERIFICATION
                </div>
                <div className="text-neutral-900 font-semibold leading-snug">
                  Audited for high-concurrency Australian financial infrastructure.
                </div>
                <div className="pt-3 border-t border-neutral-100 text-neutral-500 text-[11px] space-y-1">
                  <div>LATENCY: &lt; 1.2ms</div>
                  <div>FAILOVER: ZERO-DATA-LOSS</div>
                  <div>STANDARDS: CDR / NPP</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE NARRATIVE (Split-rail Swiss reading layout) */}
      <section className="w-full border-b border-neutral-200 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Col Left: Section Metadata */}
            <div className="lg:col-span-4 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block">
                02 // EXECUTIVE ARCHITECTURE
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-neutral-950 tracking-tight leading-snug">
                Built for mission-critical institutional operations.
              </h2>
              <p className="text-sm text-neutral-500 font-mono leading-relaxed pt-4 border-t border-neutral-200">
                Detailed domain separation eliminating batch processing bottlenecks, single-points-of-failure, and legacy vendor lock-in.
              </p>
            </div>

            {/* Col Right: Editorial Body Paragraphs */}
            <div className="lg:col-span-8 space-y-8 text-neutral-700 text-base sm:text-lg leading-[1.75] font-light">
              {leadParagraphs.map((para, i) => (
                <p key={i} className="text-neutral-800">
                  {para}
                </p>
              ))}

              {/* Key Deliverables Check-matrix */}
              {keyBenefits && keyBenefits.length > 0 && (
                <div className="pt-10 mt-10 border-t border-neutral-200">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-6">
                    MANDATORY DELIVERABLES &amp; COMPLIANCE BENCHMARKS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 font-mono text-xs text-neutral-800">
                    {keyBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3 py-2 border-b border-neutral-100">
                        <span className="text-sky-600 font-bold font-mono">[+]</span>
                        <span className="leading-relaxed font-sans text-sm text-neutral-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 5. ARCHITECTURE PILLARS (Clean Swiss Grid Columns with thin borders) */}
      {pillars && pillars.length > 0 && (
        <section className="w-full border-b border-neutral-200 bg-neutral-50/50 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-6 border-b border-neutral-200">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
                  03 // CORE TENETS
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-neutral-950 tracking-tight">
                  Foundational Engineering Principles
                </h3>
              </div>
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                ZERO TECHNICAL DEBT &bull; AUDITED ARCHITECTURE
              </span>
            </div>

            {/* Asymmetrical 3-Column Dossier */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-neutral-200 bg-white">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-8 sm:p-10 border-r border-b border-neutral-200 flex flex-col justify-between hover:bg-neutral-50/80 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-mono text-xs text-neutral-400">
                        P_0{idx + 1}
                      </span>
                      <span className="text-sky-700 text-xs font-mono uppercase tracking-widest">
                        PRINCIPLE
                      </span>
                    </div>
                    <h4 className="text-lg font-medium text-neutral-950 mb-3 tracking-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="pt-8 mt-8 border-t border-neutral-100 flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <CornerDownRight className="w-3.5 h-3.5 text-sky-600" />
                    <span>VERIFIED SYSTEM STANDARD</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. MODULAR SPECIFICATIONS (Accordion styled like an Engineering Ledger) */}
      {modules && modules.length > 0 && (
        <section className="w-full border-b border-neutral-200 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Left Column: Heading */}
              <div className="lg:col-span-4 space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block">
                  04 // FUNCTIONAL SPECIFICATIONS
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-neutral-950 tracking-tight leading-snug">
                  Component Breakdown &amp; Practice Modules
                </h3>
                <p className="text-sm text-neutral-500 font-mono leading-relaxed pt-4 border-t border-neutral-200">
                  Select a module index to inspect technical capabilities, accounting sub-ledgers, and integration adapters.
                </p>
              </div>

              {/* Right Column: Ledger List */}
              <div className="lg:col-span-8 border-t border-neutral-200">
                {modules.map((mod, index) => {
                  const isOpen = openAccordion === index;
                  return (
                    <div
                      key={index}
                      className="border-b border-neutral-200 transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => toggleAccordion(index)}
                        className="w-full py-6 text-left flex items-start justify-between gap-6 hover:text-sky-700 transition-colors group"
                      >
                        <div className="flex items-start gap-4 sm:gap-6">
                          <span className="font-mono text-xs text-neutral-400 pt-1 group-hover:text-neutral-900">
                            [{index < 9 ? `0${index + 1}` : index + 1}]
                          </span>
                          <div>
                            <h4 className="font-normal text-lg sm:text-xl text-neutral-950 tracking-tight group-hover:text-sky-800">
                              {mod.title}
                            </h4>
                            {mod.subtitle && (
                              <p className="text-xs font-mono text-neutral-500 mt-1 uppercase tracking-wider">
                                {mod.subtitle}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="pt-1 text-neutral-400 group-hover:text-neutral-950 flex-shrink-0">
                          {isOpen ? (
                            <Minus className="w-5 h-5 text-sky-600" />
                          ) : (
                            <Plus className="w-5 h-5" />
                          )}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="pb-8 pt-2 pl-8 sm:pl-12">
                          <div className="p-6 bg-neutral-50 border-l-2 border-neutral-950 font-mono text-xs text-neutral-600 space-y-3">
                            <span className="text-[10px] uppercase tracking-widest text-neutral-400 block mb-3">
                              SCOPE OF CAPABILITIES &amp; RUNTIME CONTROLS
                            </span>
                            <ul className="space-y-3 font-sans text-sm text-neutral-700 font-light">
                              {mod.items.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex items-start gap-3">
                                  <span className="font-mono text-xs text-sky-600 font-bold mt-0.5">&gt;</span>
                                  <span className="leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 7. ARCHITECTURAL CONTACT DOSSIER (Obsidian & Crisp Monospace) */}
      <section className="w-full bg-[#0A0F1D] text-white py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="font-mono text-xs uppercase tracking-widest text-sky-400">
                05 // ENGAGEMENT PROTOCOL
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
                {ctaHeadline}
              </h3>
              <p className="text-neutral-400 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
                {ctaSubtext}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end gap-4">
              <Link
                href="/contact"
                className="group flex items-center justify-between w-full px-6 py-4 bg-white text-neutral-950 font-mono text-xs uppercase tracking-widest hover:bg-neutral-100 transition-all"
              >
                <span>Initiate Technical Advisory</span>
                <ArrowRight className="w-4 h-4 text-sky-600 transition-transform group-hover:translate-x-1" />
              </Link>
              <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest text-right">
                CONFIDENTIAL &bull; ZERO-OBLIGATION
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
