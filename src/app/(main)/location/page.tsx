"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, CornerDownRight } from "lucide-react";
import { useContent } from "@/context/content-context";

// Dynamically import the map component with no SSR
const Map = dynamic(() => import("@/components/global/map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[520px] bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500 text-xs font-mono">
      INITIALIZING GEOSPATIAL RADAR TELEMETRY...
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
    <div className="w-full bg-[#FFFFFF] text-[#0F172A] font-sans">
      
      {/* 1. TOP METADATA DOSSIER BAR */}
      <section className="w-full border-b border-neutral-200 bg-neutral-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-y-2 text-xs font-mono text-neutral-500">
          <nav className="flex items-center gap-2">
            <Link href="/" className="hover:text-neutral-950 uppercase tracking-wider">Home</Link>
            <span className="text-neutral-300">/</span>
            <span className="text-neutral-950 font-semibold uppercase tracking-wider">Locations &amp; Facilities</span>
          </nav>
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest text-neutral-500">
            <span>GEO_COORDINATES: -33.8688° S, 151.2093° E</span>
            <span className="text-neutral-300">|</span>
            <span className="text-sky-700 font-semibold">AUSTRALIAN HEADQUARTERS</span>
          </div>
        </div>
      </section>

      {/* 2. SWISS ASYMMETRIC HEADER */}
      <section className="w-full border-b border-neutral-200 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            
            <div className="lg:col-span-3 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block">
                01 // GEOSPATIAL INFRASTRUCTURE
              </span>
              <span className="font-mono text-sm font-semibold uppercase tracking-wider text-sky-700 block">
                AUSTRALIA &amp; INDIA OPERATIONS
              </span>
              <div className="pt-6 border-t border-neutral-200 text-xs font-mono text-neutral-400 space-y-2 hidden lg:block">
                <p>AUSTRALIA: SYDNEY / MELBOURNE</p>
                <p>INDIA: BANGALORE / DELIVERY HUBS</p>
                <p>JURISDICTIONS: AUSTRALIA &amp; INDIA</p>
              </div>
            </div>

            <div className="lg:col-span-9 space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-neutral-950 leading-[1.06]">
                Australia &amp; India Delivery Infrastructure &amp; Offices
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-neutral-200 items-end">
                <p className="md:col-span-8 text-lg sm:text-xl text-neutral-600 font-light leading-relaxed">
                  Headquartered in Australia with specialized engineering and delivery centers in India, serving banking institutions and enterprise clients across Australia and India.
                </p>
                <div className="md:col-span-4 flex justify-end">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-between w-full px-5 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-mono uppercase tracking-widest transition-all"
                  >
                    <span>Connect With Desk</span>
                    <ArrowRight className="w-4 h-4 text-sky-400 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MAP & FACILITY LEDGER */}
      <section className="w-full py-16 lg:py-24 border-b border-neutral-200 bg-neutral-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Ledger Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 border border-neutral-200 bg-white space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
                    FACILITY REGISTER
                  </span>
                  <h3 className="text-2xl font-light text-neutral-950 tracking-tight">
                    QODES Systems Pty Ltd
                  </h3>
                  <p className="text-xs font-mono text-neutral-500 mt-1 uppercase tracking-wider">
                    Australian Enterprise Technology Advisory
                  </p>
                </div>

                <div className="space-y-4 font-mono text-xs pt-6 border-t border-neutral-200">
                  <div className="py-2 border-b border-neutral-100 flex items-start justify-between gap-4">
                    <span className="text-neutral-400 uppercase tracking-widest">ADDRESS:</span>
                    <span className="text-neutral-900 font-semibold text-right">{address}</span>
                  </div>

                  <div className="py-2 border-b border-neutral-100 flex items-start justify-between gap-4">
                    <span className="text-neutral-400 uppercase tracking-widest">TELEPHONE:</span>
                    <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-neutral-900 font-semibold hover:text-sky-700 transition-colors">
                      {phone}
                    </a>
                  </div>

                  <div className="py-2 border-b border-neutral-100 flex items-start justify-between gap-4">
                    <span className="text-neutral-400 uppercase tracking-widest">INQUIRIES:</span>
                    <a href={`mailto:${email}`} className="text-sky-700 hover:text-sky-900 font-semibold">
                      {email}
                    </a>
                  </div>

                  <div className="py-2 border-b border-neutral-100 flex items-start justify-between gap-4">
                    <span className="text-neutral-400 uppercase tracking-widest">HOURS:</span>
                    <span className="text-neutral-800 text-right">{hours}</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-2 text-xs font-mono text-emerald-800">
                  <CornerDownRight className="w-3.5 h-3.5 text-emerald-600" />
                  <span>APRA CPS 234 &bull; ZERO-TRUST FACILITY PROTOCOLS</span>
                </div>
              </div>

              {/* Delivery Hub Note */}
              <div className="p-6 border border-neutral-200 bg-white font-mono text-xs text-neutral-600 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">
                  DISTRIBUTED DEPLOYMENT MODEL
                </span>
                <p className="font-sans text-sm text-neutral-700 font-light leading-relaxed">
                  With our Australian headquarters and dedicated delivery centers in India, QODES maintains specialized engineering squads to provide round-the-clock implementation, cutover support, and 24/7 Application Management Services (AMS).
                </p>
              </div>
            </div>

            {/* Right Map Plate */}
            <div className="lg:col-span-7">
              <div className="border border-neutral-200 bg-neutral-900 p-2 overflow-hidden h-[540px]">
                <Map />
              </div>
              <div className="pt-3 flex items-center justify-between font-mono text-[11px] text-neutral-400">
                <span>FIG 1.0 &mdash; GEOSPATIAL RADAR TELEMETRY</span>
                <span>AUSTRALIAN HUB</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OBSIDIAN ADVISORY CTA */}
      <section className="w-full bg-[#0A0F1D] text-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-sky-400 block">
                02 // DIRECT ADVISORY BRIEFING
              </span>
              <h3 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                Schedule an In-Person or Encrypted Briefing
              </h3>
              <p className="text-neutral-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
                Our principal architects are available for confidential discussions in Sydney, Melbourne, or via encrypted video conference.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-end">
              <Link
                href="/contact"
                className="group flex items-center justify-between w-full px-6 py-4 bg-white text-neutral-950 font-mono text-xs uppercase tracking-widest hover:bg-neutral-100 transition-all"
              >
                <span>Initiate Contact</span>
                <ArrowRight className="w-4 h-4 text-sky-600 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
