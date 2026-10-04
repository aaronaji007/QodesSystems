"use client";

import React from "react";
import ServiceDetailView from "@/components/global/service-detail-view";
import { ShieldCheck, Eye, Layers } from "lucide-react";
import { useContent } from "@/context/content-context";

export default function ITSecurityAssessmentPage() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_security_assessment",
    "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop"
  );

  return (
    <ServiceDetailView
      category="Cybersecurity & Assurance"
      title="Holistic IT Security Assessment & Posture Review"
      subtitle="Comprehensive multi-dimensional evaluation of your enterprise technology, human operational processes, governance policies, and threat surface."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Security & Assurance", href: "/#services" },
        { label: "IT Security Assessment" },
      ]}
      leadParagraphs={[
        "When did your institution last rigorously evaluate the security resilience of its core systems? In an era characterized by relentless ransomware and supply-chain compromises, an ad-hoc security review is insufficient.",
        "At QODES Systems, our IT Security Assessment is a comprehensive, deep-dive examination across your three most vital pillars: People, Processes, and Technology.",
        "We evaluate defensive architectural depth, employee access hygiene, incident response playbooks, and cloud security configurations, delivering executive clarity on where real operational risks lie and how to remediate them with precision."
      ]}
      imageUrl={imageUrl}
      imageAlt="Institutional IT Security Posture Assessment"
      badgeText="Holistic Security Audit · People, Process, Technology"
      keyBenefits={[
        "Unbiased 360-degree evaluation of current cybersecurity maturity",
        "Clear identification of critical blind spots and misaligned controls",
        "Detailed executive roadmap prioritized by business impact and cost to remediate",
        "Verification of policy enforcement and staff access privileges",
        "Benchmarking against Australian Essential Eight and NIST Cybersecurity Framework",
        "Board-ready risk scorecards and strategic security investment plans"
      ]}
      pillars={[
        {
          title: "Technology Assessment",
          description: "Technical configuration audits of firewalls, endpoint detection (EDR), cloud workloads, identity providers, and data encryption.",
          icon: <ShieldCheck className="w-5 h-5" />,
        },
        {
          title: "Process & Governance",
          description: "Review of change management controls, incident response playbooks, patch governance, and third-party vendor review workflows.",
          icon: <Layers className="w-5 h-5" />,
        },
        {
          title: "Human Risk Surface",
          description: "Evaluation of privileged user access hygiene, multi-factor authentication enforcement, and organizational security awareness.",
          icon: <Eye className="w-5 h-5" />,
        },
      ]}
      modules={[
        {
          title: "Assessment Scope & Architecture Review",
          subtitle: "Core Evaluation Dimensions",
          items: [
            "Perimeter & Cloud Security Architecture Review (AWS, Azure, Private Cloud)",
            "Identity & Access Management (IAM) governance and Principle of Least Privilege audit",
            "Data Protection and Cryptographic Controls (Data-at-rest, data-in-transit, key escrow)",
            "Incident Detection, Logging, SIEM / SOC telemetry readiness evaluation",
            "Essential Eight maturity level verification and gap analysis",
          ],
        },
        {
          title: "Executive Deliverables & Strategic Roadmap",
          subtitle: "Clear Actionable Telemetry",
          items: [
            "Executive Summary with maturity scoring across NIST CSF / Essential Eight domains",
            "Detailed technical findings register with contextual risk severity and exploitability",
            "Prioritized 30/60/90-day remediation action plan",
            "Executive presentation to C-Suite stakeholders and Risk & Audit committees",
          ],
        },
      ]}
      ctaHeadline="Understand Your Real Cybersecurity Posture"
      ctaSubtext="Engage our senior cybersecurity assessment leads to benchmark your institutional defenses and eliminate critical exposure."
    />
  );
}
