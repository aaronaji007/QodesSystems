"use client";

import Image from "next/image";
import React from "react";

const ProprietaryQodesCoreBankingSystem = () => {

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-0">
      <div className="w-full bg-secondary flex items-center justify-start py-4 px-12">
        <p className="text-start capitalize text-2xl text-white">
          Qodes Core Banking System
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
          <h2 className="font-semibold">
          Qodes Core Banking System
          </h2>
          <p className="text-wrap text-black text-[17px] leading-6">
          Our AI-powered Core Banking System (CBS) has been envisioned and meticulously engineered by an expert team with over two decades of proven success in delivering innovative solutions to large organizations. Built with cutting-edge technology, our CBS is a robust and comprehensive platform designed to streamline and centralize the operations of financial institutions.
          </p>
          <p className="text-wrap text-black text-[17px] leading-6">
          By integrating a wide range of banking functions into a unified system, QODES CBS enhances operational efficiency, strengthens customer service, and ensures regulatory compliance. This seamless integration empowers financial institutions to adapt quickly to market changes and optimize their internal processes for better performance.
          </p>
          <p className="text-wrap text-black text-[17px] leading-6">
          QODES CBS Solution provides financial institutions with a unified, efficient, and secure platform to manage their operations, deliver exceptional customer experiences, and achieve their strategic objectives. Our platform is designed to evolve with your business, ensuring that you remain at the forefront of innovation and competitive advantage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProprietaryQodesCoreBankingSystem;
