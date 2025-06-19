import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { login } from './actions/loginActions'
function page() {
  return (
    <div className="m-5 h-[80vh] flex flex-col gap-5 justify-start items-center w-full ">
    <h1 className="font-bold text-text-highlight text-3xl">join us here </h1>
    <form  className="h-fit flex  flex-col gap-5 p-5  justify-start items-center bg-bg-main rounded ">
     <Input type="name" placeholder="name" />
     <Input id="email" name="email" type="email" placeholder="Email" />
     <Input  id="password" name="password" type="password" placeholder="password" />

     <Link href='/'>
     <Button formAction={login}  className="text-text-base w-full ">login</Button>
     </Link> 
  <Link href='/singup' className="text-text-base">dont have an  account ? <span className="text-text-highlight"> signup</span></Link>
    </form>
    </div>
  );
}

export default page;
