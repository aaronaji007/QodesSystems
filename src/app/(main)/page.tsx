"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import VitraConcept from "./_concepts/vitra-concept";
import BiennaleConcept from "./_concepts/biennale-concept";
import ScandiConcept from "./_concepts/scandi-concept";
import MonolithConcept from "./_concepts/monolith-concept";
import JournalConcept from "./_concepts/journal-concept";
import ConceptSwitcher, { CONCEPTS } from "./_concepts/concept-switcher";

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Map numbers "1".."5" or slugs "vitra", "biennale", "scandi", "monolith", "journal"
  const getInitialConcept = (): string => {
    const param = searchParams?.get("concept");
    if (!param) return "vitra";
    if (param === "1") return "vitra";
    if (param === "2") return "biennale";
    if (param === "3") return "scandi";
    if (param === "4") return "monolith";
    if (param === "5") return "journal";
    const found = CONCEPTS.find(c => c.id === param);
    return found ? found.id : "vitra";
  };

  const [activeConcept, setActiveConcept] = useState<string>("vitra");

  useEffect(() => {
    const init = getInitialConcept();
    setActiveConcept(init);
  }, [searchParams]);

  const handleSelectConcept = (id: string) => {
    setActiveConcept(id);
    const params = new URLSearchParams(window.location.search);
    params.set("concept", id);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start relative">
      {/* 5 Distinct Awwwards-Inspired Concepts */}
      {activeConcept === "vitra" && <VitraConcept />}
      {activeConcept === "biennale" && <BiennaleConcept />}
      {activeConcept === "scandi" && <ScandiConcept />}
      {activeConcept === "monolith" && <MonolithConcept />}
      {activeConcept === "journal" && <JournalConcept />}

      {/* Floating Concept Switcher Dock */}
      <ConceptSwitcher
        activeConcept={activeConcept}
        onSelectConcept={handleSelectConcept}
      />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF9F5]" />}>
      <HomeContent />
    </Suspense>
  );
}
