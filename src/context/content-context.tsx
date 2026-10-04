"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { getDefaultContentMap } from "@/lib/cms-types";

interface ContentContextType {
  content: Record<string, string>;
  getContent: (key: string, fallback?: string) => string;
  loading: boolean;
  refresh: () => Promise<void>;
}

const defaultMap = getDefaultContentMap();

const ContentContext = createContext<ContentContextType>({
  content: defaultMap,
  getContent: (key: string, fallback?: string) => defaultMap[key] || fallback || "",
  loading: false,
  refresh: async () => {},
});

export const ContentProvider = ({ children }: { children: React.ReactNode }) => {
  const [content, setContent] = useState<Record<string, string>>(defaultMap);
  const loading = false;

  const fetchContent = async () => {
    try {
      const res = await fetch("/api/admin/content");
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.content) {
          setContent((prev) => ({ ...prev, ...data.content }));
        }
      }
    } catch {
      // Quietly use cached / defaults if offline
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const getContent = (key: string, fallback?: string): string => {
    if (content[key] !== undefined && content[key] !== "") {
      return content[key];
    }
    return defaultMap[key] || fallback || "";
  };

  return (
    <ContentContext.Provider value={{ content, getContent, loading, refresh: fetchContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => useContext(ContentContext);
