import SidebarTMIsHovered from "@/components/organism/Sidebar/sidebar-tm/sidebar-tm-isHovered";
import React from "react";

const LayoutTariffIsHovered = ({ children }) => {
    return (
        <div className="flex justify-start items-start">
          <div className="w-[100px]">
            <SidebarTMIsHovered />
          </div>
    
          <div className="bg-gray-200 h-screen w-full">{children}</div>
        </div>
      );
};

export default LayoutTariffIsHovered;
