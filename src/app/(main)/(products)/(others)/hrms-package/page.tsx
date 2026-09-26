"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const MobileBankingSystemPage = () => {
  const [isContentHidden, setIsContentHidden] = useState(true);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-0">
      <div className="w-full bg-secondary flex items-center justify-start py-4 px-12">
        <p className="text-start capitalize text-2xl text-white">
          HRMS package
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
          <p className="text-wrap text-black text-[17px] leading-6">
            Our HRMS is comprehensive information system that addresses all the
            needs of an enterprise with the process view of an organization, to
            meet the organizational goals and integrate all the functions of the
            enterprise. Our HRMS System is a fully scalable, robust and 100% Web
            based office Automation System that automates both internal and
            external processes of your company. Our HRMS System includes
            Employee Self Service Module along with intuitive CRM, decision
            support and e-business modules and a powerful technology
            infrastructure – all the tools you need to en-hance the productivity
            and profitability of your operations. Our HRMS System can be
            interfaced with any other systems seamlessly. Our HRMS System
            Management Software enables effortless & effective business practice
            and helps you spend less time on overhead activities and more time
            on core-business that matters. With simple, yet powerful solutions
            of SunSmart, this can be achieved and users can now focus on their
            primary tasks. Our HRMS System is accessible across all devices
            in-cluding iPADs, Smart Phones, Tablets, Laptops, PCs etc.
            irrespective of their Operating System. Our HRMS System is
            accessi-ble across all standard browsers like IE, FireFox, Chrome,
            Opera, Default Mobile Browser etc.
          </p>

          <p className="text-wrap text-black text-[17px] leading-6">
            QODES have customers across industries optimizing process efficiency
            that results into higher return on investment.
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
                <p className="text-black">more</p>
              </div>
              <div className="bg-title w-full h-[0.5px] my-2"></div>
              {isContentHidden && (
                <div className="py-4 flex flex-col items-start justify-center gap-6">
                  <div className="flex flex-col items-start justify-center gap-2">
                    <h2 className="font-bold">HR Foundation</h2>
                    <ol className="text-base leading-7 list-disc pl-4">
                      <li>Organization Structure</li>
                      <li>Job structure</li>
                      <li>Workforce Planning</li>
                      <li>Employee Relationship Management</li>
                      <li>Personal Data Management</li>
                    </ol>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <h2 className="font-bold">Talent Acquisition</h2>
                    <ol className="text-base leading-7 list-disc pl-4">
                      <li>Requisition Management</li>
                      <li>Applicant Management</li>
                      <li>Interview & Selection Management</li>
                      <li>Offer Management</li>
                      <li>New Hire On-boarding</li>
                    </ol>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <h2 className="font-bold">Performance Alignment</h2>
                    <ol className="text-base leading-7 list-disc pl-4">
                      <li>Performance Management</li>
                      <li>Goal Management</li>
                      <li>Compensation Planning & Administration</li>
                      <li>Compensation Management</li>
                      <li>Rewards Management</li>
                    </ol>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <h2 className="font-bold">Talent Management</h2>
                    <ol className="text-base leading-7 list-disc pl-4">
                      <li>Training Management</li>
                      <li>360 Degree Feedback</li>
                      <li>Competency Management</li>
                      <li>Succession Management</li>
                      <li>Career Development</li>
                    </ol>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <h2 className="font-bold">Employee Lifecycle Management</h2>
                    <ol className="text-base leading-7 list-disc pl-4">
                      <li>Confirmation Management</li>
                      <li>Transition Management</li>
                      <li>Mentoring</li>
                      <li>Employee Engagement</li>
                      <li>Separation Management</li>
                    </ol>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <h2 className="font-bold">Workforce Administration</h2>
                    <ol className="text-base leading-7 list-disc pl-4">
                      <li>Time & Attendance</li>
                      <li>Shift & Scheduling</li>
                      <li>Absence Management</li>
                      <li>Timesheet Management</li>
                      <li>Payroll Management</li>
                    </ol>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-2">
                    <h2 className="font-bold">Hubs</h2>
                    <ol className="text-base leading-7 list-disc pl-4">
                      <li>Portal</li>
                      <li>Workflow</li>
                      <li>Communication</li>
                      <li>Self-Service</li>
                      <li>Roles & Security</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBankingSystemPage;
