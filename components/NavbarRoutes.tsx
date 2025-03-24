import React from "react";

import { SignInButton, SignOutButton, useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");

  const { userId } = useAuth();
  const isAuthenticated = userId ? (
    <SignOutButton />
  ) : (
    <SignInButton mode="modal" />
  );
  return (
    <div className="flex gap-x-2 ml-auto">
      {isTeacherPage || isPlayerPage ? (
        <Link href={"/"}>
          <Button variant={"ghost"} size={"sm"}>
            <LogOut className="h-4 w-4" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href={"/teacher/courses"}>
          <Button variant={"ghost"} size={"sm"}>
            Teacher mode
          </Button>
        </Link>
      )}
      <div className="border border-blue-300 px-3 py-1 text-sm rounded-full text-blue-500 bg-white hover:bg-blue-400/20 transition-all">
        {isAuthenticated}
      </div>
    </div>
  );
};
