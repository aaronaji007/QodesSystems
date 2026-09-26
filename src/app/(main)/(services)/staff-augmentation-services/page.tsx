"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

type contentType = {
  contractStaffing: boolean;
  payrolling: boolean;
  permanentRecruitment: boolean;
  executiveSearch: boolean;
};

const StaffAugmentationServicesPage = () => {
  const [isContentHidden, setIsContentHidden] = useState<contentType>({
    contractStaffing: false,
    payrolling: false,
    permanentRecruitment: false,
    executiveSearch: false,
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
          staff augmentation services
        </p>
      </div>
      <div className="w-[90%] h-full flex flex-col lg:flex-row items-stretch justify-center gap-6">
        <Image
          src={
            "https://images.unsplash.com/photo-1574073763042-9dbe6ae03853?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <p className="text-wrap text-black text-[17px] leading-6">
          At QODES Systems, we offer specialized staff augmentation services to help financial institutions and technology providers bridge resource gaps and scale their teams with experienced professionals. Whether you&apos;re embarking on a complex core banking implementation, upgrading systems, or tackling strategic IT initiatives, our highly skilled professionals bring deep domain knowledge and technical expertise to meet your specific needs.
          </p>
          <p className="text-wrap text-black text-[17px] leading-6">
          We provide flexible and scalable staffing solutions, enabling you to quickly access the right talent for critical roles, from Solution Architects and Developers to QA specialists and Business Analysts. With our staff augmentation services, you gain access to qualified professionals who seamlessly integrate into your teams, enhancing project delivery, driving innovation, and ensuring success at every phase of your implementation journey.
          </p>
          <p className="text-wrap text-black text-[17px] leading-6">
          Let QODES Systems help you accelerate your projects and meet your business objectives with confidence, backed by top-tier talent.
          </p>
          <div className="w-full flex items-center justify-end py-4">
            <div className="relative w-[85%] flex flex-col items-start justify-center gap-6">
              <div className="w-full flex flex-col items-start justify-center gap-2">
                <div
                  className="flex flex-row items-center justify-center gap-2 cursor-pointer"
                  onClick={() =>
                    handleToggleContent(
                      "contractStaffing",
                      !isContentHidden.contractStaffing
                    )
                  }
                >
                  <div className="bg-black text-white">
                    {!isContentHidden["contractStaffing"] ? (
                      <Plus className="p-1" />
                    ) : (
                      <Minus className="p-1" />
                    )}
                  </div>
                  <p className="text-black capitalize ">
                    contract staffing
                  </p>
                </div>
                <div className="bg-title w-full h-[0.5px] my-2"></div>
                {isContentHidden["contractStaffing"] && (
                  <div className="py-4 flex flex-col items-start justify-center gap-6">
                    <p className="text-wrap text-black text-[17px] leading-6">
                      We offer access to a pool of pre-qualified professionals
                      working across industries to be hired by clients for their
                      time bound assignments. Our relationship with candidates
                      and clients is transparent which is shown in the high
                      retention and client absorption scores. Our Contract
                      Staffing service extends across geographical locations we
                      are present and gives the client an advantage of managing
                      business uncertainties, control over recruitment costs and
                      hiring the right person with skill sets to complete a
                      predefined projects.
                    </p>
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col items-start justify-center gap-2">
                <div
                  className="flex flex-row items-center justify-center gap-2 cursor-pointer"
                  onClick={() =>
                    handleToggleContent(
                      "payrolling",
                      !isContentHidden.payrolling
                    )
                  }
                >
                  <div className="bg-black text-white">
                    {!isContentHidden["contractStaffing"] ? (
                      <Plus className="p-1" />
                    ) : (
                      <Minus className="p-1" />
                    )}
                  </div>
                  <p className="text-black capitalize ">
                    pay rolling
                  </p>
                </div>
                <div className="bg-title w-full h-[0.5px] my-2"></div>
                {isContentHidden["payrolling"] && (
                  <div className="py-4 flex flex-col items-start justify-center gap-6">
                    <p className="text-wrap text-black text-[17px] leading-6">
                      A dedicated team of qualified professionals who would take
                      over the administrative role of maintaining employee
                      records, local statutory compliance, compensation details
                      enabling focus on core activities.
                    </p>
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col items-start justify-center gap-2">
                <div
                  className="flex flex-row items-center justify-center gap-2 cursor-pointer"
                  onClick={() =>
                    handleToggleContent(
                      "permanentRecruitment",
                      !isContentHidden.permanentRecruitment
                    )
                  }
                >
                  <div className="bg-black text-white">
                    {!isContentHidden["permanentRecruitment"] ? (
                      <Plus className="p-1" />
                    ) : (
                      <Minus className="p-1" />
                    )}
                  </div>
                  <p className="text-black capitalize ">
                    permanent recruitment
                  </p>
                </div>
                <div className="bg-title w-full h-[0.5px] my-2"></div>
                {isContentHidden["permanentRecruitment"] && (
                  <div className="py-4 flex flex-col items-start justify-center gap-6">
                    <p className="text-wrap text-black text-[17px] leading-6">
                      Our global locations allows us to present a large talent
                      pool for various functions matched with our quality
                      recruitment standards enabling the client to meet relevant
                      candidates within a agreed time frame. All candidates will
                      be screened with respect to the detailed job description
                      associated with the position , compensation bandwidth and
                      help organizations find their right fitment.
                    </p>
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col items-start justify-center gap-2">
                <div
                  className="flex flex-row items-center justify-center gap-2 cursor-pointer"
                  onClick={() =>
                    handleToggleContent(
                      "executiveSearch",
                      !isContentHidden.executiveSearch
                    )
                  }
                >
                  <div className="bg-black text-white">
                    {!isContentHidden["executiveSearch"] ? (
                      <Plus className="p-1" />
                    ) : (
                      <Minus className="p-1" />
                    )}
                  </div>
                  <p className="text-black capitalize ">
                    executive search
                  </p>
                </div>
                <div className="bg-title w-full h-[0.5px] my-2"></div>
                {isContentHidden["executiveSearch"] && (
                  <div className="py-4 flex flex-col items-start justify-center gap-6">
                    <p className="text-wrap text-black text-[17px] leading-6">
                     We have successfully executed several leadership assignments on retained basis across industries by a dedicated team of search consultants who have worked in the Executive Search space. Each of these search consultants has the requisite knowledge of the industry, access to senior talent connections which ensures reaching out to the right talent best suited to the client. Our Executive search team works in close consultations with the client, provides a clear search strategy mapping the market and prospective candidates, meet all candidates personally to assess their interest and suitability for the role, share the feedback to the client and then introduce them to the client for their review. Our strength lies in executing the assignment with complete confidentiality and ensuring that both the candidate and client interests are protected
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

export default StaffAugmentationServicesPage;
