"use client";

import React from "react";
import ServiceDetailView from "@/components/global/service-detail-view";
import { Code2, Smartphone, Globe, ShieldCheck } from "lucide-react";
import { useContent } from "@/context/content-context";

export default function ApplicationDevelopmentPage() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_app_development",
    "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2070&auto=format&fit=crop"
  );

  return (
    <ServiceDetailView
      category="Enterprise Consulting"
      title="Financial Application & Cloud-Native Engineering"
      subtitle="Architecting resilient, secure, and high-throughput financial web, mobile, and microservice applications for modern institutions."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Solutions", href: "/#services" },
        { label: "Application Development" },
      ]}
      leadParagraphs={[
        "QODES Systems provides institutional clients with exceptional application engineering services designed to give financial institutions an enduring competitive advantage in digital client engagement.",
        "We build on contemporary cloud-native development frameworks, containerized microservices architectures, and modern CI/CD deployment automation. Our engineering methods adhere strictly to financial sector security standards and APRA CPS 234 guidelines.",
        "From enterprise customer portals and biometric-secured mobile banking apps to low-latency financial transaction routers, our engineering practice turns complex business requirements into elegant, scalable software."
      ]}
      imageUrl={imageUrl}
      imageAlt="Enterprise Application Development Practice"
      badgeText="Cloud-Native Engineering · Bank Grade"
      keyBenefits={[
        "Modern cloud-native architectures (AWS, Azure, Google Cloud)",
        "Zero-trust API security models with OAuth2, OIDC, and FAPI compliance",
        "High-performance native and cross-platform mobile banking applications",
        "Event-driven microservices designed for high transactional throughput",
        "Automated continuous integration and vulnerability scanning pipelines",
        "Australian APRA and privacy compliance alignment"
      ]}
      pillars={[
        {
          title: "Cloud-Native Scalability",
          description: "Microservice platforms engineered using Kubernetes, Docker, and serverless runtimes that scale effortlessly during market peaks.",
          icon: <Globe className="w-5 h-5" />,
        },
        {
          title: "Mobile Channel Mastery",
          description: "Biometric-authenticated iOS and Android banking applications delivering frictionless customer onboarding and secure card management.",
          icon: <Smartphone className="w-5 h-5" />,
        },
        {
          title: "Secure By Design",
          description: "Strict adherence to OWASP Top 10, cryptographic key storage, and end-to-end payload encryption throughout the SDLC.",
          icon: <ShieldCheck className="w-5 h-5" />,
        },
      ]}
      modules={[
        {
          title: "Custom Financial Application Engineering",
          subtitle: "Bespoke Enterprise Systems",
          items: [
            "Domain-Driven Design (DDD) for financial ledgers, clearing hubs, and payment routers",
            "Modern web applications built with Next.js, React, and high-security REST/GraphQL APIs",
            "Legacy application modernization and monolithic decomposition into microservices",
            "Event-driven architecture with Apache Kafka and RabbitMQ for distributed transaction processing",
          ],
        },
        {
          title: "Mobile Banking & Digital Customer Experience",
          subtitle: "Native iOS & Android Engineering",
          items: [
            "Secure mobile banking apps with biometric face/fingerprint authentication",
            "Real-time push notifications, NPP PayID transfers, and digital card management",
            "Secure local hardware enclave storage for authentication tokens and credentials",
            "Offline state handling and anti-tamper jailbreak/root detection",
          ],
        },
        {
          title: "Distributed Delivery & Global Delivery Centers",
          subtitle: "Co-Located & Offshore Squads",
          items: [
            "Blended onshore Australian architecture leadership with high-velocity global engineering centers",
            "Agile sprint cadences, transparent Jira/Git telemetry, and daily stakeholder standups",
            "Strict IP protection, ISO 27001 data governance, and secure isolated VPN environments",
          ],
        },
      ]}
      ctaHeadline="Build Your Next Digital Financial Product"
      ctaSubtext="Schedule an architecture scoping session with our lead software architects in Melbourne to discuss requirements, tech stack selection, and delivery roadmaps."
    />
  );
}
