"use client";

import React from "react";
import { MobileSidebar } from "./MobileSidebar";
import { NavbarRoutes } from "@/components/NavbarRoutes";

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex justify-between items-center bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};
