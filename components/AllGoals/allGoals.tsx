"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import GoalsModal from "../Modals/goals";
import { allGoal } from "@/service/mutations";
import { goalsType } from "@/types/types";

export default function AllGoals() {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [position, setPosition] = useState<number>(0);
  const allGoals = allGoal();
  console.log(allGoals.data);

  return (
    <section>
      <div className="flex justify-between items-center">
        <div className="border-[1.5px] border-solid border-[#B3B3B3] w-[350px] flex justify-between items-center rounded-[11px] overflow-hidden px-[10px] py-[0] text-[gray]">
          <input
            type="search"
            placeholder="Search for goals"
            name=""
            id=""
            className="w-full text-[13px] p-[13px] outline-[none] text-[gray] outline-[0]"
          />
          <IoIosSearch />
        </div>
        <Link
          href={"/user/add-goals"}
          className="flex gap-[15px] font-[Inter] text-[15px] font-semibold leading-[21.78px] text-left bg-[#407bff] text-[white] items-center px-[20px] py-[12px] rounded-[5px]"
        >
          <FiPlus />
          Add Goals
        </Link>
      </div>
      <div className="mt-[40px] rounded-[5px] overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#407BFF] font-[Inter] text-[13px] font-normal leading-[26.63px] text-center text-[white]">
            <tr className="bg-[#407BFF] font-[Inter] text-[13px] font-normal leading-[26.63px] text-center text-[white]">
              <th className="p-[12px]">S/N</th>
              <th className="p-[12px]">Goals Name</th>
              <th className="p-[12px]">Start Date</th>
              <th className="p-[12px]">End Date</th>
              <th className="p-[12px]">Goal Details</th>
            </tr>
          </thead>
          <tbody>
            {allGoals.data?.data.map((item, index: number) => {
              return (
                <tr className="[border-bottom:1px_solid_#CECECE]">
                  <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                    {index + 1}
                  </td>
                  <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                    {item.taskName}
                  </td>
                  <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                    {item.startDate}
                  </td>
                  <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                    {item.endDate}
                  </td>
                  <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#407BFF] flex justify-center text-xl">
                    <IoIosArrowDropdownCircle
                      className="cursor-pointer"
                      onClick={() => {
                        setPosition(index);
                        setModalShow(true);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <GoalsModal
        show={modalShow}
        goalName={allGoals.data?.data[position].taskName}
        status={allGoals.data?.data[position].status}
        goalsDesc={allGoals.data?.data[position].taskDesc}
        startDate={allGoals.data?.data[position].startDate}
        endDate={allGoals.data?.data[position].endDate}
        onHide={() => {
          setModalShow(false);
        }}
      />
    </section>
  );
}
