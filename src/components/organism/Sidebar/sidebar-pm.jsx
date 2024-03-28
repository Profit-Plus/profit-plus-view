"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo2 from "../../../../public/images/logo2.png";
import Logo1 from "../../../../public/images/logo1.png";
import Avatar from "../../../../public/icons/Avatar.png";
import {
  ArrowLeftToLine,
  Bell,
  BookOpen,
  FilePlus,
  ListOrdered,
  PieChart,
  Search,
} from "lucide-react";
import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";

import { InputWithIcon } from "@/components/atoms/InputWithIcon";

export default function SidebarPM() {
  const [isSidebarHovered, setSidebarHovered] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sidebarTitle = isSidebarHovered ? (
    <div className="flex gap-1">
      <p className="text-[#64748B] ">Profit+ </p>
      <p className="text-black"> / Project Monitoring</p>
    </div>
  ) : (
    "/PM"
  );
  return (
    <>
      <div
        className={` w-[100px] z-20 bg-white relative h-fit p-6 flex flex-col justify-center items-center gap-8 hover:w-[276px] hover:justify-start hover:items-start ease-out ${
          isSidebarHovered ? "duration-700" : "duration-0"
        }`}
        onMouseEnter={() => setSidebarHovered(true)}
        onMouseLeave={() => setSidebarHovered(false)}
      >
        {isSidebarHovered ? (
          <div className="w-full flex justify-start items-start ">
            <Image
              src="/images/logo1.png"
              width={128}
              height={41}
              alt="logo profit+"
              priority
            />
          </div>
        ) : (
          <div className="w-full flex justify-center items-center ">
            <Image
              src="/images/logo2.png"
              width={31}
              height={41}
              alt="logo profit+"
              priority
            />
          </div>
        )}

        <h3 className="text-[16px] font-semibold">{sidebarTitle}</h3>

        {/* Search  */}
        {isSidebarHovered ? (
          <InputWithIcon
            icon={
              <Search
                width={20}
                height={20}
                className="text-[#737373] font-medium"
              />
            }
            placeholder="Search"
          />
        ) : (
          <Button className="bg-white hover:bg-slate-200 rounded-none cursor-pointer">
            <Search
              className="text-[#737373] font-medium"
              width={20}
              height={20}
            />
          </Button>
        )}

        {/* Menu */}
        {/* <div className={`${isFixed ? "fixed top-0 left-0 z-50" : ""}`}> */}
        <div className="">
          <p
            className={`${
              isSidebarHovered ? "" : "text-center"
            } font-medium  text-[#525252] mb-6`}
          >
            Menu
          </p>
          <div
            className={` w-full flex flex-col  gap-4 ${
              isSidebarHovered
                ? "justify-start items-start"
                : "justify-center items-center"
            } `}
          >
            <Button
              className={`${
                isSidebarHovered ? "w-[219px] justify-start" : "justify-center"
              } flex gap-2  items-start  text-sm font-medium bg-white text-[#737373] hover:text-white hover:bg-[#1C244D] rounded-sm cursor-pointer`}
            >
              <PieChart className=" font-medium" width={20} height={20} />
              {isSidebarHovered ? (
                <p className=" font-medium"> Dashboard</p>
              ) : (
                ""
              )}
            </Button>
            <Button
              className={`${
                isSidebarHovered ? "w-[219px] justify-start" : "justify-center"
              } flex gap-2  items-start  text-sm font-medium bg-white text-[#737373] hover:text-white hover:bg-[#1C244D] rounded-sm cursor-pointer`}
            >
              <FilePlus className=" font-medium" width={20} height={20} />
              {isSidebarHovered ? <p className=" font-medium">Create</p> : ""}
            </Button>
            <Button
              className={`${
                isSidebarHovered ? "w-[219px] justify-start" : "justify-center"
              }  flex gap-2  items-start  text-sm font-medium bg-white text-[#737373] hover:text-white hover:bg-[#1C244D] rounded-sm cursor-pointer`}
            >
              <ListOrdered className=" font-medium" width={20} height={20} />
              {isSidebarHovered ? (
                <p className=" font-medium">List Project</p>
              ) : (
                ""
              )}
            </Button>
            <Button
              className={`${
                isSidebarHovered ? "w-[219px] justify-start" : "justify-center"
              }  relative flex gap-2  items-start  text-sm font-medium bg-white text-[#737373] hover:text-white hover:bg-[#1C244D] rounded-sm cursor-pointer`}
            >
              <Bell className=" font-medium" width={20} height={20} />
              <span
                className={`${
                  isSidebarHovered ? "top-2 right-2" : "top-0 right-0"
                } absolute right-0  text-white w-6 h-5 rounded-sm flex items-center justify-center text-xs`}
              >
                <Badge className="bg-[#D97706] ">3</Badge>
              </span>
              {isSidebarHovered ? (
                <p className=" font-medium">Notification</p>
              ) : (
                ""
              )}
            </Button>
            <Button
              className={`${
                isSidebarHovered ? "w-[219px] justify-start" : "justify-center"
              } flex gap-2  items-start  text-sm font-medium bg-white text-[#737373] hover:text-white hover:bg-[#1C244D] rounded-sm cursor-pointer`}
            >
              <BookOpen className=" font-medium" width={20} height={20} />
              {isSidebarHovered ? (
                <p className=" font-medium">Documentation</p>
              ) : (
                ""
              )}
            </Button>
          </div>
        </div>

        {/* Image Account */}
        {isSidebarHovered ? (
          <>
            <div className="w-[219px] bg-white flex justify-center items-center gap-2">
              <div className="rounded-full">
                <Image
                  src="/icons/Avatar.png"
                  width={32}
                  height={32}
                  alt="Avatar"
                  priority
                />
              </div>
              <div>
                <p className="text-black text-sm ">Eva Mendes</p>
                <p className="text-xs text-[#64748B]">eva@example.com</p>
              </div>
              <div>
                <ArrowLeftToLine className="text-[#64748B] ml-7 " />
              </div>
            </div>
          </>
        ) : (
          ""
          // <div className="rounded-full">
          //   <Image
          //     src="/icons/Avatar.png"
          //     width={32}
          //     height={32}
          //     alt="Avatar"
          //     priority
          //   />
          // </div>
        )}
      </div>
    </>
  );
}
