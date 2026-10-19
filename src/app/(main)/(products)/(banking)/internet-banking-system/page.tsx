"use client";

import React from "react";
import ServiceDetailView from "@/components/global/service-detail-view";
import { Globe, ShieldCheck, Zap } from "lucide-react";
import { useContent } from "@/context/content-context";

export default function InternetBankingSystemPage() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_internet_banking",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop"
  );

  return (
    <ServiceDetailView
      category="Banking Products"
      title="Institutional Internet Banking Platform"
      subtitle="Omnichannel web-banking platform delivering real-time payments, multi-entity corporate treasury management, and hardened security for retail and business banking."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/banking-products" },
        { label: "Internet Banking Platform" },
      ]}
      leadParagraphs={[
        "The QODES Systems Internet Banking Platform empowers financial institutions to deliver secure, responsive, and intuitive online banking experiences for retail, SME, and commercial clients.",
        "Engineered with a micro-frontend architecture and backed by secure REST APIs, our platform enables account holders to conduct instantaneous domestic and cross-border fund transfers, schedule recurring payments, manage debit/credit cards, and access e-statements without visiting a physical branch.",
        "Built to institutional security standards, our platform features Adaptive Multi-Factor Authentication (MFA), FAPI-compliant security, and continuous session anomaly detection to eliminate account takeover risks."
      ]}
      imageUrl={imageUrl}
      imageAlt="Institutional Internet Banking Platform Web Interface"
      badgeText="Digital Channels · FAPI & MFA Secured"
      keyBenefits={[
        "Frictionless self-service onboarding and digital account opening",
        "Real-time NPP PayID, BPAY, and SWIFT cross-border transfers",
        "Multi-entity corporate treasury management with dual-approval workflows",
        "Instant term deposit creation and automated maturity configuration",
        "Adaptive multi-factor authentication with hardware token support",
        "Comprehensive white-label customization aligned with institutional branding"
      ]}
      pillars={[
        {
          title: "Real-Time Payments Hub",
          description: "Direct integration with Australian NPP, BPAY, and RTGS payment rails delivering instantaneous settlement and instant beneficiary validation.",
          icon: <Zap className="w-5 h-5" />,
        },
        {
          title: "Multi-Tier Corporate Approval",
          description: "Granular authorization matrices for corporate accounts supporting dual-authorization, maker-checker limits, and payroll batch releases.",
          icon: <Globe className="w-5 h-5" />,
        },
        {
          title: "Hardened Security Layer",
          description: "Out-of-band push authentication, cryptographic transaction signing, and automated session termination on threat detection.",
          icon: <ShieldCheck className="w-5 h-5" />,
        },
      ]}
      modules={[
        {
          title: "Retail Digital Banking Capabilities",
          subtitle: "Consumer Self-Service",
          items: [
            "Real-time account balance queries, mini-statements, and downloadable PDF/CSV statements",
            "Internal book transfers, third-party domestic transfers (NPP PayID, Osko, BPAY)",
            "Online fixed and term deposit opening with automated interest calculators",
            "Debit and credit card management (freeze, PIN change, transaction limit adjustment)",
            "Automated utility bill payments and scheduled recurring standing orders",
          ],
        },
        {
          title: "Commercial & Corporate Portal",
          subtitle: "Treasury & Enterprise Cash Management",
          items: [
            "Multi-account corporate dashboard with consolidated liquidity reporting",
            "Bulk payroll and supplier payment file upload (ABA format and ISO 20022 XML)",
            "Multi-signatory approval workflows with hierarchical authorization thresholds",
            "Trade finance, letters of credit (LC), and bank guarantee requests",
          ],
        },
      ]}
      ctaHeadline="Modernize Your Online Banking Experience"
      ctaSubtext="Request an interactive demonstration of the QODES Internet Banking Platform and discover our modular white-label delivery options."
    />
  );
}
