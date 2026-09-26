import Image from "next/image";
import React from "react";

const OtherProductsComponent = () => {
  return (
    <div className="min-h-fit w-full flex flex-col items-center justify-center py-2">
      <div className="w-full bg-secondary py-4 flex items-center justify-start px-16">
        <p className="text-start capitalize text-3xl text-white">
          Other Products
        </p>
      </div>
      <div className="w-[90%] flex flex-col items-start justify-center gap-12 pb-[7rem] py-12">
        <div className="flex items-start justify-between gap-6">
          <Image
            src={
              "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="img"
            width={0}
            height={0}
            unoptimized
            quality={100}
            className="w-full lg:w-[25%] h-[250px] object-fill"
          />
          <div className="flex-1 h-full flex flex-col items-start justify-center gap-4 text-base py-2 leading-6">
            <p className="text-wrap text-black font-bold">
              Our primary focus is on bridging the challenges faced by the
              Bank(s) by using our 360° view, which helps in achieving
              sustainable efficiency improvement. Our suite of Products to
              automate other administrative departments support banks for
              overall operational efficiency with easy integration to our
              Banking Suite Of Products
            </p>
          </div>
        </div>
        <div className="w-full flex flex-row items-center justify-center gap-6">
          <div className="flex-1 flex flex-col items-center justify-center gap-2">
            <p className="font-bold">HUMAN RESOURCE MANAGEMENT SYSTEM</p>
            <Image
              src={
                "https://cdn.pixabay.com/photo/2024/09/21/02/12/human-resources-9062771_1280.jpg"
              }
              alt="img"
              width={0}
              height={0}
              unoptimized
              quality={100}
              className="w-full lg:w-[300px] h-[250px] object-fill"
            />
          </div>
          {/* <div className="flex-1 flex flex-col items-center justify-center gap-2">
            <p className="font-bold">IT  INFRASTRUCTURE  AND  SECURITY  MANAGEMENT  SYSTEM</p>
            <Image
              src={
                "http://128.199.213.12/wp-content/uploads/2015/02/IMS.jpg"
              }
              alt="img"
              width={0}
              height={0}
              unoptimized
              quality={100}
              className="w-full lg:w-[300px] h-[250px] object-fill"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OtherProductsComponent;
