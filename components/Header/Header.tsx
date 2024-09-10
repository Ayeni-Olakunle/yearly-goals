"use client";

import { MdOutlineArrowDropDown } from "react-icons/md";
import React from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  return (
    <div className="flex justify-between items-center px-[30px] py-[15px] [border-bottom:1px_solid_#CECECE]">
      <h1 className="font-[Inter] text-3xl font-bold leading-[36.31px] text-left">
        {path === "/user" && "Dashboard"}
        {path === "/user/all-goals" && "All Goals"}
        {path === "/user/all-tasks" && "All Tasks"}
        {path === "/user/add-goals" && "Add Goals"}
        {path === "/user/add-task" && "Add Task"}
        {path === "/user/notifications" && "Notification"}
      </h1>
      <div className="flex justify-center items-center gap-[20px]">
        <h1 className="border-[2px] border-solid border-[#407bff] rounded-[50px] flex justify-center items-center bg-[#407bff] text-[white] w-[40px] h-[40px] text-[15px]">
          AE
        </h1>
        <div>
          <h4 className="font-[Inter] text-sm font-bold leading-[24.2px] text-left">
            Hello
          </h4>
          <p className="font-[Inter] text-base font-medium leading-[24.2px] text-left text-[#747474]">
            Ayeni Emmanuel
          </p>
        </div>
        <MdOutlineArrowDropDown className="text-[#747474] text-[25px]" />
      </div>
    </div>
  );
}
