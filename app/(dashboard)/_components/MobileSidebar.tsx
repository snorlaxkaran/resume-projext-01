import React from "react";
import Sidebar from "./Sidebar";
import {
  Sidebar as SidebarMobile,
  SidebarContent,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export const MobileSidebar = () => {
  return (
    <div>
      <SidebarTrigger className="md:hidden p-4 hover:opacity-75 transition"></SidebarTrigger>
      <SidebarMobile className="md:hidden flex">
        <SidebarContent className="p-0 bg-white">
          <Sidebar />
        </SidebarContent>
      </SidebarMobile>
    </div>
  );
};
