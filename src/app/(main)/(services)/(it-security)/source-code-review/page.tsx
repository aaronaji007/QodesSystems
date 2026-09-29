"use client";

import React from "react";
import ServiceDetailView from "@/components/global/service-detail-view";
import { Code2, ShieldAlert, CheckCircle2 } from "lucide-react";
import { useContent } from "@/context/content-context";

export default function SourceCodeReviewPage() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_source_code_review",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  );

  return (
    <ServiceDetailView
      category="Cybersecurity & Assurance"
      title="Secure Source Code Security Review (SAST)"
      subtitle="In-depth manual and automated static application security analysis identifying architectural flaws, injection vulnerabilities, and business logic bugs."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Security & Assurance", href: "/#services" },
        { label: "Source Code Review" },
      ]}
      leadParagraphs={[
        "QODES Systems provides customized secure source code reviews to identify and remediate security vulnerabilities at the earliest stages of the software development lifecycle (SDLC).",
        "The majority of critical vulnerabilities in web portals, mobile banking clients, and financial microservices originate during initial code authoring. A rigorous secure code review catches subtle design oversights, authorization bypasses, and state-machine flaws that automated vulnerability scanners cannot perceive.",
        "Our elite code review team combines sophisticated Static Application Security Testing (SAST) with deep line-by-line manual code analysis across Java, Kotlin, Swift, TypeScript, Go, C#, and Python banking codebases."
      ]}
      imageUrl={imageUrl}
      imageAlt="Secure Source Code Review and Static Analysis"
      badgeText="Secure SDLC · Manual & Automated SAST"
      keyBenefits={[
        "Catch critical flaws before code is compiled or deployed to production",
        "Uncover complex business logic bypasses invisible to black-box scanners",
        "Verify cryptographic implementations, secret handling, and entropy",
        "Actionable code-level diffs and refactoring recommendations",
        "Direct compliance evidence for APRA CPS 234 and PCI-DSS Requirement 6",
        "Developer security training and secure coding standard enablement"
      ]}
      pillars={[
        {
          title: "Deep Manual Inspection",
          description: "Senior security researchers review business-critical workflows, permission decorators, and financial calculation functions line by line.",
          icon: <Code2 className="w-5 h-5" />,
        },
        {
          title: "Business Logic Flaw Discovery",
          description: "Detecting race conditions, negative amount transfers, account tampering, and parameter pollution that automated tools miss.",
          icon: <ShieldAlert className="w-5 h-5" />,
        },
        {
          title: "Cryptographic Verification",
          description: "Auditing key generation, salt uniqueness, initialization vectors, secure random sources, and token expiration mechanics.",
          icon: <CheckCircle2 className="w-5 h-5" />,
        },
      ]}
      modules={[
        {
          title: "Code Review Methodology & Coverage",
          subtitle: "Our Audit Lifecycle",
          items: [
            "Architecture & Threat Modeling: Understanding data flow, trust boundaries, and asset stores",
            "Automated SAST Pipeline Execution: Broad-spectrum scanning using enterprise static analyzers",
            "Manual In-Depth Code Inspection: Focused verification of authentication, authorization, and cryptographic calls",
            "Third-Party Dependency & SCA Auditing: Checking open-source libraries for known vulnerabilities (CVEs)",
            "Remediation Guidance & Re-Review: Working with engineering squads to verify and close identified bugs",
          ],
        },
        {
          title: "Key Vulnerability Classes Audited",
          subtitle: "Comprehensive Defect Coverage",
          items: [
            "Injection Vulnerabilities (SQLi, NoSQLi, Command Injection, LDAP Injection)",
            "Broken Object Level & Function Level Authorization (BOLA / BFLA)",
            "Insecure Cryptographic Storage and Hardcoded Secrets / API Tokens",
            "Concurrency Flaws, Time-of-Check to Time-of-Use (TOCTOU) Race Conditions",
            "Cross-Site Scripting (XSS), CSRF, and Server-Side Request Forgery (SSRF)",
          ],
        },
      ]}
      ctaHeadline="Fortify Your Software at the Source Code Level"
      ctaSubtext="Connect with our principal application security reviewers to scope a source code audit or integrate automated SAST into your release gates."
    />
  );
}
