import React from "react";
import logo from "@/public/E 1.png";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

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
          <h1 className="font-[Inter] text-[21px] font-bold leading-[30.26px] text-[#407bff] text-center mx-[0] my-[10px]">
            Forget Password
          </h1>

          <div className="flex justify-start items-start flex-col mb-[20px]">
            <label
              htmlFor="EmailAddress"
              className="font-[Inter] text-[15px] font-normal leading-[24.2px] text-left text-[#989898] mb-[2px]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="EmailAddress"
              id="EmailAddress"
              className="border-[1.5px] border-solid border-[#C7C7C7] w-full p-[10px] rounded-[5px] outline-[0]"
            />
          </div>

          <div className="flex justify-between align-middle">
            <Link
              href={"/"}
              className="bg-[tomato] px-[25px] py-[10px] text-[15px] rounded-[5px]"
            >
              Cancel
            </Link>
            <button className="bg-[#407bff] px-[25px] py-[10px] text-[15px] rounded-[5px]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
