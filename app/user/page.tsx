"use client";

import TaskChart from "@/components/Dashboard/Task/TaskChart";
import TaskDetails from "@/components/Dashboard/Task/TaskDetails";
import NotificationDetails from "@/components/Dashboard/Notifications/notificationDetails";
import Notification from "@/components/Dashboard/Notifications/notification";
import { isLoggedIn } from "@/helper/helper";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import Logout from "@/components/Modals/logout";

export default function Dashboard() {
  // if (!isLoggedIn()) {
  //   return <Logout />;
  // }

  return (
    <main className="p-[30px]">
      <div className="flex justify-between align-top w-[100%] gap-4">
        <div className="w-[70%]">
          <TaskChart />
        </div>
        <div className="w-[30%]">
          <TaskDetails />
        </div>
      </div>

      <div className="flex justify-between align-top w-[100%] gap-4 mt-8">
        <div className="w-[70%]">
          <TaskChart />
        </div>
        <div className="w-[30%]">
          <TaskDetails />
        </div>
      </div>

      <div className="flex justify-between align-top w-[100%] gap-4 mt-8 mb-[30px]">
        <div className="w-[70%]">
          <Notification />
        </div>
        <div className="w-[30%]">
          <NotificationDetails />
        </div>
      </div>
    </main>
  );
}
