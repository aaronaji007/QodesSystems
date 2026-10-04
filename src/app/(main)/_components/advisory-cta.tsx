"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
import { useContent } from "@/context/content-context";

export const AdvisoryCta = () => {
  const { getContent } = useContent();

  const headline = getContent(
    "cta_headline",
    "Begin an architectural dialogue with our principal engineering studio."
  );
  const subtext = getContent(
    "cta_subtext",
    "Whether commissioning a tier-one core transformation, modernising real-time payment rails, or conducting sovereign security reviews, our team partners with forward-thinking financial institutions."
  );

  return (
    <section className="w-full bg-[#181B20] text-white py-24 lg:py-32 font-sans relative overflow-hidden">
      {/* Decorative ambient gradient inspired by exhibition lighting */}
      <div 
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#2EA3DC]/10 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#21252C] border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#79C5EC]">
                <Compass className="w-3.5 h-3.5" />
                <span>Executive Advisory &bull; Institutional Commissions</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-[1.15]">
                {headline}
              </h2>
              
              <p className="text-stone-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
                {subtext}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-stone-400">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  APRA CPS 234 & ISO 27001 Certified Practice
                </span>
                <span className="hidden sm:inline text-stone-600">•</span>
                <span>Direct Principal Partner Engagement</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-4">
              <Link
                href="/contact"
                className="group flex items-center justify-between w-full px-6 py-4 bg-[#2EA3DC] text-white rounded-xl font-medium text-sm tracking-wide hover:bg-[#258ec2] shadow-lg shadow-[#2EA3DC]/20 transition-all duration-200"
              >
                <span>Schedule Consultation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/services"
                className="flex items-center justify-between w-full px-6 py-3.5 bg-white/5 border border-white/10 text-stone-200 rounded-xl font-medium text-sm tracking-wide hover:bg-white/10 hover:text-white transition-all duration-200"
              >
                <span>Explore Catalog & Systems</span>
                <span className="text-stone-400 text-xs">Full Portfolio →</span>
              </Link>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-400">
            <div>
              <span className="font-semibold text-stone-200">Qodes Systems Pty Ltd</span> — Melbourne &bull; Sydney &bull; Global Operations
            </div>
            <div className="text-stone-400">
              Discreet Institutional Advisory for Banking & High-Fintech
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisoryCta;
