"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import GoalsModal from "../Modals/goals";

export default function AllGoals() {
  const [modalShow, setModalShow] = useState<boolean>(false);
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
            <tr className="[border-bottom:1px_solid_#CECECE]">
              <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                01
              </td>
              <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                Save 1 million This Year
              </td>
              <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                01/01/2025
              </td>
              <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                30/12/2025
              </td>
              <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#407BFF] flex justify-center text-xl">
                <IoIosArrowDropdownCircle
                  className="cursor-pointer"
                  onClick={() => {
                    setModalShow(true);
                  }}
                />
              </td>
            </tr>

            <tr className="[border-bottom:1px_solid_#CECECE]">
              <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                01
              </td>
              <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                Save 1 million This Year
              </td>
              <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                01/01/2025
              </td>
              <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                30/12/2025
              </td>
              <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#407BFF] flex justify-center text-xl">
                <IoIosArrowDropdownCircle />
              </td>
            </tr>
            <tr className="[border-bottom:1px_solid_#CECECE]">
              <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                01
              </td>
              <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                Save 1 million This Year
              </td>
              <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                01/01/2025
              </td>
              <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                30/12/2025
              </td>
              <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#407BFF] flex justify-center text-xl">
                <IoIosArrowDropdownCircle />
              </td>
            </tr>
            <tr className="[border-bottom:1px_solid_#CECECE]">
              <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                01
              </td>
              <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                Save 1 million This Year
              </td>
              <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                01/01/2025
              </td>
              <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                30/12/2025
              </td>
              <td className="p-[12px] font-[Inter] text-[15px] font-medium leading-[26.63px] text-center text-[#407BFF] flex justify-center text-xl">
                <IoIosArrowDropdownCircle />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <GoalsModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
      />
    </section>
  );
}
