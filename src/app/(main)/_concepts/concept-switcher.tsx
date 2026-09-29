"use client";

import React, { useState } from "react";
import { ChevronUp, ChevronDown, Check } from "lucide-react";

export interface ConceptInfo {
  id: string;
  number: number;
  name: string;
  tagline: string;
  aesthetic: string;
  palette: string;
}

export const CONCEPTS: ConceptInfo[] = [
  {
    id: "vitra",
    number: 1,
    name: "The Vitra Lookbook",
    tagline: "Warm Minimalist Furniture Monograph",
    aesthetic: "Cream stone paper, asymmetric catalogue plates, tactile physical lookbook feel.",
    palette: "#FAF9F5 & Warm Charcoal"
  },
  {
    id: "biennale",
    number: 2,
    name: "Architecture Biennale",
    tagline: "Venice Biennale & Museum Pavilion",
    aesthetic: "Monumental room indexing, curator statements, dark gallery spatial prestige.",
    palette: "#121418 & Cerulean"
  },
  {
    id: "scandi",
    number: 3,
    name: "Scandinavian Studio",
    tagline: "HAY / Muuto / Norm Architects",
    aesthetic: "Airy Nordic warmth, human-centered clarity, soft curves, interactive dimensioning.",
    palette: "#F7F6F2 & Soft Sand"
  },
  {
    id: "monolith",
    number: 4,
    name: "Titanium Monolith",
    tagline: "High-Fintech Atelier & Dieter Rams",
    aesthetic: "Heavyweight brushed titanium, cryptographic switchboard, precision hardware gauges.",
    palette: "#0D0F14 & Ice Blue"
  },
  {
    id: "journal",
    number: 5,
    name: "Modernist Journal",
    tagline: "Pentagram / Monocle Broadsheet",
    aesthetic: "Stark black & white editorial broadsheet, newsprint masthead, tabbed dossier reader.",
    palette: "#FFFFFF & Deep Black"
  }
];

interface Props {
  activeConcept: string;
  onSelectConcept: (id: string) => void;
}

export const ConceptSwitcher: React.FC<Props> = ({ activeConcept, onSelectConcept }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const current = CONCEPTS.find(c => c.id === activeConcept) || CONCEPTS[0];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl font-sans">
      
      {/* Expanded Concept Tray */}
      {isExpanded && (
        <div className="mb-3 p-4 rounded-2xl bg-stone-950/95 backdrop-blur-xl border border-white/15 text-white shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2EA3DC] animate-ping" />
              <span className="text-xs uppercase tracking-widest font-semibold text-stone-300">
                Awwwards Showcase &bull; 5 Tailored Aesthetic Prototypes
              </span>
            </div>
            <span className="text-[11px] text-stone-400">Click to preview live</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
            {CONCEPTS.map((c) => {
              const isSelected = c.id === activeConcept;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    onSelectConcept(c.id);
                    setIsExpanded(false);
                  }}
                  className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#2EA3DC] border-[#2EA3DC] text-white shadow-lg shadow-[#2EA3DC]/30 scale-[1.02]"
                      : "bg-white/5 border-white/10 text-stone-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider opacity-75">
                        Concept 0{c.number}
                      </span>
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <div className="text-xs font-semibold leading-tight mb-1">
                      {c.name}
                    </div>
                  </div>
                  <div className="text-[9px] opacity-70 line-clamp-1 mt-1">
                    {c.tagline}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-white/10 text-[11px] text-stone-400 flex items-center justify-between">
            <span>Current: <strong className="text-white">{current.name}</strong> — {current.aesthetic}</span>
            <span className="text-stone-500">{current.palette}</span>
          </div>
        </div>
      )}

      {/* Main Bottom Capsule Dock */}
      <div className="p-2 sm:p-2.5 rounded-full bg-stone-950/90 backdrop-blur-xl border border-white/15 text-white shadow-2xl flex items-center justify-between gap-3">
        
        {/* Active Info */}
        <div 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-3 pl-3 sm:pl-4 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="w-7 h-7 rounded-full bg-[#2EA3DC] text-white font-bold text-xs flex items-center justify-center shadow-md">
            0{current.number}
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-semibold tracking-tight text-white flex items-center gap-2">
              {current.name}
              <span className="hidden sm:inline text-[10px] font-normal text-stone-400">({current.tagline})</span>
            </span>
            <span className="text-[10px] text-[#38BDF8] line-clamp-1 hidden sm:block">
              {current.aesthetic}
            </span>
          </div>
        </div>

        {/* Quick Numbers 1-5 */}
        <div className="flex items-center gap-1">
          {CONCEPTS.map((c) => (
            <button
              key={c.id}
              onClick={() => onSelectConcept(c.id)}
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs font-semibold transition-all ${
                c.id === activeConcept
                  ? "bg-white text-stone-950 shadow-md font-bold scale-105"
                  : "bg-white/10 text-stone-300 hover:bg-white/20 hover:text-white"
              }`}
              title={`${c.name} - ${c.tagline}`}
            >
              {c.number}
            </button>
          ))}
        </div>

        {/* Expand / Minimize Toggle */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-stone-300 hover:text-white text-xs transition-colors shrink-0"
        >
          <span className="hidden sm:inline text-[11px]">Compare 5</span>
          {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </button>

      </div>

    </div>
  );
};

export default ConceptSwitcher;
