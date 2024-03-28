import SidebarPM from "@/components/organism/Sidebar/sidebar-pm";

const MainLayout = ({ children }) => {
  return (
    <div className="flex justify-start items-start">
      {/* <div className="w-[100px]"> */}
      <SidebarPM />
      {/* </div> */}

      <div className="bg-gray-200 h-[900px] w-full">{children}</div>
    </div>
  );
};

export default MainLayout;
