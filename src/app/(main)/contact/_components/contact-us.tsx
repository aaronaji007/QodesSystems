"use client";

import React, { useState } from "react";
import dynamic from 'next/dynamic';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";
import { useContent } from "@/context/content-context";

// Dynamically import map without SSR
const Map = dynamic(() => import('../../../../components/global/map'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[320px] rounded-xl bg-slate-100 border border-slate-200 animate-pulse flex items-center justify-center text-slate-400 text-xs font-mono">
      Initializing Map Telemetry...
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
          message: "Thank you. Your inquiry has been received. Our advisory team will contact you within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: result.error || "Failed to process inquiry. Please try again or email us directly.",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Network error occurred. Please try again or email info@qodessystems.com.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-mono font-medium text-slate-700 uppercase tracking-wider mb-4 shadow-sm">
            <Mail className="w-3.5 h-3.5 text-sky-600" />
            <span>Executive Engagement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Connect With Our Advisory &amp; Engineering Practice
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Schedule a confidential technical review with our principal core banking architects and cybersecurity officers in Melbourne.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Form (Span 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-sm">
            {status.type === "success" && (
              <div className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <p>{status.message}</p>
              </div>
            )}

            {status.type === "error" && (
              <div className="mb-6 p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3 text-sm">
                <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                <p>{status.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-medium mb-2">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Marcus Thorne"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-medium mb-2">
                    Corporate Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. m.thorne@institution.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-medium mb-2">
                    Direct Contact Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+61 400 000 000"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-medium mb-2">
                    Practice Area
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. CBS Architecture / APRA CPS 234 Audit"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-medium mb-2">
                  Inquiry Details <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Outline your timeline, current architecture (SAP/Temenos/Custom), or compliance objectives..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-slate-900 text-white font-medium text-sm transition-all duration-200 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-sky-400" />
                    <span>Transmitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Executive Inquiry</span>
                    <ArrowRight className="w-4 h-4 text-sky-400" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Details & Map (Span 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 mb-6 tracking-tight">
                Corporate Headquarters
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-medium text-slate-900">Headquarters</span>
                    <span className="text-slate-600">{address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-medium text-slate-900">Direct Inquiries</span>
                    <a href={`mailto:${email}`} className="text-sky-700 hover:text-sky-900 transition-colors">
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-medium text-slate-900">Advisory Desk</span>
                    <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-slate-700 hover:text-sky-700 transition-colors font-mono">
                      {phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="bg-white rounded-xl border border-slate-200/80 p-3 shadow-sm overflow-hidden h-[280px]">
              <Map />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUsComponent;
