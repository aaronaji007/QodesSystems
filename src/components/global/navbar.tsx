"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Shield, Cpu, Building2, ArrowRight } from "lucide-react";
import Logo from "./logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSheet } from "@/app/providers/sheet-provider";

export const Navbar = () => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isSheetOpen, closeSheet, toggleSheet } = useSheet();

  const handleDropdown = (name: string) => {
    setActiveDropdown((current) => (current === name ? null : name));
  };

  return (
    <header
      className="sticky top-0 z-50 w-full h-20 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
        {/* Brand Logo with Concept A Monogram */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link
            href="/"
            className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
              pathname === "/"
                ? "text-sky-600 font-semibold"
                : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
              pathname === "/about"
                ? "text-sky-600 font-semibold"
                : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
            }`}
          >
            About Us
          </Link>

          {/* Core Banking Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("cbs")}
          >
            <button
              onClick={() => handleDropdown("cbs")}
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                activeDropdown === "cbs" || pathname.includes("banking")
                  ? "text-sky-600 bg-sky-50/50"
                  : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              <span>Core Banking</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === "cbs" ? "rotate-180 text-sky-600" : "text-slate-400"
                }`}
              />
            </button>

            {activeDropdown === "cbs" && (
              <div className="absolute left-0 top-full pt-2 w-80 animate-in fade-in-50 slide-in-from-top-2 duration-150">
                <div className="bg-white rounded-xl shadow-xl shadow-slate-950/5 border border-slate-200/80 p-2 overflow-hidden">
                  <div className="px-3 py-2 border-b border-slate-100 text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-sky-600" />
                    Tier-1 Core Banking Systems
                  </div>
                  <div className="py-1">
                    <Link
                      href="/qodes-core-banking-system"
                      className="group flex flex-col px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <span className="text-sm font-medium text-slate-900 group-hover:text-sky-600 flex items-center justify-between">
                        Qodes CBS (AI-Engineered)
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-600" />
                      </span>
                      <span className="text-xs text-slate-500 line-clamp-1">
                        Centralized, modular AI-powered core banking platform
                      </span>
                    </Link>
                    <Link
                      href="/sap-core-banking"
                      className="group flex flex-col px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <span className="text-sm font-medium text-slate-900 group-hover:text-sky-600 flex items-center justify-between">
                        SAP Core Banking
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-600" />
                      </span>
                      <span className="text-xs text-slate-500 line-clamp-1">
                        Implementation, architecture review & upgrades
                      </span>
                    </Link>
                    <Link
                      href="/temenos-t24-core-banking"
                      className="group flex flex-col px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <span className="text-sm font-medium text-slate-900 group-hover:text-sky-600 flex items-center justify-between">
                        Temenos T24 Core Banking
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-600" />
                      </span>
                      <span className="text-xs text-slate-500 line-clamp-1">
                        Application migration, optimization & compliance
                      </span>
                    </Link>
                    <Link
                      href="/oracle-flexcube-core-banking"
                      className="group flex flex-col px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <span className="text-sm font-medium text-slate-900 group-hover:text-sky-600 flex items-center justify-between">
                        Oracle FLEXCUBE Core Banking
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-600" />
                      </span>
                      <span className="text-xs text-slate-500 line-clamp-1">
                        Implementation, upgrades & 24/7 AMS
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* SAP ERP Link */}
          <Link
            href="/sap-services"
            className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
              pathname === "/sap-services"
                ? "text-sky-600 font-semibold"
                : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
            }`}
          >
            SAP ERP
          </Link>

          {/* IT Security Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("security")}
          >
            <button
              onClick={() => handleDropdown("security")}
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                activeDropdown === "security" || pathname.includes("security") || pathname.includes("testing")
                  ? "text-sky-600 bg-sky-50/50"
                  : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              <span>IT Security</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === "security" ? "rotate-180 text-sky-600" : "text-slate-400"
                }`}
              />
            </button>

            {activeDropdown === "security" && (
              <div className="absolute left-0 top-full pt-2 w-96 animate-in fade-in-50 slide-in-from-top-2 duration-150">
                <div className="bg-white rounded-xl shadow-xl shadow-slate-950/5 border border-slate-200/80 p-2 overflow-hidden">
                  <div className="px-3 py-2 border-b border-slate-100 text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-sky-600" />
                    Assurance & APRA CPS 234 Compliance
                  </div>
                  <div className="grid grid-cols-2 gap-1 py-1">
                    <Link
                      href="/it-security-assessment"
                      className="px-3 py-2 rounded-lg hover:bg-slate-50 text-xs font-medium text-slate-800 hover:text-sky-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Security Assessment
                    </Link>
                    <Link
                      href="/penetration-testing"
                      className="px-3 py-2 rounded-lg hover:bg-slate-50 text-xs font-medium text-slate-800 hover:text-sky-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Penetration Testing
                    </Link>
                    <Link
                      href="/security-compliance"
                      className="px-3 py-2 rounded-lg hover:bg-slate-50 text-xs font-medium text-slate-800 hover:text-sky-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Security Compliance
                    </Link>
                    <Link
                      href="/vulnerability-assessment"
                      className="px-3 py-2 rounded-lg hover:bg-slate-50 text-xs font-medium text-slate-800 hover:text-sky-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Vulnerability Assessment
                    </Link>
                    <Link
                      href="/application-security-testing"
                      className="px-3 py-2 rounded-lg hover:bg-slate-50 text-xs font-medium text-slate-800 hover:text-sky-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      App Security Testing
                    </Link>
                    <Link
                      href="/source-code-review"
                      className="px-3 py-2 rounded-lg hover:bg-slate-50 text-xs font-medium text-slate-800 hover:text-sky-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Source Code Review
                    </Link>
                    <Link
                      href="/ict-environment-audit"
                      className="col-span-2 px-3 py-2 rounded-lg hover:bg-slate-50 text-xs font-medium text-slate-800 hover:text-sky-600 transition-colors border-t border-slate-100"
                      onClick={() => setActiveDropdown(null)}
                    >
                      ICT Environment Audit & Risk Analysis
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Enterprise Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
          >
            <button
              onClick={() => handleDropdown("services")}
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                activeDropdown === "services" || pathname.includes("services")
                  ? "text-sky-600 bg-sky-50/50"
                  : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === "services" ? "rotate-180 text-sky-600" : "text-slate-400"
                }`}
              />
            </button>

            {activeDropdown === "services" && (
              <div className="absolute left-0 top-full pt-2 w-72 animate-in fade-in-50 slide-in-from-top-2 duration-150">
                <div className="bg-white rounded-xl shadow-xl shadow-slate-950/5 border border-slate-200/80 p-2 overflow-hidden">
                  <div className="px-3 py-2 border-b border-slate-100 text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-sky-600" />
                    Engineering & Consulting
                  </div>
                  <div className="py-1">
                    <Link
                      href="/sap-services"
                      className="flex flex-col px-3 py-2 rounded-lg hover:bg-slate-50 text-sm font-medium text-slate-800 hover:text-sky-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      SAP Services & Implementation
                    </Link>
                    <Link
                      href="/application-development"
                      className="flex flex-col px-3 py-2 rounded-lg hover:bg-slate-50 text-sm font-medium text-slate-800 hover:text-sky-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Enterprise Application Engineering
                    </Link>
                    <Link
                      href="/software-testing-services"
                      className="flex flex-col px-3 py-2 rounded-lg hover:bg-slate-50 text-sm font-medium text-slate-800 hover:text-sky-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Software Quality Engineering
                    </Link>
                    <Link
                      href="/staff-augmentation-services"
                      className="flex flex-col px-3 py-2 rounded-lg hover:bg-slate-50 text-sm font-medium text-slate-800 hover:text-sky-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Staff Augmentation & CBS Talent
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/join-us"
            className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${
              pathname === "/join-us"
                ? "text-sky-600 font-semibold"
                : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
            }`}
          >
            Careers
          </Link>
        </nav>

        {/* Right Action: CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-950 hover:bg-slate-800 rounded-lg shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            Contact Advisory
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex items-center lg:hidden">
          <Sheet open={isSheetOpen} onOpenChange={toggleSheet}>
            <SheetTrigger
              aria-label="Open Navigation Menu"
              className="p-2 text-slate-700 hover:text-slate-950 rounded-lg focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-white w-[300px] sm:w-[350px] p-6 overflow-y-auto">
              <SheetHeader className="text-left pb-4 border-b border-slate-100">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <Logo onClick={closeSheet} />
              </SheetHeader>

              <div className="py-6 flex flex-col gap-4">
                <Link
                  href="/"
                  className="min-h-[44px] flex items-center text-base font-medium text-slate-800 hover:text-sky-600 transition-colors"
                  onClick={closeSheet}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="min-h-[44px] flex items-center text-base font-medium text-slate-800 hover:text-sky-600 transition-colors"
                  onClick={closeSheet}
                >
                  About Us
                </Link>

                <div className="pt-2 border-t border-slate-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Core Banking Systems
                  </p>
                  <div className="flex flex-col gap-1 pl-2">
                    <Link
                      href="/qodes-core-banking-system"
                      className="min-h-[44px] flex items-center text-sm text-slate-700 hover:text-sky-600 transition-colors"
                      onClick={closeSheet}
                    >
                      Qodes CBS
                    </Link>
                    <Link
                      href="/sap-core-banking"
                      className="min-h-[44px] flex items-center text-sm text-slate-700 hover:text-sky-600 transition-colors"
                      onClick={closeSheet}
                    >
                      SAP Core Banking
                    </Link>
                    <Link
                      href="/temenos-t24-core-banking"
                      className="min-h-[44px] flex items-center text-sm text-slate-700 hover:text-sky-600 transition-colors"
                      onClick={closeSheet}
                    >
                      Temenos T24
                    </Link>
                    <Link
                      href="/oracle-flexcube-core-banking"
                      className="min-h-[44px] flex items-center text-sm text-slate-700 hover:text-sky-600 transition-colors"
                      onClick={closeSheet}
                    >
                      Oracle FLEXCUBE
                    </Link>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    SAP ERP Solutions
                  </p>
                  <div className="flex flex-col gap-1 pl-2">
                    <Link
                      href="/sap-services"
                      className="min-h-[44px] flex items-center text-sm text-slate-700 hover:text-sky-600 transition-colors"
                      onClick={closeSheet}
                    >
                      SAP ERP Implementation &amp; Support
                    </Link>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    IT Security &amp; Assurance
                  </p>
                  <div className="flex flex-col gap-1 pl-2">
                    <Link
                      href="/it-security-assessment"
                      className="min-h-[44px] flex items-center text-sm text-slate-700 hover:text-sky-600 transition-colors"
                      onClick={closeSheet}
                    >
                      Security Assessment
                    </Link>
                    <Link
                      href="/penetration-testing"
                      className="min-h-[44px] flex items-center text-sm text-slate-700 hover:text-sky-600 transition-colors"
                      onClick={closeSheet}
                    >
                      Penetration Testing
                    </Link>
                    <Link
                      href="/security-compliance"
                      className="min-h-[44px] flex items-center text-sm text-slate-700 hover:text-sky-600 transition-colors"
                      onClick={closeSheet}
                    >
                      APRA Security Compliance
                    </Link>
                    <Link
                      href="/vulnerability-assessment"
                      className="min-h-[44px] flex items-center text-sm text-slate-700 hover:text-sky-600 transition-colors"
                      onClick={closeSheet}
                    >
                      Vulnerability Assessment
                    </Link>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
                  <Link
                    href="/join-us"
                    className="min-h-[44px] flex items-center text-base font-medium text-slate-800 hover:text-sky-600 transition-colors"
                    onClick={closeSheet}
                  >
                    Careers
                  </Link>
                  <Link
                    href="/contact"
                    className="min-h-[44px] flex items-center justify-center w-full text-center py-2.5 px-4 rounded-lg bg-slate-950 text-white font-medium text-sm hover:bg-slate-800 transition-colors"
                    onClick={closeSheet}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

