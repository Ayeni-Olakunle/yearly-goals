"use client";

import { MdOutlineArrowDropDown } from "react-icons/md";
import React from "react";
import { usePathname } from "next/navigation";
import { HiMenuAlt2 } from "react-icons/hi";
import { useQueryClient } from "@tanstack/react-query";

export default function Header() {
  const path = usePathname();
  const client = useQueryClient();
  return (
    <div className="flex justify-between items-center px-[30px] py-[15px] [border-bottom:1px_solid_#CECECE] sm:p-[15px]">
      <div className="flex items-center gap-[12px]">
        <HiMenuAlt2
          className="text-3xl text-[gray]"
          onClick={() => {
            client.setQueryData(["sidebar"], () => {
              return {
                current: true,
              };
            });
          }}
        />
        <h1 className=" text-3xl font-bold leading-[36.31px] text-left">
          {path === "/user" && "Dashboard"}
          {path === "/user/all-goals" && "All Goals"}
          {path === "/user/all-tasks" && "All Tasks"}
          {path === "/user/add-goals" && "Add Goals"}
          {path === "/user/add-task" && "Add Task"}
          {path === "/user/bookmark" && "Bookmark"}
          {path === "/user/add-bookmark" && "Add Bookmark"}
          {path === "/user/audio-book" && "Audio Book"}
          {path === "/user/notifications" && "Notification"}
        </h1>
      </div>
      <div className="flex justify-center items-center gap-[20px] sm:gap-3">
        <h1 className="border-[2px] border-solid border-[#407bff] rounded-[50px] flex justify-center items-center bg-[#407bff] text-[white] w-[40px] h-[40px] text-[15px]">
          AE
        </h1>
        <div className="sm:hidden">
          <h4 className=" text-sm font-bold leading-[24.2px] text-left">
            Hello
          </h4>
          <p className=" text-base font-medium leading-[24.2px] text-left text-[#747474]">
            Ayeni Emmanuel
          </p>
        </div>
        <MdOutlineArrowDropDown className="text-[#747474] text-[25px]" />
      </div>
    </div>
  );
}
