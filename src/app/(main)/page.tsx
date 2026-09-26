import GetStartedComponent from "./_components/get-started";
import ServiceList from "./_components/service-list";

export default function Home() {
  return (
    <div className="min-h-fit w-full flex flex-col items-center justify-center">
      <GetStartedComponent />
      <ServiceList />
    </div>
  );
}
