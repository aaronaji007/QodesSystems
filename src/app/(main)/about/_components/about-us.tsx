"use client";

import Image from "next/image";
import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useContent } from "@/context/content-context";

const AboutUsComponent = () => {
  const { getContent } = useContent();

  const heading = getContent("about_heading", "Core Banking Engineering & Technology Consulting");
  const lead = getContent("about_lead", "Our company is a specialized consulting firm in the CORE BANKING DOMAIN, offering proven expertise across SAP Core Banking, Temenos T24 Core Banking, our proprietary Qodes Core Banking platform, and Oracle FLEXCUBE Core Banking, alongside full-lifecycle SAP ERP implementation and support.");
  const story1 = getContent("about_story_1", "With over 20 years of experience, we provide cutting edge solutions to the banking industry across Australia and India. We understand the unique challenges faced by financial institutions in modernizing legacy architectures while keeping operations resilient.");
  const story2 = getContent("about_story_2", "Our senior architects and delivery engineers combine deep domain banking knowledge with modern software engineering methodologies, ensuring every deployment meets rigorous institutional standards.");
  const imageUrl = getContent("about_image_url", "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop");

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-stone-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-stone-200 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0B99D9]"></span>
            <Link href="/" className="hover:text-stone-950 font-medium">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-stone-900 font-semibold">About Us</span>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-sky-50 text-[#0B99D9] border border-sky-200/60">
            Established 2004 &bull; 20+ Years Heritage &bull; Australia &amp; India
          </span>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Organization Summary Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl bg-stone-50 border border-stone-200/80 p-6 sm:p-8 space-y-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#0B99D9] block">
                Company Profile
              </span>
              <h3 className="text-xl font-medium text-stone-900 tracking-tight">
                Qodes Systems Pty Ltd
              </h3>
              <div className="pt-4 border-t border-stone-200 text-xs text-stone-600 space-y-2.5">
                <div className="flex justify-between py-1 border-b border-stone-200/60">
                  <span className="text-stone-400">Headquarters</span>
                  <span className="font-medium text-stone-900">Melbourne &bull; Sydney</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-200/60">
                  <span className="text-stone-400">Delivery Centers</span>
                  <span className="font-medium text-stone-900">India Operations</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-200/60">
                  <span className="text-stone-400">Operating Regions</span>
                  <span className="font-medium text-stone-900">Australia &amp; India</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-200/60">
                  <span className="text-stone-400">Core Domain</span>
                  <span className="font-medium text-stone-900">Core Banking &amp; SAP ERP</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-400">Compliance</span>
                  <span className="font-medium text-emerald-700">APRA CPS 234 Aligned</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Visual */}
          <div className="lg:col-span-8 space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-stone-900 leading-[1.12]">
              {heading}
            </h1>

            <div className="space-y-5 text-stone-600 text-base sm:text-lg font-light leading-relaxed">
              <p className="font-normal text-stone-900">{lead}</p>
              <p>{story1}</p>
              <p>{story2}</p>

              <div className="pt-6 border-t border-stone-200 flex flex-wrap gap-4">
                <Link
                  href="/qodes-core-banking-system"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 text-white rounded-xl text-sm font-medium hover:bg-stone-800 transition-all shadow-sm"
                >
                  <span>Our CBS Platform</span>
                  <ArrowRight className="w-4 h-4 text-[#0B99D9]" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-stone-200 text-stone-800 rounded-xl text-sm font-medium hover:bg-stone-50 transition-all shadow-sm"
                >
                  <span>Contact Our Specialists</span>
                </Link>
              </div>
            </div>

            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100 mt-8">
              <Image
                src={imageUrl}
                alt="Qodes Systems Engineering Hub"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-stone-900/10" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-stone-200/60">
                <p className="text-xs font-medium text-stone-800">
                  Principal Advisory Headquarters &bull; Tier-1 Banking Delivery Architects
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsComponent;
