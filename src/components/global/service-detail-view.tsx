"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  ChevronRight, 
  Plus, 
  Minus, 
  CheckCircle2, 
  Building2
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
  ctaHeadline = "Initiate Architecture Consultation",
  ctaSubtext = "Connect directly with our senior core banking and enterprise solution architects across Australia and India.",
}: ServiceDetailProps) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="w-full bg-white text-stone-900 selection:bg-[#0B99D9]/20 font-sans antialiased">
      
      {/* 1. CLEAN BREADCRUMB & METADATA BAR */}
      <section className="w-full border-b border-stone-200/70 bg-stone-50/50 py-3.5 px-4 sm:px-8 text-xs text-stone-600">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0B99D9]"></span>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.href ? (
                  <Link 
                    href={crumb.href} 
                    className="hover:text-stone-950 transition-colors font-medium"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-stone-900 font-semibold">{crumb.label}</span>
                )}
                {idx < breadcrumbs.length - 1 && (
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Region & Category Badge */}
          <div className="flex items-center gap-3">
            <span className="text-stone-500 hidden sm:inline">Australia &bull; India Operations</span>
            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-sky-50 text-[#0B99D9] border border-sky-200/60">
              {category}
            </span>
          </div>
        </div>
      </section>

      {/* 2. AIRY EXECUTIVE HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200 uppercase tracking-wider">
                {badgeText}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight leading-[1.12] text-balance">
                {title}
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-stone-600 font-light leading-relaxed max-w-2xl text-balance">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all shadow-sm"
              >
                <span>Initiate Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#0B99D9]" />
              </Link>
              {modules && modules.length > 0 && (
                <Link
                  href="#modules"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-800 font-medium text-sm transition-all shadow-sm"
                >
                  <span>Explore Deliverables</span>
                </Link>
              )}
            </div>

            {/* Credibility Note */}
            <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center gap-4 text-xs text-stone-500 font-normal">
              <span>Two decades of Tier-1 banking heritage</span>
              <span className="text-stone-300">•</span>
              <span>Australia &amp; India delivery centers</span>
              <span className="text-stone-300">•</span>
              <span>SLA &amp; Compliance Guaranteed</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-stone-900/10" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-stone-200/60 space-y-1.5">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#0B99D9] block">
                  Service Overview
                </span>
                <h4 className="text-base font-medium text-stone-900">
                  {title}
                </h4>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. KEY DELIVERABLES & PILLARS - BRAND BLUE FEATURE SECTION */}
      {((keyBenefits && keyBenefits.length > 0) || (pillars && pillars.length > 0)) && (
        <section className="w-full bg-[#0B99D9] py-24 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
            
            <div className="space-y-3 border-b border-white/20 pb-8">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-sky-100">
                Key Deliverables &amp; Core Tenets
              </p>
              <h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight">
                What We Deliver
              </h2>
            </div>

            {/* Deliverables Check Grid */}
            {keyBenefits && keyBenefits.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyBenefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white text-stone-900 border border-sky-100/30 shadow-lg hover:shadow-xl transition-all flex items-start gap-3.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#0B99D9] flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-stone-800 leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Foundational Pillars Grid */}
            {pillars && pillars.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-3xl bg-white text-stone-900 border border-sky-100/30 shadow-xl flex flex-col justify-between space-y-4 hover:shadow-2xl transition-all"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-[#0B99D9]">
                        {pillar.icon || <Building2 className="w-5 h-5" />}
                      </div>
                      <h4 className="text-lg font-medium text-stone-900 tracking-tight">
                        {pillar.title}
                      </h4>
                      <p className="text-sm text-stone-600 leading-relaxed font-light">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </section>
      )}

      {/* 4. EXECUTIVE NARRATIVE (Concise & Easy to Read) */}
      {leadParagraphs && leadParagraphs.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-500">
                Service Approach
              </p>
              <h3 className="text-2xl sm:text-3xl font-normal text-stone-900 tracking-tight">
                Designed for Reliability &amp; Clarity.
              </h3>
            </div>
            <div className="lg:col-span-8 space-y-5 text-stone-600 text-base sm:text-lg font-light leading-relaxed">
              {leadParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. SERVICE MODULES & SPECIFICATIONS */}
      {modules && modules.length > 0 && (
        <section id="modules" className="w-full border-t border-stone-200/80 bg-stone-50/50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
            
            <div className="max-w-3xl space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-500">
                Scope of Delivery
              </p>
              <h3 className="text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
                Services Provided &amp; Practice Modules
              </h3>
              <p className="text-stone-600 text-base font-light leading-relaxed">
                Click any service below to review concrete deliverables and functional coverage.
              </p>
            </div>

            <div className="space-y-4">
              {modules.map((mod, index) => {
                const isOpen = openAccordion === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-white border border-stone-200 overflow-hidden shadow-xs transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 hover:bg-stone-50/50 transition-colors"
                    >
                      <div>
                        <h4 className="font-medium text-lg sm:text-xl text-stone-900 tracking-tight">
                          {mod.title}
                        </h4>
                        {mod.subtitle && (
                          <p className="text-xs text-[#0B99D9] font-medium mt-1 uppercase tracking-wider">
                            {mod.subtitle}
                          </p>
                        )}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 flex-shrink-0">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-stone-100">
                        <p className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-4">
                          Included Deliverables:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {mod.items.map((item, itemIdx) => (
                            <div key={itemIdx} className="flex items-start gap-2.5 text-sm text-stone-700">
                              <CheckCircle2 className="w-4 h-4 text-[#0B99D9] flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* 6. EXECUTIVE CTA BANNER - BRAND BLUE FEATURE SECTION */}
      <section className="w-full bg-[#0B99D9] py-24 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-6 relative z-10">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-sky-100">
            Executive Consultation
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            {ctaHeadline}
          </h2>
          <p className="text-sky-50 text-base sm:text-lg leading-relaxed font-light max-w-2xl mx-auto">
            {ctaSubtext}
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-sky-50 text-stone-950 font-medium text-sm transition-all shadow-lg hover:shadow-xl"
            >
              <span>Connect With Our Specialists</span>
              <ArrowRight className="w-4 h-4 text-[#0B99D9]" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
