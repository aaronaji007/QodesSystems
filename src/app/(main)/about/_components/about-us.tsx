"use client";

import Image from "next/image";
import React from "react";
import { Building2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const AboutUsComponent = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb / Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono font-medium text-slate-700 uppercase tracking-wider mb-6 shadow-sm">
          <Building2 className="w-3.5 h-3.5 text-sky-600" />
          <span>About Qodes Systems</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
              Core Banking Engineering &amp; Technology Consulting
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                QODES Systems is a specialized enterprise technology and advisory consultancy in the{" "}
                <span className="font-semibold text-slate-900">Core Banking Domain</span>, bringing deep, hands-on implementation expertise across{" "}
                <span className="font-semibold text-slate-900">SAP Core Banking</span> and the{" "}
                <span className="font-semibold text-slate-900">Temenos T24 Core Banking System</span>.
              </p>

              <p>
                Additionally, we engineer proprietary,{" "}
                <span className="font-semibold text-slate-900">AI-driven Core Banking Systems</span>{" "}
                built by enterprise architects with over two decades of proven success delivering complex transformations to large financial institutions.
              </p>

              <p>
                By combining cutting-edge cloud-native architectures with rigorous institutional governance, we empower banks to optimize core operations, accelerate transaction clearance, and achieve flawless digital modernization without downtime.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-100 flex flex-wrap gap-4">
              <Link
                href="/qodes-core-banking-system"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white font-medium text-sm transition-all hover:bg-slate-800"
              >
                <span>Our CBS Platform</span>
                <ArrowUpRight className="w-4 h-4 text-sky-400" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium text-sm transition-all hover:bg-slate-50 hover:border-slate-300"
              >
                <span>Contact Advisory</span>
              </Link>
            </div>
          </div>

          {/* Right Column: High-Res Modern Architectural Photo with Proper Aspect Ratio */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
                alt="QODES Systems Corporate Engineering Headquarters"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono bg-slate-950/60 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
                Melbourne, Australia · Engineering &amp; Advisory Practice
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsComponent;
