import React from "react";
import Sidebar from "./_components/Sidebar";
import { Navbar } from "./_components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="h-full">
        <div className="h-[80px] w-full md:pl-56 fixed inset-y-0 z-50">
          <Navbar />
        </div>
        <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
          <Sidebar />
        </div>
        <main className="md:pl-56 pt-[80px] h-full">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
