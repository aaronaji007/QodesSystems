"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const JoinUsComponent = () => {
  // const [fileName, setFileName] = useState(""); // State to store file name

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files ? event.target.files[0] : null; // Get the selected file
  //   if (file) {
  //     setFileName(file.name); // Update the state with the file name
  //   } else {
  //     setFileName(""); // Clear the state if no file is selected
  //   }
  // };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center gap-8 py-[4rem]">
      <div className="w-full bg-secondary py-[17px] flex items-center justify-center">
        <div className="w-[90%] h-fit text-start text-3xl text-white">
          Join Us
        </div>
      </div>
      <div className="w-[90%] h-fit flex flex-col lg:flex-row items-start justify-between lg:gap-0 gap-8">
        <div className="w-full flex-1 h-fit flex flex-col items-start justify-center gap-6">
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <label htmlFor="name">Name (required)</label>
            <input
              type="text"
              title="Full Name"
              placeholder=""
              name="name"
              className="w-full lg:!w-[400px] h-full px-4 py-2 border-[1.5px] placeholder:text-title text-black bg-light-gray border-border text-dark-gray"
            />
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <label htmlFor="email">Email (required)</label>
            <input
              type="text"
              title="Email"
              placeholder=""
              name="email"
              className="w-full lg:!w-[400px] h-full px-4 py-2 border-[1.5px] placeholder:text-title text-black bg-light-gray border-border text-dark-gray"
            />
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              title="subject"
              placeholder=""
              name="subject"
              className="w-full lg:!w-[400px] h-full px-4 py-2 border-[1.5px] placeholder:text-title text-black bg-light-gray border-border text-dark-gray"
            />
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <label htmlFor="message">Your Message</label>
            <textarea
              title="message"
              placeholder=""
              name="message"
              className="w-full lg:!w-[400px] h-[150px] px-4 py-2 border-[1.5px] placeholder:text-title text-black bg-light-gray border-border text-dark-gray"
            />
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <label htmlFor="file">Resume Upload</label>
            <input
              title="file"
              id="file-upload"
              type="file"
              name="file"
              // className="hidden"
              // onChange={handleFileChange} // Handle file change
            />
          </div>
          <Button className="capitalize text-white bg-secondary transform transition-all duration-300 hover:bg-secondary-dark">
            Send
          </Button>
        </div>
        <div className="flex-1 flex flex-col items-start justify-center gap-4">
          <p className="text-base text-black ">
            Email –{" "}
            <a href="mailto:joinus@qodessystems.com" className="text-secondary"> joinus@qodessystems.com</a>
          </p>
          <p className="text-base text-black ">
          Alternate Email - {" "}
            <a className="text-secondary" href="mailto:careers@qodessystems.com">  careers@qodessystems.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinUsComponent;
