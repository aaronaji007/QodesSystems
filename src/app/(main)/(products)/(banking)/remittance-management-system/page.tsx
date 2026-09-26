import Image from "next/image";
import React from "react";

const RemittanceManagementSystemPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-0">
      <div className="w-full bg-secondary flex items-center justify-start py-4 px-12">
        <p className="text-start capitalize text-2xl text-white">
          remittance management system
        </p>
      </div>
      <div className="w-[90%] h-full flex flex-col lg:flex-row items-stretch justify-center gap-6">
        <Image
          src={
            "https://qodestechnologies.com/wp-content/uploads/2020/07/remittance.jpg"
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
            <span className="text-secondary">QODES Systems </span>
            Remittance Management System is a modernized solution that performs
            end-to-end orchestration to any outgoing to incoming payment and
            directs it through its designated process flow, serving as a modern
            and comprehensive remittance processing engine. The solution
            facilitates all types of transfers including cross-border
            transactions between correspondent banks or financial institutions.
          </p>
          <p className="text-wrap text-black text-[17px] leading-6">
            With an open design architecture and open Application Programming
            Interfaces (APIs) for integration with multiple third-party systems,{" "}
            <span className="text-secondary">QODES Systems </span> opens the
            door for banks and financial institutions to seamlessly connect to
            and start transacting with other participants over blockchain
            networks.
          </p>
          <p className="text-wrap text-black text-[17px] leading-6">
            It moves banks and financial institutions to a new era of real-time
            fund transfers in a cost-effective and time-efficient manner through
            utilizing smart payments routing.
          </p>

          <h2 className="uppercase text-secondary font-bold">
            QODES SYSTEMS REMITTANCE MANAGEMENT SYSTEM – ADVANTAGES
          </h2>
        </div>
      </div>
      <div className="w-[90%] flex flex-col items-start justify-center gap-4 pt-2 pb-4">
        <p className="text-base text-wrap text-black leading-6">
          Our system provides financial institutions with advantageous
          capabilities to:
        </p>
        <ol className="text-base leading-7 list-disc pl-4">
          <li>Interact and transact in new, international markets</li>
          <li>
            Enhance operations efficiency as PS-RMS is a single platform that
            integrates with all core banking and third-party systems
          </li>
          <li>
            Offer customers efficient and advanced remittance services at very
            competitive cost
          </li>
          <li>
            Provide expedited remittance response for customers thereby
            enhancing customer satisfaction
          </li>
          <li>
            Define customized remittance routing rules and charge schemes with
            correspondent banks
          </li>
        </ol>
        <h2 className="uppercase text-secondary font-bold">
          QODES SYSTEMS REMITTANCE MANAGEMENT SYSTEM – FEATURES
        </h2>
        <p className="text-base text-wrap leading-6">
          Our Remittance Management System comprises inherent value-added
          features including:
        </p>
        <ol className="text-base leading-7 list-disc pl-4">
          <li>Smart payments routing</li>
          <li>Correspondent Service-Level Agreement (SLA) management</li>
          <li>Customer segments definitions and management</li>
          <li>Fees and charges management</li>
          <li>
            Foreign exchange rates management and synchronization with back-end
            systems
          </li>
          <li>
            Compliance with Anti-Money Laundering (AML), Counter-Terrorism
            Financing (CTF) and sanctioned-list screening regulatory
            requirements
          </li>
          <li>
            Transfer Simulation with full-fledged details of the payments path,
            fees, FX rates and more, before proceeding with initiating a
            remittance
          </li>
        </ol>
      </div>
    </div>
  );
};

export default RemittanceManagementSystemPage;
