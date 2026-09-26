"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { 
  Mail, 
  Briefcase, 
  FileText, 
  Image as ImageIcon, 
  LogOut, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Save, 
  Search, 
  RefreshCw,
  Eye,
  Filter
} from "lucide-react";
import Logo from "@/components/global/logo";

interface Enquiry {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  status: string;
  created_at: string;
}

interface Application {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  position: string | null;
  cover_letter: string | null;
  status: string;
  created_at: string;
}

interface SiteImageItem {
  id: string;
  title: string;
  category: "Corporate" | "Solutions" | "Cybersecurity" | "Products";
  page: string;
  defaultUrl: string;
}

const SITE_IMAGES_CATALOG: SiteImageItem[] = [
  // Corporate & Main
  { id: "about_image_url", title: "About Us Corporate Office", category: "Corporate", page: "/about", defaultUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop" },
  { id: "hero_image_url", title: "Home Hero Background Texture", category: "Corporate", page: "/", defaultUrl: "/images/home-get-started-bg.jpg" },

  // Solutions & Core Banking
  { id: "img_qodes_cbs", title: "Qodes Core Banking System (AI CBS)", category: "Solutions", page: "/qodes-core-banking-system", defaultUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop" },
  { id: "img_sap_core_banking", title: "SAP Core Banking Modernization", category: "Solutions", page: "/sap-core-banking", defaultUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop" },
  { id: "img_temenos_t24", title: "Temenos T24 Upgrades & Migration", category: "Solutions", page: "/temenos-t24-core-banking", defaultUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop" },
  { id: "img_software_testing", title: "Software Testing / Quality Engineering", category: "Solutions", page: "/software-testing-services", defaultUrl: "https://plus.unsplash.com/premium_photo-1661546394223-7d465b791444?q=80&w=1786&auto=format&fit=crop" },
  { id: "img_staff_augmentation", title: "Staff Augmentation Services", category: "Solutions", page: "/staff-augmentation-services", defaultUrl: "https://images.unsplash.com/photo-1574073763042-9dbe6ae03853?q=80&w=1887&auto=format&fit=crop" },
  { id: "img_app_development", title: "Application Development Practice", category: "Solutions", page: "/application-development", defaultUrl: "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2070&auto=format&fit=crop" },
  { id: "img_sap_services", title: "SAP Enterprise Services", category: "Solutions", page: "/sap-services", defaultUrl: "https://plus.unsplash.com/premium_photo-1714618828448-abf8732500c6?q=80&w=1800&auto=format&fit=crop" },

  // Cybersecurity & Assurance
  { id: "img_penetration_testing", title: "Penetration Testing & Red Teaming", category: "Cybersecurity", page: "/penetration-testing", defaultUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop" },
  { id: "img_security_compliance", title: "APRA CPS 234 Security Compliance", category: "Cybersecurity", page: "/security-compliance", defaultUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop" },
  { id: "img_vulnerability_assessment", title: "Vulnerability Assessment", category: "Cybersecurity", page: "/vulnerability-assessment", defaultUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop" },
  { id: "img_source_code_review", title: "Source Code Security Review", category: "Cybersecurity", page: "/source-code-review", defaultUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" },
  { id: "img_app_security", title: "Application Security Testing", category: "Cybersecurity", page: "/application-security-testing", defaultUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" },
  { id: "img_ict_audit", title: "ICT Environment Audit", category: "Cybersecurity", page: "/ict-environment-audit", defaultUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" },
  { id: "img_security_assessment", title: "IT Security Assessment", category: "Cybersecurity", page: "/it-security-assessment", defaultUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop" },

  // Banking Products
  { id: "img_banking_products", title: "Banking Products Suite Overview", category: "Products", page: "/banking-products", defaultUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop" },
  { id: "img_core_banking", title: "Core Banking System Product", category: "Products", page: "/core-banking-system", defaultUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop" },
  { id: "img_internet_banking", title: "Internet Banking Platform", category: "Products", page: "/internet-banking-system", defaultUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop" },
  { id: "img_mobile_banking", title: "Mobile Banking Application", category: "Products", page: "/mobile-banking", defaultUrl: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=2070&auto=format&fit=crop" },
  { id: "img_loan_software", title: "Loan & Credit Origination", category: "Products", page: "/loan-software", defaultUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2070&auto=format&fit=crop" },
  { id: "img_remittance", title: "Remittance Management System", category: "Products", page: "/remittance-management-system", defaultUrl: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop" },
  { id: "img_hrms", title: "HRMS Enterprise Package", category: "Products", page: "/hrms-package", defaultUrl: "https://plus.unsplash.com/premium_photo-1714618828448-abf8732500c6?q=80&w=1800&auto=format&fit=crop" },
  { id: "img_other_products", title: "Other Administrative Products", category: "Products", page: "/other-products", defaultUrl: "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2070&auto=format&fit=crop" },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"enquiries" | "applications" | "content" | "media">("enquiries");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error" | ""; text: string }>({ type: "", text: "" });

  // Data States
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);

  // Media Tab Filtering
  const [mediaCategory, setMediaCategory] = useState<string>("All");
  const [mediaSearch, setMediaSearch] = useState("");

  // Content Editor Form State
  const initialContent: Record<string, string> = {
    hero_headline: "Autonomous Core Banking & Critical Financial Infrastructure",
    hero_subtitle: "Envisioned and engineered by enterprise veterans with two decades of banking delivery. We deploy proprietary AI-driven CBS, modernize SAP Banking architectures, and deliver zero-downtime Temenos T24 upgrades with military-grade cybersecurity assurance.",
    hero_heritage_years: "20+",
    hero_cbs_engines: "3 Suites",
    about_heading: "Core Banking Engineering & Technology Consulting",
    about_lead: "Our company is a specialized consulting firm in the CORE BANKING DOMAIN, offering expertise in SAP Core Banking and the Temenos T24 Core Banking System.",
    contact_phone: "+61 457 170 962",
    contact_email: "info@qodessystems.com",
    careers_email: "careers@qodessystems.com",
  };

  // Populate default image URLs
  SITE_IMAGES_CATALOG.forEach((item) => {
    initialContent[item.id] = item.defaultUrl;
  });

  const [content, setContent] = useState<Record<string, string>>(initialContent);

  const fetchData = async () => {
    setLoading(true);
    try {
      // 1. Fetch enquiries
      const enqRes = await fetch("/api/admin/enquiries");
      const enqData = await enqRes.json();
      if (enqData.success && Array.isArray(enqData.enquiries)) {
        setEnquiries(enqData.enquiries);
      }

      // 2. Fetch applications
      const appRes = await fetch("/api/admin/applications");
      const appData = await appRes.json();
      if (appData.success && Array.isArray(appData.applications)) {
        setApplications(appData.applications);
      }

      // 3. Fetch CMS Content
      const contentRes = await fetch("/api/admin/content");
      const contentData = await contentRes.json();
      if (contentData.success && contentData.content && Object.keys(contentData.content).length > 0) {
        setContent((prev) => ({ ...prev, ...contentData.content }));
      }
    } catch (err) {
      console.error("Dashboard fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } finally {
      router.push("/admin/login");
    }
  };

  const handleStatusChange = async (id: number, newStatus: string) => {
    try {
      const res = await fetch("/api/admin/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        setEnquiries((prev) =>
          prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
        );
        if (selectedEnquiry?.id === id) {
          setSelectedEnquiry((prev) => prev ? { ...prev, status: newStatus } : null);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveContent = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSaving(true);
    setStatusMessage({ type: "", text: "" });

    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatusMessage({ type: "success", text: "Configuration updated successfully!" });
      } else {
        setStatusMessage({ type: "error", text: data.error || "Failed to save content." });
      }
    } catch {
      setStatusMessage({ type: "error", text: "Network error occurred while saving." });
    } finally {
      setSaving(false);
    }
  };

  const filteredEnquiries = enquiries.filter(
    (e) =>
      e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (e.subject && e.subject.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredImages = SITE_IMAGES_CATALOG.filter((img) => {
    const matchesCat = mediaCategory === "All" || img.category === mediaCategory;
    const matchesSearch = mediaSearch === "" || 
      img.title.toLowerCase().includes(mediaSearch.toLowerCase()) ||
      img.page.toLowerCase().includes(mediaSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Header */}
      <header className="w-full h-16 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Logo theme="dark" />
          <span className="hidden sm:inline-block w-px h-5 bg-slate-800" />
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider hidden sm:inline-block">
            Management Console
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-colors"
          >
            <span>Live Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 border border-rose-800/50 text-rose-300 hover:text-rose-200 text-xs font-medium transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8">
        
        {/* Navigation Tabs & Refresh */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab("enquiries")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === "enquiries"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Inquiries ({enquiries.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("applications")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === "applications"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Job Applicants ({applications.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("content")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === "content"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Content &amp; Text CMS</span>
            </button>

            <button
              onClick={() => setActiveTab("media")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                activeTab === "media"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Media Library ({SITE_IMAGES_CATALOG.length})</span>
            </button>
          </div>

          <button
            onClick={fetchData}
            disabled={loading}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white text-xs font-mono transition-colors self-start sm:self-auto"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-sky-400" : ""}`} />
            <span>Refresh Telemetry</span>
          </button>
        </div>

        {/* Global Alert Messages */}
        {statusMessage.text && (
          <div
            className={`mb-6 p-4 rounded-xl border flex items-center gap-3 text-sm ${
              statusMessage.type === "success"
                ? "bg-emerald-950/60 border-emerald-800 text-emerald-300"
                : "bg-rose-950/60 border-rose-800 text-rose-300"
            }`}
          >
            {statusMessage.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400" />
            )}
            <span>{statusMessage.text}</span>
          </div>
        )}

        {/* TAB 1: INQUIRIES */}
        {activeTab === "enquiries" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search inquiries by client name, email, or topic..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="text-xs font-mono text-slate-400">
                Total Records: {filteredEnquiries.length}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-900 border-b border-slate-800 text-slate-400 text-xs font-mono uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">Date</th>
                      <th className="py-3.5 px-4">Client Name</th>
                      <th className="py-3.5 px-4">Email</th>
                      <th className="py-3.5 px-4">Phone</th>
                      <th className="py-3.5 px-4">Subject</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {filteredEnquiries.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-slate-500 text-sm">
                          {loading ? "Querying PostgreSQL inquiries..." : "No client inquiries recorded yet."}
                        </td>
                      </tr>
                    ) : (
                      filteredEnquiries.map((enq) => (
                        <tr key={enq.id} className="hover:bg-slate-800/30 transition-colors">
                          <td className="py-3 px-4 font-mono text-xs text-slate-400">
                            {new Date(enq.created_at).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4 font-medium text-white">{enq.name}</td>
                          <td className="py-3 px-4 text-slate-300">
                            <a href={`mailto:${enq.email}`} className="text-sky-400 hover:underline">
                              {enq.email}
                            </a>
                          </td>
                          <td className="py-3 px-4 font-mono text-xs text-slate-400">{enq.phone || "—"}</td>
                          <td className="py-3 px-4 text-slate-300">{enq.subject || "General Inquiry"}</td>
                          <td className="py-3 px-4">
                            <select
                              value={enq.status}
                              onChange={(e) => handleStatusChange(enq.id, e.target.value)}
                              className="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs font-mono text-slate-300 focus:outline-none focus:border-sky-500"
                            >
                              <option value="new">New</option>
                              <option value="contacted">Contacted</option>
                              <option value="in_progress">In Progress</option>
                              <option value="resolved">Resolved</option>
                            </select>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <button
                              onClick={() => setSelectedEnquiry(enq)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>View</span>
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Inquiry Details Modal */}
            {selectedEnquiry && (
              <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <h3 className="font-bold text-white text-base">Inquiry Telemetry #{selectedEnquiry.id}</h3>
                    <button
                      onClick={() => setSelectedEnquiry(null)}
                      className="text-slate-400 hover:text-white text-sm"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <span className="text-slate-500 font-mono uppercase">Client:</span>{" "}
                      <span className="text-white font-medium">{selectedEnquiry.name}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-mono uppercase">Email:</span>{" "}
                      <a href={`mailto:${selectedEnquiry.email}`} className="text-sky-400">
                        {selectedEnquiry.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-slate-500 font-mono uppercase">Phone:</span>{" "}
                      <span className="text-white">{selectedEnquiry.phone || "N/A"}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-mono uppercase">Subject:</span>{" "}
                      <span className="text-white">{selectedEnquiry.subject || "N/A"}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 font-mono uppercase block mb-1">Message:</span>
                      <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 whitespace-pre-wrap leading-relaxed">
                        {selectedEnquiry.message}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex justify-end">
                    <button
                      onClick={() => setSelectedEnquiry(null)}
                      className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: APPLICATIONS */}
        {activeTab === "applications" && (
          <div className="space-y-6">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-900 border-b border-slate-800 text-slate-400 text-xs font-mono uppercase tracking-wider">
                    <tr>
                      <th className="py-3.5 px-4">Date</th>
                      <th className="py-3.5 px-4">Candidate</th>
                      <th className="py-3.5 px-4">Email</th>
                      <th className="py-3.5 px-4">Phone</th>
                      <th className="py-3.5 px-4">Specialty / Role</th>
                      <th className="py-3.5 px-4">Summary</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    {applications.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-slate-500 text-sm">
                          {loading ? "Querying PostgreSQL applications..." : "No job applications submitted yet."}
                        </td>
                      </tr>
                    ) : (
                      applications.map((app) => (
                        <tr key={app.id} className="hover:bg-slate-800/30 transition-colors">
                          <td className="py-3 px-4 font-mono text-xs text-slate-400">
                            {new Date(app.created_at).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4 font-medium text-white">{app.name}</td>
                          <td className="py-3 px-4 text-slate-300">
                            <a href={`mailto:${app.email}`} className="text-sky-400 hover:underline">
                              {app.email}
                            </a>
                          </td>
                          <td className="py-3 px-4 font-mono text-xs text-slate-400">{app.phone || "—"}</td>
                          <td className="py-3 px-4 text-white font-medium">{app.position || "Engineering"}</td>
                          <td className="py-3 px-4 text-xs text-slate-400 max-w-xs truncate">
                            {app.cover_letter || "N/A"}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CONTENT & COPY CMS */}
        {activeTab === "content" && (
          <form onSubmit={handleSaveContent} className="space-y-8">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h3 className="text-lg font-bold text-white tracking-tight">Homepage Content</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Adjust the primary hero messaging and capability metrics displayed on the home page.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Hero Headline
                  </label>
                  <input
                    type="text"
                    value={content.hero_headline}
                    onChange={(e) => setContent({ ...content, hero_headline: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Hero Subtitle / Value Proposition
                  </label>
                  <textarea
                    rows={3}
                    value={content.hero_subtitle}
                    onChange={(e) => setContent({ ...content, hero_subtitle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-500 resize-y"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Heritage Metric (Years)
                    </label>
                    <input
                      type="text"
                      value={content.hero_heritage_years}
                      onChange={(e) => setContent({ ...content, hero_heritage_years: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Core Engines Count
                    </label>
                    <input
                      type="text"
                      value={content.hero_cbs_engines}
                      onChange={(e) => setContent({ ...content, hero_cbs_engines: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h3 className="text-lg font-bold text-white tracking-tight">Contact &amp; Advisory Channels</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Manage the direct desk contact information shown in the footer and contact page.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Advisory Phone
                  </label>
                  <input
                    type="text"
                    value={content.contact_phone}
                    onChange={(e) => setContent({ ...content, contact_phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    General Email
                  </label>
                  <input
                    type="email"
                    value={content.contact_email}
                    onChange={(e) => setContent({ ...content, contact_email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Careers Email
                  </label>
                  <input
                    type="email"
                    value={content.careers_email}
                    onChange={(e) => setContent({ ...content, careers_email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all shadow-md disabled:opacity-50"
              >
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Committing to Database...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Save &amp; Publish Content</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* TAB 4: MEDIA MANAGER (23 IMAGES CATALOG) */}
        {activeTab === "media" && (
          <div className="space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Active Media Library ({SITE_IMAGES_CATALOG.length} Images)
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Manage image assets across all 23 corporate pages, solutions, and banking products.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleSaveContent()}
                  disabled={saving}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-all shadow-md self-start sm:self-auto"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{saving ? "Saving All..." : "Save All Media Changes"}</span>
                </button>
              </div>

              {/* Filters & Search Bar */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                {/* Category Pills */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {["All", "Solutions", "Cybersecurity", "Products", "Corporate"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setMediaCategory(cat)}
                      className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
                        mediaCategory === cat
                          ? "bg-sky-600 text-white font-semibold"
                          : "bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      {cat} {cat === "All" ? `(${SITE_IMAGES_CATALOG.length})` : ""}
                    </button>
                  ))}
                </div>

                {/* Search */}
                <div className="relative max-w-xs w-full">
                  <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search images by title or page..."
                    value={mediaSearch}
                    onChange={(e) => setMediaSearch(e.target.value)}
                    className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              {/* Grid of Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                {filteredImages.map((img) => (
                  <div
                    key={img.id}
                    className="p-4 rounded-xl border border-slate-800 bg-slate-950 space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-sky-400 uppercase font-semibold">
                          {img.category}
                        </span>
                        <Link
                          href={img.page}
                          target="_blank"
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white transition-colors"
                        >
                          <span>{img.page}</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      </div>

                      <h4 className="text-xs font-semibold text-white line-clamp-1">
                        {img.title}
                      </h4>

                      {/* Thumbnail Preview */}
                      <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={content[img.id] || img.defaultUrl}
                          alt={img.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2 border-t border-slate-900">
                      <label className="block text-[10px] font-mono text-slate-400 uppercase">
                        Image Resource URL
                      </label>
                      <input
                        type="text"
                        value={content[img.id] || ""}
                        onChange={(e) => setContent({ ...content, [img.id]: e.target.value })}
                        className="w-full px-2.5 py-1.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-white focus:outline-none focus:border-sky-500 font-mono"
                        placeholder="https://..."
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => handleSaveContent()}
                  disabled={saving}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-all shadow-md"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{saving ? "Saving All..." : "Save All Media Changes"}</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
