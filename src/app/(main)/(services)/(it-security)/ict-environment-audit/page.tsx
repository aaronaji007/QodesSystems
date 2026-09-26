import Image from "next/image";
import React from "react";

const ICTEnvironmentAuditPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-0">
      <div className="w-full bg-secondary flex items-center justify-start py-4 px-12">
        <p className="text-start capitalize text-2xl text-white">
          ICT Environment Audit
        </p>
      </div>
      <div className="w-[90%] h-full flex flex-col lg:flex-row items-stretch justify-center gap-6">
        <Image
          src={
            "https://qodestechnologies.com/wp-content/uploads/2020/06/ICT-Auditjpg-e1591623665812.jpg"
          }
          alt="img"
          className="w-full lg:w-[45%] h-[300px] object-full"
          quality={100}
          unoptimized
          draggable={false}
          width={0}
          height={0}
        />
        <div className="flex-1 h-full flex flex-col items-start justify-center pt-4 gap-4">
          <p className="text-wrap text-black text-[17px] leading-6">
            At <span className="text-secondary"> QODES Systems </span>, we
            understand that when it comes to IT support, businesses have
            different needs and we are able to offer a range of support services
            to fit the needs of any organisation. Our Premium ICT Audit is a
            completely objective audit which involves gaining a general
            understanding of your organisations ICT environment(s) and various
            assets. A Trident audit will ensure that risks are identified and
            remediated prior to any costly critical system outages and/or loss
            of data enabling your organisation to reap the full benefits of your
            technological investment. We can review all key components of your
            environment associated with security and privacy.
          </p>
          <p className="text-wrap text-black text-[17px] leading-6">
            This review will:
          </p>
          <ol className="text-base leading-7 list-disc pl-4">
            <li>Assess risks</li>
            <li>Identify gaps and weak control areas</li>
            <li>Advise on compliance requirements</li>
          </ol>
        </div>
      </div>
      <div className="w-[90%] flex flex-col items-start justify-center gap-4 pt-2 pb-4">
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <h2 className="uppercase text-secondary font-bold">
            THE VALUE PROPOSITION
          </h2>
          <p className="text-wrap text-black text-[17px] leading-6">
            Our industry certified engineers will activate specific discovery
            probes to gather the required data from your IT environment or areas
            specified in the scope. Once all the data has been gathered and
            analysed by our professional auditors and engineers, a detailed
            document and a high level traffic light report will be presented to
            your business with actionable recommendations.
          </p>
        </div>
        <p className="text-wrap text-black text-[17px] leading-6">
          The Premium IT Audit Solution Scope includes an independent, objective
          audit of 8 key ICT Elements:
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className="p-2 text-white text-wrap leading-7 text-base bg-secondary">
            General I.T. Operations (Architecture overview, UPS, etc.)
          </div>
          <div className="p-2 text-white text-wrap leading-7 text-base bg-secondary">
            Process maturity and Documentation.
          </div>
          <div className="p-2 text-white text-wrap leading-7 text-base bg-secondary">
            Servers & Storage (System architecture, OS updates, etc.)
          </div>
          <div className="p-2 text-white text-wrap leading-7 text-base bg-secondary">
            Networking (Cabling, Network architecture, etc.)
          </div>
          <div className="p-2 text-white text-wrap leading-7 text-base bg-secondary">
            End User Computing (Devices, Standard Operating Environment, Threat
            Management, etc.)
          </div>
          <div className="p-2 text-white text-wrap leading-7 text-base bg-secondary">
            Security (Surveillance systems, physical access controls, etc.)
          </div>
          <div className="p-2 text-white text-wrap leading-7 text-base bg-secondary">
            Licensing (Support agreements & individual licensing, etc.)
          </div>
          <div className="p-2 text-white text-wrap leading-7 text-base bg-secondary">
            Disaster Recovery (Backup & recovery procedures, etc.)
          </div>
        </div>
      </div>
    </div>
  );
};

export default ICTEnvironmentAuditPage;
