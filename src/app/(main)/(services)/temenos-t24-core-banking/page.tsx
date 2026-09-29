"use client";

import React from "react";
import ServiceDetailView from "@/components/global/service-detail-view";
import { Zap, ShieldCheck, Layers, RefreshCw } from "lucide-react";
import { useContent } from "@/context/content-context";

export default function TemenosT24CoreBanking() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_temenos_t24",
    "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop"
  );

  return (
    <ServiceDetailView
      category="Core Banking Systems"
      title="Temenos T24 Upgrades & Migration Practice"
      subtitle="Enterprise Temenos T24 / Transact implementation, seamless pack upgrades, Model Bank deployments, and 24/7 mission-critical application management."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Solutions", href: "/#services" },
        { label: "Temenos T24 Core Banking" },
      ]}
      leadParagraphs={[
        "Transitioning from a legacy core platform or upgrading your existing Temenos T24 environment? Such mission-critical transformations present profound operational and regulatory challenges that demand absolute delivery precision.",
        "At QODES Systems, we specialize in delivering end-to-end Temenos implementation and upgrade services by leveraging mature engineering practices derived from our collective two decades of core banking domain mastery. Our architects empower banks to adopt Temenos standard processes while tailoring modules to unique institutional needs.",
        "With QODES Systems as your delivery partner, you navigate release upgrades, API integrations, and cloud migrations with confidence, achieving streamlined operations, zero unplanned downtime, and maximizing ROI from your Temenos investment."
      ]}
      imageUrl={imageUrl}
      imageAlt="Temenos T24 Core Banking Upgrades & Migration"
      badgeText="Temenos Engineering · Zero Downtime"
      keyBenefits={[
        "Zero-downtime cutover and technology migration methodologies",
        "Pre-configured Temenos Model Bank rapid rollouts",
        "Comprehensive release and pack upgrade validation pipelines",
        "End-to-end multi-tier Application Maintenance Services (AMS)",
        "APRA CPS 234 cybersecurity alignment and compliance audits",
        "Seamless Open Banking and payment rails (SWIFT / NPP) connectivity"
      ]}
      pillars={[
        {
          title: "Upgrade & Migration Engineering",
          description: "Proven automation frameworks for seamless release jumps, schema synchronizations, and data integrity verification without ledger locks.",
          icon: <RefreshCw className="w-5 h-5" />,
        },
        {
          title: "Temenos Model Bank Speed",
          description: "Rapid deployment methodologies utilizing pre-configured workflows and Australian banking compliance templates to achieve ROI in record time.",
          icon: <Zap className="w-5 h-5" />,
        },
        {
          title: "Enterprise Reliability & AMS",
          description: "Round-the-clock L1-L3 application support, performance tuning, and database optimization tailored for high-volume banking institutions.",
          icon: <ShieldCheck className="w-5 h-5" />,
        },
      ]}
      modules={[
        {
          title: "Technology Migration & Version Upgrade Services",
          subtitle: "Legacy-to-Temenos & Release Jumps",
          items: [
            "Comprehensive version upgrade path analysis (T24 to Transact / Cloud Native)",
            "Automated regression testing frameworks for core banking calculation verification",
            "Zero-downtime cutover planning with dry-run simulations and rollback contingencies",
            "Regulatory compliance alignment with Australian APRA standards and NPP payment schemes",
          ],
        },
        {
          title: "Temenos Model Bank Implementation",
          subtitle: "Accelerated Market Entry",
          items: [
            "Ready-to-deploy core banking suites with pre-configured banking processes",
            "Rapid deployment reducing time-to-market for challenger banks and credit unions",
            "Gap analysis and localization for Australian regulatory reporting",
            "End-user enablement, role configuration, and PMO governance",
          ],
        },
        {
          title: "Application Maintenance & Support (AMS)",
          subtitle: "Mission-Critical 24/7 SLA Assurance",
          items: [
            "Tier-1, Tier-2, and Tier-3 specialized core banking support desks",
            "Continuous health monitoring, memory leak detection, and query index tuning",
            "COB (Close of Business) batch cycle optimization and run-time reduction",
            "Security vulnerability remediation and periodic penetration test assurance",
          ],
        },
        {
          title: "Interface & Integration Engineering",
          subtitle: "Digital Channels & Payment Rails",
          items: [
            "Integration with Internet Banking, Mobile Banking, and digital onboarding channels",
            "SWIFT Alliance, NPP Australia, and BPAY connector development",
            "Consumer Data Right (CDR) API integration for Open Banking compliance",
            "Event-driven architecture design using enterprise Kafka and REST web services",
          ],
        },
      ]}
      ctaHeadline="Upgrade Your Temenos Architecture with Zero Risk"
      ctaSubtext="Connect with our certified Temenos Practice Leads to audit your existing environment, evaluate upgrade paths, or plan a Model Bank implementation."
    />
  );
}
