import { ourValuesList } from "@/lib/constants";
import Image from "next/image";
import React from "react";

const OurValuesComponent = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-primary py-[5rem]">
      <div className="w-[80%] h-fit flex flex-col items-center justify-center gap-[4rem]">
        <div className="w-full flex flex-row items-end justify-between gap-8">
          <div className="flex flex-col items-start justify-center gap-6">
            <div className="tracking-widest text-base text-title uppercase">
              values
            </div>
            <div className="text-secondary-dark leading-[3.5rem] text-5xl">
              Our values help us set the <br /> bar for good banking high.
            </div>
          </div>
          <div className="w-[35%] text-xl leading-7 text-title">
            Our values define us. They guide us in building and improving our
            product, hiring teammates, and serving our customers.
          </div>
        </div>
        <div className="w-full flex flex-row flex-wrap items-center justify-center gap-[4rem]">
          {ourValuesList.map((item, index) => (
            <div
              className="w-[350px] h-fit bg-primary-light p-6 rounded-xl flex flex-col items-center justify-center gap-4"
              key={index}
            >
              <div className="w-full flex flex-row items-center justify-start gap-4">
                <Image
                  src={item.imageUrl}
                  alt="img1"
                  width={0}
                  height={0}
                  unoptimized
                  quality={100}
                  className="w-auto h-[50px] object-cover"
                  draggable={false}
                />
                <p className="text-xl text-secondary-dark capitalize">
                  security sparks
                </p>
              </div>
              <div className="w-full text-title leading-7">
                Our first priority is to keep your money safe and secure. Every
                single aspect of our service is optimized to protect and grow
                your funds!
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurValuesComponent;
