import React from "react";
// import { X } from "lucide-react";
import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";
import { SheetProvider } from "../providers/sheet-provider";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <SheetProvider>
      <div className="w-full min-h-screen bg-primary flex flex-col items-center justify-start gap-0">
        {/* <div className="h-[3rem] w-full bg-secondary text-base px-2 md:px-4 lg:px-[4rem] xl:px-[8rem] flex flex-row items-center justify-between gap-6 overflow-hidden">
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="uppercase text-sm py-1 px-3 bg-background-light text-primary-light border rounded-full shadow-sm shadow-primary-light">
            new
          </div>
          <p className="text-primary-light">
            Use this banner to inform your users of something important.
          </p>
        </div>
        <div className="text-primary-light cursor-pointer">
          <X />
        </div>
      </div> */}
        <Navbar />
        {children}
        <div className="w-full h-[10px] bg-secondary">

      </div>
        <Footer />
      </div>
    </SheetProvider>
  );
};

export default HomeLayout;
