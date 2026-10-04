"use client";

import React from "react";
import ServiceDetailView from "@/components/global/service-detail-view";
import { CreditCard, ShieldCheck, Zap, FileCheck } from "lucide-react";
import { useContent } from "@/context/content-context";

export default function LoanSoftwarePage() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_loan_software",
    "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=2070&auto=format&fit=crop"
  );

  return (
    <ServiceDetailView
      category="Banking Products"
      title="Loan Origination (LOS) & Management System (LMS)"
      subtitle="End-to-end automated credit lifecycle platform: automated underwriting, risk scorecard assessment, multi-tier pricing, collateral management, and loan servicing."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/banking-products" },
        { label: "Loan Software" },
      ]}
      leadParagraphs={[
        "The QODES Specialized Lending Platform unifies two mission-critical financial engines: the Loan Origination System (LOS) and the Loan Management System (LMS), covering the complete credit lifecycle from customer acquisition and automated credit scoring to loan disbursement and repayment recovery.",
        "Built for retail banks, mortgage originators, commercial credit unions, and non-banking financial entities, our platform automates KYC collection, document verification, comprehensive credit bureau inquiries, and policy-compliant decisioning.",
        "By replacing slow manual underwriting spreadsheets with automated business rule engines, financial institutions accelerate approval turnarounds from weeks to minutes while enforcing strict credit policy governance."
      ]}
      imageUrl={imageUrl}
      imageAlt="Enterprise Loan Origination and Servicing Platform"
      badgeText="Credit Lifecycle Engine · Automated LOS & LMS"
      keyBenefits={[
        "Automated credit scorecard calculation and credit bureau integration (Equifax, Experian)",
        "Configurable workflow pipelines for mortgages, SME loans, auto, and personal credit",
        "Dynamic repayment schedules (Equal Principal, Amortizing EMI, Bullet, Balloon)",
        "Comprehensive collateral tracking with automatic loan-to-value (LTV) limits",
        "Real-time delinquency tracking, automated grace period notices, and restructuring",
        "Full compliance with Australian APRA lending and responsible lending laws"
      ]}
      pillars={[
        {
          title: "Automated Underwriting (LOS)",
          description: "Rule-based credit decisioning engines calculating debt-service ratios (DSR), net disposable income (NDI), and fraud indicators instantly.",
          icon: <Zap className="w-5 h-5" />,
        },
        {
          title: "Lifecycle Servicing (LMS)",
          description: "Continuous interest accrual calculation, penalty handling, early repayment fee modeling, and automated ledger settlement.",
          icon: <CreditCard className="w-5 h-5" />,
        },
        {
          title: "Collateral & Legal Governance",
          description: "Tracking asset documentation, mortgage registrations, title deed escrow, and automated legal notices upon payment default.",
          icon: <ShieldCheck className="w-5 h-5" />,
        },
      ]}
      modules={[
        {
          title: "Loan Origination System (LOS) Functional Flow",
          subtitle: "Customer Intake & Underwriting",
          items: [
            "Digital application intake with automated OCR document parsing (pay slips, bank statements)",
            "Automated credit bureau API queries and internal customer risk scoring",
            "Configurable policy approval matrices with automated conditional approvals",
            "Digital contract generation, electronic document signing, and direct core ledger disbursement",
          ],
        },
        {
          title: "Loan Management System (LMS) Servicing",
          subtitle: "Post-Disbursement Administration",
          items: [
            "Automated direct debit repayment collection via Australian BECS / NPP rails",
            "Flexible restructuring: interest-only periods, tenure extensions, and rate renegotiations",
            "Automated payment allocation rules (fees first, interest, then principal)",
            "Non-performing loan (NPL) classification and automated collections management workflows",
          ],
        },
      ]}
      ctaHeadline="Automate Your Institution's Credit Operations"
      ctaSubtext="Consult with our lending solutions architects to see a live demonstration of the QODES LOS and LMS platform."
    />
  );
}
