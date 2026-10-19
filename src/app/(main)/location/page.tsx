"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { useContent } from "@/context/content-context";

// Dynamically import the map component with no SSR
const Map = dynamic(() => import("@/components/global/map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[520px] bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-500 text-sm">
      Loading interactive map...
    </div>
  ),
});

export default function LocationPage() {
  const { getContent } = useContent();

  const address = getContent("contact_address", "Sydney, NSW, Australia");
  const phone = getContent("contact_phone", "+61 457 170 962");
  const email = getContent("contact_email", "info@qodessystems.com");
  const hours = getContent("contact_hours", "Monday – Friday, 9:00 AM – 5:30 PM AEST");

  return (
    <div className="w-full bg-white text-stone-900 font-sans selection:bg-[#0B99D9]/20">
      
      {/* 1. CLEAN BREADCRUMB BAR */}
      <section className="w-full border-b border-stone-200 bg-stone-50/50 py-3.5 px-4 sm:px-8 text-xs text-stone-600">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2">
          <nav className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0B99D9]"></span>
            <Link href="/" className="hover:text-stone-950 font-medium">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-stone-900 font-semibold">Locations &amp; Facilities</span>
          </nav>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-sky-50 text-[#0B99D9] border border-sky-200/60">
              Australia &amp; India Operations
            </span>
          </div>
        </div>
      </section>

      {/* 2. AIRY HERO */}
      <section className="w-full border-b border-stone-200 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#0B99D9] block">
                Regional Presence &bull; Australia &amp; India
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight leading-[1.12]">
                Our Offices &amp; Delivery Centers
              </h1>
              <p className="text-lg sm:text-xl text-stone-600 font-light leading-relaxed max-w-2xl">
                Headquartered in Australia with specialized engineering delivery centers in India, providing round-the-clock implementation, cutover support, and 24/7 Application Management (AMS).
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end">
              <div className="p-6 rounded-3xl bg-stone-50 border border-stone-200 space-y-4">
                <h4 className="text-base font-medium text-stone-900">
                  Ready to Meet Our Team?
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  Our principal banking consultants are available for confidential consultations in Sydney, Melbourne, or via video conference.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-between w-full px-5 py-3.5 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded-xl transition-all shadow-sm"
                >
                  <span>Connect With Our Team</span>
                  <ArrowRight className="w-4 h-4 text-[#0B99D9]" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MAP & OFFICE REGISTERS */}
      <section className="w-full py-16 lg:py-24 border-b border-stone-200 bg-stone-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Office Information */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-8 rounded-3xl border border-stone-200 bg-white shadow-sm space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#0B99D9] block mb-1">
                    Australian Headquarters
                  </span>
                  <h3 className="text-2xl font-normal text-stone-900 tracking-tight">
                    Qodes Systems Pty Ltd
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Enterprise Core Banking &amp; SAP Consulting
                  </p>
                </div>

                <div className="space-y-4 text-sm pt-6 border-t border-stone-100">
                  <div className="flex items-start gap-3 text-stone-700">
                    <MapPin className="w-4 h-4 text-[#0B99D9] flex-shrink-0 mt-0.5" />
                    <span>{address}</span>
                  </div>

                  <div className="flex items-start gap-3 text-stone-700">
                    <Phone className="w-4 h-4 text-[#0B99D9] flex-shrink-0 mt-0.5" />
                    <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-[#0B99D9] transition-colors">
                      {phone}
                    </a>
                  </div>

                  <div className="flex items-start gap-3 text-stone-700">
                    <Mail className="w-4 h-4 text-[#0B99D9] flex-shrink-0 mt-0.5" />
                    <a href={`mailto:${email}`} className="hover:text-[#0B99D9] transition-colors">
                      {email}
                    </a>
                  </div>

                  <div className="flex items-start gap-3 text-stone-700">
                    <Clock className="w-4 h-4 text-[#0B99D9] flex-shrink-0 mt-0.5" />
                    <span>{hours}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-emerald-800 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>APRA CPS 234 &bull; Zero-Trust Protocol Compliant</span>
                </div>
              </div>

              {/* India Delivery Center Card */}
              <div className="p-6 rounded-3xl border border-stone-200 bg-white shadow-sm space-y-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#0B99D9] block mb-1">
                  India Delivery Centers
                </span>
                <p className="text-sm text-stone-600 font-light leading-relaxed">
                  Specialized engineering squads providing round-the-clock technical delivery, SAP ERP implementation, cutover support, and 24/7 Application Management (AMS).
                </p>
              </div>

            </div>

            {/* Right Column: Map Plate */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-stone-200 overflow-hidden shadow-xl bg-stone-100 h-[520px]">
                <Map />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE CTA BANNER - BRAND BLUE FEATURE SECTION */}
      <section className="w-full bg-[#0B99D9] py-24 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-6 relative z-10">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-sky-100">
            Direct Consultation
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            Schedule an In-Person or Video Consultation
          </h2>
          <p className="text-sky-50 text-base sm:text-lg leading-relaxed font-light max-w-2xl mx-auto">
            Our principal core banking and SAP architects across Australia and India are available for confidential discussions.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-sky-50 text-stone-950 font-medium text-sm transition-all shadow-lg hover:shadow-xl"
            >
              <span>Initiate Contact</span>
              <ArrowRight className="w-4 h-4 text-[#0B99D9]" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
