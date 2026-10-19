import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.qodessystems.com";
  const routes = [
    "",
    "/about",
    "/contact",
    "/join-us",
    "/location",
    "/banking-products",
    "/qodes-core-banking-system",
    "/sap-core-banking",
    "/temenos-t24-core-banking",
    "/oracle-flexcube-core-banking",
    "/sap-services",
    "/penetration-testing",
    "/security-compliance",
    "/vulnerability-assessment",
    "/application-security-testing",
    "/source-code-review",
    "/ict-environment-audit",
    "/application-development",
    "/software-testing-services",
    "/staff-augmentation-services",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
