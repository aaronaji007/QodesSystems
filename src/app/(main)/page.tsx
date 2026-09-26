import GetStartedComponent from "./_components/get-started";
import ServiceList from "./_components/service-list";
import ComplianceSection from "./_components/compliance-section";
import AdvisoryCta from "./_components/advisory-cta";

export default function Home() {
  return (
    <div className="min-h-fit w-full flex flex-col items-center justify-center">
      <GetStartedComponent />
      <ServiceList />
      <ComplianceSection />
      <AdvisoryCta />
    </div>
  );
}
