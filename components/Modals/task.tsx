"use client";

import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { deleteTaskMut, editTaskMut } from "@/service/mutations";
import { taskDetails } from "@/types/types";
import { SubmitHandler, useForm } from "react-hook-form";

interface taskDetail {
  taskName: string;
  taskDesc: string;
  status: string;
  _id: string;
  onHide: () => void;
  show: boolean;
}

export default function TasksModal(props: taskDetail) {
  const deleteTask = deleteTaskMut(props?._id, props?.onHide);
  const editTask = editTaskMut(props?._id, props?.onHide);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<taskDetails>();

  const handleTask: SubmitHandler<taskDetails> = (data: any) => {
    editTask.mutate(data);
  };

  return (
    <>
      {props.show && (
        <div
          {...props}
          className="absolute top-[0] w-full left-[0] h-screen flex justify-center items-start px-[0] py-[50px] bg-[#00000082] overflow-y-scroll"
        >
          <div className="w-[500px] bg-[white] h-auto rounded-[5px] sm:w-[90%]">
            <h1 className="flex justify-between items-center p-[20px]">
              <span className="text-[22px] font-bold">Task Details</span>
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
              onSubmit={handleSubmit(handleTask)}
            >
              <div className="flex justify-start items-start flex-col px-[0] py-[10px]">
                <label htmlFor="GoalsName" className="text-[15px] text-[gray]">
                  Task Name
                </label>
                <input
                  type="text"
                  defaultValue={props.taskName}
                  {...register("taskName", {
                    required: "Task Name is required",
                  })}
                  className="w-full border-[1.5px] border-solid border-[#d1d1d1] p-[9px] rounded-[5px] outline-none text-[gray]"
                />
                {errors.taskName && (
                  <p className="text-[tomato] text-xs">
                    {errors.taskName.message}
                    {}
                  </p>
                )}
              </div>

              <div className="flex justify-start items-start flex-col px-[0] py-[10px]">
                <label
                  htmlFor="GoalsStatus"
                  className="text-[15px] text-[gray]"
                >
                  Task Status
                </label>
                <select
                  className="w-full border-[1.5px] border-solid border-[#d1d1d1] p-[9px] rounded-[5px] outline-none text-[gray]"
                  defaultValue={props.status}
                  {...register("status", {
                    required: "Status Name is required",
                  })}
                >
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancel">Cancel</option>
                  <option value="Close">Close</option>
                </select>
                {errors.status && (
                  <p className="text-[tomato] text-xs">
                    {errors.status.message}
                    {}
                  </p>
                )}
              </div>

              <div className="flex justify-start items-start flex-col px-[0] py-[10px]">
                <label
                  htmlFor="Goals Details"
                  className="text-[15px] text-[gray]"
                >
                  Task Details
                </label>
                <textarea
                  defaultValue={props.taskDesc}
                  rows={5}
                  {...register("status", {
                    required: "Task Detail is required",
                  })}
                  className="w-full border-[1.5px] border-solid border-[#d1d1d1] p-[9px] rounded-[5px] outline-none text-[gray]"
                ></textarea>
                {errors.taskDesc && (
                  <p className="text-[tomato] text-xs">
                    {errors.taskDesc.message}
                    {}
                  </p>
                )}
              </div>

              {/* <div className="flex justify-start items-start flex-col px-[0] py-[10px]">
                <label htmlFor="CreateDate" className="text-[15px] text-[gray]">
                  Start Date
                </label>
                <input
                  type="date"
                  name=""
                  id=""
                  defaultValue={props.startDate}
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
                  defaultValue={props.endDate}
                  className="w-full border-[1.5px] border-solid border-[#d1d1d1] p-[9px] rounded-[5px] outline-none text-[gray]"
                />
              </div> */}

              <div className="flex justify-between items-center py-[20px]">
                <button
                  className="bg-[tomato] text-[white] px-[25px] py-[10px] rounded-[5px]"
                  type="button"
                  onClick={() => deleteTask.mutate()}
                  disabled={deleteTask.isPending}
                >
                  {deleteTask.isPending ? "Please wait..." : "Delete"}
                </button>
                <button
                  className="bg-[#407bff] text-[white] px-[25px] py-[10px] rounded-[5px]"
                  type="submit"
                >
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
