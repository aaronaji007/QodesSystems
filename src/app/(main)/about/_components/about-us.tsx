"use client";

import Image from "next/image";
import React from "react";
import { ArrowRight, CornerDownRight } from "lucide-react";
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
    <section className="w-full bg-[#FFFFFF] py-16 lg:py-24 border-b border-neutral-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb / Metadata Hairline */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-neutral-200 text-xs font-mono text-neutral-500">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-neutral-950 uppercase tracking-wider">Home</Link>
            <span className="text-neutral-300">/</span>
            <span className="text-neutral-950 font-semibold uppercase tracking-wider">About Us</span>
          </div>
          <span className="text-[11px] uppercase tracking-widest text-sky-800 font-semibold">
            ESTABLISHED 2004 &bull; 20+ YEARS HERITAGE &bull; AUSTRALIA &amp; INDIA
          </span>
        </div>

        {/* Asymmetrical Swiss Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Metadata & Positioning */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block">
              01 // CORPORATE DOSSIER
            </span>
            <span className="font-mono text-sm font-semibold uppercase tracking-wider text-sky-700 block">
              QODES SYSTEMS PTY LTD
            </span>
            <div className="pt-6 border-t border-neutral-200 text-xs font-mono text-neutral-500 space-y-2">
              <p>AUSTRALIA: MELBOURNE &bull; SYDNEY</p>
              <p>INDIA: STRATEGIC DELIVERY HUBS</p>
              <p>OPERATING IN: AUSTRALIA &amp; INDIA</p>
              <p>PRIMARY DOMAINS: CORE BANKING &amp; SAP ERP</p>
            </div>
          </div>

          {/* Center Column: Narrative & Headline */}
          <div className="lg:col-span-9 space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-neutral-950 leading-[1.06] whitespace-pre-line">
              {heading}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-neutral-200">
              
              <div className="md:col-span-7 space-y-5 text-neutral-700 text-base sm:text-lg font-light leading-relaxed">
                <p className="font-normal text-neutral-900 whitespace-pre-line">{lead}</p>
                <p className="whitespace-pre-line">{story1}</p>
                <p className="whitespace-pre-line">{story2}</p>

                <div className="pt-8 border-t border-neutral-100 flex flex-wrap gap-3">
                  <Link
                    href="/qodes-core-banking-system"
                    className="group inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-950 text-white font-mono text-xs uppercase tracking-widest hover:bg-neutral-800 transition-all"
                  >
                    <span>Our CBS Platform</span>
                    <ArrowRight className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-50 border border-neutral-200 text-neutral-800 font-mono text-xs uppercase tracking-widest hover:bg-neutral-100 transition-all"
                  >
                    <span>Contact Advisory</span>
                  </Link>
                </div>
              </div>

              {/* Right Figure Plate */}
              <div className="md:col-span-5 space-y-3">
                <div className="relative aspect-[4/3] w-full border border-neutral-200 bg-neutral-900 overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt="Qodes Systems Engineering Hub"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover opacity-90 transition-opacity hover:opacity-100"
                  />
                  <div className="absolute top-2 left-2 bg-neutral-950/80 backdrop-blur-sm text-neutral-300 font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 border border-neutral-800">
                    FIG 1.0 &mdash; ENGINEERING HUB
                  </div>
                </div>
                <div className="p-3 bg-neutral-50 border border-neutral-200 text-[11px] font-mono text-neutral-500">
                  Principal Advisory Headquarters &bull; Tier-1 Delivery Architects
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsComponent;
