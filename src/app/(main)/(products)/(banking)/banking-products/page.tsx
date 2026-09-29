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
  ShieldCheck, 
  CheckCircle2, 
  Layers 
} from "lucide-react";
import { useContent } from "@/context/content-context";

const PRODUCTS = [
  {
    title: "Core Banking System",
    href: "/core-banking-system",
    description: "Modular, web-enabled core banking platform for retail, commercial, and financial inclusion operations.",
    icon: <Building2 className="w-5 h-5 text-sky-600" />,
    tag: "Core Platform",
  },
  {
    title: "Internet Banking Platform",
    href: "/internet-banking-system",
    description: "Institutional-grade digital banking web portal with multi-factor authentication and real-time payments.",
    icon: <Globe className="w-5 h-5 text-sky-600" />,
    tag: "Digital Channel",
  },
  {
    title: "Mobile Banking Application",
    href: "/mobile-banking",
    description: "Secure, responsive iOS & Android mobile banking clients with offline state protection and biometric login.",
    icon: <Smartphone className="w-5 h-5 text-sky-600" />,
    tag: "Mobile Channel",
  },
  {
    title: "Loan & Credit Origination",
    href: "/loan-software",
    description: "Automated underwriting, multi-tier credit scoring, repayment scheduling, and collateral management.",
    icon: <CreditCard className="w-5 h-5 text-sky-600" />,
    tag: "Credit Engine",
  },
  {
    title: "Remittance Management System",
    href: "/remittance-management-system",
    description: "High-speed cross-border funds transfer, SWIFT messaging, and foreign exchange settlement.",
    icon: <Send className="w-5 h-5 text-sky-600" />,
    tag: "Payments & FX",
  },
  {
    title: "HRMS Enterprise Package",
    href: "/hrms-package",
    description: "Bank-grade human resources, payroll, and workforce compliance management software.",
    icon: <Users className="w-5 h-5 text-sky-600" />,
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
    <div className="w-full bg-white text-slate-900 overflow-hidden">
      
      {/* 1. HERO HEADER */}
      <section className="relative w-full bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200/80 pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-sky-800 mb-4">
            Institutional Banking Products Suite
          </p>

          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-[1.12] mb-6">
              Institutional Banking Software &amp; Digital Channel Suite
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed mb-8">
              A comprehensive suite of modular banking applications engineered to automate core accounting, streamline customer engagement across web and mobile, and maximize technological ROI.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-sm"
              >
                <span>Request Product Demonstration</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2. OVERVIEW SPLIT */}
      <section className="w-full py-16 lg:py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-700 font-semibold">
                <Layers className="w-4 h-4" />
                <span>Strategic Technology ROI</span>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
                <p>
                  Technology trends in banking are accelerating rapidly. Customer expectations demand instant settlement, continuous uptime, and intuitive digital experiences across every touchpoint.
                </p>
                <p>
                  Banks are increasingly relying on automation beyond physical branches—demanding data accuracy, automated reconciliations, and modular architectures that inform reliable strategic decisions.
                </p>
                <p>
                  Our comprehensive product suite empowers financial institutions to extract the highest productivity from their technology investments while delivering empowering customer experiences with substantial operational savings.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Modular, independent deployment</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>APRA CPS 234 security certified</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Cloud-native and on-prem deployment</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Real-time REST &amp; ISO 20022 APIs</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                <Image
                  src={imageUrl}
                  alt="Qodes Banking Products Suite Interface"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono">
                  <span className="bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                    Comprehensive Banking Suite
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATALOG GRID */}
      <section className="w-full py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Explore Our Software Products
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Select any banking product below to inspect technical architecture, features, and deployment parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((prod, idx) => (
              <Link
                key={idx}
                href={prod.href}
                className="group bg-white rounded-xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-sky-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center">
                      {prod.icon}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 uppercase">
                      {prod.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors flex items-center gap-1.5">
                    <span>{prod.title}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-600" />
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {prod.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-mono text-sky-600 font-medium">
                  <span>View Product Architecture →</span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 4. ADVISORY BANNER */}
      <section className="w-full bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to Upgrade Your Banking Systems?
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Connect directly with our product specialists to request a tailored functional demonstration or discuss custom integration requirements.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all shadow-md"
              >
                <span>Schedule Product Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
