"use client";
import { useState } from "react";
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Monthlyoffers from "./Monthlyoffers";
import Yearly from "./Yearly";

function Hero() {
  type plan = "monthly" | "yearly";

  const [billingPlan, setBillingPlan] = useState<plan>("monthly");
  function handleBillingPlan(val: plan) {
    if (val === "monthly") {
      setBillingPlan("monthly");
      console.log("value is :", billingPlan);
    } else {
      setBillingPlan("yearly");
      console.log("value is :", billingPlan);
    }
  }

  
  return (
    <div>
      <div className="flex flex-col justify-start items-center gap-10 w-full p-4 	">
        <h1 className="font-semibold text-2xl md:font-bold md:text-5xl flex flex-col items-center justify-center mt-10">
          <span className="block">Start for free, then</span>
          <span className="block">fly to the moon</span>
        </h1>
        <p className="font-semibold text-2xl text-center ">
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
            className={`hover:bg-bg-secondary hover:rounded-lg hover:text-text-base ${
              billingPlan === "yearly"
                ? "bg-bg-main  text-text-base"
                : "bg-white"
            }`}
            onClick={() => handleBillingPlan("yearly")}
          >
            yearly
          </ToggleGroupItem>
          <ToggleGroupItem
            value="monthly"
            className={`hover:bg-bg-secondary hover:rounded-lg ${
              billingPlan === "monthly"
                ? "bg-bg-main text-text-base"
                : "bg-white "
            }`}
            onClick={() => handleBillingPlan("monthly")}
          >
            monthly
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div>{billingPlan === "monthly" ? <Monthlyoffers /> : <Yearly />}</div>
    </div>
  );
}

export default Hero;
