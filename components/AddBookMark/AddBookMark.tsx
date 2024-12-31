"use client";
import { addBookMarkMut } from "@/service/mutations";
import { bookMarkProps } from "@/types/types";
import { SubmitHandler, useForm } from "react-hook-form";

export default function AddBookMark() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<bookMarkProps>();
  const addTaskMutation = addBookMarkMut(reset);

  const handleTask: SubmitHandler<bookMarkProps> = (data) => {
    addTaskMutation.mutate(data);
  };

  return (
    <div>
      <div>
        <h1 className=" text-3xl font-bold leading-[36.31px] text-left">
          Add Bookmark
        </h1>
        <p className=" text-[15px] font-normal leading-[24.2px] text-left text-[#8D8D8D]">
          Please take your bookmark very serious
        </p>
      </div>
      <form onSubmit={handleSubmit(handleTask)}>
        <div className="border-[1.5px] border-solid border-[#dddddd] mt-[8px] rounded-[5px] p-[25px]">
          <div>
            <div className="px-[0] py-[12px] flex justify-start items-start flex-col">
              <label
                htmlFor="bookMarkName"
                className=" text-[15px] font-medium leading-[21.78px] text-left text-[#8D8D8D]"
              >
                Bookmark Name
              </label>
              <input
                type="text"
                {...register("bookMarkName", {
                  required: "Bookmark Name is required",
                })}
                className="w-full border-[1.5px] border-solid border-[#B3B3B3] mt-[4px] p-[8px] rounded-[5px] text-[gray]"
              />
              {errors.bookMarkName && (
                <p className="text-[tomato] text-xs">
                  {errors.bookMarkName.message}
                </p>
              )}
            </div>

            <div className="px-[0] py-[12px] flex justify-start items-start flex-col">
              <label
                htmlFor="bookMarkLink"
                className=" text-[15px] font-medium leading-[21.78px] text-left text-[#8D8D8D]"
              >
                Bookmark Link
              </label>
              <input
                type="text"
                {...register("bookMarkLink")}
                className="w-full border-[1.5px] border-solid border-[#B3B3B3] mt-[4px] p-[8px] rounded-[5px] text-[gray]"
              />
            </div>

            <div className="px-[0] py-[12px] flex justify-start items-start flex-col">
              <label
                htmlFor="bookMarkValue"
                className=" text-[15px] font-medium leading-[21.78px] text-left text-[#8D8D8D]"
              >
                Bookmark Value
              </label>
              <input
                type="text"
                {...register("bookMarkValue")}
                className="w-full border-[1.5px] border-solid border-[#B3B3B3] mt-[4px] p-[8px] rounded-[5px] text-[gray]"
              />
            </div>

            <div className="px-[0] py-[12px] flex justify-start items-start flex-col">
              <label
                htmlFor=""
                className=" text-[15px] font-medium leading-[21.78px] text-left text-[#8D8D8D]"
              >
                Bookmark Description
              </label>
              <textarea
                className="w-full border-[1.5px] border-solid border-[#B3B3B3] mt-[4px] p-[8px] rounded-[5px] text-[gray]"
                rows={5}
                {...register("bookMarkDesc")}
              ></textarea>
            </div>
            {/* <div className="flex gap-[10px] items-center justify-start">
              <input type="checkbox" name="" id="" />
              <label
                htmlFor="SetReminder"
                className=" text-[15px] font-medium leading-[21.78px] text-left text-[#8D8D8D]"
              >
                Set Reminder
              </label>
            </div> */}
          </div>
        </div>
        <div className="flex justify-end items-center mt-5">
          <button className="bg-[#407BFF] text-[white] px-[40px] py-[12px] rounded-[3px]">
            {addTaskMutation.isPending ? "Please wait..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
