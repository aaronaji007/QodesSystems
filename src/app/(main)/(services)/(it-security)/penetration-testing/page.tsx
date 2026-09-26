import Image from "next/image";
import React from "react";

const PenetrationTestingPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-0">
      <div className="w-full bg-secondary flex items-center justify-start py-4 px-12">
        <p className="text-start capitalize text-2xl text-white">
          penetration testing
        </p>
      </div>
      <div className="w-[90%] h-full flex flex-col lg:flex-row items-stretch justify-center gap-6">
        <Image
          src={
            "https://qodestechnologies.com/wp-content/uploads/2020/06/Testing-e1591611509996.png"
          }
          alt="img"
          className="w-full lg:w-[45%] h-[300px] object-full"
          quality={100}
          unoptimized
          draggable={false}
          width={0}
          height={0}
        />
        <div className="flex-1 h-full flex flex-col items-start justify-center pt-4 gap-3">
          <p className="text-wrap text-black text-[17px] leading-6">
            <span className="text-secondary"> QODES Systems </span> offers
            penetration test or pen-test to evaluate the security of IT
            infrastructure by safely trying to exploit vulnerabilities in your
            organisation. These vulnerabilities may exist in operating systems,
            services and application flaws, improper configurations or risky
            end-user behavior. Such assessments are also useful in validating
            the efficiency of defensive mechanisms, as well as, end-user
            adherence to security policies.
          </p>
          <p className="text-wrap text-black text-[17px] leading-6">
            Penetration testing is typically performed using manual or automated
            technologies to systematically compromise servers, endpoints, web
            applications, wireless networks, network devices, mobile devices and
            other potential points of exposure. Once vulnerabilities have been
            successfully exploited on a particular system, testers may attempt
            to use the compromised system to launch subsequent exploits at other
            internal resources – specifically by trying to incrementally achieve
            higher levels of security clearance and deeper access to electronic
            assets and information via privilege escalation.
          </p>
        </div>
      </div>
      <div className="w-[90%] flex flex-col items-start justify-center gap-4 pt-2 pb-4">
        <p className="text-wrap text-black text-[17px] leading-6">
          Information about any security vulnerabilities successfully exploited
          through penetration testing is typically aggregated and presented to
          IT and network system managers to help those professionals make
          strategic conclusions and prioritize related remediation efforts. The
          fundamental purpose of penetration testing is to measure the
          feasibility of systems or end-user compromise and evaluate any related
          consequences such incidents may have on the involved resources or
          operations
        </p>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <h2 className="uppercase text-secondary font-bold">
            BENEFITS OF PENETRATION TESTING
          </h2>
          <p className="text-wrap text-black text-[17px] leading-6">
            Penetration testing offers many benefits, allowing your organisation
            to:
          </p>
        </div>
        <ol className="text-base leading-7 list-disc pl-4">
          <li>Intelligently manage vulnerabilities</li>
          <li>Avoid the cost of network downtime</li>
          <li>Meet regulatory requirements and avoid fines</li>
          <li>Preserve corporate image and customer loyalty</li>
        </ol>
        <p className="text-wrap text-black text-[17px] leading-6">
          As you can see, obtaining a penetration-testing software or hiring a
          pen-tester to test your network is a proactive effort of protecting
          your network and business from risks before attacks or security
          breaches occur.
        </p>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <h2 className="uppercase text-secondary font-bold">
            HOW OFTEN YOU SHOULD PERFORM PEN-TESTS
          </h2>
          <p className="text-wrap text-black text-[17px] leading-6">
            <span className="text-secondary"> QODES Systems </span> advise to
            perform penetration testing on a regular basis to ensure more
            consistent IT and network security management. This will reveal how
            newly discovered threats or emerging vulnerabilities may potentially
            be assailed by attackers. In addition to regularly scheduled
            analysis and assessments required by regulatory mandates, tests
            should also be run whenever:
          </p>
        </div>
        <ol className="text-base leading-7 list-disc pl-4">
          <li>New network infrastructure or applications are added</li>
          <li>
            Significant upgrades or modifications are applied to infrastructure
            or applications
          </li>
          <li>New office locations are established</li>
          <li>Security patches are applied</li>
          <li>End user policies are modified</li>
        </ol>
      </div>
    </div>
  );
};

export default PenetrationTestingPage;
