"use client";

import React from "react";
import ServiceDetailView from "@/components/global/service-detail-view";
import { Server, ShieldCheck, FileCheck } from "lucide-react";
import { useContent } from "@/context/content-context";

export default function ICTEnvironmentAuditPage() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_ict_audit",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
  );

  return (
    <ServiceDetailView
      category="Cybersecurity & Assurance"
      title="ICT Environment & Infrastructure Architecture Audit"
      subtitle="Completely objective enterprise technology infrastructure audits, physical and cloud perimeter inspections, disaster recovery resilience testing, and traffic-light risk reporting."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Security & Assurance", href: "/#services" },
        { label: "ICT Environment Audit" },
      ]}
      leadParagraphs={[
        "At QODES Systems, we deliver comprehensive, completely objective Information and Communications Technology (ICT) Environment Audits designed to give executive leadership complete clarity over their enterprise technology assets.",
        "Our certified infrastructure auditors and systems engineers systematically inspect all core components of your environment—spanning data centers, hybrid-cloud networks, identity directories, core banking connectivity rails, and backup sites.",
        "We identify hidden operational risks, single points of failure (SPOFs), and configuration drift before they manifest as catastrophic system outages, data loss, or regulatory compliance breaches."
      ]}
      imageUrl={imageUrl}
      imageAlt="ICT Enterprise Infrastructure Audit Operations"
      badgeText="Objective ICT Audits · Australian Banking Standards"
      keyBenefits={[
        "Eliminate catastrophic single points of failure across infrastructure",
        "Executive Traffic-Light report format highlighting urgent priorities",
        "Verify Disaster Recovery (DR) and Business Continuity (BCP) readiness",
        "Benchmark hardware lifecycle, virtualization, and licensing efficiency",
        "APRA CPS 232 and CPS 234 operational resilience alignment",
        "Actionable, budget-aligned technology remediation roadmaps"
      ]}
      pillars={[
        {
          title: "Objective Inspection",
          description: "Unbiased, third-party assessment of on-premises hardware, multi-cloud topologies, hypervisors, and storage networks.",
          icon: <Server className="w-5 h-5" />,
        },
        {
          title: "Resilience & Redundancy",
          description: "Auditing active-active clustering, database replication lag, automated failover triggers, and multi-region recovery capabilities.",
          icon: <ShieldCheck className="w-5 h-5" />,
        },
        {
          title: "Prudential Governance",
          description: "Direct alignment with Australian APRA standards for operational risk management and business continuity assurance.",
          icon: <FileCheck className="w-5 h-5" />,
        },
      ]}
      modules={[
        {
          title: "Core Areas of ICT Environmental Scope",
          subtitle: "Comprehensive Asset Review",
          items: [
            "Data Center & Cloud Infrastructure (Compute, Storage, Hypervisors, Backup Systems)",
            "Network Architecture (Core routing, BGP, SD-WAN, firewall rule-base hygiene)",
            "Directory Services & IAM (Active Directory forest health, MFA, privileged access)",
            "Disaster Recovery (DR) and Business Continuity Planning (BCP) live testing verification",
            "Hardware lifecycle, warranty status, end-of-support (EOS) risk assessment",
          ],
        },
        {
          title: "Reporting & Strategic Roadmapping",
          subtitle: "Executive & Engineering Deliverables",
          items: [
            "Board-Level 'Traffic Light' Executive Summary (Red/Amber/Green risk matrix)",
            "Detailed technical audit finding register with priority classification",
            "Root-cause analysis for legacy configuration debt and performance bottlenecks",
            "12-36 Month technology modernization and budget-forecast roadmap",
          ],
        },
      ]}
      ctaHeadline="Audit Your Infrastructure Resilience"
      ctaSubtext="Engage our senior infrastructure and systems auditors to conduct an objective review of your ICT environment."
    />
  );
}
