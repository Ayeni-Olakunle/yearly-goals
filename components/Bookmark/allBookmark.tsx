"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import Link from "next/link";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import BookmarkModal from "../Modals/bookmark";
import { allBookMarkFn } from "@/service/query";
import LoaderSpin from "../Loader/loader";
import { toast } from "react-toastify";
import { bookMarkProps } from "@/types/types";
// import { formatDate } from "@/helper/helper";

export default function AllBookMark() {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [position, setPosition] = useState<number>(0);
  const {
    data: allBookMark = [],
    isLoading,
    isSuccess,
    isError,
  } = allBookMarkFn();

  if (isLoading) {
    return <LoaderSpin />;
  }

  if (isError) {
    toast.error("Opps something went wrong");
  }

  const filterList = allBookMark.data.filter(
    (item: { bookMarkName: string }) => {
      if (searchQuery === "") {
        return allBookMark.data;
      } else {
        let checking = item?.bookMarkName
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        return checking;
      }
    }
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCopy = async (e:string) => {
    try {
      await navigator.clipboard.writeText(e); 
      toast.success("Copied");
    } catch (err) {
      toast.error("Failed to copy text")
    }
  };
  return (
    <section>
      <div className="flex justify-between items-center sm:grid sm:grid-cols-[1fr_1fr]">
        <div className="border-[1.5px] border-solid border-[#B3B3B3] w-[350px] flex justify-between items-center rounded-[11px] overflow-hidden px-[10px] py-[0] text-[gray] sm:w-[90%]">
          <input
            type="search"
            placeholder="Search for bookmark"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full text-[13px] p-[13px] outline-[none] text-[gray] outline-[0]"
          />
          <IoIosSearch />
        </div>
        <Link
          href={"/user/add-bookmark"}
          className="flex gap-[15px]  text-[15px] font-semibold leading-[21.78px] text-left bg-[#407bff] text-[white] items-center px-[20px] py-[12px] rounded-[5px]"
        >
          <FiPlus />
          Add Bookmark
        </Link>
      </div>
      <div className="mt-[40px] rounded-[5px] overflow-hidden sm:mt-[25px] sm:overflow-x-scroll">
        <table className="w-full">
          <thead className="bg-[#407BFF]  text-[13px] font-normal leading-[26.63px] text-center text-[white]">
            <tr className="bg-[#407BFF]  text-[13px] font-normal leading-[26.63px] text-center text-[white]">
              <th className="p-[12px]">S/N</th>
              <th className="p-[12px]">Bookmark</th>
              <th className="p-[12px]">Bookmark Link</th>
              <th className="p-[12px]">Bookmark Value</th>
              {/* <th className="p-[12px]">Date</th> */}
              <th className="p-[12px]">Bookmark Details</th>
            </tr>
          </thead>
          <tbody>
            {allBookMark.data?.length == 0 ? (
              <p>No Data</p>
            ) : (
              filterList.map((item: bookMarkProps, index: number) => {
                return (
                  <tr className="[border-bottom:1px_solid_#CECECE]" key={index}>
                    <td className="p-[12px]  text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                      {index + 1}
                    </td>
                    <td className="p-[12px]  text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                      {item.bookMarkName}
                    </td>
                    <td className="p-[12px] text-[15px] font-medium leading-[26.63px] text-center text-[#407BFF] cursor-pointer" onClick={() => handleCopy(item.bookMarkLink)}>
                      {item.bookMarkLink}
                    </td>
                    <td className="p-[12px]  text-[15px] font-medium leading-[26.63px] text-center text-[#407BFF] cursor-pointer" onClick={() => handleCopy(item.bookMarkValue)}>
                      {item.bookMarkValue}
                    </td>
                    {/* <td className="p-[12px]  text-[15px] font-medium leading-[26.63px] text-center text-[#B3B3B3]">
                      {formatDate(item.createdAt)}
                    </td> */}
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

      <BookmarkModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
        updatedAt={
          allBookMark.length > 0 ? filterList[position].updatedAt : "N/A"
        }
        createdAt={
          allBookMark.length > 0 ? allBookMark[position].createdAt : "N/A"
        }
        bookMarkName={allBookMark.data[position].bookMarkName || "N/A"
        }
        // bookMarkName={
        //   allBookMark.length > 0
        //     ? allBookMark.data[position].bookMarkName
        //     : "N/A"
        // }
        bookMarkDesc={
          allBookMark.length > 0
            ? allBookMark.data[position].bookMarkDesc
            : "N/A"
        }
        bookMarkLink={
          allBookMark.length > 0
            ? allBookMark.data[position].bookMarkLink
            : "N/A"
        }
        bookMarkValue={
          allBookMark.length > 0
            ? allBookMark.data[position].bookMarkValue
            : "N/A"
        }
        _id={allBookMark.length > 0 ? allBookMark.data[position]._id : "N/A"}
      />
    </section>
  );
}
