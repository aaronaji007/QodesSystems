"use client";

import React from "react";
import ServiceDetailView from "@/components/global/service-detail-view";
import { ShieldAlert, Crosshair, Lock } from "lucide-react";
import { useContent } from "@/context/content-context";

export default function PenetrationTestingPage() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_penetration_testing",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
  );

  return (
    <ServiceDetailView
      category="Cybersecurity & Assurance"
      title="Penetration Testing & Red Teaming Practice"
      subtitle="Adversarial attack simulation, banking perimeter penetration testing, credential escalation audits, and APRA CPS 234 threat defense assurance."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Security & Assurance", href: "/#services" },
        { label: "Penetration Testing" },
      ]}
      leadParagraphs={[
        "QODES Systems delivers specialized institutional penetration testing (pen-testing) to evaluate the security resilience of IT infrastructure, core banking systems, and digital channels by safely simulating real-world cyber adversary attacks.",
        "These vulnerabilities often hide in operating system configurations, unpatched microservices, API authorization flaws, or risky end-user credential behaviors. Our assessments rigorously validate the defensive efficacy of your firewalls, WAFs, and detection telemetry.",
        "Our certified red teamers systematically probe servers, cloud endpoints, banking APIs, internal workstations, and wireless infrastructure. Upon identifying an exploit path, we test lateral movement and privilege escalation to measure true exposure before malicious actors can capitalize."
      ]}
      imageUrl={imageUrl}
      imageAlt="Cybersecurity Red Teaming and Penetration Testing Lab"
      badgeText="APRA CPS 234 Aligned · Offensive Security"
      keyBenefits={[
        "Intelligently discover and prioritize high-risk vulnerabilities before threat actors",
        "Prevent costly core banking outages, ransomware pauses, and regulatory breach fines",
        "Preserve institutional brand trust, customer loyalty, and board assurance",
        "Comprehensive executive summary reports paired with technical remediation guides",
        "Direct validation of APRA CPS 234 information security controls",
        "Post-remediation re-testing to certify vulnerability closure"
      ]}
      pillars={[
        {
          title: "Adversarial Simulation",
          description: "Mimicking sophisticated cybercriminal and nation-state Tactics, Techniques, and Procedures (TTPs) aligned with the MITRE ATT&CK framework.",
          icon: <Crosshair className="w-5 h-5" />,
        },
        {
          title: "Privilege Escalation Audits",
          description: "Testing lateral movement within segmented banking networks to verify zero-trust enforcement between branch networks and core ledgers.",
          icon: <Lock className="w-5 h-5" />,
        },
        {
          title: "Actionable Defense Telemetry",
          description: "Detailed step-by-step reproduction scripts, risk scoring (CVSS v3.1), and prescriptive patch guidance for engineering teams.",
          icon: <ShieldAlert className="w-5 h-5" />,
        },
      ]}
      modules={[
        {
          title: "Penetration Testing Scopes & Methodology",
          subtitle: "Institutional Security Scopes",
          items: [
            "External Network & Cloud Perimeter Penetration Testing",
            "Internal Banking Network & Active Directory Privilege Escalation",
            "Web & Mobile Banking Application Pen-Testing (OWASP ASVS Level 3)",
            "Financial API & Payment Gateway Security Audits",
            "Social Engineering & Red Team Physical Security Assessments",
          ],
        },
        {
          title: "When Institutional Pen-Tests Should Be Triggered",
          subtitle: "Recommended Cadence & Change Triggers",
          items: [
            "Mandatory annual or bi-annual scheduled assessments under APRA CPS 234 mandates",
            "Whenever new banking infrastructure, payment rails, or cloud clusters are provisioned",
            "Before launching major version upgrades to Core Banking, CRM, or digital apps",
            "Following significant infrastructure modifications or office expansions",
            "Post-merger or after major acquisitions to evaluate integrated technology risk",
          ],
        },
        {
          title: "Remediation Governance & Certification",
          subtitle: "Audit Proofing & Board Telemetry",
          items: [
            "C-Suite and Board-level Executive Risk Briefing with clear business impact scoring",
            "Technical engineering debriefs with vulnerability reproduction walk-throughs",
            "Follow-up verification testing to confirm 100% effective remediation of critical flaws",
            "Formal Attestation Letter of Security Testing for regulators and insurance underwriters",
          ],
        },
      ]}
      ctaHeadline="Audit Your Banking Perimeter Against Advanced Threats"
      ctaSubtext="Engage our certified cybersecurity principals (OSCP, CREST, CISSP) for a confidential threat scoping discussion."
    />
  );
}
