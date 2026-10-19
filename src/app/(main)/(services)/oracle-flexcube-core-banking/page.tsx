"use client";

import React from "react";
import ServiceDetailView from "@/components/global/service-detail-view";
import { ShieldCheck, RefreshCw, Cpu } from "lucide-react";
import { useContent } from "@/context/content-context";

export default function OracleFlexcubeCoreBanking() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_oracle_flexcube",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
  );

  return (
    <ServiceDetailView
      category="Core Banking Systems"
      title="Oracle FLEXCUBE Core Banking Implementation & Support"
      subtitle="Enterprise Oracle FLEXCUBE deployment, version upgrades, system integration, and 24/7 mission-critical application management across Australia and India."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Solutions", href: "/#services" },
        { label: "Oracle FLEXCUBE Core Banking" },
      ]}
      leadParagraphs={[
        "Oracle FLEXCUBE is a globally recognized core banking engine powering retail, corporate, and universal financial institutions. Sustaining high transaction throughput while navigating digital transformation requires specialized banking domain knowledge and proven architectural discipline.",
        "At QODES Systems, our Core Banking practice brings deep technical and functional expertise across Oracle FLEXCUBE releases. We deliver full-lifecycle implementations, reliable version upgrades, custom interface engineering, and round-the-clock operational support.",
        "Our team works collaboratively with executive leadership and IT teams across Australia and India, delivering predictable rollouts, accelerated End-of-Day (EOD) processing, and seamless interoperability with contemporary digital banking channels."
      ]}
      imageUrl={imageUrl}
      imageAlt="Oracle FLEXCUBE Core Banking Implementation and Support"
      badgeText="Oracle FLEXCUBE Practice · Australia & India"
      keyBenefits={[
        "End-to-end Oracle FLEXCUBE Universal Banking implementation & upgrades",
        "Expertise across Retail, Corporate, Treasury, and Trade Finance modules",
        "Seamless integration with domestic payment rails and SWIFT networks",
        "End-of-Day (EOD) and Start-of-Day (SOD) batch optimization",
        "Round-the-clock 24/7 SLA-driven Application Management Services (AMS)",
        "Regulatory compliance alignment with Australian APRA and Indian banking standards"
      ]}
      pillars={[
        {
          title: "Implementation & Upgrades",
          description: "Pragmatic delivery frameworks for greenfield FLEXCUBE deployments, database version migrations, and seamless release upgrades.",
          icon: <RefreshCw className="w-5 h-5" />,
        },
        {
          title: "Enterprise Interoperability",
          description: "Robust middleware integration connecting FLEXCUBE core ledger with digital mobile channels, payment gateways, and regulatory reporting.",
          icon: <Cpu className="w-5 h-5" />,
        },
        {
          title: "24/7 Production AMS",
          description: "Reliable Tier-1 to Tier-3 support, incident resolution, performance tuning, and batch run monitoring across Australian and Indian time zones.",
          icon: <ShieldCheck className="w-5 h-5" />,
        },
      ]}
      modules={[
        {
          title: "Oracle FLEXCUBE Implementation & Rollouts",
          subtitle: "Full-Lifecycle Core Delivery",
          items: [
            "Current-state architectural evaluation and target-state blueprinting",
            "Core module configuration (CASA, Term Deposits, Lending, Treasury)",
            "Chart of Accounts (COA) mapping and multi-currency ledger setup",
            "Comprehensive data migration, validation, and trial balance reconciliation",
            "Dress rehearsal cutover execution and post go-live hypercare",
          ],
        },
        {
          title: "Version Upgrades & Patch Management",
          subtitle: "Modernization & Performance",
          items: [
            "Assessment of existing customizations and migration path scoping",
            "Oracle FLEXCUBE version upgrades with minimal disruption",
            "Regression testing automation and business acceptance validation",
            "End-of-Day (EOD) batch performance tuning and runtime reduction",
            "Critical patch analysis, testing, and deployment",
          ],
        },
        {
          title: "Integration & Digital Connectivity",
          subtitle: "Omnichannel API Enablement",
          items: [
            "Integration with Internet and Mobile Banking channels via Oracle Banking APIs",
            "Payment rail connectivity: RTGS, NEFT, UPI, NPP Australia, and BPAY",
            "SWIFT Alliance messaging integration (MT and ISO 20022 MX formats)",
            "Automated regulatory data feeds and AML/CFT compliance connectors",
            "Third-party CRM, ERP, and General Ledger interfaces",
          ],
        },
        {
          title: "24/7 Application Management (AMS)",
          subtitle: "Dual-Shore Support Excellence",
          items: [
            "Follow-the-sun monitoring across Australian and Indian delivery centers",
            "Strict SLA commitments for critical banking incident resolution",
            "Daily batch monitoring, exception handling, and error resolution",
            "Preventative system maintenance and capacity planning",
            "Continuous knowledge management and operational documentation",
          ],
        },
      ]}
      ctaHeadline="Discuss Your Oracle FLEXCUBE Environment With Our Architects"
      ctaSubtext="Connect with our principal core banking consultants in Australia and India. We provide confidential system reviews, upgrade roadmaps, and support evaluations."
    />
  );
}
