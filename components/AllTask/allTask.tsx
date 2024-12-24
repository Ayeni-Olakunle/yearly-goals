"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import TasksModal from "../Modals/task";
import { allTaskFn } from "@/service/query";
import LoaderSpin from "../Loader/loader";
import { toast } from "react-toastify";
import { addTask } from "@/types/types";
import { formatDate } from "@/helper/helper";

export default function AllTask() {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [position, setPosition] = useState<number>(0);
  const { data: allTasks = [], isLoading, isSuccess, isError } = allTaskFn();

  if (isLoading) {
    return <LoaderSpin />;
  }

  if (isError) {
    toast.error("Opps something went wrong");
  }

  const filterList = allTasks.data.filter((item: { taskName: string }) => {
    if (searchQuery === "") {
      return allTasks.data;
    } else {
      let checking = item?.taskName
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return checking;
    }
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  return (
    <section>
      <div className="flex justify-between items-center">
        <div className="border-[1.5px] border-solid border-[#B3B3B3] w-[350px] flex justify-between items-center rounded-[11px] overflow-hidden px-[10px] py-[0] text-[gray]">
          <input
            type="search"
            placeholder="Search for goals"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full text-[13px] p-[13px] outline-[none] text-[gray] outline-[0]"
          />
          <IoIosSearch />
        </div>
        <Link
          href={"/user/add-task"}
          className="flex gap-[15px]  text-[15px] font-semibold leading-[21.78px] text-left bg-[#407bff] text-[white] items-center px-[20px] py-[12px] rounded-[5px]"
        >
          <FiPlus />
          Add Task
        </Link>
      </div>
      <div className="mt-[40px] rounded-[5px] overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#407BFF]  text-[13px] font-normal leading-[26.63px] text-center text-[white]">
            <tr className="bg-[#407BFF]  text-[13px] font-normal leading-[26.63px] text-center text-[white]">
              <th className="p-[12px]">S/N</th>
              <th className="p-[12px]">Task Name</th>
              <th className="p-[12px]">Task Link</th>
              <th className="p-[12px]">Copy Link</th>
              <th className="p-[12px]">Goal Details</th>
            </tr>
          </thead>
          <tbody>
            {allTasks?.length == 0 ? (
              <p>No Data</p>
            ) : (
              filterList.map((item: addTask, index: number) => {
                return (
                  <tr className="[border-bottom:1px_solid_#CECECE]">
                    <td className="p-[12px]  text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                      {index + 1}
                    </td>
                    <td className="p-[12px]  text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                      {item.taskName}
                    </td>
                    <td className="p-[12px]  text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                      {formatDate(item.createdAt)}
                    </td>
                    <td className="p-[12px]  text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                      {formatDate(item.updatedAt)}
                    </td>
                    <td className="p-[12px]  text-[15px] font-medium leading-[26.63px] text-center text-[#407BFF] flex justify-center text-xl">
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
              })
            )}
          </tbody>
        </table>
      </div>

      {allTasks?.length > 0 && (
        <TasksModal
          show={modalShow}
          onHide={() => {
            setModalShow(false);
          }}
          // endDate={filterList[position].updatedAt}
          // startDate={filterList[position].createdAt}
          taskName={allTasks.data[position].taskName}
          taskDesc={allTasks.data[position].taskDesc}
          status={allTasks.data[position].status}
          _id={allTasks.data[position]._id}
        />
      )}
    </section>
  );
}
