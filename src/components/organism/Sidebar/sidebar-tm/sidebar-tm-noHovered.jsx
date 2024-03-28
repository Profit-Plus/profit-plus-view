"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo2 from "../../../../../public/images/logo2.png";
import Logo1 from "../../../../..//public/images/logo1.png";
import Avatar from "../../../../../public/icons/Avatar.png";
import {
  ArrowLeftToLine,
  Bell,
  BookOpen,
  FilePlus,
  ListOrdered,
  PieChart,
  Search,
} from "lucide-react";
import { Button } from "../../../ui/button";
import { Badge } from "../../../ui/badge";

import { InputWithIcon } from "@/components/atoms/InputWithIcon";

export default function SidebarTMNoHovered() {
  const sidebarTitle = (
    <div className="flex gap-1">
      <p className="text-[#64748B] ">Profit+ </p>
      <p className="text-black"> / Master Calculator</p>
    </div>
  );

  return (
    <>
      <div
        className={`  bg-white  p-6 flex flex-col  gap-8 w-[276px] justify-start items-start`}
      >
        <div className="w-full flex justify-start items-start mb-[16px] ">
          <Image
            src={Logo1}
            width={128}
            height={41}
            alt="logo profit+"
            priority
          />
        </div>

        <h3 className="text-[16px] font-semibold">{sidebarTitle}</h3>

        {/* Search  */}

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

        {/* Menu */}
        {/* <div className={`${isFixed ? "fixed top-0 left-0 z-50" : ""}`}> */}
        <div>
          <p
            className={`
            font-medium  text-[#525252] mb-6`}
          >
            Menu
          </p>
          <div
            className={`mb-32 w-full flex flex-col  gap-4 justify-start items-start`}
          >
            <Button
              className={`w-[219px] justify-start flex gap-2  items-start  text-sm font-medium bg-white text-[#737373] hover:text-white hover:bg-[#1C244D] rounded-sm cursor-pointer`}
            >
              <PieChart className=" font-medium" width={20} height={20} />
              <p className=" font-medium"> Dashboard</p>
            </Button>
            <Button
              className={`w-[219px] justify-start flex gap-2  items-start  text-sm font-medium bg-white text-[#737373] hover:text-white hover:bg-[#1C244D] rounded-sm cursor-pointer`}
            >
              <FilePlus className=" font-medium" width={20} height={20} />
              <p className=" font-medium">Sheet</p>
            </Button>
            <Button
              className={`w-[219px] justify-start flex gap-2  items-start  text-sm font-medium bg-white text-[#737373] hover:text-white hover:bg-[#1C244D] rounded-sm cursor-pointer`}
            >
              <ListOrdered className=" font-medium" width={20} height={20} />
              <p className=" font-medium">Notification</p>
            </Button>
            <Button
              className={`w-[219px] justify-start relative flex gap-2  items-start  text-sm font-medium bg-white text-[#737373] hover:text-white hover:bg-[#1C244D] rounded-sm cursor-pointer`}
            >
              <Bell className=" font-medium" width={20} height={20} />
              <span
                className={`top-2 right-2 absolute text-white w-6 h-5 rounded-sm flex items-center justify-center text-xs`}
              >
                <Badge className="bg-[#D97706] ">3</Badge>
              </span>
              <p className=" font-medium">Master Package</p>
            </Button>
            <Button
              className={`w-[219px] justify-start flex gap-2  items-start  text-sm font-medium bg-white text-[#737373] hover:text-white hover:bg-[#1C244D] rounded-sm cursor-pointer`}
            >
              <BookOpen className=" font-medium" width={20} height={20} />

              <p className=" font-medium">List Product </p>
            </Button>
            <Button
              className={`w-[219px] justify-start flex gap-2  items-start  text-sm font-medium bg-white text-[#737373] hover:text-white hover:bg-[#1C244D] rounded-sm cursor-pointer`}
            >
              <BookOpen className=" font-medium" width={20} height={20} />

              <p className=" font-medium">Documentation </p>
            </Button>
          </div>
        </div>

        {/* Image Account */}

        <>
          <div className="w-[219px] bg-white flex justify-center items-center gap-2">
            <div className="rounded-full">
              <Image
                src={Avatar}
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
      </div>
    </>
  );
}
