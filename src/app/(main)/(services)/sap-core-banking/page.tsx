"use client";

import React from "react";
import ServiceDetailView from "@/components/global/service-detail-view";
import { Database, ShieldCheck, RefreshCw } from "lucide-react";
import { useContent } from "@/context/content-context";

export default function SapCoreBanking() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_sap_core_banking",
    "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop"
  );

  return (
    <ServiceDetailView
      category="Core Banking Systems"
      title="SAP Core Banking Modernization"
      subtitle="Enterprise SAP Banking architecture, transactional module modernization, and seamless S/4HANA migration services delivered by certified banking specialists."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Solutions", href: "/#services" },
        { label: "SAP Core Banking" },
      ]}
      leadParagraphs={[
        "QODES Systems brings deep expertise in SAP Banking development and implementation projects, positioning us as a trusted Tier-1 partner for your SAP Banking-based IT transformation initiatives.",
        "Our Solution Architects excel in conducting detailed solution reviews at every phase of the project, addressing potential design flaws early—long before the user acceptance phase—ensuring the structural integrity and feasibility of every deliverable.",
        "Leverage the deep content knowledge and extensive banking experience of our enterprise architects to eliminate project risks, enhance transactional efficiency, and execute your SAP Banking roadmap on time with absolute precision."
      ]}
      imageUrl={imageUrl}
      imageAlt="SAP Core Banking Modernization Architecture"
      badgeText="SAP Banking Practice · 20+ Years Delivery"
      keyBenefits={[
        "Early pre-acceptance architectural reviews to eliminate rework",
        "Deep expertise across SAP Deposits, Loans & Collateral Management",
        "Seamless S/4HANA migration and transactional integration",
        "Continuous compliance with Australian APRA standards",
        "Independent Verification & Validation (IV&V)",
        "Zero-downtime ledger migration methodologies"
      ]}
      pillars={[
        {
          title: "Pre-Acceptance Reviews",
          description: "Rigorous milestone audits that evaluate code, schemas, and data pipelines before acceptance testing to catch architectural defects early.",
          icon: <ShieldCheck className="w-5 h-5" />,
        },
        {
          title: "Core Module Expertise",
          description: "Deep hands-on delivery covering SAP Deposits, Loans Management, Master Contract, Pricing, and Collateral Management modules.",
          icon: <Database className="w-5 h-5" />,
        },
        {
          title: "S/4HANA Transformation",
          description: "Proven roadmap for modernizing legacy SAP Banking workloads onto SAP S/4HANA with high-throughput in-memory ledger settlement.",
          icon: <RefreshCw className="w-5 h-5" />,
        },
      ]}
      modules={[
        {
          title: "Advisory & Implementation Practice (What We Offer)",
          subtitle: "End-to-End Enterprise Consulting",
          items: [
            "Requirement Analysis and SAP Banking Product Selection",
            "Customer Relationship Management (CRM) Architecture",
            "Consulting and Strategic Project Management Services",
            "Business Process Analysis & Reengineering (BPR)",
            "Business Gap and Regulatory Impact Analysis",
            "System Architecture Design & Target-State Engineering",
            "Implementation, Cutover, and Roll-out Strategies",
            "Quality Assurance Processes for Compliance Management",
            "Independent Verification & Validation (IV&V)",
          ],
        },
        {
          title: "IT Transformation & Delivery Governance",
          subtitle: "Enterprise Engineering Services",
          items: [
            "Project Management and PMO governance for multi-year bank modernizations",
            "Solution Architecture and enterprise target-state design",
            "Competence Care Enablement and internal team knowledge transfer",
          ],
        },
        {
          title: "Core Banking Functional Modules",
          subtitle: "Transactional Banking Suites",
          items: [
            "SAP Loan Management (Origination, Servicing, Delinquency)",
            "SAP Deposit Management (Current, Savings, Term Deposits, Multi-Currency)",
            "SAP Collateral Management & Real-Time Asset Pledging",
            "Master Contract Management & Consolidated Account Bundling",
            "Dynamic Pricing, Fee Calculation & Tiered Interest Engines",
          ],
        },
        {
          title: "Customer Engagement & Digital Sales",
          subtitle: "SAP CRM Integration",
          items: [
            "Architecting and designing automated account origination scenarios",
            "Customer-Centric omnichannel onboarding workflows",
            "Sales Enablement & cross-sell analytics integration",
            "Direct bidirectional integration between CRM and Core Banking ledgers",
            "Strict compliance and cryptographic security assurance",
          ],
        },
      ]}
      ctaHeadline="Modernize Your SAP Banking Architecture"
      ctaSubtext="Schedule a confidential consultation with our SAP Banking Principal Architects. We review implementation plans, audit legacy SAP instances, and plan zero-downtime S/4HANA migrations."
    />
  );
}
