"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
// import Map from "@/components/global/map";
import dynamic from 'next/dynamic';

// Dynamically import the map component
const Map = dynamic(() => import('../../../../components/global/map'), { ssr: false });

const ContactUsComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For displaying the status of the form submission

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Loading..."); // Clear the status message on form submission

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully!");
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center gap-8 py-[4rem]">
      <div className="w-full bg-secondary py-[17px] flex items-center justify-center">
        <div className="w-[90%] h-fit text-start text-3xl text-white">
          Contact Us
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-[90%] h-fit flex flex-col lg:flex-row items-center justify-between lg:gap-0 gap-6"
      >
        <div className="w-full flex-1 h-fit flex flex-col items-start justify-center gap-6">
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <label htmlFor="name">Name (required)</label>
            <input
              title="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full lg:!w-[400px] h-full px-4 py-2 border-[1.5px] placeholder:text-title text-black bg-light-gray border-border text-dark-gray"
            />
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <label htmlFor="email">Email (required)</label>
            <input
              title="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full lg:!w-[400px] h-full px-4 py-2 border-[1.5px] placeholder:text-title text-black bg-light-gray border-border text-dark-gray"
            />
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <label htmlFor="phone">Phone</label>
            <input
              title="phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full lg:!w-[400px] h-full px-4 py-2 border-[1.5px] placeholder:text-title text-black bg-light-gray border-border text-dark-gray"
            />
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <label htmlFor="subject">Subject</label>
            <input
              title="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full lg:!w-[400px] h-full px-4 py-2 border-[1.5px] placeholder:text-title text-black bg-light-gray border-border text-dark-gray"
            />
          </div>
          <div className="w-full flex flex-col items-start justify-center gap-2">
            <label htmlFor="message">Your Message</label>
            <textarea
              title="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full lg:!w-[400px] h-[150px] px-4 py-2 border-[1.5px] placeholder:text-title text-black bg-light-gray border-border text-dark-gray"
            />
          </div>
          <Button
            type="submit"
            className="capitalize text-white bg-secondary transform transition-all duration-300 hover:bg-secondary-dark"
          >
            Send
          </Button>
          {status && <p>{status}</p>}
        </div>
        <div className="flex-1 flex flex-col items-center justify-center lg:gap-4 gap-12">
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <p className="text-base text-black">
              Email –{" "}
              <a href="mailto:sales@qodessystems.com" className="text-secondary">
                sales@qodessystems.com
              </a>
            </p>
            <a href="tel:+61249538556" className="text-base text-black">
              Phone - +61 457170962
            </a> 
          </div>
          <div className="flex-1 flex items-center justify-center !w-[400px] md:!w-[500px] lg:w-auto min-h-[250px] lg:min-h-[300px]">
            <Map />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUsComponent;
