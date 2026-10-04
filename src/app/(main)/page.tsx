"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ScandiConcept from "./_concepts/scandi-concept";
import VitraConcept from "./_concepts/vitra-concept";
import BiennaleConcept from "./_concepts/biennale-concept";
import MonolithConcept from "./_concepts/monolith-concept";
import JournalConcept from "./_concepts/journal-concept";

function HomeContent() {
  const searchParams = useSearchParams();
  const concept = searchParams?.get("concept");

  // Default to Design #3 (ScandiConcept) while preserving route testing for other concepts if queried
  if (concept === "1" || concept === "vitra") return <VitraConcept />;
  if (concept === "2" || concept === "biennale") return <BiennaleConcept />;
  if (concept === "4" || concept === "monolith") return <MonolithConcept />;
  if (concept === "5" || concept === "journal") return <JournalConcept />;

  return <ScandiConcept />;
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <main className="min-h-screen w-full flex flex-col items-center justify-start bg-white">
        <HomeContent />
      </main>
    </Suspense>
  );
}
