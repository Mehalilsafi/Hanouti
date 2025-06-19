 import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signup } from './actions/signupAction'
function page() {
   return (
    <div className="m-5 h-[80vh] flex flex-col gap-5 justify-start items-center w-full">
      <h1 className="font-bold text-text-highlight text-3xl">Join us here</h1>
      
      <form action={signup} className="h-fit flex flex-col gap-5 p-5 justify-start items-center bg-bg-main rounded">
        <Input 
          id="firstName" 
          name="firstName" 
          type="text" 
          placeholder="First Name" 
          required
        />
        <Input 
          id="lastName" 
          name="lastName" 
          type="text" 
          placeholder="Last Name" 
          required
        />
        <Input 
          id="email" 
          name="email" 
          type="email" 
          placeholder="Email" 
          required
        />
        <Input  
          id="password" 
          name="password" 
          type="password" 
          placeholder="Password" 
          required
        />
        
        <Button type="submit" className="text-text-base w-full">
          Sign Up
        </Button>
      </form>
      
      <Link href='/login'>
        Already have an account? <span className="text-text-highlight">Login</span>
      </Link>
    </div>
  );
  
}

export default page;
