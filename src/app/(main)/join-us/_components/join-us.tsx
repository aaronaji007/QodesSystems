"use client";

import React, { useState } from "react";
import { Briefcase, Mail, CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";

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
          message: "Application submitted successfully! Our talent acquisition team will review your credentials.",
        });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: result.error || "Failed to submit application. Please try again or email careers@qodessystems.com.",
        });
      }
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Network error occurred. Please email your CV directly to careers@qodessystems.com.",
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
            <Briefcase className="w-3.5 h-3.5 text-sky-600" />
            <span>Engineering &amp; Advisory Careers</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Join the Core Banking Technology Practice
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We are always seeking senior CBS architects, SAP Banking developers, Temenos T24 consultants, and offensive cybersecurity engineers to join our high-impact deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form (Span 7 cols) */}
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
                    placeholder="e.g. Elena Rostova"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-medium mb-2">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. elena@domain.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-medium mb-2">
                    Contact Phone
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
                    Specialty / Role Focus
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Senior Temenos T24 Architect"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-medium mb-2">
                  Profile Summary &amp; Experience Link
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share a summary of your experience, certifications, and a link to your LinkedIn profile or GitHub repository..."
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
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <ArrowRight className="w-4 h-4 text-sky-400" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Direct Channels (Span 5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="text-base font-bold text-slate-900 tracking-tight">
              Direct Talent Desk
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Prefer to email your resume directly? Send your CV and portfolio to our global talent acquisition team:
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                  Primary Careers Desk
                </span>
                <a
                  href="mailto:careers@qodessystems.com"
                  className="text-sm font-semibold text-sky-700 hover:text-sky-900 transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-4 h-4 text-sky-600" />
                  <span>careers@qodessystems.com</span>
                </a>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <span className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                  General Inquiries
                </span>
                <a
                  href="mailto:joinus@qodessystems.com"
                  className="text-sm font-semibold text-sky-700 hover:text-sky-900 transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-4 h-4 text-sky-600" />
                  <span>joinus@qodessystems.com</span>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 leading-relaxed">
              We uphold strict privacy protocols for all candidate applications under the Australian Privacy Principles.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default JoinUsComponent;
