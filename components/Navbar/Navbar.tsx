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
import { useRouter, usePathname } from "next/navigation";
import { MdBookmarkAdd } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { FaFileAudio } from "react-icons/fa";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { MdOutlineClose } from "react-icons/md";

interface navLinks {
  id: string;
  name: string;
  icon: any;
  link: string;
}

export default function Navbar() {
  const path = usePathname();
  const router = useRouter();
  const client = useQueryClient();

  const { data } = useQuery({
    queryKey: ["sidebar"],
    initialData: {
      current: false,
    },
  });

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
      link: "/user/all-tasks",
    },
    {
      id: "8",
      name: "Bookmark",
      icon: <FaBookmark />,
      link: "/user/bookmark",
    },
    {
      id: "10",
      name: "Audio Book",
      icon: <FaFileAudio />,
      link: "/user/audio-book",
    },
    {
      id: "9",
      name: "Add Bookmark",
      icon: <MdBookmarkAdd />,
      link: "/user/add-bookmark",
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

  function logout() {
    localStorage.clear();
    router.push("/");
  }

  return (
    <nav
      className={`w-[350px] bg-[#407BFF] h-full overflow-y-scroll sm:absolute sm:z-[1] ${
        data.current
          ? "sm:w-[70%] sm:[transition:width_0.3s_linear]"
          : "sm:w-0 sm:[transition:width_0.3s_linear]"
      }`}
    >
      <p className="hidden justify-end p-[20px] text-[25px] text-[white] -mb-[55px] sm:flex">
        <MdOutlineClose
          className="text-3xl text-[#ffffff]"
          onClick={() => {
            client.setQueryData(["sidebar"], () => {
              return {
                current: false,
              };
            });
          }}
        />
      </p>

      <div className="flex justify-start items-center px-[40px] py-[10px] gap-[20px] mt-[30px]">
        <img
          src={Logo.src}
          alt="Not Available"
          className="h-[60px] rounded-[10px]"
        />
        <span className=" text-[25px] font-bold leading-[30.26px] text-left text-[#FFFFFF]">
          EM-Note
        </span>
      </div>

      <ul className="mt-[50px] pr-[40px]">
        {NavLink.map((item, index: number) => {
          return (
            <li key={index}>
              <Link
                href={item.link}
                className={`flex justify-start items-center gap-[10px] p-[17px] rounded-tl-none rounded-br-[10px] rounded-tr-[10px] rounded-bl-none  text-lg font-semibold leading-[21.78px] text-left  ${
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

      <div className="mt-[50px]">
        <button
          className=" text-[15px] font-medium leading-[27.84px] text-left flex justify-start items-center gap-[10px] text-[white] w-[fit-content] px-[40px] py-[0] mb-[20px]"
          type="button"
          onClick={logout}
        >
          <RiLogoutBoxLine className="text-[25px]" />
          Logout
        </button>
      </div>
    </nav>
  );
}
