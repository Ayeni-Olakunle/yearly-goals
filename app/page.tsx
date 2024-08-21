import React from "react";
import logo from "@/public/E 1.png";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#407BFF]">
      <div className="w-[500px] bg-[white] [box-shadow:0px_7px_10px_6px_#00000033] rounded-[10px] overflow-hidden">
        <div className="flex justify-center items-center mx-[0] my-[20px] flex-col">
          <img src={logo.src} alt="Not Available" className="w-[120px]" />
          <h1 className="font-[Inter] text-[35px] font-bold leading-[60.51px] text-left text-[#407bff] mt-[10px] mb-[10px]">
            Login
          </h1>
        </div>

        <form>
          <div>
            <label htmlFor="EmailAddress">Email Address</label>
            <input type="email" name="EmailAddress" id="EmailAddress" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <Link href="">Forget Password ?</Link>
          <button type="submit">Submit</button>
          <button type="submit">
            <FcGoogle />
            Sign in with google
          </button>
        </form>
      </div>
    </main>
  );
}
