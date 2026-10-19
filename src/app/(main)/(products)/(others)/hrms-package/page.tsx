"use client";

import React from "react";
import ServiceDetailView from "@/components/global/service-detail-view";
import { Users, FileText, CheckCircle2, ShieldCheck } from "lucide-react";
import { useContent } from "@/context/content-context";

export default function HRMSPackagePage() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_hrms",
    "https://plus.unsplash.com/premium_photo-1714618828448-abf8732500c6?q=80&w=1800&auto=format&fit=crop"
  );

  return (
    <ServiceDetailView
      category="Banking Products"
      title="Bank-Grade HRMS & Enterprise Workforce Suite"
      subtitle="Comprehensive human resource management, automated payroll calculation, employee self-service, and compliance governance engineered for banking organizations."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/banking-products" },
        { label: "HRMS Package" },
      ]}
      leadParagraphs={[
        "The QODES Enterprise Human Resource Management System (HRMS) is a comprehensive, 100% web-enabled platform engineered to automate organizational workflows and human capital operations across financial enterprises.",
        "Equipped with an intuitive Employee Self-Service (ESS) portal, executive decision-support telemetry, and dynamic payroll calculation, our HRMS integrates seamlessly with core accounting systems to streamline overhead and boost institutional efficiency.",
        "Accessible securely across all corporate laptops, tablets, and smartphones with single sign-on (SSO), our HRMS enables banks to manage recruitment, performance reviews, timesheets, and statutory leave with effortless compliance."
      ]}
      imageUrl={imageUrl}
      imageAlt="Enterprise HRMS and Workforce Management Suite"
      badgeText="Enterprise HRMS · Payroll & Workforce Governance"
      keyBenefits={[
        "Automated payroll calculation with direct bank file export (ABA format)",
        "Intuitive Employee Self-Service (ESS) and Manager Self-Service (MSS) portals",
        "Australian Superannuation and statutory tax calculation (PAYG)",
        "Comprehensive talent acquisition, onboarding, and offboarding workflows",
        "Performance management with 360-degree KPI tracking and reviews",
        "Full role-based security access and cryptographic audit logging"
      ]}
      pillars={[
        {
          title: "Automated Banking Payroll",
          description: "Engineered to calculate complex shift differentials, overtime, bonuses, tax withholdings, and superannuation with zero error.",
          icon: <FileText className="w-5 h-5" />,
        },
        {
          title: "Employee Self-Service",
          description: "Empowers employees to apply for leave, view payslips, update personal details, and submit expense claims from mobile devices.",
          icon: <Users className="w-5 h-5" />,
        },
        {
          title: "Statutory Governance",
          description: "Strict alignment with Australian Fair Work regulations, modern awards, and secure record retention mandates.",
          icon: <ShieldCheck className="w-5 h-5" />,
        },
      ]}
      modules={[
        {
          title: "Core Human Resource Modules",
          subtitle: "Enterprise HR Capabilities",
          items: [
            "Employee Database & Lifecycle Management (Onboarding to Separation)",
            "Leave and Absence Management with configurable accrual policies",
            "Time & Attendance tracking with biometric device integration",
            "Performance appraisal, goal setting, and 360-degree review cycles",
            "Training, certifications, and compliance credential tracking",
          ],
        },
        {
          title: "Payroll & Compensation Processing",
          subtitle: "Financial Core Integration",
          items: [
            "Automated gross-to-net payroll engine with customized deduction rules",
            "Generation of Direct Entry (ABA) files for automated bank disbursement",
            "Automated Single Touch Payroll (STP Phase 2) reporting readiness",
            "Direct integration with General Ledger for payroll journal postings",
          ],
        },
      ]}
      ctaHeadline="Modernize Your Enterprise Workforce Management"
      ctaSubtext="Consult with our enterprise software team to see a functional demonstration of the QODES HRMS platform."
    />
  );
}
