"use client";

import React from "react";
import ServiceDetailView from "@/components/global/service-detail-view";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { useContent } from "@/context/content-context";

export default function SoftwareTestingServicesPage() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_software_testing",
    "https://plus.unsplash.com/premium_photo-1661546394223-7d465b791444?q=80&w=1786&auto=format&fit=crop"
  );

  return (
    <ServiceDetailView
      category="Enterprise Consulting"
      title="Software Quality Engineering & Assurance"
      subtitle="Comprehensive financial systems verification, automated regression pipelines, performance stress testing, and independent validation."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Solutions", href: "/#services" },
        { label: "Software Testing Services" },
      ]}
      leadParagraphs={[
        "Today's increasingly sophisticated banking systems demand an equally sophisticated quality management and validation practice for targeted testing against critical regulatory and transactional requirements.",
        "QODES Quality Management and Testing solutions link automated tests directly to functional requirements and architecture artifacts. Using our specialized defect governance framework, our banking QA teams execute automated test suites across complex integration boundaries.",
        "Our enterprise test automation frameworks drastically reduce regression cycle durations, enabling earlier and more frequent testing to deliver fault-tolerant financial software that endures under peak load."
      ]}
      imageUrl={imageUrl}
      imageAlt="Software Testing and Quality Engineering Laboratory"
      badgeText="Quality Engineering · 100% Pre-Acceptance Audits"
      keyBenefits={[
        "Continuous automated regression testing across core banking pipelines",
        "High-throughput load and stress simulation for peak transaction volumes",
        "Rigorous User Acceptance Testing (UAT) and System Integration Testing (SIT)",
        "Automated defect tracking linked to requirements traceability matrices",
        "APRA CPS 234 and security test compliance integration",
        "Independent Verification & Validation (IV&V) for regulatory certification"
      ]}
      pillars={[
        {
          title: "Automated Regression",
          description: "CI/CD-integrated test suites simulating complex banking journeys and financial calculations to catch regressions instantly.",
          icon: <Zap className="w-5 h-5" />,
        },
        {
          title: "High-Load Stress Testing",
          description: "Synthetic load generation simulating millions of concurrent transactions to identify concurrency locks, latency spikes, and memory leaks.",
          icon: <ShieldCheck className="w-5 h-5" />,
        },
        {
          title: "Independent V&V",
          description: "Unbiased, objective third-party verification and validation providing executive stakeholders with verifiable software readiness reports.",
          icon: <CheckCircle2 className="w-5 h-5" />,
        },
      ]}
      modules={[
        {
          title: "Functional & Core Banking Testing Practice",
          subtitle: "End-to-End Functional Verification",
          items: [
            "Functional & Business Logic Testing for deposit, lending, and payment flows",
            "System Integration Testing (SIT) across Core Banking, CRM, and payment gateways",
            "User Acceptance Testing (UAT) facilitation and business scenario execution",
            "End-to-End Transaction Flow Verification across branch, web, and mobile channels",
            "Black Box and White Box component testing for core calculation engines",
          ],
        },
        {
          title: "Non-Functional & Performance Engineering",
          subtitle: "Stress & Scalability Assurance",
          items: [
            "Performance, Scalability, and Throughput Benchmarking",
            "Peak Volume Stress Testing and Disaster Recovery Failover Testing",
            "COB (Close of Business) batch processing run-time benchmark testing",
            "Compatibility testing across modern browsers, operating systems, and mobile devices",
          ],
        },
        {
          title: "Automated Quality Pipelines & Security Testing",
          subtitle: "Continuous Assurance",
          items: [
            "Automated GUI and API test suites built with industry standard frameworks",
            "Smoke, Sanity, and Nightly Automated Regression execution",
            "Security vulnerability scanning and input sanitation validation",
            "Comprehensive traceability matrix linking test cases to regulatory mandates",
          ],
        },
      ]}
      ctaHeadline="Elevate Your Financial Software Quality"
      ctaSubtext="Engage our QA directors and test automation architects to establish continuous testing pipelines or audit upcoming core release milestones."
    />
  );
}
