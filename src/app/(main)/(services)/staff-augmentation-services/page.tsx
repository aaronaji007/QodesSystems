"use client";

import React from "react";
import ServiceDetailView from "@/components/global/service-detail-view";
import { Users, ShieldCheck, Award } from "lucide-react";
import { useContent } from "@/context/content-context";

export default function StaffAugmentationServicesPage() {
  const { getContent } = useContent();

  const imageUrl = getContent(
    "img_staff_augmentation",
    "https://images.unsplash.com/photo-1574073763042-9dbe6ae03853?q=80&w=1887&auto=format&fit=crop"
  );

  return (
    <ServiceDetailView
      category="Enterprise Consulting"
      title="Specialized Core Banking Staff Augmentation"
      subtitle="Elite domain architects, SAP Banking consultants, Temenos specialists, and cybersecurity practitioners deployed on-demand to accelerate critical financial initiatives."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Solutions", href: "/#services" },
        { label: "Staff Augmentation" },
      ]}
      leadParagraphs={[
        "At QODES Systems, we offer specialized staff augmentation services to help financial institutions and technology providers bridge resource gaps and scale their delivery teams with verified, experienced banking technologists.",
        "Whether you are embarking on a complex core banking implementation, modernizing transactional workloads, or executing high-stakes cybersecurity remediation, our senior engineers integrate seamlessly into your teams.",
        "We provide flexible, scalable resource models—from principal Solution Architects and lead Developers to specialized QA test engineers and business domain analysts—ensuring momentum, institutional governance, and on-time project execution."
      ]}
      imageUrl={imageUrl}
      imageAlt="Specialized Core Banking Staff Augmentation Practice"
      badgeText="Elite Banking Talent · Immediate Deployment"
      keyBenefits={[
        "Pre-vetted professionals with minimum 7+ years core banking domain delivery",
        "Deep technical capabilities spanning SAP Banking, Temenos T24, and AI architectures",
        "Flexible contract, squad, and permanent placement models",
        "Rapid onboarding with zero ramp-up delay on banking fundamentals",
        "Security-cleared professionals adhering to APRA CPS 234 governance",
        "Dedicated account oversight by senior practice directors"
      ]}
      pillars={[
        {
          title: "Domain-Specific Mastery",
          description: "Engineers who understand ledger mechanics, interest accruals, SWIFT formatting, and APRA regulations out of the box.",
          icon: <Award className="w-5 h-5" />,
        },
        {
          title: "Immediate Squad Scaling",
          description: "Deploy individual subject matter experts or cohesive multi-disciplinary squads to meet aggressive delivery milestones.",
          icon: <Users className="w-5 h-5" />,
        },
        {
          title: "Governance & Vetting",
          description: "Strict background screening, technical code evaluations, and institutional security compliance vetting.",
          icon: <ShieldCheck className="w-5 h-5" />,
        },
      ]}
      modules={[
        {
          title: "Contract & Project-Based Staffing",
          subtitle: "Flexible Capability Scaling",
          items: [
            "On-demand deployment of Core Banking Architects, Developers, and Analysts",
            "Specialized expertise for system cutovers, release upgrades, and cloud migrations",
            "Flexible durations from short-term critical milestones to multi-year transformations",
            "Full alignment with your internal development methodologies (Agile, SAFe, Waterfall)",
          ],
        },
        {
          title: "Executive Search & Leadership Placement",
          subtitle: "Strategic Leadership",
          items: [
            "Executive search for Chief Technology Officers, Heads of Core Banking, and Chief Information Security Officers (CISOs)",
            "Discreet, confidential search backed by an extensive network of Australian banking leaders",
            "Comprehensive behavioral, technical, and regulatory governance assessments",
          ],
        },
        {
          title: "Permanent Technical Recruitment",
          subtitle: "Long-Term Capability Building",
          items: [
            "Recruiting permanent full-time banking engineering leads and domain specialists",
            "Thorough candidate technical evaluation and architecture design defense reviews",
            "Assisting institutions in building sustainable internal engineering competencies",
          ],
        },
        {
          title: "Payrolling & Compliance Management",
          subtitle: "Administrative Governance",
          items: [
            "End-to-end payroll administration and contractor compliance management",
            "Australian statutory tax, superannuation, and workers compensation administration",
            "Streamlined monthly invoicing with transparent reporting",
          ],
        },
      ]}
      ctaHeadline="Scale Your Engineering Capacity with Proven Banking Specialists"
      ctaSubtext="Speak with our talent practice directors to specify your required skill profiles, project timelines, and deployment dates."
    />
  );
}
