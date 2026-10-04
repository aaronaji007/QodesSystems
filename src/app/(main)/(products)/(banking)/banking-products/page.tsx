"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  ArrowRight, 
  Smartphone, 
  Globe, 
  CreditCard, 
  Send, 
  Users, 
  CheckCircle2, 
  Layers 
} from "lucide-react";
import { useContent } from "@/context/content-context";

const PRODUCTS = [
  {
    title: "Core Banking System",
    href: "/core-banking-system",
    description: "Modular, web-enabled core banking platform for retail, commercial, and financial inclusion operations.",
    icon: <Building2 className="w-5 h-5 text-[#0B99D9]" />,
    tag: "Core Platform",
  },
  {
    title: "Internet Banking Platform",
    href: "/internet-banking-system",
    description: "Institutional-grade digital banking web portal with multi-factor authentication and real-time payments.",
    icon: <Globe className="w-5 h-5 text-[#0B99D9]" />,
    tag: "Digital Channel",
  },
  {
    title: "Mobile Banking Application",
    href: "/mobile-banking",
    description: "Secure, responsive iOS & Android mobile banking clients with offline state protection and biometric login.",
    icon: <Smartphone className="w-5 h-5 text-[#0B99D9]" />,
    tag: "Mobile Channel",
  },
  {
    title: "Loan & Credit Origination",
    href: "/loan-software",
    description: "Automated underwriting, multi-tier credit scoring, repayment scheduling, and collateral management.",
    icon: <CreditCard className="w-5 h-5 text-[#0B99D9]" />,
    tag: "Credit Engine",
  },
  {
    title: "Remittance Management System",
    href: "/remittance-management-system",
    description: "High-speed cross-border funds transfer, SWIFT messaging, and foreign exchange settlement.",
    icon: <Send className="w-5 h-5 text-[#0B99D9]" />,
    tag: "Payments & FX",
  },
  {
    title: "HRMS Enterprise Package",
    href: "/hrms-package",
    description: "Bank-grade human resources, payroll, and workforce compliance management software.",
    icon: <Users className="w-5 h-5 text-[#0B99D9]" />,
    tag: "Enterprise HR",
  },
];

export default function BankingProductsOverviewPage() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_banking_products",
    "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop"
  );

  return (
    <div className="w-full bg-white text-stone-900 overflow-hidden font-sans">
      
      {/* 1. HERO HEADER */}
      <section className="relative w-full bg-stone-50/50 border-b border-stone-200 pt-16 pb-20 lg:pt-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#0B99D9] mb-4">
            Institutional Banking Products Suite
          </p>

          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-stone-900 leading-[1.12] mb-6">
              Banking Software &amp; Digital Channel Suite
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-stone-600 font-light leading-relaxed mb-8">
              A comprehensive suite of modular banking applications engineered to automate core accounting, streamline customer engagement across web and mobile, and maximize technological ROI.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all shadow-sm"
              >
                <span>Request Product Demonstration</span>
                <ArrowRight className="w-4 h-4 text-[#0B99D9]" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2. OVERVIEW SPLIT */}
      <section className="w-full py-16 lg:py-24 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#0B99D9] font-semibold">
                <Layers className="w-4 h-4" />
                <span>Strategic Technology ROI</span>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-stone-600 font-light leading-relaxed">
                <p>
                  Technology trends in banking are accelerating rapidly. Customer expectations demand instant settlement, continuous uptime, and intuitive digital experiences across every touchpoint.
                </p>
                <p>
                  Banks are increasingly relying on automation beyond physical branches—demanding data accuracy, automated reconciliations, and modular architectures that inform reliable strategic decisions.
                </p>
                <p>
                  Our comprehensive product suite empowers financial institutions across Australia and India to extract the highest productivity from their technology investments while delivering empowering customer experiences.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 text-sm text-stone-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0B99D9] flex-shrink-0" />
                  <span>Modular, independent deployment</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-stone-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0B99D9] flex-shrink-0" />
                  <span>APRA CPS 234 security aligned</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-stone-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0B99D9] flex-shrink-0" />
                  <span>Cloud-native &amp; on-premises options</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-stone-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0B99D9] flex-shrink-0" />
                  <span>Real-time REST &amp; ISO 20022 APIs</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100">
                <Image
                  src={imageUrl}
                  alt="Qodes Banking Products Suite Interface"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-stone-900/10" />
                <div className="absolute bottom-4 left-4 right-4 text-xs">
                  <span className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-200 text-stone-800 font-medium shadow-xs">
                    Comprehensive Banking Suite
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATALOG GRID */}
      <section className="w-full py-16 lg:py-24 bg-stone-50/50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-stone-900">
              Explore Our Software Products
            </h2>
            <p className="text-sm text-stone-600 font-light">
              Select any banking product below to inspect features and deployment specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((prod, idx) => (
              <Link
                key={idx}
                href={prod.href}
                className="group bg-white rounded-2xl p-7 border border-stone-200 shadow-sm hover:shadow-xl hover:border-sky-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                      {prod.icon}
                    </div>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 font-medium">
                      {prod.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-medium text-stone-900 mb-2 group-hover:text-[#0B99D9] transition-colors flex items-center justify-between">
                    <span>{prod.title}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#0B99D9]" />
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed font-light mb-6">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center text-xs text-[#0B99D9] font-medium">
                  <span>View Specifications →</span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 4. ADVISORY BANNER - BRAND BLUE FEATURE SECTION */}
      <section className="w-full bg-[#0B99D9] text-white py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-sky-100">
            Product Advisory
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            Schedule a Live Product Walkthrough
          </h2>
          <p className="text-sky-50 text-base sm:text-lg leading-relaxed font-light max-w-2xl mx-auto">
            Discuss implementation roadmaps, regulatory alignment, and core ledger connectivity with our specialists across Australia and India.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-sky-50 text-stone-950 font-medium text-sm transition-all shadow-lg hover:shadow-xl"
            >
              <span>Schedule Demonstration</span>
              <ArrowRight className="w-4 h-4 text-[#0B99D9]" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
