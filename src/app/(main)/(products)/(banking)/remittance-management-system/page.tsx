"use client";

import React from "react";
import ServiceDetailView from "@/components/global/service-detail-view";
import { Send, Globe, ShieldCheck, Zap } from "lucide-react";
import { useContent } from "@/context/content-context";

export default function RemittanceManagementSystemPage() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_remittance",
    "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop"
  );

  return (
    <ServiceDetailView
      category="Banking Products"
      title="International Remittance & Cross-Border Payments Hub"
      subtitle="Modernized payment orchestration engine facilitating real-time cross-border funds transfers, multi-currency FX settlement, and SWIFT ISO 20022 compliance."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/banking-products" },
        { label: "Remittance Management System" },
      ]}
      leadParagraphs={[
        "The QODES Systems Remittance Management System is an enterprise payment orchestration engine that manages the end-to-end lifecycle of incoming and outgoing domestic and international payments.",
        "Equipped with intelligent payment routing and native support for SWIFT gpi, ISO 20022 MX messaging, and real-time payment rails, our solution connects correspondent banking partners and money transfer operators (MTOs) effortlessly.",
        "Featuring integrated FX margin controls, automated sanctions screening (OFAC, DFAT), and real-time AML monitoring, financial institutions can expand cross-border volume safely while cutting transaction settlement costs."
      ]}
      imageUrl={imageUrl}
      imageAlt="Enterprise Cross-Border Remittance and FX Management System"
      badgeText="Payment Orchestration · SWIFT ISO 20022 Aligned"
      keyBenefits={[
        "Sub-second intelligent payment routing across lowest-cost corridors",
        "Full support for SWIFT gpi end-to-end tracking and status tracking",
        "Real-time FX rate feeds with dynamic spread and margin configuration",
        "Automated sanctions and PEP screening on sender and beneficiary details",
        "Open APIs for seamless integration with mobile wallets and third-party MTOs",
        "Automated nostro/vostro account reconciliation and balance monitoring"
      ]}
      pillars={[
        {
          title: "Intelligent Payment Routing",
          description: "Dynamically select the optimal clearing route based on transaction urgency, destination country, counterparty fees, and liquidity limits.",
          icon: <Zap className="w-5 h-5" />,
        },
        {
          title: "Global FX Engine",
          description: "Real-time currency conversion with multi-tiered spreads, guaranteed rates with lock-in windows, and automated treasury hedging hooks.",
          icon: <Globe className="w-5 h-5" />,
        },
        {
          title: "Sanctions & Compliance Filter",
          description: "Real-time fuzzy-logic screening against global watchlists (UN, OFAC, AUSTRAC, EU) preventing illegal money movement before release.",
          icon: <ShieldCheck className="w-5 h-5" />,
        },
      ]}
      modules={[
        {
          title: "Payment Processing & Settlement Engines",
          subtitle: "Orchestration Capabilities",
          items: [
            "Outward Remittance: Automated debit from customer account, FX conversion, and MT103 / pacs.008 generation",
            "Inward Remittance: Automated parsing of incoming SWIFT messages and instant credit to beneficiary account",
            "Cash Pickup & Agency Network integrations for cash-to-account and account-to-cash corridors",
            "Multi-channel initiation from Mobile App, Internet Banking, and Branch Teller counters",
          ],
        },
        {
          title: "Regulatory Screening & Financial Crime Prevention",
          subtitle: "AUSTRAC & International Compliance",
          items: [
            "Mandatory International Funds Transfer Instruction (IFTI) report generation for AUSTRAC",
            "Automated suspicious transaction reporting (SMR) based on behavioral anomalies and velocity triggers",
            "Cryptographic tamper-evident audit logs of every routing decision and operator override",
          ],
        },
      ]}
      ctaHeadline="Modernize Your Cross-Border Remittance Operations"
      ctaSubtext="Connect with our payments architecture team to explore how QODES Remittance Management System accelerates cross-border clearing."
    />
  );
}
