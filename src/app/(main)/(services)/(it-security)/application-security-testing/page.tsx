"use client";

import React from "react";
import ServiceDetailView from "@/components/global/service-detail-view";
import { Shield, Smartphone, Globe, Lock } from "lucide-react";
import { useContent } from "@/context/content-context";

export default function ApplicationSecurityTestingPage() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_app_security",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  );

  return (
    <ServiceDetailView
      category="Cybersecurity & Assurance"
      title="Application Security Testing (AST & DAST)"
      subtitle="Comprehensive web, mobile, and API security testing protecting critical application layers against sophisticated attacks without impeding engineering velocity."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Security & Assurance", href: "/#services" },
        { label: "Application Security Testing" },
      ]}
      leadParagraphs={[
        "Modern web portals and mobile applications represent the primary external exposure point for financial institutions, making continuous application security testing a mandatory requirement.",
        "QODES Systems helps banks, credit unions, and fintechs minimize application-layer risk across web, mobile, and microservice APIs. We balance rigorous security verification with rapid developer feedback loops.",
        "Our unified testing methodology combines Dynamic Application Security Testing (DAST), Interactive Application Security Testing (IAST), and manual API penetration testing to discover real-world exploits before production release."
      ]}
      imageUrl={imageUrl}
      imageAlt="Application Security Testing and Defense Operations"
      badgeText="Application Security · OWASP ASVS Certified"
      keyBenefits={[
        "Eliminate web application vulnerabilities before customer release",
        "Deep coverage of OWASP Top 10 and API Security Top 10 risks",
        "Seamless DevSecOps pipeline integration with automated pull-request checks",
        "Mobile banking app tampering and reverse-engineering resistance",
        "Detailed developer-friendly remediation guides with reproduction payloads",
        "APRA CPS 234 and PCI-DSS application security verification"
      ]}
      pillars={[
        {
          title: "Dynamic Scanning (DAST)",
          description: "Black-box and grey-box testing simulating live authenticated attacks against running web applications to evaluate perimeter defense.",
          icon: <Globe className="w-5 h-5" />,
        },
        {
          title: "Mobile App Hardening",
          description: "Decompilation resistance, runtime application self-protection (RASP), and secure keystore storage auditing for iOS and Android.",
          icon: <Smartphone className="w-5 h-5" />,
        },
        {
          title: "DevSecOps Integration",
          description: "Embedding automated security policy gates directly into GitHub Actions, GitLab CI, and Azure DevOps pipelines.",
          icon: <Lock className="w-5 h-5" />,
        },
      ]}
      modules={[
        {
          title: "Application Security Testing Methodologies",
          subtitle: "Multi-Pronged Assurance",
          items: [
            "Dynamic Application Security Testing (DAST) for runtime vulnerability detection",
            "API Security Testing covering REST, GraphQL, SOAP, and gRPC endpoints",
            "Mobile Application Security Testing (MAST) aligned with OWASP MASVS",
            "Business Logic Testing covering money movement, authentication bypass, and rate limiting",
          ],
        },
        {
          title: "Continuous DevSecOps Pipeline Enablement",
          subtitle: "Developer Friction Reduction",
          items: [
            "Automated CI/CD security quality gates preventing vulnerable builds from reaching staging",
            "IDE plugins providing immediate feedback to engineers during code development",
            "Prioritized triage with automated filtering of environmental false positives",
            "Custom vulnerability telemetry dashboards for engineering leads and CISOs",
          ],
        },
      ]}
      ctaHeadline="Secure Your Digital Banking Channels"
      ctaSubtext="Speak with our Application Security specialists to integrate automated AST into your pipelines or audit your core client-facing web applications."
    />
  );
}
