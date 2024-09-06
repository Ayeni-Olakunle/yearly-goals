export default function TaskDetails() {
  return (
    <section className="mt-[4.7em]">
      <h1 className="font-[Inter] text-[17px] font-bold leading-[22.99px] text-left text-[#407bff] mb-[5px]">
        Tasks Details
      </h1>
      <div className="border-[1.5px] border-solid border-[#D9D9D9] overflow-hidden rounded-[5px]">
        <div className="flex justify-between items-center font-[Inter] text-sm font-medium leading-[26.63px] text-left text-[#85C78B] p-[15px] [border-bottom:1px_solid_#D9D9D9]">
          <h1>Completed Tasks</h1>
          <p>15</p>
        </div>
        <div className="flex justify-between items-center font-[Inter] text-sm font-medium leading-[26.63px] text-left text-[#FFA500] p-[15px] [border-bottom:1px_solid_#D9D9D9]">
          <h1>In Progress Tasks</h1>
          <p>5</p>
        </div>
        <div className="flex justify-between items-center font-[Inter] text-sm font-medium leading-[26.63px] text-left text-[#FF6347] p-[15px] [border-bottom:1px_solid_#D9D9D9]">
          <h1>Pending Tasks</h1>
          <p>15</p>
        </div>
        <div className="flex justify-between items-center font-[Inter] text-sm font-medium leading-[26.63px] text-left text-[#646060] p-[15px]">
          <h1>Close Tasks</h1>
          <p>15</p>
        </div>
      </div>
    </section>
  );
}
