"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { MapPin, Mail, Phone, Clock, ShieldCheck, ArrowRight, Building2, Globe } from "lucide-react";
import { useContent } from "@/context/content-context";

// Dynamically import the map component with no SSR
const Map = dynamic(() => import("@/components/global/map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] rounded-2xl bg-slate-100 border border-slate-200 animate-pulse flex items-center justify-center text-slate-400 text-xs font-mono">
      Initializing Geospatial Map Telemetry...
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
    <div className="w-full bg-white text-slate-900 overflow-hidden">
      
      {/* 1. HERO HEADER */}
      <section className="relative w-full bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200/80 pt-12 pb-16 lg:pt-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-mono font-medium tracking-wide mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse" />
            <span>Presence &amp; Delivery Centers</span>
          </div>

          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 leading-[1.12] mb-6">
              Global Delivery Infrastructure &amp; Headquarters
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed mb-8">
              Headquartered in Australia with specialized delivery centers and partner networks serving banking institutions across the Asia-Pacific and globally.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-sm"
              >
                <span>Connect With Advisory Desk</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 2. MAP & DETAILS SPLIT */}
      <section className="w-full py-16 lg:py-24 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Location Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-sky-50 border border-sky-100 text-sky-700 text-xs font-mono font-medium mb-3">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Australian Headquarters</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    QODES Systems Pty Ltd
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-1">
                    Australian Enterprise Technology Advisory
                  </p>
                </div>

                <div className="space-y-4 text-sm pt-4 border-t border-slate-100">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-medium text-slate-900 text-xs font-mono uppercase text-slate-500">Corporate Address</span>
                      <span className="text-slate-800 font-medium">{address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 flex-shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-medium text-slate-900 text-xs font-mono uppercase text-slate-500">Direct Telephone</span>
                      <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-slate-800 hover:text-sky-700 font-mono font-medium transition-colors">
                        {phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-medium text-slate-900 text-xs font-mono uppercase text-slate-500">Advisory Inquiries</span>
                      <a href={`mailto:${email}`} className="text-sky-700 hover:text-sky-900 font-medium transition-colors">
                        {email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 flex-shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-medium text-slate-900 text-xs font-mono uppercase text-slate-500">Operating Hours</span>
                      <span className="text-slate-700">{hours}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-emerald-700">
                  <ShieldCheck className="w-4 h-4" />
                  <span>APRA CPS 234 &amp; ISO 27001 Aligned Security Ops</span>
                </div>
              </div>

              {/* Delivery Hub Note */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed space-y-2">
                <div className="flex items-center gap-2 font-mono font-bold text-slate-900 uppercase">
                  <Globe className="w-4 h-4 text-sky-600" />
                  <span>Distributed Delivery Capabilities</span>
                </div>
                <p>
                  In addition to our Australian headquarters, QODES maintains specialized engineering squads and co-located delivery facilities to provide round-the-clock implementation, cutover support, and 24/7 Application Management (AMS).
                </p>
              </div>
            </div>

            {/* Right Map Display */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-md overflow-hidden h-[540px]">
                <Map />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <section className="w-full bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Schedule an In-Person or Virtual Briefing
            </h3>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Our principal architects are available for confidential discussions in Sydney, Melbourne, or via encrypted video conference.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all shadow-md"
              >
                <span>Initiate Contact</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
