"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { ArrowRight, ChevronRight, Check, AlertCircle, Loader2, MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import { useContent } from "@/context/content-context";

// Dynamically import map without SSR
const Map = dynamic(() => import('../../../../components/global/map'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[320px] bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-500 text-sm">
      Loading interactive map...
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
          message: "Inquiry received. Our principal banking consultants will respond within 24 hours.",
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
        message: "Network error. Please contact info@qodessystems.com directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-stone-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-stone-200 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0B99D9]"></span>
            <Link href="/" className="hover:text-stone-950 font-medium">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-stone-900 font-semibold">Executive Contact</span>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-sky-50 text-[#0B99D9] border border-sky-200/60">
            Dedicated Response &bull; Australia &amp; India
          </span>
        </div>

        {/* Page Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-12 mb-12 border-b border-stone-200 items-end">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#0B99D9] block">
              Consultation &amp; Inquiries
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
              Connect With Our Practice
            </h1>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed max-w-2xl">
              Schedule a confidential discussion with our senior core banking and SAP ERP specialists across Australia and India.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Form (Span 7 cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-stone-200 bg-white p-8 sm:p-10 shadow-xl space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <h3 className="text-lg font-medium text-stone-900">
                Send A Consultation Request
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Fill in your details and our team will get in touch shortly.
              </p>
            </div>

            {status.type === "success" && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p>{status.message}</p>
              </div>
            )}

            {status.type === "error" && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <p>{status.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Smith"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 placeholder:text-stone-400 text-sm focus:outline-none focus:border-[#0B99D9] transition-colors shadow-xs"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5">
                    Business Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. j.smith@bank.com"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 placeholder:text-stone-400 text-sm focus:outline-none focus:border-[#0B99D9] transition-colors shadow-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+61 400 000 000"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 placeholder:text-stone-400 text-sm focus:outline-none focus:border-[#0B99D9] transition-colors shadow-xs"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5">
                    Topic of Discussion *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. SAP Core Banking, Temenos, Oracle FLEXCUBE"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 placeholder:text-stone-400 text-sm focus:outline-none focus:border-[#0B99D9] transition-colors shadow-xs"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5">
                  Message / Requirements *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your institutional requirements or upcoming project milestones..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 placeholder:text-stone-400 text-sm focus:outline-none focus:border-[#0B99D9] transition-colors shadow-xs resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#0B99D9]" />
                    <span>Processing Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <ArrowRight className="w-4 h-4 text-[#0B99D9]" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Office Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl border border-stone-200 bg-stone-50/80 p-8 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#0B99D9] block mb-1">
                  Direct Inquiries
                </span>
                <h3 className="text-xl font-medium text-stone-900 tracking-tight">
                  Qodes Systems Pty Ltd
                </h3>
              </div>

              <div className="space-y-4 text-sm pt-4 border-t border-stone-200 text-stone-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0B99D9] flex-shrink-0 mt-0.5" />
                  <span>{address}</span>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#0B99D9] flex-shrink-0 mt-0.5" />
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-[#0B99D9] transition-colors">
                    {phone}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#0B99D9] flex-shrink-0 mt-0.5" />
                  <a href={`mailto:${email}`} className="hover:text-[#0B99D9] transition-colors">
                    {email}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center gap-2 text-xs text-emerald-800 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>APRA CPS 234 Aligned &bull; Confidential Protocol</span>
              </div>
            </div>

            {/* Map Preview */}
            <div className="rounded-3xl border border-stone-200 overflow-hidden shadow-lg h-[260px] bg-stone-100">
              <Map />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUsComponent;
