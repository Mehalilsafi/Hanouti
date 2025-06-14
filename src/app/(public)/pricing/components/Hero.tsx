import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

function Hero() {

    
  return (
    <div>
      <div className="flex flex-col justify-start items-center gap-10 w-full p-4 	">
        <h1 className="font-bold text-5xl flex flex-col items-center justify-center mt-10">
          <span className="block">Start for free, then</span>
          <span className="block">fly to the moon</span>
        </h1>
        <p className="font-semibold text-2xl ">
          Choose the best plan for your business. Change plans as you grow.
        </p>
      </div>
      <div>
        <ToggleGroup
          type="single"
          className="
  p-2 rounded-lg w-fit mx-auto flex gap-1"
        >
          <ToggleGroupItem
            value="yearly"
            className= " hover:bg-bg-secondary hover:rounded-lg bg-bg-main text-text-base"
          >
            yearly
          </ToggleGroupItem>
          <ToggleGroupItem
            value="monthly"
            className="hover:bg-bg-secondary hover:rounded-lg"
          >
            monthly
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}

export default Hero;
