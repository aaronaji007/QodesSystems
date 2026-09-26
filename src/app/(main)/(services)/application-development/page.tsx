"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

type contentType = {
  offShoreDevelopment: boolean;
  customAppDevelopment: boolean;
  mobileAppDevelopment: boolean;
};

const ApplicationDevelopmentPage = () => {
  const [isContentHidden, setIsContentHidden] = useState<contentType>({
    offShoreDevelopment: false,
    customAppDevelopment: false,
    mobileAppDevelopment: false,
  });

  const handleToggleContent = (key: keyof contentType, value: boolean) => {
    setIsContentHidden((prevValue) => ({
      ...prevValue,
      [key]: value,
    }));
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-0">
      <div className="w-full bg-secondary flex items-center justify-start py-4 px-12">
        <p className="text-start capitalize text-2xl text-white">
          application development
        </p>
      </div>
      <div className="w-[90%] h-full flex flex-col lg:flex-row items-stretch justify-center gap-6">
        <Image
          src={
            "https://images.unsplash.com/photo-1617471346061-5d329ab9c574?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <p className="text-wrap text-black text-[17px] leading-6">
            QODES strives to provide our customers exceptional Application
            Development Services and Web Development Services that assists them
            to stay a step ahead of their competitors. To achieve such kind of
            competency and excellence in service delivery, we use contemporary
            software development platforms, application development tools along
            with current project management techniques and software engineering
            methods. The wide array of Software Development Services we offer
            are-
          </p>
          <div className="w-full flex items-center justify-end py-4">
            <div className="relative w-[85%] flex flex-col items-start justify-center gap-6">
              <div className="w-full flex flex-col items-start justify-center gap-2">
                <div
                  className="flex flex-row items-center justify-center gap-2 cursor-pointer"
                  onClick={() =>
                    handleToggleContent(
                      "offShoreDevelopment",
                      !isContentHidden.offShoreDevelopment
                    )
                  }
                >
                  <div className="bg-black text-white">
                    {!isContentHidden["offShoreDevelopment"] ? (
                      <Plus className="p-1" />
                    ) : (
                      <Minus className="p-1" />
                    )}
                  </div>
                  <p className="text-black uppercase">
                    off shore development center of india
                  </p>
                </div>
                <div className="bg-title w-full h-[0.5px] my-2"></div>
                {isContentHidden["offShoreDevelopment"] && (
                  <div className="py-4 flex flex-col items-start justify-center gap-6">
                    <p className="text-wrap text-black text-[17px] leading-6">
                      Our Offshore Development Center is in Kochi, India. The
                      highly robust offshore delivery infrastructure helps us to
                      handle tremendous amount of work.
                    </p>
                    <p className="text-wrap text-black text-[17px] leading-6">
                      Advantages of choosing us for your outsourced project7
                    </p>
                    <ol className="text-base leading-7 list-disc pl-4">
                      <li>High Cost Savings</li>
                      <li>Faster time to market</li>
                      <li>Exceptional quality</li>
                      <li>Greater value</li>
                    </ol>
                    <p className="text-wrap text-black text-[17px] leading-6">
                      The engagement models we offer are also flexible
                    </p>
                    <ol className="text-base leading-7 list-disc pl-4">
                      <li>
                        <span className="font-bold">Time and Material – </span>{" "}
                        Projects with shifting range. Also, projects following
                        Agile Programming Methodologies also come under this
                        scope.
                      </li>
                      <li>
                        <span className="font-bold">
                          Fixed Time/Fixed Price –{" "}
                        </span>{" "}
                        Appropriate one to follow when the extent of the project
                        is clear, for eg: Rebuilding a desktop app on web.
                      </li>
                      <li>
                        <span className="font-bold">
                          Resource based billing –
                        </span>{" "}
                        This kind of billing model is put into use for projects
                        that require long term involvement and resource
                        requirements are sizable i.e. the kind of situation
                        where we can take advantage of economies of scale.
                      </li>
                      <li>
                        <span className="font-bold">Milestone Billing -</span>{" "}
                        This is implemented constantly for all projects more
                        than a couple of months in duration to reduce risks and
                        maximize cash-flow.
                      </li>
                      <li>
                        <span className="font-bold">Hourly billing –</span>{" "}
                        Smaller projects require resources for less than a
                        month. Such projects utilize hourly billing model (160
                        hrs/mo).
                      </li>
                    </ol>
                    <p className="text-wrap text-black text-[17px] leading-6">
                      The communication systems we utilize in our Development
                      Center are video conferencing, voip local access numbers.
                      Our team uses latest project management tools, Bug
                      trackers, and versioning systems. Our team of Software
                      Professional provide post development maintenance services
                      which are covered under SLA driven service delivery
                      systems.
                    </p>
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col items-start justify-center gap-2">
                <div
                  className="flex flex-row items-center justify-center gap-2 cursor-pointer"
                  onClick={() =>
                    handleToggleContent(
                      "customAppDevelopment",
                      !isContentHidden.customAppDevelopment
                    )
                  }
                >
                  <div className="bg-black text-white">
                    {!isContentHidden["customAppDevelopment"] ? (
                      <Plus className="p-1" />
                    ) : (
                      <Minus className="p-1" />
                    )}
                  </div>
                  <p className="text-black uppercase">
                    custom application development
                  </p>
                </div>
                <div className="bg-title w-full h-[0.5px] my-2"></div>
                {isContentHidden["customAppDevelopment"] && (
                  <div className="py-4 flex flex-col items-start justify-center gap-6">
                    <p className="text-wrap text-black text-[17px] leading-6">
                      At QODES, we have put together a well thought out strategy
                      (Business Analysis approach) to fully understand your
                      business and, guarantee that the application development
                      requirements are gauged in the most optimal way.
                    </p>
                    <p className="text-wrap text-black text-[17px] leading-6">
                      Custom Application Development- Is it right for your
                      business?
                    </p>
                    <p className="text-wrap text-black text-[17px] leading-6">
                      In between prepackaged software and custom platforms comes
                      Custom Application Development. Out of the many benefits
                      of Custom Application Development, flexibility is
                      something that stands out. Other business advantages are
                      IP rights, higher process management capabilities,
                      Integration with legacy systems, Made-to-order business
                      dashboards, expandability, ownership of code and great
                      amount of agility.
                    </p>
                    <p className="text-wrap text-black text-[17px] leading-6">
                      Custom Application Development with QODES
                    </p>
                    <p className="text-wrap text-black text-[17px] leading-6">
                      We have been highly successful while working with numerous
                      international customers, both onsite and offshore. We
                      understand our client’s needs, be it in terms of
                      communications and more often than not high level of
                      responsiveness.
                    </p>
                    <p className="font-semibold text-wrap text-black text-[17px] leading-6">
                      We offer the following services under Custom Application
                      Development:
                    </p>
                    <ol className="text-base leading-7 list-disc pl-4">
                      <li>Business Analysis and Requirements Gathering</li>
                      <li>Wire framing & Prototyping</li>
                      <li>Design & Web Development</li>
                      <li>
                        Rapid development using Agile methodologies & Test
                        Driven Development (TDD)
                      </li>
                      <li>Testing</li>
                      <li>Deployment on Cloud or Independent Servers</li>
                      <li>24×7 code & platform support</li>
                    </ol>
                    <h2 className="uppercase text-secondary font-bold">
                      Engagement Models
                    </h2>
                    <p className="text-base text-wrap leading-6">
                      The range of Engagement Models and performance driven
                      contracts we offer makes it possible for our clients to
                      maximize gains. This also helps us to minimize risks
                      inherent with off-shoring / outsourcing.
                    </p>
                    <h2 className="uppercase text-secondary font-bold">
                      Industry Knowledge
                    </h2>
                    <p className="text-base text-wrap leading-6">
                      We have expertise in delivering quality services to
                      industries ranging from HealthCare, Internet Service,
                      Datacenter, Hosting, Retail, E-commerce, Wellness &
                      Hospitality, Education, Advertisement & Analytics Gaming
                      and many more. Our highly experienced team of engineers
                      and proven strategies ensure that you get the correct
                      resources and processes that are superior in quality and
                      are effectively incorporated resulting in cost savings and
                      project success.
                    </p>
                    <h2 className="uppercase text-secondary font-bold">
                      Platforms
                    </h2>
                    <p className="text-base text-wrap leading-6">
                      The software we develop spans web, desktop and mobile
                      using the best and highly mature software development
                      stacks. Maintainability, less cost overall and, modularity
                      are the key benefits and this is achieved without
                      troubling the outcome.
                    </p>
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col items-start justify-center gap-2">
                <div
                  className="flex flex-row items-center justify-center gap-2 cursor-pointer"
                  onClick={() =>
                    handleToggleContent(
                      "mobileAppDevelopment",
                      !isContentHidden.mobileAppDevelopment
                    )
                  }
                >
                  <div className="bg-black text-white">
                    {!isContentHidden["mobileAppDevelopment"] ? (
                      <Plus className="p-1" />
                    ) : (
                      <Minus className="p-1" />
                    )}
                  </div>
                  <p className="text-black uppercase">
                    mobile application development
                  </p>
                </div>
                <div className="bg-title w-full h-[0.5px] my-2"></div>
                {isContentHidden["mobileAppDevelopment"] && (
                  <div className="py-4 flex flex-col items-start justify-center gap-6">
                    <p className="text-wrap text-black text-[17px] leading-6">
                      The model of agile development has been utilized in our
                      Mobile Application Development Services. It helps us to
                      swiftly build-up enterprise mobile web applications that
                      look really good on your user’s device.
                    </p>
                    <p className="text-wrap text-black text-[17px] leading-6">
                      The Mobile Application Development Services we offer are
                      for the following mobile platforms:
                    </p>
                    <ol className="text-base leading-7 list-disc pl-4 font-semibold">
                      <li>Android</li>
                      <li>iOS</li>
                    </ol>
                    <h2 className="uppercase text-secondary font-bold">
                      Android Application Development
                    </h2>
                    <p className="text-base text-wrap leading-6">
                      The android application developers we hire are highly
                      skillful and experienced. We develop powerful applications
                      that include gaming, security mobile solutions,
                      productivity applications, lifestyle applications,
                      enterprise business systems, entertainment, social
                      networking, scheduling systems and much more.
                    </p>
                    <h2 className="uppercase text-secondary font-bold">
                      The Advantage of developing Android app with Us
                    </h2>
                    <ol className="text-base leading-7 list-disc pl-4">
                      <li>Straightforward and engaging UI</li>
                      <li>High performance and short response time</li>
                      <li>Excellent Widgets</li>
                    </ol>
                    <h2 className="uppercase text-secondary font-bold">
                      iOS Application Development
                    </h2>
                    <p className="text-base text-wrap leading-6">
                      High speed app development, spectacular product quality
                      and reasonable development expenses makes us the absolute
                      best in iOS Application Development Services.
                    </p>
                    <h2 className="uppercase text-secondary font-bold">
                      We offer our clients
                    </h2>
                    <ol className="text-base leading-7 list-disc pl-4">
                      <li>Numerous development environments</li>
                      <li>Social sharing Apps and integration</li>
                      <li>iPhone and iPad game development</li>
                      <li>Exceptional and skillfully crafted UI</li>
                      <li>Top notch usability of Apps</li>
                    </ol>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDevelopmentPage;
