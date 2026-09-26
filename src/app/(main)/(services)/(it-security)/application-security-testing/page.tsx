import Image from "next/image";
import React from "react";

const ApplicationSecurityTestingPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-0">
      <div className="w-full bg-secondary flex items-center justify-start py-4 px-12">
        <p className="text-start capitalize text-2xl text-white">
          Application Security Testing
        </p>
      </div>
      <div className="w-[90%] h-full flex flex-col lg:flex-row items-stretch justify-center gap-6">
        <Image
          src={
            "https://qodestechnologies.com/wp-content/uploads/2020/06/Application-security-e1591619053735.jpg"
          }
          alt="img"
          className="w-full lg:w-[45%] h-[350px] object-full"
          quality={100}
          unoptimized
          draggable={false}
          width={0}
          height={0}
        />
        <div className="flex-1 h-full flex flex-col items-start justify-center pt-4 gap-4">
          <p className="text-wrap text-black text-[17px] leading-6">
            Web applications have become the primary vector for attacks, making
            app security testing critical to protecting the enterprise. With
            superior app security testing technology, enterprises can find flaws
            and vulnerabilities in software and fix them before attackers can
            exploit them.
          </p>
          <p className="text-wrap text-black text-[17px] leading-6">
            While most enterprises acknowledge that testing is essential for app
            security, integrating app security testing into the software
            development lifecycle (SDLC) is no easy feat. Many testing solutions
            require a significant investment in hardware or software, as well as
            staff resources to maintain and upgrade them. Software development
            teams are frequently resistant to introducing app security testing
            technology into the development process, as many solutions are
            time-consuming and can make it harder to meet deadlines.
          </p>
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <h2 className="uppercase text-secondary font-bold">
              APP SECURITY TESTING FROM QODES TECHNOLOGIES
            </h2>
            <p className="text-wrap text-black text-[17px] leading-6">
              <span className="text-secondary"> QODES Systems </span> is a
              leading provider of solutions to secure the software that powers
              business and innovation. With comprehensive solutions for app
              security testing, we help the world’s largest enterprises minimize
              application-layer risk across web, mobile and third-party
              applications.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90%] flex flex-col items-start justify-center gap-4 pt-2 pb-4">
        <p className="text-wrap text-black text-[17px] leading-6">
          Our unified platform offers automated, cloud-based services that
          provide broad coverage through multiple testing methods, centralized
          policies and world-class expertise. Organizations in a wide range of
          industries rely on our app security testing technology to support
          security DevOps initiatives, to serve as OWASP testing tools, and to
          eradicate flaws in software from inception through production.
        </p>
        <p className="text-wrap text-black text-[17px] leading-6">
          As a cloud-based solution, our app security testing services require
          no capital investment in hardware or software and no ongoing costs for
          maintenance or upgrades. With Qodes Technologies, testing is fast and
          easy, enabling developers to integrate testing into every phase of the
          SDLC without slowing development timelines. And because results are
          returned with a Fix-First Analysis, your team will know exactly where
          to start in order to address the most serious threats to security.
        </p>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <h2 className="uppercase text-secondary">
            COMPREHENSIVE APP SECURITY TESTING SOLUTIONS
          </h2>
          <p className="text-wrap text-black text-[17px] leading-6">
            Our app security testing services include:
          </p>
        </div>
        <ol className="text-base leading-7 list-disc pl-4">
          <li>
            <span className="text-secondary"> Web Application Scanning - </span>{" "}
            A web application monitoring tool for identifying web applications –
            even the ones you don’t know about – and scanning thousands of sites
            in parallel to find and prioritize your biggest risks.
          </li>
          <li>
            <span className="text-secondary"> Static Analysis - </span> for
            scanning binaries and analyzing major frameworks and languages to
            quickly identify and fix application security flaws without
            requiring source code.
          </li>
          <li>
            <span className="text-secondary">
              {" "}
              Qodes Technologies Static Analysis IDE Scan -{" "}
            </span>{" "}
            for providing immediate feedback within your IDE to help developers
            spot security flaws as code is being written.
          </li>
          <li>
            <span className="text-secondary">
              {" "}
              Software Composition Analysis -{" "}
            </span>{" "}
            for inventorying and scanning open source components to identify
            vulnerabilities.
          </li>
          <li>
            <span className="text-secondary">
              {" "}
              Vendor Application Security Testing -{" "}
            </span>{" "}
            for evaluating the security of third-party applications without
            requiring access to source code.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ApplicationSecurityTestingPage;
