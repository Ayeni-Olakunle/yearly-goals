import React from "react";
import logo from "@/public/E 1.png";

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
            Reset Password
          </h1>

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
              className="border-[1.5px] border-solid border-[#C7C7C7] w-full p-[10px] rounded-[5px] outline-[0]"
              required
            />
          </div>

          <div className="flex justify-start items-start flex-col mb-[10px]">
            <label
              htmlFor="confirmPassword"
              className="font-[Inter] text-[15px] font-normal leading-[24.2px] text-left text-[#989898] mb-[2px]"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="border-[1.5px] border-solid border-[#C7C7C7] w-full p-[10px] rounded-[5px] outline-[0]"
              required
            />
          </div>

          <div className="flex justify-between align-middle">
            <button className="bg-[tomato] px-[25px] py-[10px] text-[15px] rounded-[5px]">
              Cancel
            </button>
            <button className="bg-[#407bff] px-[25px] py-[10px] text-[15px] rounded-[5px]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
