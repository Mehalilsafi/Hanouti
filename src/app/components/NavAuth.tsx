"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useUserProfile } from "../hooks/useUserPrfile";
import { logout } from "../actions/logout";
import Sidebar from "./SideBar";
import Heroauth from "./Heroauth";
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
  Menu,
  X,
} from "lucide-react";

export default function NavAuth() {
  const { user, profile } = useUserProfile();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Detect screen size and handle resize
  useEffect(() => {
    const updateView = () => {
      const desktop = window.innerWidth >= 1200;
      setIsDesktop(desktop);
      // Close mobile sidebar when switching to desktop
      if (desktop && isSidebarOpen) {
        setSidebarOpen(false);
      }
    };

    // Initial check
    updateView();

    // Add resize listener
    window.addEventListener("resize", updateView);

    // Cleanup
    return () => window.removeEventListener("resize", updateView);
  }, [isSidebarOpen]);

  // Handle sidebar toggle
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  
  const handleSearch = (e) => {
    e.preventDefault();
    // Add your search logic here
    console.log("Searching for:", searchQuery);
  };

  
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Get user initials for avatar
  const getUserInitials = () => {
    if (profile?.full_name) {
      const names = profile.full_name.split(" ");
      return names.length > 1
        ? `${names[0][0]}${names[1][0]}`.toUpperCase()
        : names[0][0].toUpperCase();
    }
    return user?.email?.[0]?.toUpperCase() || "U";
  };

  return (
    <div className="relative">
      {/* Mobile Sidebar Overlay */}
      {!isDesktop && isSidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm "
            onClick={() => setSidebarOpen(false)}
          />

          {/* Mobile Sidebar */}
          <div
            className={`fixed top-0 left-0 z-50 h-full bg-white dark:bg-gray-900 shadow-2xl transition-transform duration-300 ease-in-out transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{ width: "min(80vw, 320px)" }}
          >
            {/* Close button */}
            <div className="flex justify-end p-4 border-b dark:border-gray-700">
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <Sidebar onClose={() => setSidebarOpen(false)} />
          </div>
        </>
      )}

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Section - Logo/Menu */}
            <div className="flex items-center gap-4">
              {!isDesktop && (
                <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle sidebar"
                >
                  <Menu size={20} />
                </button>
              )}

              <Link href="/" className="flex items-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden lg:flex">
                  hanouti
                </h1>
              </Link>
            </div>

            {/* Center Section - Search */}
            <div className="flex-1 max-w-lg mx-4">
              <form onSubmit={handleSearch} className="relative">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 h-10 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:bg-white dark:focus:bg-gray-900 transition-colors"
                />
              </form>
            </div>

            {/* Right Section - User Profile */}
            <div className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                    {getUserInitials()}
                  </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-64 mt-2 mr-4" align="end">
                  {/* User Info Header */}
                  <div className="flex items-center gap-3 p-3 border-b dark:border-gray-700">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                      {getUserInitials()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                        {profile?.full_name || "User"}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {user?.email}
                      </p>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-1">
                    <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                      <UserIcon size={16} className="text-gray-500" />
                      <span>Profile Settings</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                      <CreditCard size={16} className="text-gray-500" />
                      <span>Billing</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                      <BadgePercent size={16} className="text-gray-500" />
                      <span>Subscription</span>
                    </DropdownMenuItem>
                  </div>

                  <DropdownMenuSeparator />

                  {/* Logout */}
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  >
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Layout */}
     
        {/* Desktop Sidebar */}
        {isDesktop && (
          <aside className="w-64 min-h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700">
            <Sidebar />
          </aside>
        )}
      
      
    </div>
  );
}
