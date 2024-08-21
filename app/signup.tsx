import React from "react";
import logo from "@/public/E 1.png";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#407BFF]">
      <div className="w-[400px] bg-[white] [box-shadow:0px_7px_10px_6px_#00000033] rounded-[10px] overflow-hidden">
        <div className="flex justify-center items-center mx-[0] my-[20px] flex-col">
          <img src={logo.src} alt="Not Available" className="w-[100px]" />
          <h1 className="font-[Inter] font-bold text-left text-[#407bff] mt-[5px] mb-[5px] text-[25px]">
            Sign up
          </h1>
        </div>

        <form className="px-[40px] py-[0]">
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
              className="border-[1.5px] border-solid border-[#C7C7C7] w-full p-[10px] rounded-[5px] outline-[none]"
            />
          </div>
          <div className="flex justify-start items-start flex-col mb-[10px]">
            <label
              htmlFor="password"
              className="font-[Inter] text-[15px] font-normal leading-[24.2px] text-left text-[#989898] mb-[2px]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border-[1.5px] border-solid border-[#C7C7C7] w-full p-[10px] rounded-[5px] outline-[none]"
            />
          </div>
          <p className="font-[Inter] text-lg font-normal leading-[21.78px] text-[#407afd] text-right flex justify-between items-center mb-[10px] text-[13px]">
            <Link href="">Create an Account</Link>
            <Link href="">Forget Password ?</Link>
          </p>
          <button
            type="submit"
            className="w-full font-[Inter] text-[17px] font-medium leading-[26.63px] bg-[#407bff] mt-[10px] p-[10px] rounded-[5px] mb-[10px]"
          >
            Submit
          </button>
          <button
            type="submit"
            className="mb-[20px] border-[1.5px] border-solid border-[#C7C7C7] w-full p-[10px] rounded-[5px] outline-[none] flex justify-center items-center gap-[10px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-left text-[#969696]"
          >
            <FcGoogle />
            Sign in with google
          </button>
        </form>
      </div>
    </main>
  );
}
