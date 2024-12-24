"use client";

import TaskChart from "@/components/Dashboard/Task/TaskChart";
import TaskDetails from "@/components/Dashboard/Task/TaskDetails";
import NotificationDetails from "@/components/Dashboard/Notifications/notificationDetails";
import Notification from "@/components/Dashboard/Notifications/notification";
// import { isLoggedIn } from "@/helper/helper";
// import { redirect } from "next/navigation";
// import { useEffect } from "react";
// import Logout from "@/components/Modals/logout";
import GrowthChart from "@/components/Dashboard/Task/GrowthChart";
import GrowthDetails from "@/components/Dashboard/Task/GrowthDetails";


export default function Dashboard() {
  // if (!isLoggedIn()) {
  //   return <Logout />;
  // }

  return (
    <main className="p-[30px] sm:p-[15px]">
      <div className="flex justify-between align-top w-[100%] gap-4 sm:flex-col-reverse">
        <div className="w-[70%] sm:w-full">
          <GrowthChart />
        </div>
        <div className="w-[30%] sm:w-full">
          <GrowthDetails />
        </div>
      </div>

      <div className="flex justify-between align-top w-[100%] gap-4 mt-8 sm:flex-col-reverse sm:mt-2">
        <div className="w-[70%] sm:w-full">
          <TaskChart />
        </div>
        <div className="w-[30%] sm:w-full">
          <TaskDetails />
        </div>
      </div>

      <div className="flex justify-between align-top w-[100%] gap-4 mt-8 mb-[30px] sm:flex-col-reverse">
        <div className="w-[70%] sm:w-full">
          <Notification />
        </div>
        <div className="w-[30%] sm:w-full">
          <NotificationDetails />
        </div>
      </div>
    </main>
  );
};
