"use client";

import React from "react";
import ServiceDetailView from "@/components/global/service-detail-view";
import { ShieldCheck, FileCheck, Award, Lock } from "lucide-react";
import { useContent } from "@/context/content-context";

export default function SecurityCompliancePage() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_security_compliance",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2070&auto=format&fit=crop"
  );

  return (
    <ServiceDetailView
      category="Cybersecurity & Assurance"
      title="Regulatory Security Compliance & APRA CPS 234 Assurance"
      subtitle="Institutional governance, Australian APRA CPS 234 alignment, ISO/IEC 27001 ISMS certification roadmaps, and PCI-DSS audit readiness."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Security & Assurance", href: "/#services" },
        { label: "Security Compliance" },
      ]}
      leadParagraphs={[
        "Regulatory security compliance evaluates an institution's information security posture against mandated legislative and regulatory frameworks. For banks, building societies, and fintechs, compliance is an existential operational requirement.",
        "QODES Systems guides financial institutions in establishing and verifying robust compliance frameworks. We translate complex prudential requirements—such as Australian Prudential Regulation Authority (APRA) CPS 234 and ISO/IEC 27001—into operational engineering controls.",
        "Our specialized governance architects perform comprehensive gap assessments, design Information Security Management Systems (ISMS), and prepare your technology leadership for formal regulatory audits and independent board reviews."
      ]}
      imageUrl={imageUrl}
      imageAlt="Institutional Information Security Compliance Audit"
      badgeText="APRA CPS 234 · ISO 27001 · PCI-DSS"
      keyBenefits={[
        "Comprehensive APRA CPS 234 gap analysis and control implementation",
        "Full lifecycle roadmap towards ISO/IEC 27001 certification",
        "PCI-DSS v4.0 transactional cardholder data environment assurance",
        "Formal risk treatment plans tailored for board audit committees",
        "Third-party vendor and software supply-chain risk governance",
        "Pre-audit simulations to guarantee successful regulatory inspections"
      ]}
      pillars={[
        {
          title: "APRA CPS 234 Mastery",
          description: "Prudential standard alignment ensuring institutional assets are defended commensurate with the size and vulnerability of the entity.",
          icon: <Award className="w-5 h-5" />,
        },
        {
          title: "ISO/IEC 27001 ISMS",
          description: "Establishing end-to-end Information Security Management Systems encompassing policies, access control, and incident response.",
          icon: <ShieldCheck className="w-5 h-5" />,
        },
        {
          title: "Supply Chain Assurance",
          description: "Evaluating third-party cloud providers, SaaS vendors, and software suppliers to prevent secondary perimeter compromise.",
          icon: <FileCheck className="w-5 h-5" />,
        },
      ]}
      modules={[
        {
          title: "APRA CPS 234 Prudential Assurance",
          subtitle: "Australian Prudential Regulation Authority Mandate",
          items: [
            "Information security capabilities and role definition across executive leadership",
            "Information asset identification, classification, and criticality mapping",
            "Implementation of multi-layered controls commensurate with asset classification",
            "Testing of security control mechanisms by independent, certified testing specialists",
            "Timely notification protocols for material information security incidents to APRA",
          ],
        },
        {
          title: "ISO/IEC 27000 Family & ISMS Engineering",
          subtitle: "International Standards Organization",
          items: [
            "ISO 27001 Information Security Management System design and policy framework",
            "ISO 27002 Code of Practice for Information Security Controls gap analysis",
            "Internal audit execution and corrective action planning prior to formal certification",
            "Continuous surveillance audit preparation and executive dashboard telemetry",
          ],
        },
        {
          title: "Payment Card Industry (PCI-DSS v4.0) Readiness",
          subtitle: "Cardholder Data Security",
          items: [
            "Cardholder Data Environment (CDE) network segmentation and scope reduction",
            "Encryption of cardholder data across public and internal transit paths",
            "Vulnerability management program maintenance and regular external ASV scans",
            "Quarterly penetration testing of payment gateways and tokenization modules",
          ],
        },
      ]}
      ctaHeadline="Achieve Absolute Regulatory Compliance Assurance"
      ctaSubtext="Schedule a confidential consultation with our regulatory compliance directors to prepare for an upcoming APRA review or ISO 27001 audit."
    />
  );
}
