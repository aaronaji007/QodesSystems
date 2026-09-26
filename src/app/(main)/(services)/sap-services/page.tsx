"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

type isContentHiddenType = {
  sapIR: boolean;
  sapSMT: boolean;
  sapC: boolean;
  sapIndustry: boolean;
};

const SAPServicesPage = () => {
  const [isContentHidden, setIsContentHidden] = useState<isContentHiddenType>({
    sapIR: false,
    sapSMT: false,
    sapC: false,
    sapIndustry: false,
  });

  const handleToggleContent = (
    key: keyof isContentHiddenType,
    value: boolean
  ) => {
    setIsContentHidden((prevValue) => ({
      ...prevValue,
      [key]: value,
    }));
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-0">
      <div className="w-full bg-secondary flex items-center justify-start py-4 px-12">
        <p className="text-start capitalize text-2xl text-white">
          SAP Services
        </p>
      </div>
      <div className="w-[90%] h-full flex flex-col lg:flex-row items-stretch justify-center gap-6">
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1714618828448-abf8732500c6?q=80&w=1800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="img"
          className="w-full lg:w-[35%] h-[275px] object-full"
          quality={100}
          unoptimized
          draggable={false}
          width={0}
          height={0}
        />
        <div className="flex-1 h-full flex flex-col items-start justify-center pt-4 gap-3">
          <h2 className="font-semibold">SAP services</h2>
          <p className="text-wrap text-black text-[17px] leading-6">
            We have rich experience in SAP Services, ensuring an efficient and smooth project. We have implemented SAP for large multinational enterprises also for smaller customers with their specific needs. 
          </p>

          <p className="text-wrap text-black text-[17px] leading-6">
            We modified the standard SAP implementation methodology ASAP into a more pragmatic &quot;best practice&quot; approach.
          </p>
          <div className="w-full flex flex-col items-center justify-end py-8">
            <div className="relative w-[85%] flex flex-col items-start justify-center gap-6">
              <div className="w-full flex flex-col items-start justify-center gap-2">
                <div
                  className="flex flex-row items-center justify-center gap-2 cursor-pointer"
                  onClick={() =>
                    handleToggleContent("sapIR", !isContentHidden["sapIR"])
                  }
                >
                  <div className="bg-black text-white">
                    {!isContentHidden["sapIR"] ? (
                      <Plus className="p-1" />
                    ) : (
                      <Minus className="p-1" />
                    )}
                  </div>
                  <p className="text-black capitalize text-lg">
                    SAP Implementation and Rollouts
                  </p>
                </div>
                <div className="bg-title w-full h-[0.5px] my-2"></div>
                {isContentHidden["sapIR"] && (
                  <div className="px-6 flex flex-col items-start justify-center gap-6 text-start text-base leading-7">
                    Our functional experts analyze the client’s business
                    requirements and then the SAP consultancy team delivers
                    appropriate solutions. Rollout Services are meant for our
                    customers, who intend to extend their existing SAP
                    environment to other organizational entities and locations
                    based on either a template or existing configuration.
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col items-start justify-center gap-2">
                <div
                  className="flex flex-row items-center justify-center gap-2 cursor-pointer"
                  onClick={() =>
                    handleToggleContent("sapSMT", !isContentHidden["sapSMT"])
                  }
                >
                  <div className="bg-black text-white">
                    {!isContentHidden["sapSMT"] ? (
                      <Plus className="p-1" />
                    ) : (
                      <Minus className="p-1" />
                    )}
                  </div>
                  <p className="text-black capitalize text-lg">
                    SAP Support, Maintenance & Training
                  </p>
                </div>
                <div className="bg-title w-full h-[0.5px] my-2"></div>
                {isContentHidden["sapSMT"] && (
                  <div className="px-6 flex flex-col items-start justify-center gap-4">
                    <p className="text-start text-base leading-7">
                      Our functional experts analyze the client’s business
                      requirements and then the SAP consultancy team delivers
                      appropriate solutions. Rollout Services are meant for our
                      customers, who intend to extend their existing SAP
                      environment to other organizational entities and locations
                      based on either a template or existing configuration.
                    </p>
                    <div className="flex flex-col items-start justify-center gap-2">
                      <h2 className="font-semibold">SAP Training</h2>
                      <p className="text-base leading-7">
                        We provide both Core User Training & End User Training
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col items-start justify-center gap-2">
                <div
                  className="flex flex-row items-center justify-center gap-2 cursor-pointer"
                  onClick={() =>
                    handleToggleContent("sapC", !isContentHidden["sapC"])
                  }
                >
                  <div className="bg-black text-white">
                    {!isContentHidden["sapC"] ? (
                      <Plus className="p-1" />
                    ) : (
                      <Minus className="p-1" />
                    )}
                  </div>
                  <p className="text-black capitalize text-lg">
                    SAP Consulting
                  </p>
                </div>
                <div className="bg-title w-full h-[0.5px] my-2"></div>
                {isContentHidden["sapC"] && (
                  <div className="px-6 flex flex-col items-start justify-center gap-4">
                    <div className="flex flex-col items-start justify-center gap-2">
                      <h2 className="font-semibold">SAP BASIS Consulting</h2>
                      <p className="text-base leading-7">
                        Our SAP Basis consulting services help you plan, build,
                        run and manage the complete life cycle of your business
                        systems, which results in improved returns.
                      </p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                      <h2 className="font-semibold">SAP SOX Audit</h2>
                      <p className="text-base leading-7">
                        SOX Audit processes are undertaken by Audit firms with
                        Chartered Accountants or MBA Finance people with sample
                        expertise.
                      </p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                      <h2 className="font-semibold">SAP Version Upgrade</h2>
                      <p className="text-base leading-7">
                        We provide specific solutions tailored to suit
                        individual customer requirements for version
                        upgradation. The service covers customer requirement
                        assessment and a gap analysis.
                      </p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                      <h2 className="font-semibold">SAP Netweaver Gateway</h2>
                      <p className="text-base leading-7">
                        We have consultants with experience in SAP NetWeaver
                        Gateway that provides a simple way to connect devices,
                        environments and platforms to SAP software based on
                        market standards.
                      </p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                      <h2 className="font-semibold">
                        SAP Process Integrationy
                      </h2>
                      <p className="text-base leading-7">
                        We provide SAP Integration Solutions which includes
                        complete Design, Architecture, SAP PI/XI Development,
                        Administration, Monitoring, Basis work, SAP PI/XI
                        Performance Tuning on Integration Server & J2EE and
                        development of Enterprise Services.
                      </p>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2">
                      <h2 className="font-semibold">SAP Enterprise Portal</h2>
                      <p className="text-base leading-7">
                        We have consultants with experience in SAP NetWeaver
                        Portal (formerly known as SAP Enterprise Portal) gives
                        users a unified, personalized and role based access to
                        key enterprise information and SAP and non-SAP
                        applications.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col items-start justify-center gap-2">
                <div
                  className="flex flex-row items-center justify-center gap-2 cursor-pointer"
                  onClick={() =>
                    handleToggleContent(
                      "sapIndustry",
                      !isContentHidden["sapIndustry"]
                    )
                  }
                >
                  <div className="bg-black text-white">
                    {!isContentHidden["sapIndustry"] ? (
                      <Plus className="p-1" />
                    ) : (
                      <Minus className="p-1" />
                    )}
                  </div>
                  <p className="text-black capitalize text-lg">
                    Industry(s) For SAP
                  </p>
                </div>
                <div className="bg-title w-full h-[0.5px] my-2"></div>
                {isContentHidden["sapIndustry"] && (
                  <ul className="px-6 flex flex-col items-start justify-center gap-1 list-disc">
                    <li className="capitalize text-nowrap">Pharmaceuticals</li>
                    <li className="capitalize text-nowrap">Real Estate</li>
                    <li className="capitalize text-nowrap">Automotive</li>
                    <li className="capitalize text-nowrap">Textiles</li>
                    <li className="capitalize text-nowrap">Electronics</li>
                    <li className="capitalize text-nowrap">Media</li>
                    <li className="capitalize text-nowrap">Furniture</li>
                    <li className="capitalize text-nowrap">Manufacturing</li>
                    <li className="capitalize text-nowrap">Engineering</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SAPServicesPage;
