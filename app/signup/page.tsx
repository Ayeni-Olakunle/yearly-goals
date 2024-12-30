"use client";

import React from "react";
import logo from "@/public/E 1.png";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { signup } from "@/types/types";
import { useSignupFn } from "@/service/mutations";

export default function Page() {
  const useSignup = useSignupFn();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signup>();

  const handleUserSignup: SubmitHandler<signup> = (data) => {
    console.log(data);
    if (data.confirmPassword === data.password) {
      useSignup.mutate({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        password: data.password,
      });
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#407BFF]">
      <div className="w-[400px] bg-[white] [box-shadow:0px_7px_10px_6px_#00000033] rounded-[10px] overflow-hidden mx-[0] my-[50px] px-[0] py-[30px]">
        <div className="flex justify-center items-center mx-[0] my-[20px] flex-col">
          <img src={logo.src} alt="Not Available" className="w-[100px]" />
          <h1 className=" font-bold text-left text-[#407bff] mt-[5px] mb-[5px] text-[25px]">
            Create Account
          </h1>
        </div>
        <form
          className="px-[40px] py-[0]"
          onSubmit={handleSubmit(handleUserSignup)}
        >
          <div className="flex justify-start items-start flex-col mb-[20px]">
            <label
              htmlFor="firstName"
              className=" text-[15px] font-normal leading-[24.2px] text-left text-[#989898] mb-[2px]"
            >
              First Name
            </label>
            <input
              type="text"
              {...register("firstName", { required: "First Name is required" })}
              className="border-[1.5px] border-solid border-[#C7C7C7] w-full p-[10px] rounded-[5px] outline-[0] text-sm !text-[gray]"
              required
            />

            {errors.firstName && (
              <p className="text-[tomato] text-xs mt-[2px]">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div className="flex justify-start items-start flex-col mb-[20px]">
            <label
              htmlFor="lastName"
              className=" text-[15px] font-normal leading-[24.2px] text-left text-[#989898] mb-[2px]"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              {...register("lastName", { required: "Last Name is required" })}
              className="border-[1.5px] border-solid border-[#C7C7C7] w-full p-[10px] rounded-[5px] outline-[0] text-sm !text-[gray]"
              required
            />
            {errors.lastName && (
              <p className="text-[tomato] text-xs mt-[2px]">
                {errors.lastName.message}
              </p>
            )}
          </div>

          <div className="flex justify-start items-start flex-col mb-[20px]">
            <label
              htmlFor="email"
              className=" text-[15px] font-normal leading-[24.2px] text-left text-[#989898] mb-[2px]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="border-[1.5px] border-solid border-[#C7C7C7] w-full p-[10px] rounded-[5px] outline-[0] text-sm !text-[gray]"
              required
            />
            {errors.email && (
              <p className="text-[tomato] text-xs mt-[2px]">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex justify-start items-start flex-col mb-[10px]">
            <label
              htmlFor="phoneNumber"
              className=" text-[15px] font-normal leading-[24.2px] text-left text-[#989898] mb-[2px]"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              {...register("phoneNumber", {
                required: "Phone Number is required",
              })}
              className="border-[1.5px] border-solid border-[#C7C7C7] w-full p-[10px] rounded-[5px] outline-[0] text-sm !text-[gray]"
              required
            />
            {errors.phoneNumber && (
              <p className="text-[tomato] text-xs mt-[2px]">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div className="flex justify-start items-start flex-col mb-[10px]">
            <label
              htmlFor="password"
              className=" text-[15px] font-normal leading-[24.2px] text-left text-[#989898] mb-[2px]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
              })}
              className="border-[1.5px] border-solid border-[#C7C7C7] w-full p-[10px] rounded-[5px] outline-[0] text-sm !text-[gray]"
              required
            />

            {errors.password && (
              <p className="text-[tomato] text-xs mt-[2px]">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex justify-start items-start flex-col mb-[10px]">
            <label
              htmlFor="confirmPassword"
              className=" text-[15px] font-normal leading-[24.2px] text-left text-[#989898] mb-[2px]"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "confirm Password is required",
              })}
              className="border-[1.5px] border-solid border-[#C7C7C7] w-full p-[10px] rounded-[5px] outline-[0] text-sm !text-[gray]"
              required
            />

            {errors.confirmPassword && (
              <p className="text-[tomato] text-xs mt-[2px]">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full  text-[17px] font-medium leading-[26.63px] bg-[#407bff] text-white mt-[10px] p-[10px] rounded-[5px] mb-[10px]"
            disabled={useSignup.isPending}
          >
            {useSignup.isPending ? "Please wait..." : "Submit"}
          </button>
          <p className="text-center text-[gray] text-[1rem]">or</p>
          <Link
            href={"/"}
            className="text-center text-[#407bff] text-[1rem] block border-[2px] border-solid border-[#407bff] p-[10px] mt-[10px] rounded-[7px]"
          >
            Login
          </Link>
        </form>
      </div>
    </main>
  );
}
