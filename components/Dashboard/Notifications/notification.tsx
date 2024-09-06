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
          <button
            className="text-xl inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            <BsThreeDots />
          </button>
        </div>
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <h1>Read</h1>
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
