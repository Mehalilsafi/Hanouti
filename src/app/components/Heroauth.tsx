"use client";

import React from "react";
import { ListOrdered, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
function Heroauth() {

  return (
    <main className="flex-1 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Your main content goes here */}
      <div className="p-6 flex w-full gap-5 flex-col">
        <h1 className="text-2xl font-bold ">Accounte overview</h1>
        <div className="bg-bg-secondary p-4 rounded">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">orders</p>
            <ListOrdered />
          </div>
          <p>0</p>
          <p>0% froom last month </p>
        </div>
        <div className="bg-bg-secondary p-4 rounded">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">revenue</p>
            <Banknote />
          </div>
          <p>
            0 <span>DZD</span>
          </p>
          <p>0% froom last month </p>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center gap-4">
        <h1> No Landing Pages Yet</h1>
        <p>get started by creating your first landing page</p>
        <Button asChild>
          <Link href="/login">creat landing page</Link>
        </Button>
      </div>
    </main>
  );
}

export default Heroauth;
