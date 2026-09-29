"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const ScandiConcept = () => {
  const [activeCollection, setActiveCollection] = useState<"all" | "core" | "security" | "channels">("all");
  const [scaleVolume, setScaleVolume] = useState<number>(50); // In thousands TPS

  const systems = [
    {
      id: "cbs",
      category: "core",
      name: "Qodes Core Banking Ledger",
      subtitle: "The Foundation System",
      description: "A clean, modular core banking architecture engineered to eliminate operational friction and orchestrate continuous multi-currency settlement.",
      tags: ["ISO 20022", "High Throughput", "Modular"],
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop",
      href: "/qodes-core-banking-system"
    },
    {
      id: "vaults",
      category: "security",
      name: "APRA CPS 234 Security Suite",
      subtitle: "The Protective Envelope",
      description: "Prudential governance frameworks and sovereign cryptographic defenses designed to ensure enduring regulatory compliance and zero-trust security.",
      tags: ["Prudential Standards", "Zero-Trust", "Penetration Testing"],
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
      href: "/security-compliance"
    },
    {
      id: "digital",
      category: "channels",
      name: "Omnichannel Banking Studio",
      subtitle: "The Human Interface",
      description: "Thoughtfully crafted consumer experiences for web and mobile banking. Intuitive navigation paired with robust biometric security protocols.",
      tags: ["Biometric Auth", "NPP Instant Pay", "Micro-Frontends"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      href: "/mobile-banking"
    },
    {
      id: "temenos",
      category: "core",
      name: "Temenos T24 Transformation",
      subtitle: "The Renewal Practice",
      description: "Surgical version upgrades and cloud migrations that liberate financial institutions from legacy drag while preserving transactional integrity.",
      tags: ["Transact Cloud", "Zero Downtime", "Data Migration"],
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
      href: "/temenos-t24-core-banking"
    }
  ];

  const filtered = activeCollection === "all" 
    ? systems 
    : systems.filter(s => s.category === activeCollection);

  return (
    <div className="w-full bg-[#F7F6F2] text-stone-900 font-sans selection:bg-[#2EA3DC]/20">
      
      {/* 1. NORDIC STUDIO HEADER */}
      <div className="border-b border-stone-200/70 px-4 sm:px-8 py-3.5 text-xs text-stone-600 flex flex-wrap items-center justify-between gap-4 font-normal">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#2EA3DC]"></span>
          <span>Qodes Studio &bull; Australian Banking Design</span>
          <span className="text-stone-300">/</span>
          <span>Collection 2026</span>
        </div>
        <div className="text-stone-500">
          Melbourne &bull; Sydney &bull; Global Operations
        </div>
      </div>

      {/* 2. AIRY HUMAN-CENTERED HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.22em] font-semibold text-stone-500">
                Studio Monograph &bull; Edition 2026
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight leading-[1.12] text-balance">
                Financial systems crafted with clarity, honesty, and calm precision.
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-stone-600 font-light leading-relaxed max-w-2xl text-balance">
              We design core banking engines and security practices that remove complexity. Built with the discipline of Scandinavian furniture design: every component purposeful, durable, and refined.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all shadow-sm"
              >
                <span>Initiate Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#2EA3DC]" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-800 font-medium text-sm transition-all shadow-sm"
              >
                <span>Browse The Collection</span>
              </Link>
            </div>

            {/* Quiet Heritage Note */}
            <div className="pt-6 border-t border-stone-200/80 flex items-center gap-6 text-xs text-stone-500 font-normal">
              <span>Two decades of Tier-1 banking heritage</span>
              <span className="text-stone-300">•</span>
              <span>100% Australian regulatory alignment</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
                alt="Scandinavian design financial space"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-stone-900/10" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-stone-200/60 space-y-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#0284C7] block">
                  Studio Principle 01
                </span>
                <h4 className="text-base font-medium text-stone-900">
                  Form Follows Transaction
                </h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Clean architectures survive decades; complex workarounds create debt.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THE STUDIO COLLECTION (Gallery) */}
      <section className="w-full bg-[#EFECE6] py-24 border-y border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 mb-12 border-b border-stone-300">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-500">
                Curated Catalogue
              </p>
              <h2 className="text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
                The Systems Collection
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-stone-200/80 border border-stone-300/60 self-start md:self-end">
              <button
                onClick={() => setActiveCollection("all")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCollection === "all" ? "bg-white text-stone-950 shadow-xs" : "text-stone-600 hover:text-stone-950"
                }`}
              >
                All Works
              </button>
              <button
                onClick={() => setActiveCollection("core")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCollection === "core" ? "bg-white text-stone-950 shadow-xs" : "text-stone-600 hover:text-stone-950"
                }`}
              >
                Core Banking
              </button>
              <button
                onClick={() => setActiveCollection("security")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCollection === "security" ? "bg-white text-stone-950 shadow-xs" : "text-stone-600 hover:text-stone-950"
                }`}
              >
                Security Vaults
              </button>
              <button
                onClick={() => setActiveCollection("channels")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeCollection === "channels" ? "bg-white text-stone-950 shadow-xs" : "text-stone-600 hover:text-stone-950"
                }`}
              >
                Channels
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl bg-white border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium text-stone-700 shadow-xs">
                      {item.subtitle}
                    </div>
                  </div>

                  <div className="p-8 space-y-4">
                    <h3 className="text-2xl font-normal text-stone-900 tracking-tight group-hover:text-[#0284C7] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed font-light">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-stone-50 border border-stone-200 text-xs text-stone-500"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <Link
                    href={item.href}
                    className="text-xs uppercase tracking-wider font-semibold text-stone-900 group-hover:text-[#0284C7] transition-colors inline-flex items-center gap-1"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="text-xs text-stone-400">APRA CPS 234 Verified</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. TACTILE SCALE BENCHMARK (Interactive Nordic Slider) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-24">
        <div className="rounded-3xl bg-white border border-stone-200 p-8 sm:p-14 shadow-xl space-y-10">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-500">
              Interactive Dimensioning
            </p>
            <h3 className="text-2xl sm:text-3xl font-normal text-stone-900 tracking-tight">
              Scale Your Institutional Deployment
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Adjust transaction capacity to preview architectural footprint and SLA response.
            </p>
          </div>

          <div className="space-y-6 max-w-xl">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-stone-700">Target Peak Throughput:</span>
              <span className="font-semibold text-xl text-[#0284C7]">{scaleVolume},000 TPS</span>
            </div>
            <input
              type="range"
              min="5"
              max="100"
              step="5"
              value={scaleVolume}
              onChange={(e) => setScaleVolume(Number(e.target.value))}
              className="w-full accent-[#0284C7] cursor-pointer"
            />
            <div className="flex justify-between text-xs text-stone-400">
              <span>Neobank Scale (5k TPS)</span>
              <span>Commercial Bank (50k TPS)</span>
              <span>Sovereign Clearing (100k TPS)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-stone-100">
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/60">
              <span className="text-xs text-stone-500 block mb-1">Settlement SLA</span>
              <span className="text-lg font-semibold text-stone-900">&lt; 1.5 Milliseconds</span>
            </div>
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/60">
              <span className="text-xs text-stone-500 block mb-1">Compliance Benchmark</span>
              <span className="text-lg font-semibold text-emerald-700">APRA CPS 234 Conforming</span>
            </div>
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/60">
              <span className="text-xs text-stone-500 block mb-1">Deployment Window</span>
              <span className="text-lg font-semibold text-stone-900">8–14 Weeks</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUIET STUDIO INVITATION */}
      <section className="border-t border-stone-200 bg-[#EFECE6] py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-stone-500">
            Studio Invitation
          </p>
          <h2 className="text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
            Let’s discuss your bank’s technological horizon.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
            We work as collaborative partners with leadership teams. Discreet, pragmatic, and uncompromising on engineering quality.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all shadow-md"
            >
              <span>Connect With A Principal Architect</span>
              <ArrowRight className="w-4 h-4 text-[#2EA3DC]" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ScandiConcept;
