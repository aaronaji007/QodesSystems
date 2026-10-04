"use client";

import React from "react";
import ServiceDetailView from "@/components/global/service-detail-view";
import { Smartphone, ShieldCheck, Zap, Bell } from "lucide-react";
import { useContent } from "@/context/content-context";

export default function MobileBankingSystemPage() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_mobile_banking",
    "https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=2070&auto=format&fit=crop"
  );

  return (
    <ServiceDetailView
      category="Banking Products"
      title="Next-Generation Mobile Banking Suite"
      subtitle="Native iOS and Android mobile banking applications engineered for frictionless digital account management, biometric authorization, and instant NPP payments."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/banking-products" },
        { label: "Mobile Banking" },
      ]}
      leadParagraphs={[
        "The QODES Mobile Banking Suite delivers institutional-grade iOS and Android native banking applications that combine consumer-grade elegance with military-grade financial security.",
        "Our mobile clients provide customers with instant access to their financial lives: account overview, real-time PayID and BPAY fund transfers, dynamic card management, instant loan advances, and personal financial management (PFM) insights.",
        "Built with secure enclave biometric authentication, jailbreak/root tamper detection, and end-to-end payload encryption, our mobile platform gives institutions complete confidence in mobile channel security."
      ]}
      imageUrl={imageUrl}
      imageAlt="Next-Generation Mobile Banking Application Suite"
      badgeText="Native iOS & Android · Biometric Secured"
      keyBenefits={[
        "Native iOS (Swift) & Android (Kotlin) performance with smooth 60fps UI",
        "Instant biometric sign-in via Apple Face ID, Touch ID, and Android Biometrics",
        "Real-time NPP PayID transfers with instant push confirmation",
        "Digital wallet integration supporting Apple Pay and Google Wallet",
        "Comprehensive card controls (freeze/unfreeze, contactless limits, travel alerts)",
        "Secure hardware enclave key generation and mutual TLS (mTLS) connectivity"
      ]}
      pillars={[
        {
          title: "Frictionless UX",
          description: "Human-centric interface design built to simplify money movement, split bills, and track spending habits effortlessly.",
          icon: <Smartphone className="w-5 h-5" />,
        },
        {
          title: "Hardware Enclave Security",
          description: "Cryptographic secrets and session tokens never leave the device's hardware security module, eliminating credential extraction.",
          icon: <ShieldCheck className="w-5 h-5" />,
        },
        {
          title: "Real-Time Push Telemetry",
          description: "Instant transaction alerts, low-balance warnings, and out-of-band authorization prompts delivered via APNs and FCM.",
          icon: <Bell className="w-5 h-5" />,
        },
      ]}
      modules={[
        {
          title: "Core Mobile Banking Features",
          subtitle: "Everyday Banking Capabilities",
          items: [
            "Real-time account balances, transaction categorization, and e-statement viewing",
            "Instant payments to PayID, BSB/Account, BPAY billers, and international SWIFT transfers",
            "Card Management Suite: Set card PIN, block/unblock lost cards, disable online or overseas spend",
            "Direct in-app customer support chat and secure document upload for KYC verification",
          ],
        },
        {
          title: "Security & Device Integrity Engineering",
          subtitle: "Zero-Trust Mobile Architecture",
          items: [
            "Runtime Application Self-Protection (RASP) with automated detection of debugger hooks",
            "Rooting, jailbreak, and emulator detection with immediate session shutdown",
            "Dynamic certificate pinning and AES-256 payload obfuscation",
            "Automated screen capture masking on iOS app switcher and Android task manager",
          ],
        },
      ]}
      ctaHeadline="Deploy a World-Class Mobile Banking Client"
      ctaSubtext="Schedule a live demo of the QODES Mobile Banking application on iOS and Android test devices with our mobile solutions architects."
    />
  );
}
