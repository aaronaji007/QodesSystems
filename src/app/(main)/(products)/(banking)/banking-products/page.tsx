import Image from "next/image";
import React from "react";

const BankingProductsComponent = () => {
  return (
    <div className="min-h-fit w-full flex flex-col items-center justify-center py-2">
      <div className="w-full bg-secondary py-4 flex items-center justify-start px-16">
        <p className="text-start capitalize text-3xl text-white">
          Banking Products
        </p>
      </div>
      <div className="w-[90%] flex flex-col lg:flex-row items-start justify-center gap-6 pb-[7rem] py-12">
        <Image
          src={
            "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="img"
          width={0}
          height={0}
          unoptimized
          quality={100}
          className="w-full lg:w-[25%] h-[250px] object-fill"
        />
        <div className="flex-1 h-full flex flex-col items-start justify-center gap-4 text-base py-2 leading-6 font-bold">
          <p className="text-wrap text-black">
            Changing technology trends in Banking is often overlooked while
            running banking processes. Banking expectations are also changing as
            per the changing technology. Banks are increasingly relying on
            automation(s) beyond the four walls of Bank premises along with data
            accuracy and user-friendly methodologies, all these help banks to
            boil down to more reliable and accurate strategic decisions
          </p>
          <p className="text-wrap text-black">
            Our long range of Product(s) and Service(s) help Banks to deliver
            highest productivity gain from Investments on Technology and yet
            offers the most empowering experience to the end users with dramatic
            savings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BankingProductsComponent;
