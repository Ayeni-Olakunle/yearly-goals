import Link from "next/link";
import { FaRegEnvelope, FaRegEnvelopeOpen } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";

export default function Notification() {
  return (
    <section>
      <div className="flex justify-between items-center mb-[5px]">
        <h1 className="font-[Inter] text-xl font-bold leading-[24.2px] text-left text-[#407bff]">
          Notification
        </h1>
        <Link
          href={"/user/notifications"}
          className="font-[Inter] text-[17px] font-normal leading-[24.2px] text-left text-[#407bff]"
        >
          All
        </Link>
      </div>

      <div className="border-[1.5px] border-solid border-[#D9D9D9] overflow-hidden rounded-[5px]">
        <div className="w-full flex justify-between items-center font-[Inter] text-sm font-medium leading-[26.63px] text-left text-[#646060] p-[15px] [border-bottom:1px_solid_#D9D9D9]">
          <div className="flex justify-start items-center gap-[20px]">
            <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#407bff] text-[white] text-xl rounded-[50px]">
              <FaRegEnvelope />
            </div>
            <p className="font-[Inter] text-sm font-medium leading-[21.78px] text-left text-[#676767]">
              The task with the name Buy Brand New MacBook ....
            </p>
          </div>

          <div className="flex justify-end items-end flex-col">
            <button className="text-xl">
              <BsThreeDots />
            </button>
            <div className="relative">
              <div className="absolute -ml-[148px] border-[1.5px] border-solid border-[#D9D9D9] flex justify-center items-start flex-col w-[150px] rounded-[5px] bg-[white]">
                <button className="w-full p-[10px] [border-bottom:1.5px_solid_#D9D9D9] font-[Inter] text-[13px] font-medium leading-[21.78px] text-center">
                  Mask as read
                </button>
                <button className="w-full p-[10px] font-[Inter] text-[13px] font-medium leading-[21.78px] text-center text-[tomato]">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center font-[Inter] text-sm font-medium leading-[26.63px] text-left text-[#646060] p-[15px] [border-bottom:1px_solid_#D9D9D9]">
          <div className="flex justify-start items-center gap-[20px]">
            <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#407bff] text-[white] text-xl rounded-[50px]">
              <FaRegEnvelope />
            </div>
            <p className="font-[Inter] text-sm font-medium leading-[21.78px] text-left text-[#676767]">
              The task with the name Buy Brand New MacBook ....
            </p>
          </div>
          <button className="text-xl">
            <BsThreeDots />
          </button>
        </div>
        <div className="w-full flex justify-between items-center font-[Inter] text-sm font-medium leading-[26.63px] text-left text-[#646060] p-[15px] [border-bottom:1px_solid_#D9D9D9]">
          <div className="flex justify-start items-center gap-[20px]">
            <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#407bff] text-[white] text-xl rounded-[50px]">
              <FaRegEnvelope />
            </div>
            <p className="font-[Inter] text-sm font-medium leading-[21.78px] text-left text-[#676767]">
              The task with the name Buy Brand New MacBook ....
            </p>
          </div>
          <button className="text-xl">
            <BsThreeDots />
          </button>
        </div>
        <div className="w-full flex justify-between items-center font-[Inter] text-sm font-medium leading-[26.63px] text-left text-[#646060] p-[15px] [border-bottom:1px_solid_#D9D9D9]">
          <div className="flex justify-start items-center gap-[20px]">
            <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#407bff] text-[white] text-xl rounded-[50px]">
              <FaRegEnvelope />
            </div>
            <p className="font-[Inter] text-sm font-medium leading-[21.78px] text-left text-[#676767]">
              The task with the name Buy Brand New MacBook ....
            </p>
          </div>
          <button className="text-xl">
            <BsThreeDots />
          </button>
        </div>
      </div>
    </section>
  );
}
