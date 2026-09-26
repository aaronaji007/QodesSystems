import Image from "next/image";
import React from "react";

const InternetBankingSystemPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-0">
      <div className="w-full bg-secondary flex items-center justify-start py-4 px-12">
        <p className="text-start capitalize text-2xl text-white">
          internet banking system
        </p>
      </div>
      <div className="w-[90%] h-full flex flex-col lg:flex-row items-stretch justify-center gap-6">
        <Image
          src={
            "https://qodestechnologies.com/wp-content/uploads/2020/07/internet-banking2.jpg"
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
            <span className="text-secondary">QODES Systems </span>
            provides Internet banking system that provides the facility to the
            customer to conduct the financial and non-financial transactions
            from his net banking account. The user can transfer funds from his
            account to other accounts of the same bank/different bank using a
            website or an online application. The customer uses a resource and a
            medium to conduct financial transactions. The resource that a
            customer uses might be an electronic device like a computer, a
            laptop, or a mobile phone. The internet is the medium that makes the
            technology possible.
          </p>
          <p className="text-wrap text-black text-[17px] leading-6">
            The facility of internet banking is provided through banks and the
            customer must be an account holder with any bank to get the facility
            available for him/her.
          </p>
          <p className="text-wrap text-black text-[17px] leading-6">
            Customers need not visit their bank’s branch office to avail each
            and every small service. Not all account holders get access to
            internet banking. If you would like to use internet banking
            services, you must register for the facility while opening the
            account or later. You have to use the registered customer ID and
            password to log into your internet banking account.
          </p>
        </div>
      </div>
      <div className="w-[90%] flex flex-col items-start justify-center gap-4 pt-2 pb-4">
        <h2 className="uppercase text-secondary font-bold">
          QODES SYSTEMS ONLINE BANKING FEATURES:
        </h2>
        <ol className="text-base leading-7 list-disc pl-4">
          <li>Check the account statement online.</li>
          <li>Open a fixed deposit account.</li>
          <li>Pay utility bills such as water bill and electricity bill.</li>
          <li>Make merchant payments.</li>
          <li>Transfer funds.</li>
          <li>Order for a cheque book.</li>
          <li>Buy general insurance.</li>
          <li>Recharge prepaid mobile/DTH.</li>
        </ol>
        <h2 className="uppercase text-secondary font-bold">
          QODES SYSTEMS INTERNET BANKING ADVANTAGES:
        </h2>
        <p className="text-base text-wrap leading-6">
          The advantages of internet banking are as follows:
        </p>
        <ol className="text-base leading-7 list-disc pl-4">
          <li>
            <span className="font-bold">Availability:</span>
            You can avail the banking services round the clock throughout the
            year. Most of the services offered are not time-restricted; you can
            check your account balance at any time and transfer funds without
            having to wait for the bank to open.
          </li>
          <li>
            <span className="font-bold">Easy to Operate:</span>
            Using the services offered by online banking is simple and easy.
            Many find transacting online a lot easier than visiting the branch
            for the same.
          </li>
          <li>
            <span className="font-bold">Convenience:</span>
            You need not leave your chores behind and go stand in a queue at the
            bank branch. You can complete your transactions from wherever you
            are. Pay utility bills, recurring deposit account instalments, and
            others using online banking.
          </li>
          <li>
            <span className="font-bold">Time Efficient:</span>
            You can complete any transaction in a matter of a few minutes via
            internet banking. Funds can be transferred to any account within the
            country or open a fixed deposit account within no time on
            netbanking.
          </li>
          <li>
            <span className="font-bold">Activity Tracking:</span>
            When you make a transaction at the bank branch, you will receive an
            acknowledgement receipt. There are possibilities of you losing it.
            In contrast, all the transactions you perform on a bank’s internet
            banking portal will be recorded. You can show this as proof of the
            transaction if need be. Details such as the payee’s name, bank
            account number, the amount paid, the date and time of payment, and
            remarks if any will be recorded as well.
          </li>
        </ol>
        <h2 className="uppercase text-secondary font-bold">
          QODES SYSTEMS SECURITY INTERNET BANKING:
        </h2>
        <p className="text-base text-wrap leading-6">
        <span className="text-secondary">QODES Systems </span> Internet banking is conducted using web browsers with SSL enabled websites, so encryption is not an important issue. It also uses signature verification as a base. Under this method, the transactions done by the customer are signed and encrypted digitally. The smart cards or any other memory storable medium can be used to store keys for signature generation and encryption.
        </p>
        <p className="text-base text-wrap leading-6">
        <span className="font-bold">Use of PIN/TANs – </span> Under this system, a PIN is used to login and TANs are used to conduct transactions. TANs are one time passwords. TAN is sent to the customer via SMS on registered mobile number that corresponds with the login user id. It is valid for a short time frame.
        </p>
      </div>
    </div>
  );
};

export default InternetBankingSystemPage;
