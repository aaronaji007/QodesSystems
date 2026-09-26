import Image from "next/image";
import React from "react";

const AboutUsComponent = () => {
  return (
    // <div className="relative min-h-screen w-full flex items-center justify-center py-12 bg-transparent">
    //   <div className="w-[80%] h-fit flex flex-col items-start justify-center gap-[4rem] z-10">
    //     <div className="w-full flex flex-col items-start justify-center gap-4">
    //       <div className="tracking-widest uppercase text-title text-base text-nowrap">
    //         about us
    //       </div>
    //       <div className="text-5xl leading-[3.5rem] text-wrap w-full text-secondary-dark">
    //         We&apos;re on a mission to help <br /> small-businesses succeed.
    //       </div>
    //     </div>
    //     <div className="flex flex-row items-end justify-center gap-[4rem]">
    //       <Image
    //         src={
    //           "https://cdn.prod.website-files.com/5fe08304881adb7d1ee1063e/5fe097dc37a20f8b668310a7_pexels-anna-shvets-3727464%207-min.jpg"
    //         }
    //         alt="img1"
    //         width={0}
    //         height={0}
    //         className="h-[250px] w-[250px] object-cover rounded-xl"
    //         unoptimized
    //         quality={100}
    //         draggable={false}
    //       />
    //       <Image
    //         src={
    //           "https://assets.website-files.com/5fe08304881adb7d1ee1063e/5fe573c9a66535e696277921_pexels-anna-shvets-3727464%202-min-p-500.png"
    //         }
    //         alt="img2"
    //         width={0}
    //         height={0}
    //         className="h-[350px] w-[300px] object-cover mb-[3rem] rounded-xl"
    //         unoptimized
    //         quality={100}
    //         draggable={false}
    //       />
    //       <Image
    //         src={
    //           "https://cdn.prod.website-files.com/5fe08304881adb7d1ee1063e/60256305a35fad1f5657fff5_image-3-compressed.jpg"
    //         }
    //         alt="img3"
    //         width={0}
    //         height={0}
    //         className="h-[350px] w-[500px] object-cover rounded-xl"
    //         unoptimized
    //         quality={100}
    //         draggable={false}
    //       />
    //     </div>
    //   </div>
    //   <div className="absolute left-0 top-0 bottom-[20%] right-[25%] bg-primary-light z-0"></div>
    // </div>
    <div className="min-h-fit w-full flex flex-col items-center justify-center py-2">
      <div className="w-full bg-secondary py-4 flex items-center justify-start px-16">
        <p className="text-start capitalize text-3xl text-white">about us</p>
      </div>
      <div className="w-[95%] flex flex-col lg:flex-row items-start justify-center gap-6">
        <Image
          src={
            "https://qodestechnologies.com/wp-content/uploads/2015/02/1aboutus.jpg"
          }
          alt="img"
          width={0}
          height={0}
          unoptimized
          quality={100}
          className="w-full lg:w-[45%] h-[250px] object-fill rounded-2xl"
        />
        <div className="flex-1 h-full flex flex-col items-start justify-center gap-4 text-base py-2 leading-7">
          <p className="text-wrap text-black">
            Our company is a specialized consulting firm in the{" "}
            <span className="font-bold"> CORE BANKING DOMAIN </span>, offering expertise in
            <span className="font-bold"> SAP Core Banking </span>
            and the
            <span className="font-bold"> Temenos T24 Core Banking System. </span>
            Additionally, we have developed proprietary,{" "}
            <span className="font-bold"> AI-driven Core Banking Systems </span>
            tailored to meet the unique needs of our clients. By leveraging
            cutting-edge technology and deep industry knowledge, we empower
            financial institutions to optimize their operations, enhance
            customer experiences, and achieve seamless digital transformation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
