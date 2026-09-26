"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

type contentType = {
  appMaintenanceServices: boolean;
  supportLevelRole: boolean;
};

const TemenosT24CoreBanking = () => {
  const [isContentHidden, setIsContentHidden] = useState<contentType>({
    appMaintenanceServices: false,
    supportLevelRole: false,
  });

  const handleToggleContent = (key: keyof contentType, value: boolean) => {
    setIsContentHidden((prevValue) => ({
      ...prevValue,
      [key]: value,
    }));
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-0">
      <div className="w-full bg-secondary flex items-center justify-start py-4 px-12">
        <p className="text-start capitalize text-2xl text-white">
          Temenos T24 Core Banking
        </p>
      </div>
      <div className="w-[90%] h-full flex flex-col lg:flex-row items-stretch justify-center gap-6">
        <Image
          src={
            "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <h2 className="font-semibold">Temenos T24</h2>
          <p className="text-wrap text-black text-[17px] leading-6">
            Transitioning from a legacy application to a Temenos product? Such
            transformation implementations often present numerous challenges and
            uncertainties. Achieving success requires a careful balance of
            extensive experience and advanced technical skills.
          </p>
          <p className="text-wrap text-black text-[17px] leading-6">
            At QODES Systems, we specialize in delivering end-to-end Temenos
            implementation services by leveraging mature practices derived from
            our collective domain knowledge and technical expertise. Our
            in-depth understanding of Temenos products empowers clients to
            seamlessly adopt the system&apos;s inherent processes while ensuring
            their unique business requirements are met without compromise.
          </p>
          <p className="text-wrap text-black text-[17px] leading-6">
            With QODES Systems as your partner, you can navigate the
            complexities of transformation with confidence, achieving
            streamlined operations and maximizing the value of your investment
            in Temenos solutions.
          </p>
          <div className="w-full flex items-center justify-end py-4">
            <div className="relative w-[85%] flex flex-col items-start justify-center gap-6">
              <div className="w-full flex flex-col items-start justify-center gap-2">
                <div
                  className="flex flex-row items-center justify-center gap-2 cursor-pointer"
                  onClick={() =>
                    handleToggleContent(
                      "appMaintenanceServices",
                      !isContentHidden.appMaintenanceServices
                    )
                  }
                >
                  <div className="bg-black text-white">
                    {!isContentHidden["appMaintenanceServices"] ? (
                      <Plus className="p-1" />
                    ) : (
                      <Minus className="p-1" />
                    )}
                  </div>
                  <p className="text-black capitalize">
                    Technology Migration Services and Upgrade
                  </p>
                </div>
                <div className="bg-title w-full h-[0.5px] my-2"></div>
                {isContentHidden["appMaintenanceServices"] && (
                  <div className="py-4 flex flex-col items-start justify-center gap-6">
                    <p className="text-wrap text-black text-[17px] leading-6">
                      In the fast-evolving banking landscape, applications
                      require regular upgrades to empower financial institutions
                      with new functionalities, meet regulatory requirements,
                      respond to market demands, stay aligned with technological
                      advancements, and enhance security while reducing
                      operational costs.
                    </p>
                    <p className="text-wrap text-black text-[17px] leading-6">
                      QODES Systems provides seamless Upgrade and Technology
                      Migration services, ensuring that your applications remain
                      future-ready. Regular upgrades of Temenos applications
                      enable banks to address both present and future needs
                      effectively, offering enhanced customer experiences,
                      improved operational efficiency, and the agility to adapt
                      to an ever-changing industry landscape.
                    </p>
                    <p className="text-wrap text-black text-[17px] leading-6">
                      With our expertise, banks can implement these upgrades
                      smoothly, minimizing downtime, mitigating risks, and
                      ensuring compliance with the latest standards and trends.
                      Let QODES Systems help you future-proof your banking
                      systems with precision and confidence.
                    </p>
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col items-start justify-center gap-2">
                <div
                  className="flex flex-row items-center justify-center gap-2 cursor-pointer"
                  onClick={() =>
                    handleToggleContent(
                      "supportLevelRole",
                      !isContentHidden.supportLevelRole
                    )
                  }
                >
                  <div className="bg-black text-white">
                    {!isContentHidden["supportLevelRole"] ? (
                      <Plus className="p-1" />
                    ) : (
                      <Minus className="p-1" />
                    )}
                  </div>
                  <p className="text-black capitalize">
                    Model Bank Implementation
                  </p>
                </div>
                <div className="bg-title w-full h-[0.5px] my-2"></div>
                {isContentHidden["supportLevelRole"] && (
                  <div className="py-4 flex flex-col items-start justify-center gap-6">
                    <p className="text-wrap text-black text-[17px] leading-6">
                      Looking to enter the market swiftly and efficiently? The
                      Temenos Model Bank offers a ready-to-deploy core banking
                      suite, equipped with pre-configured robust processes and
                      best practices to accelerate your implementation journey.
                    </p>
                    <p className="text-wrap text-black text-[17px] leading-6">
                      At QODES Systems, we specialize in helping clients
                      leverage the power of Temenos Model Bank to achieve rapid
                      deployment and operational readiness. This proven solution
                      allows you to &quot;hit the ground running&quot; with a
                      market-leading core banking application, ensuring a smooth
                      alignment with your business objectives and helping you
                      achieve your ROI targets in record time.
                    </p>
                    <p className="text-wrap text-black text-[17px] leading-6">
                      Partner with QODES Systems to unlock the full potential of
                      Temenos Model Bank and establish a solid foundation for
                      success in today&apos;s competitive banking landscape.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemenosT24CoreBanking;
