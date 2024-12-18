"use client";

import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { deleteBookMarkMut, editBookmarkAxiosMut } from "@/service/mutations";
import { bookDetail } from "@/types/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { formatDate } from "@/helper/helper";

export default function BookmarkModal(props: bookDetail) {
  const deleteBookMark = deleteBookMarkMut(props?._id, props?.onHide);
  const editBook = editBookmarkAxiosMut(props?._id, props?.onHide);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<bookDetail>();

  const handleTask: SubmitHandler<bookDetail> = (data: any) => {
    editBook.mutate(data);
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
              <span className="text-[22px] font-bold">Bookmark Details</span>
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
                  Bookmark Name
                </label>
                <input
                  type="text"
                  defaultValue={props.bookMarkName}
                  {...register("bookMarkName", {
                    required: "Bookmark Name is required",
                  })}
                  className="w-full border-[1.5px] border-solid border-[#d1d1d1] p-[9px] rounded-[5px] outline-none text-[gray]"
                />
                {errors.bookMarkName && (
                  <p className="text-[tomato] text-xs">
                    {errors.bookMarkName.message}
                    {}
                  </p>
                )}
              </div>

              <div className="flex justify-start items-start flex-col px-[0] py-[10px]">
                <label htmlFor="GoalsName" className="text-[15px] text-[gray]">
                  Bookmark Value
                </label>
                <input
                  type="text"
                  defaultValue={props.bookMarkValue}
                  {...register("bookMarkValue", {
                    required: "bookMarkValue is required",
                  })}
                  className="w-full border-[1.5px] border-solid border-[#d1d1d1] p-[9px] rounded-[5px] outline-none text-[gray]"
                />
                {errors.bookMarkValue && (
                  <p className="text-[tomato] text-xs">
                    {errors.bookMarkValue.message}
                    {}
                  </p>
                )}
              </div>

              <div className="flex justify-start items-start flex-col px-[0] py-[10px]">
                <label htmlFor="GoalsName" className="text-[15px] text-[gray]">
                  Bookmark Link
                </label>
                <input
                  type="text"
                  defaultValue={props.bookMarkLink}
                  {...register("bookMarkLink", {
                    required: "Bookmark Link is required",
                  })}
                  className="w-full border-[1.5px] border-solid border-[#d1d1d1] p-[9px] rounded-[5px] outline-none text-[gray]"
                />
                {errors.bookMarkLink && (
                  <p className="text-[tomato] text-xs">
                    {errors.bookMarkLink.message}
                    {}
                  </p>
                )}
              </div>

              <div className="flex justify-start items-start flex-col px-[0] py-[10px]">
                <label
                  htmlFor="Goals Details"
                  className="text-[15px] text-[gray]"
                >
                  Bookmark Details
                </label>
                <textarea
                  defaultValue={props.bookMarkDesc}
                  rows={5}
                  {...register("bookMarkDesc", {
                    required: "Task Detail is required",
                  })}
                  className="w-full border-[1.5px] border-solid border-[#d1d1d1] p-[9px] rounded-[5px] outline-none text-[gray]"
                ></textarea>
                {errors.bookMarkDesc && (
                  <p className="text-[tomato] text-xs">
                    {errors.bookMarkDesc.message}
                    {}
                  </p>
                )}
              </div>

              <div className="flex justify-start items-start flex-col px-[0] py-[10px]">
                <label htmlFor="CreateDate" className="text-[15px] text-[gray]">
                  Start Date
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue={formatDate(props.createdAt)}
                  className="w-full border-[1.5px] border-solid border-[#d1d1d1] p-[9px] rounded-[5px] outline-none text-[gray]"
                />
              </div>

              <div className="flex justify-start items-start flex-col px-[0] py-[10px]">
                <label htmlFor="CreateDate" className="text-[15px] text-[gray]">
                  End Date
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue={formatDate(props.updatedAt)}
                  className="w-full border-[1.5px] border-solid border-[#d1d1d1] p-[9px] rounded-[5px] outline-none text-[gray]"
                />
              </div>

              <div className="flex justify-between items-center py-[20px]">
                <button
                  className="bg-[tomato] text-[white] px-[25px] py-[10px] rounded-[5px]"
                  type="button"
                  onClick={() => deleteBookMark.mutate()}
                  disabled={deleteBookMark.isPending}
                >
                  {deleteBookMark.isPending ? "Please wait..." : "Delete"}
                </button>
                <button
                  className="bg-[#407bff] text-[white] px-[25px] py-[10px] rounded-[5px]"
                  type="submit"
                >
                  {editBook.isPending ? "Please wait..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
