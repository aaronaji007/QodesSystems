"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import React, { useState } from "react";
import { ChevronRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSheet } from "@/app/providers/sheet-provider";
// import { Button } from "../ui/button";

type MenuStateType = {
  home: boolean;
  services: boolean;
  products: boolean;
  itServices: boolean;
  banking: boolean;
  others: boolean;
  coreBankingSystem: boolean;
  reachUs: boolean;
};

const Navbar = () => {
  const initialMenuState = {
    home: false,
    services: false,
    products: false,
    itServices: false,
    banking: false,
    others: false,
    coreBankingSystem: false,
    reachUs: false,
  };
  const [menuState, setMenuState] = useState<MenuStateType>(initialMenuState);

  const handleMenuToggle = (key: keyof MenuStateType, value: boolean) => {
    setMenuState((prevValue) => ({
      ...prevValue,
      [key]: value,
    }));
  };

  const { isSheetOpen, closeSheet, toggleSheet } = useSheet();

  return (
    <div
      className="w-full h-[5rem] bg-primary flex flex-row items-center justify-center"
      onMouseLeave={() => setMenuState(initialMenuState)}
    >
      <div className="w-[90%] flex flex-row items-center justify-between gap-2">
        <Link
          href={"/"}
          className="flex flex-row items-center justify-center gap-2"
        >
          <Image
            src={"/images/logo.jpg"}
            alt="Logo"
            width={0}
            height={0}
            className="w-[6rem] h-[3rem] md:h-[4rem] lg:h-[4rem] rounded-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer"
            unoptimized
            quality={100}
          />
          {/* <p className="text-2xl italic text-nowrap">QODES Systems</p> */}
        </Link>
        <ul className="flex-1 hidden lg:flex flex-row items-center justify-center gap-12">
          <li
            className={cn(
              `relative group text-lg font-normal capitalize text-nowrap text-black transform transition-all duration-300 hover:text-secondary z-999 cursor-pointer`,
              ""
            )}
          >
            <Link href={"/"}>Home</Link>
          </li>
          <li
            className={cn(
              `relative group text-lg font-normal capitalize text-nowrap text-black transform transition-all duration-300 hover:text-secondary z-999 cursor-pointer`,
              ""
            )}
            onMouseEnter={() =>
              setMenuState({ ...initialMenuState, home: true })
            }
          >
            <Link href={"/about"}>about us</Link>
          </li>
          <li
            className={cn(
              `relative group text-lg capitalize text-nowrap text-black transform transition-all duration-300 hover:text-secondary z-999`,
              menuState.coreBankingSystem ? "text-secondary" : "text-black"
            )}
            onMouseEnter={() =>
              setMenuState({ ...initialMenuState, coreBankingSystem: true })
            }
          >
            <p>core banking system</p>
            <div
              // onMouseLeave={() => handleMenuToggle("services", false)}
              className={cn(
                `absolute -left-10 right-0 bg-white px-4 py-3 top-10 text-nowrap w-[225px] shadow-lg shadow-title border border-secondary overflow-auto`,
                menuState.coreBankingSystem ? "block" : "hidden"
              )}
            >
              <ul className="w-full flex flex-col items-start justify-center gap-3">
                <li className="w-full flex items-center justify-start cursor-pointer">
                  <Link
                    href={"/sap-core-banking"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary"
                  >
                    SAP core banking
                  </Link>
                </li>
                <li className="w-full flex items-center justify-start cursor-pointer">
                  <Link
                    href={"/temenos-t24-core-banking"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary"
                  >
                    Temenos T24 Core Banking
                  </Link>
                </li>
                <li className="w-full flex items-center justify-start cursor-pointer">
                  <Link
                    href={"/qodes-core-banking-system"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary leading-5"
                  >
                    Qodes <br /> Core Banking System
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li
            className={cn(
              `relative group text-lg capitalize text-nowrap text-black transform transition-all duration-300 hover:text-secondary z-999`,
              menuState.services ? "text-secondary" : "text-black"
            )}
            onMouseEnter={() =>
              setMenuState({ ...initialMenuState, services: true })
            }
          >
            <p>services</p>
            <div
              // onMouseLeave={() => handleMenuToggle("services", false)}
              className={cn(
                `absolute -left-20 right-0 bg-white px-4 py-3 top-10 text-nowrap w-[225px] shadow-lg shadow-title border border-secondary overflow-auto`,
                menuState.services ? "block" : "hidden"
              )}
            >
              <ul className="w-full flex flex-col items-start justify-center gap-3">
                <li
                  className="w-full flex items-center justify-between gap-2 cursor-pointer"
                  onMouseEnter={() => handleMenuToggle("itServices", true)}
                >
                  <Link
                    href={"/it-security-assessment"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary"
                  >
                    iT security
                  </Link>
                  <ChevronRight className="text-black !w-5 !h-5" />
                </li>
                <li
                  className="w-full flex items-center justify-start cursor-pointer"
                  onMouseEnter={() => handleMenuToggle("itServices", false)}
                >
                  <Link
                    href={"/sap-services"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary"
                  >
                    SAP services
                  </Link>
                </li>
                <li className="w-full flex items-center justify-start cursor-pointer">
                  <Link
                    href={"/application-development"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary"
                  >
                    application development
                  </Link>
                </li>
                <li className="w-full flex items-center justify-start cursor-pointer">
                  <Link
                    href={"/software-testing-services"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary leading-5"
                  >
                    software testing /<br />
                    quality engineering
                  </Link>
                </li>
                <li className="w-full flex items-center justify-start cursor-pointer">
                  <Link
                    href={"/staff-augmentation-services"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary"
                  >
                    staff augmentation services
                  </Link>
                </li>
              </ul>
            </div>
            <div
              onMouseLeave={() => handleMenuToggle("itServices", false)}
              className={cn(
                `absolute left-[145px] right-0 bg-white px-4 py-3 top-10 text-nowrap w-[225px] shadow-lg shadow-title border border-secondary`,
                menuState.itServices ? "block" : "hidden"
              )}
            >
              <ul className="w-full flex flex-col items-start justify-center gap-3">
                <li className="w-full flex items-center justify-start cursor-pointer">
                  <Link
                    href={"/it-security-assessment"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary"
                  >
                    iT security assessment
                  </Link>
                </li>
                <li className="w-full flex items-center justify-start cursor-pointer">
                  <Link
                    href={"/security-compliance"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary"
                  >
                    security compliance
                  </Link>
                </li>
                <li className="w-full flex items-center justify-start cursor-pointer">
                  <Link
                    href={"/penetration-testing"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary"
                  >
                    penetration testing
                  </Link>
                </li>
                <li className="w-full flex items-center justify-start cursor-pointer">
                  <Link
                    href={"/vulnerability-assessment"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary"
                  >
                    vulnerability assessment
                  </Link>
                </li>
                <li className="w-full flex items-center justify-start cursor-pointer">
                  <Link
                    href={"/application-security-testing"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary"
                  >
                    application security testing
                  </Link>
                </li>
                <li className="w-full flex items-center justify-start cursor-pointer">
                  <Link
                    href={"/source-code-review"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary"
                  >
                    source code review
                  </Link>
                </li>
                <li className="w-full flex items-center justify-start cursor-pointer">
                  <Link
                    href={"/ict-environment-audit"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary"
                  >
                    ICT environment audit
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          {/* <li
            className={cn(
              `relative group text-lg capitalize text-nowrap text-black transform transition-all duration-300 hover:text-secondary z-999`,
              menuState.products ? "text-secondary" : "text-black"
            )}
            onMouseEnter={() =>
              setMenuState({ ...initialMenuState, products: true })
            }
          >
            <p>products</p>
            <div
              // onMouseLeave={() => handleMenuToggle("services", false)}
              className={cn(
                `absolute -left-16 right-0 bg-white px-4 py-3 top-10 text-nowrap w-[200px] shadow-lg shadow-title border border-secondary overflow-auto`,
                menuState.products ? "block" : "hidden"
              )}
            >
              <ul className="w-full flex flex-col items-start justify-center gap-3">
                <li
                  className="w-full flex items-center justify-between gap-2 cursor-pointer"
                  onMouseEnter={() =>
                    setMenuState({
                      ...menuState,
                      banking: true,
                      others: false,
                    })
                  }
                >
                  <Link href={"/core-banking-system"} className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary">
                    banking
                  </Link>
                  <ChevronRight className="text-black !w-5 !h-5" />
                </li>
                <li
                  className="w-full flex items-center justify-between gap-2 cursor-pointer"
                  onMouseEnter={() =>
                    setMenuState({
                      ...menuState,
                      banking: false,
                      others: true,
                    })
                  }
                >
                  <Link href={"/other-products"} className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary">
                    others
                  </Link>
                  <ChevronRight className="text-black !w-5 !h-5" />
                </li>
              </ul>
            </div>
            <div
              onMouseLeave={() => handleMenuToggle("banking", false)}
              className={cn(
                `absolute left-[135px] right-0 bg-white px-4 py-3 top-10 text-nowrap w-[225px] shadow-lg shadow-title border border-secondary`,
                menuState.banking ? "block" : "hidden"
              )}
            >
              <ul className="w-full flex flex-col items-start justify-center gap-3">
                <li className="w-full flex items-center justify-start cursor-pointer">
                  <Link
                    href={"/core-banking-system"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary"
                  >
                    core banking system
                  </Link>
                </li>
                <li className="w-full flex items-center justify-start cursor-pointer">
                  <Link
                    href={"/loan-software"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary"
                  >
                    loan software
                  </Link>
                </li>
                <li className="w-full flex items-center justify-start cursor-pointer">
                  <Link
                    href={"/remittance-management-system"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary"
                  >
                    remittance management
                    <br /> system
                  </Link>
                </li>
                <li className="w-full flex items-center justify-start cursor-pointer">
                  <Link
                    href={"/internet-banking-system"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary"
                  >
                    internet banking system
                  </Link>
                </li>
                <li className="w-full flex items-center justify-start cursor-pointer">
                  <Link
                    href={"/mobile-banking"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary"
                  >
                    mobile banking
                  </Link>
                </li>
              </ul>
            </div>
            <div
              onMouseLeave={() => handleMenuToggle("others", false)}
              className={cn(
                `absolute left-[135px] right-0 bg-white px-4 py-3 top-[80px] text-nowrap w-[225px] shadow-lg shadow-title border border-secondary`,
                menuState.others ? "block" : "hidden"
              )}
            >
              <ul className="w-full flex flex-col items-start justify-center gap-3">
                <li className="w-full flex items-center justify-start cursor-pointer">
                  <Link
                    href={"/hrms-package"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary"
                  >
                    HRMS package
                  </Link>
                </li>
              </ul>
            </div>
          </li> */}
          <li
            className={cn(
              `relative group text-lg capitalize text-nowrap text-black transform transition-all duration-300 hover:text-secondary z-999`,
              menuState.reachUs ? "text-secondary" : "text-black"
            )}
            onMouseEnter={() =>
              setMenuState({ ...initialMenuState, reachUs: true })
            }
          >
            <p>reach us</p>
            <div
              // onMouseLeave={() => handleMenuToggle("services", false)}
              className={cn(
                `absolute -left-10 right-0 bg-white px-4 py-3 top-10 text-nowrap w-[150px] shadow-lg shadow-title border border-secondary overflow-auto`,
                menuState.reachUs ? "block" : "hidden"
              )}
            >
              <ul className="w-full flex flex-col items-start justify-center gap-3">
                <li className="w-full flex items-center justify-start cursor-pointer">
                  <Link
                    href={"/join-us"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary"
                  >
                    join us
                  </Link>
                </li>
                <li className="w-full flex items-center justify-start cursor-pointer">
                  <Link
                    href={"/contact"}
                    className="text-black text-base capitalize text-nowrap transform transition-all duration-300 hover:text-secondary leading-5"
                  >
                    contact us
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className=" w-[10px] "></div>

        <Sheet open={isSheetOpen} onOpenChange={toggleSheet}>
          {" "}
          {/* Use the state to control open/close */}
          <SheetTrigger className="block lg:hidden" onClick={toggleSheet}>
            {" "}
            {/* Toggle the state when clicked */}
            <Menu className="cursor-pointer h-[1.5rem] w-[1.5rem]  md:h-[1.75rem] md:w-[1.75rem]" />
          </SheetTrigger>
          <SheetContent className="bg-white w-full overflow-y-auto">
            <SheetHeader className="hidden">
              <SheetTitle>Are you absolutely sure?</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col items-start justify-center gap-10">
              <Link
                href={"/"}
                className="flex flex-row items-center justify-center gap-2"
                onClick={closeSheet}
              >
                <Image
                  src={"/images/logo.jpg"}
                  alt="Logo"
                  width={0}
                  height={0}
                  className="w-[6rem] h-[3rem] md:h-[4rem] rounded-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer"
                  unoptimized
                  quality={100}
                />
                {/* <p className="text-xl italic text-nowrap">QODES Systems</p> */}
              </Link>
              <div className="flex flex-col items-start justify-center gap-6 px-6">
                <div className="flex flex-col items-start justify-center gap-4">
                  <Link
                    href={"/"}
                    className="capitalize text-black text-lg cursor-pointer"
                    onClick={closeSheet}
                  >
                    home
                  </Link>
                </div>
                <div className="flex flex-col items-start justify-center gap-4">
                  <Link
                    href={"/about"}
                    className="capitalize text-black text-lg cursor-pointer"
                    onClick={closeSheet}
                  >
                    about us
                  </Link>
                </div>
                <div className="flex flex-col items-start justify-center gap-4">
                  <p className="capitalize text-black text-lg cursor-pointer">
                    core banking system
                  </p>
                  <Link
                    href={"/sap-core-banking"}
                    className="text-lg text-black capitalize pl-[2rem] cursor-pointer"
                    onClick={closeSheet}
                  >
                    sAP Core Banking
                  </Link>
                  <Link
                    href={"/temenos-t24-core-banking"}
                    className="text-lg text-black capitalize pl-[2rem] cursor-pointer"
                    onClick={closeSheet}
                  >
                    Temenos T24 Core Banking
                  </Link>
                  <Link
                    href={"/qodes-core-banking-system"}
                    className="text-lg text-black capitalize pl-[2rem] cursor-pointer"
                    onClick={closeSheet}
                  >
                    Qodes Core Banking System
                  </Link>
                </div>

                <div className="flex flex-col items-start justify-center gap-4">
                  <p className="capitalize text-black text-lg">services</p>
                  <Link
                    href={"/it-security-assessment"}
                    className="text-lg text-black capitalize pl-[2rem]"
                    onClick={closeSheet}
                  >
                    IT Security
                  </Link>
                  <Link
                    href={"/it-security-assessment"}
                    className="text-lg text-black capitalize pl-[4rem]"
                    onClick={closeSheet}
                  >
                    IT security assessment
                  </Link>
                  <Link
                    href={"/security-compliance"}
                    className="text-lg text-black capitalize pl-[4rem]"
                    onClick={closeSheet}
                  >
                    security compliance
                  </Link>
                  <Link
                    href={"/penetration-testing"}
                    className="text-lg text-black capitalize pl-[4rem]"
                    onClick={closeSheet}
                  >
                    penetration testing
                  </Link>
                  <Link
                    href={"/vulnerability-assessment"}
                    className="text-lg text-black capitalize pl-[4rem]"
                    onClick={closeSheet}
                  >
                    Vulnerability assessment
                  </Link>
                  <Link
                    href={"/application-security-testing"}
                    className="text-lg text-black capitalize pl-[4rem]"
                    onClick={closeSheet}
                  >
                    application security testing
                  </Link>
                  <Link
                    href={"/source-code-review"}
                    className="text-lg text-black capitalize pl-[4rem]"
                    onClick={closeSheet}
                  >
                    source code review
                  </Link>
                  <Link
                    href={"/ict-environment-audit"}
                    className="text-lg text-black capitalize pl-[4rem]"
                    onClick={closeSheet}
                  >
                    ICT environment audit
                  </Link>
                  <Link
                    href={"/sap-services"}
                    className="text-lg text-black capitalize pl-[2rem]"
                    onClick={closeSheet}
                  >
                    SAP Services
                  </Link>
                  <Link
                    href={"/application-development"}
                    className="text-lg text-black capitalize pl-[2rem]"
                    onClick={closeSheet}
                  >
                    application development
                  </Link>
                  <Link
                    href={"/software-testing-services"}
                    className="text-lg text-black capitalize pl-[2rem]"
                    onClick={closeSheet}
                  >
                    software testing / quality engineering
                  </Link>
                  <Link
                    href={"/staff-augmentation-services"}
                    className="text-lg text-black capitalize pl-[2rem]"
                    onClick={closeSheet}
                  >
                    staff augmentation services
                  </Link>
                </div>
                {/* <div className="flex flex-col items-start justify-center gap-4">
                  <p className="capitalize text-black text-lg">products</p>
                  <p className="capitalize text-black text-lg pl-[2rem]">
                    banking
                  </p>
                  <Link
                    href={"/core-banking-system"}
                    className="capitalize text-black text-lg pl-[4rem] cursor-pointer"
                    onClick={closeSheet}
                  >
                    core banking system
                  </Link>
                  <Link
                    href={"/loan-software"}
                    className="capitalize text-black text-lg pl-[4rem] cursor-pointer"
                    onClick={closeSheet}
                  >
                    loan software
                  </Link>
                  <Link
                    href={"/remittance-management-system"}
                    className="capitalize text-black text-lg pl-[4rem] cursor-pointer"
                    onClick={closeSheet}
                  >
                    remittance management system
                  </Link>
                  <Link
                    href={"/internet-banking-system"}
                    className="capitalize text-black text-lg pl-[4rem] cursor-pointer"
                    onClick={closeSheet}
                  >
                    internet banking system
                  </Link>
                  <Link
                    href={"/mobile-banking"}
                    className="capitalize text-black text-lg pl-[4rem] cursor-pointer"
                    onClick={closeSheet}
                  >
                    mobile banking
                  </Link>
                  <p className="capitalize text-black text-lg pl-[2rem]">
                    others
                  </p>
                  <Link
                    href={"/hrms-package"}
                    className="capitalize text-black text-lg pl-[4rem] cursor-pointer"
                    onClick={closeSheet}
                  >
                    HRMS package
                  </Link>
                </div> */}
                <div className="flex flex-col items-start justify-center gap-4">
                  <p
                    className="capitalize text-black text-lg cursor-pointer"
                    onClick={closeSheet}
                  >
                    reach us
                  </p>
                  <Link
                    href={"/join-us"}
                    className="text-lg text-black capitalize pl-[2rem]"
                    onClick={closeSheet}
                  >
                    join us
                  </Link>
                  <Link
                    href={"/contact"}
                    className="text-lg text-black capitalize pl-[2rem]"
                    onClick={closeSheet}
                  >
                    contact
                  </Link>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;

// {/* <NavigationMenu>
// <NavigationMenuList>
//   {/* Main Dropdown */}
//   <NavigationMenuItem className="relative">
//     <NavigationMenuTrigger className="text-lg capitalize text-nowrap">
//       <Link href={"/"}>Home</Link>
//     </NavigationMenuTrigger>
//     <NavigationMenuContent className="absolute bg-white h-fit px-4 py-3 flex flex-col items-start justify-center gap-3 shadow-lg z-999">
//       <ul className="w-fit h-fit flex flex-col items-start justify-center gap-3">
//         <li>
//           <NavigationMenuLink asChild>
//             <Link
//               className="outline-none focus:shadow-md capitalize text-lg text-black text-nowrap transform transition-all hover:text-secondary"
//               href="/about"
//             >
//               about us
//             </Link>
//           </NavigationMenuLink>
//         </li>
//       </ul>
//     </NavigationMenuContent>
//   </NavigationMenuItem>
//   <NavigationMenuItem className="relative">
//     <NavigationMenuTrigger className="text-lg capitalize text-nowrap">
//       <Link href={"/"}>services</Link>
//     </NavigationMenuTrigger>
//     <NavigationMenuContent className="absolute bg-white h-fit px-4 py-3 flex flex-col items-start justify-center gap-3 shadow-lg z-999">
//       <ul className="w-[400px] h-fit flex flex-col items-start justify-center gap-3">
//         <li>
//           <NavigationMenuLink asChild>
//             <Link
//               className="outline-none focus:shadow-md capitalize text-lg text-black text-nowrap transform transition-all hover:text-secondary"
//               href="/about"
//             >
//               iT security
//             </Link>
//           </NavigationMenuLink>
//         </li>
//         <li>
//           <NavigationMenuLink asChild>
//             <Link
//               className="outline-none focus:shadow-md capitalize text-lg text-black text-nowrap transform transition-all hover:text-secondary"
//               href="/about"
//             >
//               iT infrastructure services
//             </Link>
//           </NavigationMenuLink>
//         </li>
//       </ul>
//     </NavigationMenuContent>
//   </NavigationMenuItem>
//   <NavigationMenuItem>
//     <NavigationMenuTrigger className="text-lg capitalize">
//       Product
//     </NavigationMenuTrigger>
//   </NavigationMenuItem>
//   <NavigationMenuItem>
//     <NavigationMenuTrigger className="text-lg capitalize">
//       Join us
//     </NavigationMenuTrigger>
//   </NavigationMenuItem>
//   <NavigationMenuItem>
//     <NavigationMenuTrigger className="text-lg capitalize">
//       Contact
//     </NavigationMenuTrigger>
//   </NavigationMenuItem>
// </NavigationMenuList>
// <NavigationMenuViewport />
// </NavigationMenu> */}
