import Image from "next/image";
import React from "react";

const SourceCodeReviewPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-0">
      <div className="w-full bg-secondary flex items-center justify-start py-4 px-12">
        <p className="text-start capitalize text-2xl text-white">
          Source Code review
        </p>
      </div>
      <div className="w-[90%] h-full flex flex-col lg:flex-row items-stretch justify-center gap-6">
        <Image
          src={
            "https://qodestechnologies.com/wp-content/uploads/2020/06/source-code-review.jpg"
          }
          alt="img"
          className="w-full lg:w-[45%] h-[300px] object-full"
          quality={100}
          unoptimized
          draggable={false}
          width={0}
          height={0}
        />
        <div className="flex-1 h-full flex flex-col items-start justify-center pt-8 gap-4">
          <p className="text-wrap text-black text-[17px] leading-6">
            <span className="text-secondary"> QODES Systems </span> provides
            customized secure code review services to help you identify and fix
            security vulnerabilities in your application at the development
            stage. A number of security loopholes in both web and mobile apps
            originate right when the code is being written and developers either
            ignore or are unaware of secure coding practices. A secure code
            review is perhaps a better investment of your time and resources
            than penetration testing is and can help you fix basic flaws when it
            is still quick and easy to do so, and before any major damage has
            been done. While a number of app development companies use automated
            solutions to scan their code, these tools are often not adequate to
            detect and address all security issues in application code.
          </p>
          <p className="text-wrap text-black text-[17px] leading-6">
            Our code review team has years of experience both creating
            applications and conducting secure code reviews. We use a
            combination of automated and manual reviews to find and suggest
            fixes for coding errors that may eventually lead to serious security
            issues.
          </p>
        </div>
      </div>
      <div className="w-[90%] flex flex-col items-start justify-center gap-4 pt-2 pb-4">
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <h2 className="uppercase text-secondary font-bold underline">
            OUR PROCESS
          </h2>
          <p className="text-wrap text-black text-[17px] leading-6">
            <span className="text-secondary"> QODES Systems </span> review
            methods are designed to inspect the loops in your application code.
            Thus, no compromises are made while deployment of the application.
          </p>
        </div>
        <p className="text-wrap text-black text-[17px] leading-6">
          Our reviewers are expert in securing crucial data storage and suggest
          solutions for your coders that has more detailed checks to find all
          instances of common vulnerabilities.
        </p>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <h2 className="uppercase text-secondary">Application Logic</h2>
          <p className="text-wrap text-black text-[17px] leading-6">
            We will start by reviewing the coding practices and guidelines you
            follow, and suggest modifications if necessary. Our reviewers will
            then meet your development team to understand the application under
            development, focusing on its security design and architecture.
          </p>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <h2 className="uppercase text-secondary">Code Review</h2>
          <p className="text-wrap text-black text-[17px] leading-6">
            The next step is the actual deep dive into the application code to
            carefully scan the security-specific parts of it. These include
            functions that handle user authentication, session management, and
            validation of data. We also look for poor coding techniques that may
            make your application more vulnerable to attacks.
          </p>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <h2 className="uppercase text-secondary">Open-Source Analysis</h2>
          <p className="text-wrap text-black text-[17px] leading-6">
            If you are using third-party frameworks and libraries to develop
            your app, we will look at these frameworks and try to identify any
            security issues that they may introduce. With their years of
            experience reviewing code for vulnerabilities, our reviewers can
            quickly identify common flaws found in the most popular third-party
            frameworks, and help you plan and implement workarounds.
          </p>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <h2 className="uppercase text-secondary">Review Report</h2>
          <p className="text-wrap text-black text-[17px] leading-6">
            The final step in the review process is the preparation of a
            comprehensive source code review report detailing all the
            vulnerabilities that were identified during the process, and the
            remediation steps to fix these flaws. In addition to these, the
            report will include an analysis of your coding practices and
            suggestions to improve or modify these with a focus on cyber defense
            and security.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SourceCodeReviewPage;
