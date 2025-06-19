"use client";

import React from 'react'


import Link from "next/link";

import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {logout} from "../actions/logout"


function Heroauth() {
  return (
    <div>
<h1> here is where oonlu have acces with auth </h1>
   <DropdownMenu>
            <DropdownMenuTrigger>prfile</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>userName</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            <button onClick={logout}><DropdownMenuItem>Logout</DropdownMenuItem></button>
              
            </DropdownMenuContent>
          </DropdownMenu>
    </div>
  )
}

export default Heroauth