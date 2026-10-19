"use client";

import React from "react";
import ServiceDetailView from "@/components/global/service-detail-view";
import { Cpu, ShieldCheck, Zap, Database } from "lucide-react";
import { useContent } from "@/context/content-context";

export default function ProprietaryQodesCoreBankingSystem() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_qodes_cbs",
    "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop"
  );

  return (
    <ServiceDetailView
      category="Core Banking Systems"
      title="Qodes AI-Engineered Core Banking System"
      subtitle="Autonomous, microservices-driven core banking platform engineered by enterprise veterans with two decades of Tier-1 banking transformation track record."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Solutions", href: "/#services" },
        { label: "Qodes Core Banking System" },
      ]}
      leadParagraphs={[
        "Our AI-powered Core Banking System (CBS) has been envisioned and meticulously engineered by an expert leadership team with over two decades of proven success delivering complex transformations to large financial institutions.",
        "Built on an agile, cloud-native microservices architecture, QODES CBS streamlines and centralizes the operations of retail and commercial banks, building societies, and non-banking financial institutions (NBFCs). By integrating modern ledger calculation with real-time analytics, our platform eliminates legacy batch-window bottlenecks.",
        "From high-throughput deposit accounts and automated loan underwriting to multi-currency clearing and APRA regulatory compliance, QODES CBS provides financial enterprises with a future-proof, secure foundation designed for 99.999% operational continuity."
      ]}
      imageUrl={imageUrl}
      imageAlt="Qodes AI Core Banking Platform Architecture"
      badgeText="AI-Orchestrated CBS · 20+ Years Heritage"
      keyBenefits={[
        "Sub-second real-time transaction processing & clearing",
        "Cloud-native microservices with zero-downtime rolling upgrades",
        "Native ISO 20022 and NPP Australia payments integration",
        "Autonomous reconciliation with AI-assisted anomaly detection",
        "APRA CPS 234 and ISO 27001 institutional governance compliance",
        "Comprehensive Open Banking CDR APIs and secure SDKs"
      ]}
      pillars={[
        {
          title: "Autonomous Transaction Engine",
          description: "High-concurrency ledger core capable of processing tens of thousands of financial operations per second with ACID compliance and zero data drift.",
          icon: <Zap className="w-5 h-5" />,
        },
        {
          title: "Microservices Architecture",
          description: "Decoupled domain services for deposits, lending, FX, and regulatory auditing that scale independently without impacting core availability.",
          icon: <Cpu className="w-5 h-5" />,
        },
        {
          title: "Institutional Cyber Assurance",
          description: "End-to-end data encryption in transit and at rest, cryptographic transaction signing, and built-in alignment with Australian APRA CPS 234 mandates.",
          icon: <ShieldCheck className="w-5 h-5" />,
        },
      ]}
      modules={[
        {
          title: "Autonomous General Ledger & Real-Time Balancing",
          subtitle: "Core Accounting Engine",
          items: [
            "Continuous multi-currency balance calculation without overnight batch locks",
            "Automated chart of accounts with dynamic sub-ledger hierarchy",
            "Real-time inter-branch and inter-bank clearing reconciliation",
            "Comprehensive audit trail with cryptographic tamper-evident logging",
          ],
        },
        {
          title: "Retail & Commercial Deposit Management",
          subtitle: "Customer Account Services",
          items: [
            "Flexible interest calculation engines (tiered, compound, fixed, Islamic banking)",
            "Automated fee structures, overdraft facilities, and dormant account handling",
            "Instant account provisioning via Open Banking APIs",
            "Real-time fraud scoring on outgoing payments and transfers",
          ],
        },
        {
          title: "Lending & Credit Lifecycle Origination",
          subtitle: "Credit Engine",
          items: [
            "Configurable loan product catalog for mortgages, personal, and SME credit",
            "Automated credit risk assessment and scorecard calculation",
            "Dynamic repayment schedule adjustments and early settlement recalculation",
            "Non-performing loan (NPL) tracking and automated delinquency staging",
          ],
        },
        {
          title: "Regulatory Reporting & Open Banking Hub",
          subtitle: "Institutional Compliance",
          items: [
            "Automated APRA data feed generation (EFS, ARF, CPS 234)",
            "Consumer Data Right (CDR) compliant REST endpoints with OAuth2 / FAPI",
            "SWIFT Alliance and NPP Australia direct connector modules",
            "Real-time AML/CTF transaction monitoring hooks",
          ],
        },
      ]}
      ctaHeadline="Modernize Your Core Banking With Absolute Confidence"
      ctaSubtext="Speak directly with our principal banking architects in Melbourne. We offer confidential architectural assessments, migration gap analyses, and live platform demonstrations."
    />
  );
}
