import React from "react";
import logo from "@/public/E 1.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#407BFF]">
      <div className="w-[500px] bg-[white] [box-shadow:0px_7px_10px_6px_#00000033] rounded-[10px] overflow-hidden mx-[0] my-[50px] px-[20px] py-[30px]">
        <form action="">
          <div className="flex gap-[20px] items-center justify-start">
            <img src={logo.src} alt="Available" className="w-[70px]" />
            <span className="font-[Inter] text-[22px] font-bold leading-[30.26px] text-left text-[#407bff]">
              Emmy
            </span>
          </div>

          <div className="flex justify-start items-start flex-col my-[15px]">
            <h1 className="font-[Inter] text-[17px] font-bold leading-[30.26px] text-left text-[#407BFF]">
              Verify Account
            </h1>
            <p className="font-[Inter] text-[15px] font-normal leading-[30px] text-left text-[#7F7F7F]">
              Thank you for registering with us! To complete your registration,
              please verify your email address by clicking the link below
            </p>
          </div>

          <div className="flex justify-between align-middle">
            <Link
              href={"/"}
              className="bg-[tomato] px-[25px] py-[10px] text-[15px] rounded-[5px]"
            >
              Cancel
            </Link>
            <button className="bg-[#407bff] px-[25px] py-[10px] text-[15px] rounded-[5px]">
              Verify
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
