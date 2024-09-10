"use client";

export default function AddTask() {
  return (
    <div>
      <div>
        <h1 className="font-[Inter] text-3xl font-bold leading-[36.31px] text-left">
          Add Tasks
        </h1>
        <p className="font-[Inter] text-[15px] font-normal leading-[24.2px] text-left text-[#8D8D8D]">
          Please take your goals very serious
        </p>
      </div>
      <form>
        <div className="border-[1.5px] border-solid border-[#dddddd] mt-[8px] rounded-[5px] p-[25px]">
          <div>
            <div className="px-[0] py-[12px] flex justify-start items-start flex-col">
              <label
                htmlFor="GoalName"
                className="font-[Inter] text-[15px] font-medium leading-[21.78px] text-left text-[#8D8D8D]"
              >
                Task Name
              </label>
              <input
                type="text"
                name=""
                id=""
                className="w-full border-[1.5px] border-solid border-[#B3B3B3] mt-[4px] p-[8px] rounded-[5px] text-[gray]"
              />
            </div>

            <div className="px-[0] py-[12px] flex justify-start items-start flex-col">
              <label
                htmlFor="GoalName"
                className="font-[Inter] text-[15px] font-medium leading-[21.78px] text-left text-[#8D8D8D]"
              >
                Task Link
              </label>
              <input
                type="text"
                name=""
                id=""
                className="w-full border-[1.5px] border-solid border-[#B3B3B3] mt-[4px] p-[8px] rounded-[5px] text-[gray]"
              />
            </div>

            <div className="px-[0] py-[12px] flex justify-start items-start flex-col">
              <label
                htmlFor="GoalName"
                className="font-[Inter] text-[15px] font-medium leading-[21.78px] text-left text-[#8D8D8D]"
              >
                Task Value
              </label>
              <input
                type="text"
                name=""
                id=""
                className="w-full border-[1.5px] border-solid border-[#B3B3B3] mt-[4px] p-[8px] rounded-[5px] text-[gray]"
              />
            </div>

            <div className="px-[0] py-[12px] flex justify-start items-start flex-col">
              <label
                htmlFor=""
                className="font-[Inter] text-[15px] font-medium leading-[21.78px] text-left text-[#8D8D8D]"
              >
                Task Description
              </label>
              <textarea
                name=""
                id=""
                className="w-full border-[1.5px] border-solid border-[#B3B3B3] mt-[4px] p-[8px] rounded-[5px] text-[gray]"
                rows={5}
              ></textarea>
            </div>
            <div className="flex gap-[10px] items-center justify-start">
              <input type="checkbox" name="" id="" />
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
