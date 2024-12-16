"use client";

import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { editGoalMut, deleteGoalMut } from "@/service/mutations";
import { SubmitHandler, useForm } from "react-hook-form";

interface goalDetail {
  endDate: string;
  goalName: string;
  goalDesc: string;
  goalLink: string;
  _id: string;
  onHide: () => void;
  show: boolean;
  startDate: string;
  status: string;
}

export default function GoalsModal(props: goalDetail) {
  const editGoal = editGoalMut(props?._id);
  const deleteGoal = deleteGoalMut(props?._id);
  console.log(props?._id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<goalDetail>();

  const handleGoals: SubmitHandler<goalDetail> = (data: any) => {
    editGoal.mutate(data);
  };

  return (
    <>
      {props.show && (
        <div
          {...props}
          className="absolute top-[0] w-full left-[0] h-screen flex justify-center items-start px-[0] py-[50px] bg-[#00000082] overflow-y-scroll"
        >
          <div className="w-[500px] bg-[white] h-auto rounded-[5px]">
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

            <form
              className="px-[20px] pt-[20px]"
              onSubmit={handleSubmit(handleGoals)}
            >
              <div className="flex justify-start items-start flex-col px-[0] py-[10px]">
                <label htmlFor="GoalsName" className="text-[15px] text-[gray]">
                  Goals Name
                </label>
                <input
                  type="text"
                  defaultValue={props?.goalName}
                  {...register("goalName", {
                    required: "Goal Name is required",
                  })}
                  className="w-full border-[1.5px] border-solid border-[#d1d1d1] p-[9px] rounded-[5px] outline-none text-[gray]"
                />
                {errors.goalName && (
                  <p className="text-[tomato] text-xs">
                    {errors.goalName.message}
                    {}
                  </p>
                )}
              </div>

              <div className="flex justify-start items-start flex-col px-[0] py-[10px]">
                <label htmlFor="goalsLink" className="text-[15px] text-[gray]">
                  Goals Link
                </label>
                <input
                  type="text"
                  defaultValue={props?.goalLink}
                  {...register("goalLink", {
                    required: "Goal Link is required",
                  })}
                  className="w-full border-[1.5px] border-solid border-[#d1d1d1] p-[9px] rounded-[5px] outline-none text-[gray]"
                />
                {errors.goalLink && (
                  <p className="text-[tomato] text-xs">
                    {errors.goalLink.message}
                    {}
                  </p>
                )}
              </div>

              <div className="flex justify-start items-start flex-col px-[0] py-[10px]">
                <label
                  htmlFor="GoalsStatus"
                  className="text-[15px] text-[gray]"
                >
                  Goals Status
                </label>
                <select
                  className="w-full border-[1.5px] border-solid border-[#d1d1d1] p-[9px] rounded-[5px] outline-none text-[gray]"
                  defaultValue={props?.status}
                  {...register("status", {
                    required: "Status is required",
                  })}
                >
                  {/* <option value={props?.status}>{props?.status}</option> */}
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancel">Cancel</option>
                  <option value="Close">Close</option>
                </select>
                {errors.status && (
                  <p className="text-[tomato] text-xs">
                    {errors.status.message}
                  </p>
                )}
              </div>

              <div className="flex justify-start items-start flex-col px-[0] py-[10px]">
                <label
                  htmlFor="Goals Details"
                  className="text-[15px] text-[gray]"
                >
                  Goals Details
                </label>
                <textarea
                  rows={5}
                  defaultValue={props?.goalDesc}
                  {...register("goalDesc", {
                    required: "Goals Desc is required",
                  })}
                  className="w-full border-[1.5px] border-solid border-[#d1d1d1] p-[9px] rounded-[5px] outline-none text-[gray]"
                ></textarea>
                {errors.goalDesc && (
                  <p className="text-[tomato] text-xs">
                    {errors.goalDesc.message}
                  </p>
                )}
              </div>

              <div className="flex justify-start items-start flex-col px-[0] py-[10px]">
                <label htmlFor="CreateDate" className="text-[15px] text-[gray]">
                  Start Date
                </label>
                <input
                  type="date"
                  id=""
                  defaultValue={props?.startDate}
                  {...register("startDate", {
                    required: "Start Date is required",
                  })}
                  className="w-full border-[1.5px] border-solid border-[#d1d1d1] p-[9px] rounded-[5px] outline-none text-[gray]"
                />
                {errors.startDate && (
                  <p className="text-[tomato] text-xs">
                    {errors.startDate.message}
                  </p>
                )}
              </div>

              <div className="flex justify-start items-start flex-col px-[0] py-[10px]">
                <label htmlFor="CreateDate" className="text-[15px] text-[gray]">
                  End Date
                </label>
                <input
                  type="date"
                  id=""
                  defaultValue={props?.endDate}
                  {...register("endDate", {
                    required: "End Date is required",
                  })}
                  className="w-full border-[1.5px] border-solid border-[#d1d1d1] p-[9px] rounded-[5px] outline-none text-[gray]"
                />
                {errors.endDate && (
                  <p className="text-[tomato] text-xs">
                    {errors.endDate.message}
                  </p>
                )}
              </div>

              <div className="flex justify-between items-center py-[20px]">
                <button
                  className="bg-[tomato] text-[white] px-[25px] py-[10px] rounded-[5px]"
                  type="button"
                  onClick={() => deleteGoal.mutate()}
                >
                  {deleteGoal.isPending ? "Please wait.." : "Delete"}
                </button>
                <button
                  type="submit"
                  className="bg-[#407bff] text-[white] px-[25px] py-[10px] rounded-[5px]"
                >
                  {editGoal.isPending ? "Please wait..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
