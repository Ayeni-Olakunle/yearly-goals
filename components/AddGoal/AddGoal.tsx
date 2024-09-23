"use client";
import React from "react";
import { addGoalMut } from "@/service/mutations";
import { addGoals } from "@/types/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

export default function AddGoal() {
  const addGoalMutation = addGoalMut();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<addGoals>();

  const handleGoals: SubmitHandler<addGoals> = (data) => {
    addGoalMutation.mutate(data);
  };

  return (
    <div>
      <div>
        <h1 className="font-[Inter] text-3xl font-bold leading-[36.31px] text-left">
          Add Goals
        </h1>
        <p className="font-[Inter] text-[15px] font-normal leading-[24.2px] text-left text-[#8D8D8D]">
          Please take your goals very serious
        </p>
      </div>
      <form onSubmit={handleSubmit(handleGoals)}>
        <div className="border-[1.5px] border-solid border-[#dddddd] mt-[8px] rounded-[5px] p-[25px]">
          <div>
            <div className="px-[0] py-[12px] flex justify-start items-start flex-col">
              <label
                htmlFor="taskName"
                className="font-[Inter] text-[15px] font-medium leading-[21.78px] text-left text-[#8D8D8D]"
              >
                Goal Name
              </label>
              <input
                type="text"
                id="taskName"
                {...register("taskName", { required: "Goal Name is required" })}
                className="w-full border-[1.5px] border-solid border-[#B3B3B3] mt-[4px] p-[8px] rounded-[5px] text-[gray] outline-0"
              />
              {errors.taskName && (
                <p className="text-[tomato] text-xs">
                  {errors.taskName.message}
                </p>
              )}
            </div>

            <div className="flex w-full justify-between items-center">
              <div className="px-[0] py-[12px] flex justify-start items-start flex-col w-[45%]">
                <label
                  htmlFor="startDate"
                  className="font-[Inter] text-[15px] font-medium leading-[21.78px] text-left text-[#8D8D8D]"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  className="w-full border-[1.5px] border-solid border-[#B3B3B3] mt-[4px] p-[8px] rounded-[5px] text-[gray]"
                  {...register("startDate", {
                    required: "Start Date is required",
                  })}
                />
                {errors.startDate && (
                  <p className="text-[tomato] text-xs mt-[2px]">
                    {errors.startDate.message}
                  </p>
                )}
              </div>

              <div className="px-[0] py-[12px] flex justify-start items-start flex-col w-[45%]">
                <label
                  htmlFor="endDate"
                  className="font-[Inter] text-[15px] font-medium leading-[21.78px] text-left text-[#8D8D8D]"
                >
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  {...register("endDate", { required: "End Date is required" })}
                  className="w-full border-[1.5px] border-solid border-[#B3B3B3] mt-[4px] p-[8px] rounded-[5px] text-[gray]"
                />
                {errors.endDate && (
                  <p className="text-[tomato] text-xs mt-[2px]">
                    {errors.endDate.message}
                  </p>
                )}
              </div>
            </div>

            <div className="px-[0] py-[12px] flex justify-start items-start flex-col">
              <label
                htmlFor="taskName"
                className="font-[Inter] text-[15px] font-medium leading-[21.78px] text-left text-[#8D8D8D]"
              >
                Goal Link
              </label>
              <input
                type="url"
                id="taskName"
                {...register("taskLink")}
                className="w-full border-[1.5px] border-solid border-[#B3B3B3] mt-[4px] p-[8px] rounded-[5px] text-[gray]"
              />
            </div>

            <div className="px-[0] py-[12px] flex justify-start items-start flex-col">
              <label
                htmlFor="GoalDescription"
                className="font-[Inter] text-[15px] font-medium leading-[21.78px] text-left text-[#8D8D8D]"
              >
                Goal Description
              </label>
              <textarea
                id="GoalDescription"
                className="w-full border-[1.5px] border-solid border-[#B3B3B3] mt-[4px] p-[8px] rounded-[5px] text-[gray]"
                rows={5}
                {...register("taskDesc", {
                  required: "Goal Description is required",
                })}
              ></textarea>
              {errors.taskDesc && (
                <p className="text-[tomato] text-xs mt-[2px]">
                  {errors.taskDesc.message}
                </p>
              )}
            </div>
            <div className="flex gap-[10px] items-center justify-start">
              <input
                type="checkbox"
                id="SetReminder"
                {...register("reminder")}
              />
              <label
                htmlFor="SetReminder"
                className="font-[Inter] text-[15px] font-medium leading-[21.78px] text-left text-[#8D8D8D]"
              >
                Set Reminder
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center mt-5">
          <button className="bg-[#407BFF] text-[white] px-[40px] py-[12px] rounded-[3px]">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
