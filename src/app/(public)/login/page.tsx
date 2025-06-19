import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { login } from './actions/loginActions'
function page() {
  return (
     <div className="m-5 h-[80vh] flex flex-col gap-5 justify-start items-center w-full">
       <h1 className="font-bold text-text-highlight text-3xl">Join us here</h1>
       
       <form action={login} className="h-fit flex flex-col gap-5 p-5 justify-start items-center bg-bg-main rounded">
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
       
       <Link href='/singup'>
        Dont have an account? <span className="text-text-highlight">signup</span>
       </Link>
     </div>
   );
}

export default page;
