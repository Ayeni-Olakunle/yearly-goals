"use client";

import React from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function GoalsModal(props: any) {
  return (
    <>
      {props.show && (
        <div
          {...props}
          className="absolute top-[0] w-full left-[0] h-screen flex justify-center items-start px-[0] py-[50px] bg-[#00000082] overflow-y-scroll"
        >
          <div className="w-[500px] bg-[white] h-[750px] rounded-[5px]">
            <h1 className="flex justify-between items-center p-[20px]">
              <span className="text-[22px] font-bold">Goals Details</span>
              <span onClick={props?.onHide}>
                <IoCloseSharp className="text-[gray] text-xl cursor-pointer" />
              </span>
            </h1>

            <p className="px-[20px] text-[gray] text-sm text-center">
              Customize your objectives to ensure they align with your evolving
              priorities and track your achievements effectively.
            </p>

            <form action="" className="px-[20px] pt-[20px]">
              <div className="flex justify-start items-start flex-col px-[0] py-[10px]">
                <label htmlFor="GoalsName" className="text-[15px] text-[gray]">
                  Goals Name
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue={props?.goalName}
                  className="w-full border-[1.5px] border-solid border-[#d1d1d1] p-[9px] rounded-[5px] outline-none text-[gray]"
                />
              </div>

              <div className="flex justify-start items-start flex-col px-[0] py-[10px]">
                <label
                  htmlFor="GoalsStatus"
                  className="text-[15px] text-[gray]"
                >
                  Goals Status
                </label>
                <select className="w-full border-[1.5px] border-solid border-[#d1d1d1] p-[9px] rounded-[5px] outline-none text-[gray]">
                  <option value="In Progress" defaultValue={props?.status}>
                    {props?.status}
                  </option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancel">Cancel</option>
                  <option value="Close">Close</option>
                </select>
              </div>

              <div className="flex justify-start items-start flex-col px-[0] py-[10px]">
                <label
                  htmlFor="Goals Details"
                  className="text-[15px] text-[gray]"
                >
                  Goals Details
                </label>
                <textarea
                  name=""
                  id=""
                  rows={5}
                  defaultValue={props?.goalsDesc}
                  className="w-full border-[1.5px] border-solid border-[#d1d1d1] p-[9px] rounded-[5px] outline-none text-[gray]"
                ></textarea>
              </div>

              <div className="flex justify-start items-start flex-col px-[0] py-[10px]">
                <label htmlFor="CreateDate" className="text-[15px] text-[gray]">
                  Start Date
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  defaultValue={props?.startDate}
                  className="w-full border-[1.5px] border-solid border-[#d1d1d1] p-[9px] rounded-[5px] outline-none text-[gray]"
                />
              </div>

              <div className="flex justify-start items-start flex-col px-[0] py-[10px]">
                <label htmlFor="CreateDate" className="text-[15px] text-[gray]">
                  End Date
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  defaultValue={props?.endDate}
                  className="w-full border-[1.5px] border-solid border-[#d1d1d1] p-[9px] rounded-[5px] outline-none text-[gray]"
                />
              </div>

              <div className="flex justify-between items-center py-[20px]">
                <button className="bg-[tomato] text-[white] px-[25px] py-[10px] rounded-[5px]">
                  Delete
                </button>
                <button className="bg-[#407bff] text-[white] px-[25px] py-[10px] rounded-[5px]">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
