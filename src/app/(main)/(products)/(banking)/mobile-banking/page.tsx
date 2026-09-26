import Image from "next/image";
import React from "react";

const MobileBankingSystemPage = () => {
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
            "https://qodestechnologies.com/wp-content/uploads/2020/07/mobile-banking.png"
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
            Qodes Systems provide mobile banking services to their clients
            in the ways listed here:
          </p>
          <h2 className="uppercase text-secondary font-bold">
            QODES SYSTEMS MOBILE BANKING SERVICES
          </h2>
          <p className="text-wrap text-black text-[17px] leading-6">
            <span className="text-secondary">QODES Systems </span>
            provide mobile banking services to their clients in the ways listed
            here:
          </p>
          <ol className="text-base leading-7 list-disc pl-4">
            <li>Mobile Banking over Wireless Application Protocol (WAP)</li>
            <li>Mobile Banking over SMS (also known as SMS Banking)</li>
          </ol>
          <p className="text-wrap text-black text-[17px] leading-6">
            These mobile banking services have been discussed in detail here:
          </p>
          <h2 className="uppercase text-secondary font-bold">
            QODES SYSTEMS MOBILE BANKING OVER WAP
          </h2>
          <p className="text-wrap text-black text-[17px] leading-6">
            The customers can download the mobile application of the concerned
            bank on their smartphones and then use it to avail
          </p>
        </div>
      </div>
      <div className="w-[90%] flex flex-col items-start justify-center gap-4 pt-2 pb-4">
        <p className="text-wrap text-black text-[17px] leading-6">
          various services provided by the bank. They need to register for
          mobile banking separately and receive their login credentials to use
          mobile banking applications, simply known as mobile apps. Most banks
          provide mobile apps for iOS and Android devices.
        </p>
        <p className="text-wrap text-black text-[17px] leading-6">
          Different banks offer mobile apps to their customers to help them
          carry out common banking transactions conveniently. Some banks offer
          different mobile apps for different banking services. For instance,
          the bank may offer an e-Passbook app that only serves the purpose of
          account balance check since the app acts like a digital passbook and
          there is another mobile app for other services such as funds transfer,
          bill payment, and more in addition to balance check. The customers can
          choose to download one or more apps provided by the bank to avail
          mobile banking services. Some of the major mobile banking services
          have been mentioned here:
        </p>
        <ol className="text-base leading-7 list-disc pl-4">
          <li>
            <span className="font-bold">Account Access:</span>
            Customers can easily access their bank account using their
            smartphones by downloading the mobile banking All they need is to
            use their User ID and password to access their accounts. They can
            then carry out different banking transactions instantly.
          </li>
          <li>
            <span className="font-bold">Balance Enquiry:</span>
            One of the main reasons why people used to visit the bank was to
            keep their passbooks updated so that they always knew their current
            balance. When the balance enquiry service was offered through ATM,
            people started using it instead of visiting the bank. Now, it is
            even more convenient to check account balance using the mobile
            banking
          </li>
          <li>
            <span className="font-bold">e-Passbook:</span>
            Some banks offer a separate digital passbook mobile app that
            customers can download to check their previous transactions and the
            latest account balance while others just have this service as a part
            of their main mobile banking There is no need to visit a bank or ATM
            for balance enquiry or account statement.
          </li>
          <li>
            <span className="font-bold">Account Statement:</span>
            If you want to check your bank account statement, you no longer need
            to go to the bank or ATM since you can get the statement on the
            mobile app of your bank. Since there are only a few free ATM
            transactions available to everyone these days, it is better to avail
            them only for cash withdrawal; account balance or account statement
            should be checked using the mobile app. You can also download your
            account statement in PDF format and save it on your phone.
          </li>
          <li>
            <span className="font-bold">Fund Transfer: </span>
            If internet banking and mobile banking have made the lives of people
            any easier, it is mainly because of this service. People can now
            transfer money from their bank account to an account in their own
            bank or another bank easily. They may have to pay a nominal charge
            to carry out interbank transfers but intra-bank transfers are
            usually free. IMPS, NEFT or RTGS transactions can also be carried
            out easily using mobile apps.
          </li>
          <li>
            <span className="font-bold">Bill Payment: </span>
            Mobile banking has made it easy to pay your mobile, credit card or
            utility bills. You can even schedule payments on a certain day of
            the month so that you do not have to worry about the payments. There
            is no need to stand in long queues to pay your phone bills, credit
            card bills, etc.
          </li>
          <li>
            <span className="font-bold">Branch Locator: </span>
            If you are in a new city or area, you may need to find a branch of
            your bank then you can easily use the mobile banking app to find it.
            Most banks have a ‘Branch Locator’ that you can use to find the
            nearest branch.
          </li>
          <li>
            <span className="font-bold">ATM Locator: </span>
            When you are in a new city or area, you might want to withdraw cash
            from an ATM. The easiest way to find an ATM of your bank is to open
            your mobile banking app and go to the “ATM Locator.” You will be
            able to find the address and exact location of the ATM within your
            vicinity.
          </li>
          <li>
            <span className="font-bold">Requests: </span>
            There is no need to visit the bank to request a cheque book, new
            debit card, credit card, duplicate debit card, etc. since you can do
            so easily using the mobile app. Most banks also offer the service to
            hotlist or block a debit or credit card in the case of loss or
            theft.
          </li>
        </ol>
        <h2 className="uppercase text-secondary font-bold">
          QODES SYSTEMS MOBILE BANKING OVER SMS
        </h2>
        <p className="text-base text-wrap leading-6">
          Most banks offer mobile banking services over SMS. The customers need
          to sign up for this service, known as SMS Banking, by registering
          their mobile number. Then, they can send SMS to the bank to inquire
          about their account balance, check the mini account statement, etc.
          The bank then replies with an SMS that contains the information
          requested by the customer.
        </p>
        <p className="text-base text-wrap leading-6">
          The customers do not need to own a smartphone or internet access to
          avail SMS banking services. Banks have a specific phone number
          registered and an SMS format that the customers need to follow to
          avail of this service.
        </p>
        <p className="text-base text-wrap leading-6">
          For instance, to check the available balance in their account, they
          may have to send an SMS in the format: AVAIL BAL XXXX where XXXX is
          the last 4 digits of the account number. The bank replies with an SMS
          with the current available balance in the account.
        </p>
        <p className="text-base text-wrap leading-6">
          It is important to note here that the mobile number registered with
          the bank and the one you use to send the SMS needs to be same to avail
          this service.
        </p>
        <h2 className="uppercase text-secondary font-bold">
          QODES SYSTEMS MOBILE BANKING FEATURES & BENEFITS
        </h2>
        <p className="text-base text-wrap leading-6">
          There are plenty of reasons why mobile banking has gained so much
          popularity ever since it was introduced in India. Here are a few
          features and benefits of mobile banking:
        </p>
        <ol className="text-base leading-7 list-disc pl-4">
          <li>
            One of the main benefits of mobile banking is the convenience of
            having banking services at your fingertips. There is no need to go
            to a bank or ATM and wait for the bank to open in order to check
            your account balance, transfer money, pay your bills or even see
            your account statement. You can do it all using your mobile phone.
            Fund transfer transactions may complete when the banks are open but
            you can check your account balance or get account statement
            irrespective of the time or day.
          </li>
          <li>
            Banks know that everyone does not have access to the internet and
            that is why they offer mobile banking services to their customers
            over SMS and USSD. People who own smartphones and have access to the
            internet can download and use the bank’s mobile apps while others
            can use the mobile banking SMS and USSD services. The customers only
            need to use the right SMS format to avail SMS banking services and
            right prefix for USSD services.
          </li>
          <li>
            Your bank account and your personal details are totally safe if you
            use mobile banking The bank will give you a set of login credentials
            which you can use to sign into your account and carry out the
            transactions. These login credentials are passed on to you securely
            and since you are the only one who knows your login ID and password,
            your account is always safe. Most banks allow you to enable two-step
            verification where you can only carry out banking transactions if
            you enter the One-Time Password (OTP) sent to your registered mobile
            number.
          </li>
          <li>
            Most people want to avail mobile banking services but think that it
            will cost them a lot. However, they will be delighted to find out
            that banks offer these services for free. You do not need to pay any
            extra charges to register for mobile banking Unlike ATM transactions
            where you get a limited number of free transactions, you can check
            your account statements, balance or pay your bills as many times as
            you want without paying any charges. After the implementation of
            GST, you only have to pay a nominal charge to transfer funds or pay
            your bills.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default MobileBankingSystemPage;
