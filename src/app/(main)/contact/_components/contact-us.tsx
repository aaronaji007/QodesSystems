"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { ArrowRight, CornerDownRight, Check, AlertCircle, Loader2 } from "lucide-react";
import { useContent } from "@/context/content-context";

// Dynamically import map without SSR
const Map = dynamic(() => import('../../../../components/global/map'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[320px] bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500 text-xs font-mono">
      INITIALIZING GEOSPATIAL MAP TELEMETRY...
    </div>
  )
});

const ContactUsComponent = () => {
  const { getContent } = useContent();
  const address = getContent("contact_address", "Sydney, NSW, Australia");
  const email = getContent("contact_email", "info@qodessystems.com");
  const phone = getContent("contact_phone", "+61 457 170 962");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | ""; message: string }>({
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setStatus({
          type: "success",
          message: "Inquiry received. Our principal banking advisory desk will respond within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: result.error || "Failed to process inquiry. Please email us directly.",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Network fault. Please contact info@qodessystems.com directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#FFFFFF] py-16 lg:py-24 border-b border-neutral-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb / Metadata Hairline */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-neutral-200 text-xs font-mono text-neutral-500">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-neutral-950 uppercase tracking-wider">Home</Link>
            <span className="text-neutral-300">/</span>
            <span className="text-neutral-950 font-semibold uppercase tracking-wider">Executive Contact</span>
          </div>
          <span className="text-[11px] uppercase tracking-widest text-sky-800 font-semibold">
            SECURE ADVISORY CHANNEL &bull; 24-HOUR SLA
          </span>
        </div>

        {/* Page Header: Swiss Asymmetric Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-12 mb-12 border-b border-neutral-200 items-end">
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block">
              01 // EXECUTIVE ADVISORY
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-950 tracking-[-0.03em] leading-tight">
              Connect With Our Advisory Practice
            </h1>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-end">
            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-2xl">
              Schedule a confidential architectural assessment with our principal core banking architects and cybersecurity officers in Melbourne and Sydney.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Form (Span 7 cols) */}
          <div className="lg:col-span-7 border border-neutral-200 bg-white p-8 sm:p-10 space-y-8">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                ADVISORY INTAKE FORM
              </span>
              <span className="font-mono text-[11px] text-neutral-400">
                CONFIDENTIAL PROTOCOL
              </span>
            </div>

            {status.type === "success" && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 font-mono text-xs flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p>{status.message}</p>
              </div>
            )}

            {status.type === "error" && (
              <div className="p-4 bg-rose-50 border border-rose-200 text-rose-900 font-mono text-xs flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                <p>{status.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
                    Executive Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Marcus Thorne"
                    className="w-full px-4 py-3 border border-neutral-200 text-neutral-900 placeholder:text-neutral-300 text-sm focus:outline-none focus:border-neutral-950 font-mono transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
                    Corporate Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="m.thorne@institution.com"
                    className="w-full px-4 py-3 border border-neutral-200 text-neutral-900 placeholder:text-neutral-300 text-sm focus:outline-none focus:border-neutral-950 font-mono transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
                    Direct Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+61 400 000 000"
                    className="w-full px-4 py-3 border border-neutral-200 text-neutral-900 placeholder:text-neutral-300 text-sm focus:outline-none focus:border-neutral-950 font-mono transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
                    Practice Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Core Banking Migration / CPS 234 Audit"
                    className="w-full px-4 py-3 border border-neutral-200 text-neutral-900 placeholder:text-neutral-300 text-sm focus:outline-none focus:border-neutral-950 font-mono transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
                  Technical Scope &amp; Objectives *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Outline your timeline, legacy core architecture (SAP, Temenos, AS400), or compliance assessment requirements..."
                  className="w-full px-4 py-3 border border-neutral-200 text-neutral-900 placeholder:text-neutral-300 text-sm focus:outline-none focus:border-neutral-950 font-mono transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group flex items-center justify-between w-full sm:w-auto px-8 py-4 bg-neutral-950 hover:bg-neutral-800 text-white font-mono text-xs uppercase tracking-widest transition-all disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-sky-400" />
                    <span>Transmitting Inquiry...</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-4">
                    <span>Submit Executive Inquiry</span>
                    <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* Contact Details & Map (Span 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 border border-neutral-200 bg-neutral-50/50 space-y-6 font-mono text-xs">
              <span className="text-neutral-400 uppercase tracking-widest text-[11px] block">
                HEADQUARTERS LIAISON
              </span>

              <div className="space-y-4 pt-2">
                <div className="p-4 border border-neutral-200 bg-white space-y-1">
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest block">
                    LOCATION
                  </span>
                  <span className="text-neutral-900 font-semibold block text-sm">
                    {address}
                  </span>
                </div>

                <div className="p-4 border border-neutral-200 bg-white space-y-1">
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest block">
                    ADVISORY DESK DIRECT
                  </span>
                  <a href={`mailto:${email}`} className="text-sky-700 hover:text-sky-900 font-semibold block text-sm">
                    {email}
                  </a>
                </div>

                <div className="p-4 border border-neutral-200 bg-white space-y-1">
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest block">
                    TELECOMMUNICATIONS
                  </span>
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-neutral-900 font-semibold hover:text-sky-700 block text-sm">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 text-neutral-400 text-[11px] flex items-start gap-2">
                <CornerDownRight className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
                <span>Encrypted transmission with APRA CPS 234 compliance adherence.</span>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="border border-neutral-200 bg-neutral-900 p-2 overflow-hidden h-[300px]">
              <Map />
            </div>
            <div className="text-[10px] font-mono text-neutral-400 flex items-center justify-between">
              <span>FIG 1.0 &mdash; CORPORATE RADAR</span>
              <span>SYDNEY FACILITY</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUsComponent;
