import SidebarTMIsHovered from "@/components/organism/Sidebar/sidebar-tm/sidebar-tm-isHovered";
import React from "react";

const LayoutTariffIsHovered = ({ children }) => {
  return (
    <div className="flex justify-start items-start">
      <div className="fixed "><SidebarTMIsHovered /></div>

      <div className="ml-[100px] bg-gray-200 justify-center items-center min-h-screen p-8 w-full box-border">
        {children}
      </div>
    </div>
  );
};

export default LayoutTariffIsHovered;
