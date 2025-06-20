"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { useUserProfile } from "../hooks/useUserPrfile";
import { logout } from "../actions/logout";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Search,
  Mail,
  User as UserIcon,
  CreditCard,
  BadgePercent,
  LogOut,
} from "lucide-react";

function NavAuth() {
  const { user, profile, loading } = useUserProfile();

  return (
    <div className="m-5 grid grid-cols-4 gap-4 items-center">
      {/* Logo */}
      <p className="font-bold text-2xl col-span-1">hanouti</p>

      {/* Input + Search */}
      <div className="w-full relative col-span-2">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
        <Input
          name="search"
          type="text"
          placeholder="Search"
          required
          className="w-full min-w-0 pl-10 h-[45px]"
        />
      </div>

      {/* Profile Dropdown */}
      <div className="col-span-1 flex justify-center md:justify-end">
        <div className="rounded-full bg-bg-main w-14 h-14 flex justify-center items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-text-base">
              {profile?.full_name?.charAt(0)?.toUpperCase()}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-5 mx-5">
                <div className="flex justify-center items-start">

                <p className="rounded-full bg-bg-main w-14 h-14 flex justify-center items-center text-text-base" >  {profile?.full_name?.charAt(0)?.toUpperCase()}</p>
              <div>
                <DropdownMenuLabel className="flex items-center gap-2">
                  <UserIcon size={16} /> {profile?.full_name}
                </DropdownMenuLabel>
                <DropdownMenuLabel className="flex items-center gap-2">
                  <Mail size={16} /> {user?.email}
                </DropdownMenuLabel>
              </div>
                </div>

              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-center gap-2">
                <CreditCard size={16} /> Billing
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <BadgePercent size={16} /> Subscription
              </DropdownMenuItem>
              <button onClick={logout} className="w-full">
                <DropdownMenuItem className="flex items-center gap-2">
                  <LogOut size={16} /> Logout
                </DropdownMenuItem>
              </button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default NavAuth;
