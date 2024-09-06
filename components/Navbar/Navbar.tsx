"use client";

import Logo from "@/public/E 1.png";
import { AiFillDashboard } from "react-icons/ai";
import Link from "next/link";
import { GoGoal } from "react-icons/go";
import { FaTasks } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

interface navLinks {
  id: string;
  name: string;
  icon: any;
  link: string;
}

export default function Navbar() {
  const path = usePathname();

  const NavLink: navLinks[] = [
    {
      id: "1",
      name: "Dashboard",
      icon: <AiFillDashboard />,
      link: "/user",
    },
    {
      id: "2",
      name: "All Goals",
      icon: <GoGoal />,
      link: "/user/all-goals",
    },
    {
      id: "3",
      name: "All Tasks",
      icon: <FaTasks />,
      link: "/user/all-task",
    },
    {
      id: "4",
      name: "Add Goals",
      icon: <IoIosAddCircle />,
      link: "/user/add-goals",
    },
    {
      id: "5",
      name: "Add Task",
      icon: <IoMdAdd />,
      link: "/user/add-task",
    },
    {
      id: "6",
      name: "Notifications",
      icon: <IoIosNotifications />,
      link: "/user/notifications",
    },
    {
      id: "7",
      name: "Profile",
      icon: <IoMdPerson />,
      link: "/user/profile",
    },
  ];

  console.log(path);

  return (
    <nav className="w-[350px] bg-[#407BFF] h-full overflow-y-scroll">
      <div className="flex justify-start items-center px-[40px] py-[10px] gap-[20px] mt-[30px]">
        <img
          src={Logo.src}
          alt="Not Available"
          className="h-[60px] rounded-[10px]"
        />
        <span className="font-[Inter] text-[25px] font-bold leading-[30.26px] text-left text-[#FFFFFF]">
          Emmy
        </span>
      </div>

      <ul className="mt-[50px] pr-[40px]">
        {NavLink.map((item, index: number) => {
          return (
            <li key={index}>
              <Link
                href={item.link}
                className={`flex justify-start items-center gap-[10px] p-[17px] rounded-tl-none rounded-br-[10px] rounded-tr-[10px] rounded-bl-none font-[Inter] text-lg font-semibold leading-[21.78px] text-left  ${
                  path === item.link
                    ? "text-[#407bff] bg-[white]"
                    : "text-[white] bg-[#407bff]"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <p className="mt-[50px]">
        <Link
          href={"/"}
          className="font-[Inter] text-[15px] font-medium leading-[27.84px] text-left flex justify-start items-center gap-[10px] text-[white] w-[fit-content] px-[40px] py-[0] mb-[20px]"
        >
          <RiLogoutBoxLine className="text-[25px]" />
          Log out
        </Link>
      </p>
    </nav>
  );
}
