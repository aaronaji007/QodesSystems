"use client";

import React from "react";
import ServiceDetailView from "@/components/global/service-detail-view";
import { Layers, ShieldCheck, Zap } from "lucide-react";
import { useContent } from "@/context/content-context";

export default function OtherProductsComponent() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_other_products",
    "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2070&auto=format&fit=crop"
  );

  return (
    <ServiceDetailView
      category="Banking Products"
      title="Enterprise Administrative Automation Products"
      subtitle="Specialized operational software suites designed to automate back-office workflows, IT infrastructure security, and administrative efficiency for financial institutions."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/banking-products" },
        { label: "Other Products" },
      ]}
      leadParagraphs={[
        "Our primary focus is on bridging the operational and administrative challenges faced by modern banks using a 360-degree view of institutional workflows.",
        "Our specialized suite of administrative products automates supporting departments—including corporate asset management, vendor lifecycle tracking, and internal IT infrastructure management—ensuring seamless operational synchronization with our Core Banking Suite.",
        "By eliminating disparate manual spreadsheets and departmental data silos, QODES Administrative Suites enable banks to maintain strict audit trails and boost back-office productivity."
      ]}
      imageUrl={imageUrl}
      imageAlt="Enterprise Administrative Automation Product Suite"
      badgeText="Operational Automation · Bank Integration"
      keyBenefits={[
        "Full interoperability with QODES Core Banking and General Ledger",
        "Streamlined operational workflows across back-office administrative teams",
        "Comprehensive asset lifecycle tracking and physical equipment registers",
        "Automated vendor contract renewals and service-level agreement tracking",
        "APRA CPS 234 administrative security compliance alignment",
        "Role-based access control with dual-authorization approval flows"
      ]}
      pillars={[
        {
          title: "End-to-End Interoperability",
          description: "Seamless data exchange with transactional banking engines, eliminating duplicate data entry across administrative departments.",
          icon: <Layers className="w-5 h-5" />,
        },
        {
          title: "Automated Workflows",
          description: "Configurable approval chains and automated notifications ensuring rapid turnaround on internal requests and procurement.",
          icon: <Zap className="w-5 h-5" />,
        },
        {
          title: "Audit & Governance",
          description: "Immutable activity logs and comprehensive reporting tools providing verifiable evidence for regulatory compliance inspections.",
          icon: <ShieldCheck className="w-5 h-5" />,
        },
      ]}
      modules={[
        {
          title: "Administrative Automation Modules",
          subtitle: "Specialized Enterprise Suites",
          items: [
            "Human Resource Management System (HRMS) & Automated Payroll",
            "IT Infrastructure & Security Management System (IMS)",
            "Fixed Asset & Equipment Lifecycle Tracking Module",
            "Corporate Procurement & Vendor Contract Management Portal",
          ],
        },
      ]}
      ctaHeadline="Streamline Your Institutional Operations"
      ctaSubtext="Connect with our software solutions team to explore custom administrative modules tailored to your operational structure."
    />
  );
}
