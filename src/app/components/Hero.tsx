import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
function Hero() {
  return (
    <div className="flex flex-col justify-start items-center gap-10 w-full p-4 		h-screen bg-bg-main">
      <h1 className="font-bold text-5xl flex flex-col items-center justify-center mt-10">
        <span className="block">Your journey to success</span>
        <span className="block">begins now</span>
      </h1>
      <p className="font-semibold text-2xl ">
        Make your first sale. Hit your first million. Build your business
        without limits.{" "}
      </p>

       <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button className="font-semibold text-xl ">start free trial </Button>
    </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-row flex-wrap items-center gap-12">
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <p className="text-xl font-medium">Join thousands of entrepreneurs simplifying their online sales.</p>
      </div>
    </div>
  );
}

export default Hero;
