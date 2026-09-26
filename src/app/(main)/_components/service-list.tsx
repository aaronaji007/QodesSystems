import { serviceList } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceList = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <div className="w-[80%] h-fit flex flex-col items-center justify-center gap-[4rem] py-[1rem]">
        <div className="w-full flex flex-col items-center justify-center gap-6">
          {/* <div className="text-title tracking-widest uppercase">
            banking service
          </div> */}
          {/* <div className="capitalize text-secondary-dark text-4xl">
            latest insights from banksy
          </div> */}
        </div>
        <div className="w-full flex flex-row items-center justify-center flex-wrap gap-[4rem]">
          {serviceList.map((item, index) => (
            <Link href={item.href}
              className="w-[350px] h-[450px] bg-primary-light flex flex-col items-center justify-center gap-0 rounded-xl overflow-hidden"
              key={index}
            >
              <Image
                src={item.imageUrl}
                alt="img1"
                height={0}
                width={0}
                className="w-full h-[200px] flex-1 object-cover"
                unoptimized
                quality={100}
                draggable="false"
              />
              <div className="flex-1 w-full flex flex-col items-start justify-center gap-2 p-4">
                <h2 className="text-secondary-dark text-xl capitalize">
                  {item.title}
                </h2>
                <p className="text-title leading-7 line-clamp-5 truncate text-wrap">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
