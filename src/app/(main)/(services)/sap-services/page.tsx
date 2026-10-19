"use client";

import React from "react";
import ServiceDetailView from "@/components/global/service-detail-view";
import { Database, ShieldCheck, Layers, RefreshCw } from "lucide-react";
import { useContent } from "@/context/content-context";

export default function SAPServicesPage() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_sap_services",
    "https://plus.unsplash.com/premium_photo-1714618828448-abf8732500c6?q=80&w=1800&auto=format&fit=crop"
  );

  return (
    <ServiceDetailView
      category="Enterprise Consulting"
      title="SAP Enterprise Implementation & Consulting"
      subtitle="End-to-end SAP ERP delivery, pragmatic ASAP implementation methodology, global rollouts, custom ABAP / Fiori engineering, and 24/7 Application Management."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Solutions", href: "/#services" },
        { label: "SAP Services" },
      ]}
      leadParagraphs={[
        "QODES Systems possesses rich enterprise experience across SAP Services, ensuring an efficient, predictable, and smooth implementation lifecycle.",
        "We have implemented SAP solutions for large multinational banking corporations as well as agile mid-market financial enterprises. We tailored the standard SAP implementation methodology (ASAP) into a pragmatic, iterative 'best-practice' delivery model that accelerates value realization.",
        "Our specialized consultants guide institutions through complete business blueprinting, custom enhancements, third-party system integrations, cutover management, and long-term Application Management Services (AMS)."
      ]}
      imageUrl={imageUrl}
      imageAlt="Enterprise SAP Implementation and Consulting Practice"
      badgeText="SAP Practice · Pragmatic Delivery Framework"
      keyBenefits={[
        "Modified ASAP methodology tailored for reduced delivery risk",
        "Deep cross-module integration across Finance (FI/CO), CRM, and Banking",
        "Comprehensive Global Template design and multi-country rollouts",
        "Custom development in ABAP on HANA, SAP Fiori, and BTP",
        "SLA-driven round-the-clock SAP Application Management Services",
        "Rigorous data migration and reconciliation governance"
      ]}
      pillars={[
        {
          title: "Pragmatic ASAP Methodology",
          description: "Accelerated implementation model that combines standard SAP best practices with iterative milestone validation to eliminate project drift.",
          icon: <Layers className="w-5 h-5" />,
        },
        {
          title: "S/4HANA & HANA Data Core",
          description: "High-speed in-memory database optimization, custom CDS view creation, and low-latency transactional reporting engines.",
          icon: <Database className="w-5 h-5" />,
        },
        {
          title: "Enterprise Governance",
          description: "Strict change management, transports auditability, security role authorization, and regulatory compliance alignment.",
          icon: <ShieldCheck className="w-5 h-5" />,
        },
      ]}
      modules={[
        {
          title: "SAP Implementation and Rollout Services",
          subtitle: "End-to-End Enterprise Delivery",
          items: [
            "Project Preparation and Governance Framework definition",
            "Business Blueprinting and target-state process mapping",
            "Configuration, Customizing, and System Realization",
            "Final Preparation, Data Migration, User Training, and Cutover",
            "Go-Live and Hypercare Post-Implementation Support",
          ],
        },
        {
          title: "SAP Support and Maintenance (AMS)",
          subtitle: "24/7 Managed Services",
          items: [
            "Tier-1 User Helpdesk, Tier-2 Functional Support, and Tier-3 Technical Consulting",
            "Strict SLA commitments with rapid incident response and resolution times",
            "Preventative system maintenance, patch management, and OSS note implementations",
            "Quarterly system health checks, performance tuning, and database housekeeping",
          ],
        },
        {
          title: "SAP Custom Development & Enhancements",
          subtitle: "Bespoke Engineering on SAP BTP",
          items: [
            "Custom ABAP on HANA programming and RFC interface development",
            "Modern user interface engineering with SAP Fiori and SAPUI5",
            "Integration with non-SAP systems via SAP PI/PO, CPI, and RESTful APIs",
            "Legacy SAP code refactoring and optimization for S/4HANA compatibility",
          ],
        },
        {
          title: "SAP Industry & Sector Solutions",
          subtitle: "Specialized Domain Suites",
          items: [
            "SAP for Banking (Transactional Banking, Loans, Deposits, CRM)",
            "SAP Financials (FI/CO) for multi-entity statutory consolidation",
            "Enterprise Asset Management and Treasury Management solutions",
            "Statutory Australian tax and regulatory reporting compliance",
          ],
        },
      ]}
      ctaHeadline="Maximize Value From Your SAP Investment"
      ctaSubtext="Connect with our SAP Practice Leads to evaluate current system performance, plan an S/4HANA migration, or optimize your support operations."
    />
  );
}
