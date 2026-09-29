"use client";

import React from "react";
import ServiceDetailView from "@/components/global/service-detail-view";
import { Database, Cpu, Zap, ShieldCheck } from "lucide-react";
import { useContent } from "@/context/content-context";

export default function CoreBankingSystemProductPage() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_core_banking",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
  );

  return (
    <ServiceDetailView
      category="Banking Products"
      title="Qodes Modular Core Banking Solution (CBS)"
      subtitle="Comprehensive, web-enabled, and modular core banking application designed to address end-to-end retail, commercial, and financial inclusion operations."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/banking-products" },
        { label: "Core Banking System" },
      ]}
      leadParagraphs={[
        "QODES Systems Core Banking Solution is a comprehensive, scalable integrated business platform designed to address the end-to-end operations of modern banks, credit unions, and non-banking financial companies (NBFCs).",
        "Built on an agile, Service-Oriented Architecture (SOA), our platform streamlines and simplifies banking processes across the core ledger, branch teller networks, mobile banking, and e-banking digital channels.",
        "With modular and easy-to-configure product engines, financial institutions can rapidly launch new deposit products, customize interest accrual tiers, and deploy automated credit origination with complete regulatory confidence."
      ]}
      imageUrl={imageUrl}
      imageAlt="Qodes Modular Core Banking Solution Product Interface"
      badgeText="Enterprise Core Platform · Service-Oriented Architecture"
      keyBenefits={[
        "End-to-end multi-currency General Ledger and transactional accounting",
        "Configurable deposit, loan, and collateral management product engines",
        "Seamless integration with Internet, Mobile, and ATM delivery channels",
        "Comprehensive microfinance, financial inclusion, and community banking features",
        "Automated APRA regulatory reporting and compliance data feeds",
        "High-performance architecture with 24/7 continuous operation"
      ]}
      pillars={[
        {
          title: "Service-Oriented Architecture",
          description: "Modular components communicating via standard enterprise APIs, allowing flexible extension and painless integration with legacy systems.",
          icon: <Cpu className="w-5 h-5" />,
        },
        {
          title: "Real-Time Ledger Engine",
          description: "High-throughput transactional core delivering immediate balance updates, automated reconciliation, and continuous multi-branch settlement.",
          icon: <Database className="w-5 h-5" />,
        },
        {
          title: "Institutional Security",
          description: "Granular role-based access control, dual-authorization (maker-checker) workflows, and immutable audit telemetry.",
          icon: <ShieldCheck className="w-5 h-5" />,
        },
      ]}
      modules={[
        {
          title: "Core Banking Functional Modules",
          subtitle: "Enterprise Banking Operations",
          items: [
            "Customer Information File (CIF) and 360-degree customer relationship management",
            "Current & Savings Accounts (CASA) with dynamic interest rate schedules",
            "Term Deposits and Recurring Deposits with automated maturity rollover rules",
            "Commercial Lending, Retail Credit, and Microfinance loan origination",
            "Collateral Management, asset valuation, and lien tracking",
          ],
        },
        {
          title: "Omnichannel Delivery & Clearing Connectors",
          subtitle: "Digital Channels Integration",
          items: [
            "Branch Teller Module with real-time cash drawer and vault reconciliation",
            "Direct interface to Internet Banking, Mobile Apps, and Agent Banking portals",
            "SWIFT Alliance, NPP Australia, BPAY, and RTGS payment rail connectors",
            "Automated Clearing House (ACH) and direct debit / credit batch processing",
          ],
        },
        {
          title: "Enterprise Governance & Financial Inclusion",
          subtitle: "Inclusion & Compliance",
          items: [
            "Microfinance and financial inclusion workflows for regional and community banking",
            "Automated APRA regulatory returns and prudential liquidity monitoring",
            "Built-in Anti-Money Laundering (AML) and counter-terrorism financing screening",
            "Comprehensive maker-checker authorization protocols on all monetary transactions",
          ],
        },
      ]}
      ctaHeadline="Deploy a Modern Core Banking Solution"
      ctaSubtext="Request a technical demonstration of the QODES Core Banking Solution and consult with our principal enterprise architects."
    />
  );
}
