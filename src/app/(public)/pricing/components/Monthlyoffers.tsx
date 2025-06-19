import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X } from "lucide-react";

function Monthlyoffers() {
  type OfferPrice = {
    offerName: "earth" | "moon" | "stellar";
    offerPrice: number;
    offerAudience: string;
  };

  const offersPrices: OfferPrice[] = [
    {
      offerName: "earth",
      offerPrice: 0,
      offerAudience: "Best for beginners",
    },
    {
      offerName: "moon",
      offerPrice: 3900,
      offerAudience: "Best for most people",
    },
    {
      offerName: "stellar",
      offerPrice: 7900,
      offerAudience: "Best for advanced sellers",
    },
  ];

  type PlanFeature = {
    feature: string;
    earth: boolean;
    moon: boolean;
    stellar: boolean;
  };

  const planFeatures: PlanFeature[] = [
    {
      feature: "Custom domain",
      earth: false,
      moon: true,
      stellar: true,
    },
    {
      feature: "AI store generator",
      earth: false,
      moon: true,
      stellar: true,
    },
    {
      feature: "Unlimited products",
      earth: true,
      moon: true,
      stellar: true,
    },
    {
      feature: "Priority support",
      earth: false,
      moon: false,
      stellar: true,
    },
    {
      feature: "AI themes",
      earth: false,
      moon: true,
      stellar: true,
    },
    {
      feature: "Facebook Pixel",
      earth: false,
      moon: true,
      stellar: true,
    },
    {
      feature: "TikTok Pixel",
      earth: false,
      moon: true,
      stellar: true,
    },
    {
      feature: "Delivery integration",
      earth: false,
      moon: true,
      stellar: true,
    },
    {
      feature: "Order management",
      earth: true,
      moon: true,
      stellar: true,
    },
  ];

  return (
    <div className="h-fit mx-5">
      <div className="flex flex-col gap-5 md:justify-center md:items-start md:flex-row">
        {offersPrices.map((offer, index) => (
          <Card key={index} className="h-[350px] m-8">
            <CardHeader>
              <CardTitle className="text-center text-3xl font-bold capitalize">
                {offer.offerName}
              </CardTitle>
              <div className="flex gap-1 justify-center items-center">
                <a
                  href="#plans-comparison"
                  className="flex items-center gap-1 hover:text-text-highlight"
                >
                  <p>Compare plans</p>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </CardHeader>
            <CardContent className="flex justify-center items-center gap-1">
              <p className="text-xl font-bold text-text-highlight">DZD</p>
              <p className="text-2xl font-bold">{offer.offerPrice}</p>
              <p className="text-sm font-light text-text-highlight">per month</p>
            </CardContent>
            <CardFooter className="flex flex-col gap-5">
              <Button variant="outline">Start free trial</Button>
              <p className="text-text-highlight font-medium">{offer.offerAudience}</p>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="my-10" id="plans-comparison">
        <h1 className="text-center text-4xl font-bold mb-6">
          Compare our plans
        </h1>
        <Table>
          <TableCaption>Features included in each plan.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Features</TableHead>
              {offersPrices.map((offer) => (
                <TableHead
                  key={offer.offerName}
                  className="capitalize text-center"
                >
                  {offer.offerName}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {planFeatures.map((featureRow) => (
              <TableRow key={featureRow.feature}>
                <TableCell className="font-medium">
                  {featureRow.feature}
                </TableCell>
                {offersPrices.map((plan) => {
                  const isAvailable = featureRow[plan.offerName];
                  return (
                    <TableCell key={plan.offerName} className="text-center">
                      {isAvailable ? (
                        <Check className="text-green-500 mx-auto" />
                      ) : (
                        <X className="text-red-500 mx-auto" />
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Monthlyoffers;
