"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Check, AlertCircle, Loader2, Building2, Briefcase, Users } from "lucide-react";

const JoinUsComponent = () => {
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
      const response = await fetch("/api/join-us", {
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
          message: "Application received. Our senior talent team will review your background.",
        });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: result.error || "Submission failed. Please email careers@qodessystems.com directly.",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Network fault. Please email your CV directly to careers@qodessystems.com.",
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
            <span className="text-stone-900 font-semibold">Careers &amp; Practice</span>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-sky-50 text-[#0B99D9] border border-sky-200/60">
            Engineering Teams &bull; Australia &amp; India
          </span>
        </div>

        {/* Page Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-12 mb-12 border-b border-stone-200 items-end">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#0B99D9] block">
              Opportunities &amp; Careers
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 tracking-tight leading-tight">
              Join Our Core Banking Practice
            </h1>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-end">
            <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed max-w-2xl">
              We look for experienced Core Banking architects, SAP consultants, Temenos T24 specialists, and Oracle FLEXCUBE engineers across Australia and India.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form (Span 7 cols) */}
          <div className="lg:col-span-7 rounded-3xl border border-stone-200 bg-white p-8 sm:p-10 shadow-xl space-y-6">
            <div className="border-b border-stone-100 pb-4">
              <h3 className="text-lg font-medium text-stone-900">
                Submit Your Application
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Provide your details and areas of specialization below.
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
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. David Miller"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 placeholder:text-stone-400 text-sm focus:outline-none focus:border-[#0B99D9] transition-colors shadow-xs"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. d.miller@domain.com"
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
                    Primary Specialization *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. SAP Banking, Temenos, Oracle FLEXCUBE"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-900 placeholder:text-stone-400 text-sm focus:outline-none focus:border-[#0B99D9] transition-colors shadow-xs"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1.5">
                  Experience &amp; Profile Summary *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Outline your enterprise banking or ERP experience, key engagements, and certifications..."
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
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <ArrowRight className="w-4 h-4 text-[#0B99D9]" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Roles & Culture */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-3xl border border-stone-200 bg-stone-50/80 p-8 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#0B99D9] block mb-1">
                  Practices in High Demand
                </span>
                <h3 className="text-xl font-medium text-stone-900 tracking-tight">
                  Core Banking &amp; SAP Teams
                </h3>
              </div>

              <div className="space-y-4 text-sm pt-4 border-t border-stone-200 text-stone-700">
                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-[#0B99D9] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-stone-900">SAP Core Banking &amp; ERP Architects</h5>
                    <p className="text-xs text-stone-500 mt-0.5">Implementation, ASAP methodology, and ABAP/Fiori</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="w-4 h-4 text-[#0B99D9] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-stone-900">Temenos T24 / Transact Leads</h5>
                    <p className="text-xs text-stone-500 mt-0.5">Release upgrades, zero downtime, Model Bank</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-[#0B99D9] flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-stone-900">Oracle FLEXCUBE Consultants</h5>
                    <p className="text-xs text-stone-500 mt-0.5">Universal Banking, interface integration, 24/7 AMS</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 text-xs text-stone-500 leading-relaxed">
                Positions open across Australian advisory offices and Indian engineering delivery centers.
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default JoinUsComponent;
