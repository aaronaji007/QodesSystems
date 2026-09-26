import Image from "next/image";
import React from "react";

const ITSecurityAssessmentPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-0">
      <div className="w-full bg-secondary flex items-center justify-start py-4 px-12">
        <p className="text-start capitalize text-2xl text-white">
          IT security assessment
        </p>
      </div>
      <div className="w-[90%] h-full flex flex-col lg:flex-row items-stretch justify-center gap-6">
        <Image
          src={
            "https://qodestechnologies.com/wp-content/uploads/2020/05/security1.jpg"
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
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <h2 className="uppercase text-secondary font-bold">
              WHEN DID YOU LAST CHECK THE SECURITY OF YOUR SYSTEMS?
            </h2>
            <p className="text-wrap text-black text-[17px] leading-6">
              Are you concerned about your business resilience in light of the
              many high profile cyber attacks? Perhaps your organisation has
              never undergone a cyber security assessment?
            </p>
          </div>
          <p className="text-wrap text-black text-[17px] leading-6">
            At <span className="text-secondary"> QODES Systems </span> Cyber
            Security Assessment is a comprehensive, deep dive into your people,
            processes and technology.
          </p>
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <h2 className="uppercase text-secondary font-bold">
              PROTECT YOUR ORGANIZATION WITH AN INFORMATION SECURITY ASSESSMENT
            </h2>
            <p className="text-wrap text-black text-[17px] leading-6">
              As the threats to IT security continue to evolve, it takes a
              sophisticated information security assessment to understand how
              they may penetrate your organization’s defenses and what you can
              do to stop them. By regularly performing a comprehensive IT
              security audit and information security assessment, you can gain
              the insight you need to put the right strategies, technologies,
              policies and procedures in place to ensure optimal protection.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[90%] flex flex-col items-start justify-center gap-4 pt-2 pb-4">
        <p className="text-base text-wrap text-black leading-6">
          Performing an information security assessment requires experts with
          broad knowledge and deep expertise in the latest threats and security
          measures to combat them. When seeking a partner that can manage your
          information security assessment and help to implement the
          recommendations that follow, consider the extraordinary expertise and
          experience of the security professionals from{" "}
          <span className="text-secondary"> QODES Systems </span> .
        </p>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <h2 className="uppercase text-secondary font-bold">
            OUR INFORMATION SECURITY ASSESSMENT SERVICES
          </h2>
          <p className="text-wrap text-black text-[17px] leading-6">
            An information security assessment with{" "}
            <span className="text-secondary"> QODES Systems </span> will enable
            you to:
          </p>
        </div>
        <ol className="text-base leading-7 list-disc pl-4">
          <li>
            Address gaps, manage risk mitigation and allocate resources to
            better protect your organization.
          </li>
          <li>
            Evaluate your current program and develop a roadmap that allows your
            security initiatives to mature.
          </li>
          <li>
            Bring your security strategies into alignment with your business
            goals.
          </li>
          <li>
            Determine the effectiveness of your current efforts and controls and
            recommend improvements.
          </li>
          <li>
            Reduce the costs and improve the effectiveness of your efforts at
            governance, risk and compliance.
          </li>
          <li>
            Identify vulnerabilities and weaknesses across all types of devices.
          </li>
          <li>
            Provide evidence to support budget requests for security programs or
            investments.
          </li>
          <li>
            Evaluate the combination of system flaws and human factors to
            identify and quantify risk.
          </li>
          <li>Develop effective controls and solutions for security flaws.</li>
          <li>Use threat modelling to identify high-risk vulnerabilities.F</li>
        </ol>
      </div>
    </div>
  );
};

export default ITSecurityAssessmentPage;
