import SidebarTMNoHovered from "@/components/organism/Sidebar/sidebar-tm/sidebar-tm-noHovered";
import React from "react";

const LayoutTariff = ({ children }) => {
  return (
    <div className="flex justify-start items-start">
      <div className="w-[270px]">
        <SidebarTMNoHovered />
      </div>

      <div className="bg-gray-200 h-screen w-full">{children}</div>
    </div>
  );
};

export default LayoutTariff;
