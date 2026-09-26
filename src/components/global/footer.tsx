"use client";

import React from "react";
import Link from "next/link";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import Logo from "./logo";
import { ShieldCheck, MapPin, Mail } from "lucide-react";
import { useContent } from "@/context/content-context";

const FooterComponent = () => {
  const { getContent } = useContent();
  const address = getContent("contact_address", "Sydney, NSW, Australia");
  const email = getContent("contact_email", "info@qodessystems.com");

  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Monogram Logo & Institutional Profile (Span 2 cols on desktop) */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
            <Logo theme="dark" className="mb-6" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Premier Australian provider of enterprise core banking platforms and cybersecurity assurance. Envisioned and engineered with two decades of Tier-1 banking delivery track record.
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                  {email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-400">APRA CPS 234 &amp; ISO 27001 Aligned</span>
              </div>
            </div>
          </div>

          {/* Column 2: Core Banking */}
          <div className="flex flex-col">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-4">
              Core Banking
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/qodes-core-banking-system" className="hover:text-white transition-colors">
                  Qodes CBS (AI-Engineered)
                </Link>
              </li>
              <li>
                <Link href="/sap-core-banking" className="hover:text-white transition-colors">
                  SAP Core Banking
                </Link>
              </li>
              <li>
                <Link href="/temenos-t24-core-banking" className="hover:text-white transition-colors">
                  Temenos T24 Upgrades
                </Link>
              </li>
              <li>
                <Link href="/banking-products" className="hover:text-white transition-colors">
                  Banking Products Suite
                </Link>
              </li>
              <li>
                <Link href="/sap-services" className="hover:text-white transition-colors">
                  SAP Enterprise Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Security & Quality */}
          <div className="flex flex-col">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-4">
              Security &amp; Quality
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/penetration-testing" className="hover:text-white transition-colors">
                  Penetration Testing
                </Link>
              </li>
              <li>
                <Link href="/security-compliance" className="hover:text-white transition-colors">
                  APRA CPS 234 Compliance
                </Link>
              </li>
              <li>
                <Link href="/vulnerability-assessment" className="hover:text-white transition-colors">
                  Vulnerability Assessment
                </Link>
              </li>
              <li>
                <Link href="/source-code-review" className="hover:text-white transition-colors">
                  Source Code Security Review
                </Link>
              </li>
              <li>
                <Link href="/software-testing-services" className="hover:text-white transition-colors">
                  Quality Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Advisory */}
          <div className="flex flex-col">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About QODES
                </Link>
              </li>
              <li>
                <Link href="/staff-augmentation-services" className="hover:text-white transition-colors">
                  Staff Augmentation
                </Link>
              </li>
              <li>
                <Link href="/join-us" className="hover:text-white transition-colors">
                  Careers &amp; Join Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact &amp; Advisory
                </Link>
              </li>
              <li>
                <Link href="/location" className="hover:text-white transition-colors">
                  Offices &amp; Global Footprint
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-slate-500 text-center sm:text-left">
            <span>© {new Date().getFullYear()} QODES Systems Pty Ltd. All Rights Reserved.</span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="text-slate-400 font-mono">Australian Core Banking &amp; Security Engineering</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/company/qodes-systems"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="QODES Systems LinkedIn"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <LinkedInIcon className="!w-4 !h-4" />
            </a>
            <a
              href="https://x.com/qodessystems"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="QODES Systems X"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <XIcon className="!w-3.5 !h-3.5" />
            </a>
            <a
              href="https://facebook.com/qodessystems"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="QODES Systems Facebook"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <FacebookOutlinedIcon className="!w-4 !h-4" />
            </a>
            <a
              href="https://instagram.com/qodessystems"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="QODES Systems Instagram"
              className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <InstagramIcon className="!w-4 !h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
