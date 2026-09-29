"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CornerDownRight, Check, AlertCircle, Loader2 } from "lucide-react";

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
          message: "Application submitted successfully. Our talent engineering committee will review your dossier.",
        });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: result.error || "Submission failed. Please contact careers@qodessystems.com directly.",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Network fault. Please transmit your CV directly to careers@qodessystems.com.",
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
            <span className="text-neutral-950 font-semibold uppercase tracking-wider">Careers &amp; Practice</span>
          </div>
          <span className="text-[11px] uppercase tracking-widest text-sky-800 font-semibold">
            ENGINEERING SQUADS // MELBOURNE &bull; SYDNEY
          </span>
        </div>

        {/* Page Header: Swiss Asymmetric Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-12 mb-12 border-b border-neutral-200 items-end">
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block">
              01 // TALENT PRACTICE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-950 tracking-[-0.03em] leading-tight">
              Join the Core Banking Practice
            </h1>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-end">
            <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-2xl">
              We seek senior CBS architects, SAP Banking consultants, Temenos T24 specialists, and offensive cybersecurity engineers for high-impact Australian and international deployments.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form (Span 7 cols) */}
          <div className="lg:col-span-7 border border-neutral-200 bg-white p-8 sm:p-10 space-y-8">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                APPLICATION DOSSIER
              </span>
              <span className="font-mono text-[11px] text-neutral-400">
                REQUIRED FIELDS [*]
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
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Elena Rostova"
                    className="w-full px-4 py-3 border border-neutral-200 text-neutral-900 placeholder:text-neutral-300 text-sm focus:outline-none focus:border-neutral-950 font-mono transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="elena@domain.com"
                    className="w-full px-4 py-3 border border-neutral-200 text-neutral-900 placeholder:text-neutral-300 text-sm focus:outline-none focus:border-neutral-950 font-mono transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
                    Telephone
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
                    Practice Specialty
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Senior Temenos T24 Architect"
                    className="w-full px-4 py-3 border border-neutral-200 text-neutral-900 placeholder:text-neutral-300 text-sm focus:outline-none focus:border-neutral-950 font-mono transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
                  Experience Summary &amp; Portfolio URL
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share a concise technical background summary, certifications, and GitHub / LinkedIn links..."
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
                    <span>Transmitting Dossier...</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-4">
                    <span>Submit Application</span>
                    <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* Direct Channels (Span 5 cols) */}
          <div className="lg:col-span-5 p-8 border border-neutral-200 bg-neutral-50/50 space-y-6 font-mono text-xs">
            <span className="text-neutral-400 uppercase tracking-widest text-[11px] block">
              TALENT LIAISON DESK
            </span>
            <p className="font-sans text-sm text-neutral-600 font-light leading-relaxed">
              Prefer direct communications? Submit your dossier, certifications, and code repositories to our confidential talent liaison:
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 border border-neutral-200 bg-white space-y-1">
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest block">
                  PRIMARY CAREERS DESK
                </span>
                <a
                  href="mailto:careers@qodessystems.com"
                  className="text-neutral-900 font-semibold hover:text-sky-700 transition-colors block text-sm"
                >
                  careers@qodessystems.com
                </a>
              </div>

              <div className="p-4 border border-neutral-200 bg-white space-y-1">
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest block">
                  STAFF AUGMENTATION &bull; CONTRACT CONSULTING
                </span>
                <a
                  href="mailto:joinus@qodessystems.com"
                  className="text-neutral-900 font-semibold hover:text-sky-700 transition-colors block text-sm"
                >
                  joinus@qodessystems.com
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-200 text-neutral-400 text-[11px] flex items-start gap-2">
              <CornerDownRight className="w-3.5 h-3.5 text-sky-600 flex-shrink-0 mt-0.5" />
              <span>Strict candidate confidentiality safeguarded under the Australian Privacy Act 1988.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default JoinUsComponent;
