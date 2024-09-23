"use client";
export default function Loader() {
  return (
    <div className="absolute top-[0] w-full left-[0] h-screen flex justify-center items-center px-[0] py-[50px] bg-[#ffffff82] overflow-y-scroll">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
