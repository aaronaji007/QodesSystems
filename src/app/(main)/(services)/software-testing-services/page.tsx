"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const SoftwareTestingServicesPage = () => {
  const [isContentHidden, setIsContentHidden] = useState(true);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-0">
      <div className="w-full bg-secondary flex items-center justify-start py-4 px-12">
        <p className="text-start capitalize text-2xl text-white">
          Software Testing / quality engineering
        </p>
      </div>
      <div className="w-[90%] h-full flex flex-col lg:flex-row items-stretch justify-center gap-6">
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1661546394223-7d465b791444?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            Today’s increasingly sophisticated products and systems need an
            equally sophisticated quality management and testing solution for
            targeted testing against requirements. This requires a coordinated
            approach to systems and software quality management, including
            verification and validation throughout the lifecycle and across all
            engineering assets.
          </p>

          <p className="text-wrap text-black text-[17px] leading-6">
            QODES quality management and testing solutions allow the linking of
            tests to requirements and design artifacts, using an automated
            testing and defect management framework. This systems testing
            process enables more targeted testing against requirements, helping
            designers to understand the impact of test failures, while
            maintaining test suites in the face of changing project priorities.
            Our testing solutions can help to reduce testing times and costs,
            enabling earlier and more frequent testing for delivering quality
            that endures.
          </p>
          <div className="w-full flex items-center justify-end py-4">
            <div className="relative w-[85%] flex flex-col items-start justify-center gap-2">
              <div
                className="flex flex-row items-center justify-center gap-2 cursor-pointer"
                onClick={() => setIsContentHidden(!isContentHidden)}
              >
                <div className="bg-black text-white">
                  {!isContentHidden ? (
                    <Plus className="p-1" />
                  ) : (
                    <Minus className="p-1" />
                  )}
                </div>
                <p className="text-black capitalize font-bold">what we offer</p>
              </div>
              <div className="bg-title w-full h-[0.5px] my-2"></div>
              {isContentHidden && (
                <div className="py-4 flex flex-col items-start justify-center gap-6">
                  <ol className="text-base leading-7 list-disc pl-8">
                    <li>Ad-hoc testing</li>
                    <li>Acceptance Testing</li>
                    <li>Automated testing</li>
                    <li>Black Box testing</li>
                    <li>System Integration Testing</li>
                    <li>Compatibility testing</li>
                    <li>Component Testing</li>
                    <li>End-to-end Testing</li>
                    <li>Exploratory Testing</li>
                    <li>Functional Testing</li>
                    <li>GUI (Graphical User Interface) testing</li>
                    <li>Load Testing</li>
                    <li>Performance Testing</li>
                    <li>Regression Testing</li>
                    <li>Smoke testing</li>
                    <li>Security Testing</li>
                    <li>Stress Testing</li>
                    <li>Unit testing</li>
                    <li>User Acceptance testing (UAT)</li>
                    <li>White box Testing</li>
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareTestingServicesPage;
