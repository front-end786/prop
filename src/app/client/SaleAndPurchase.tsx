import React from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SalesClientComp from "./SaleClient";
import BuyingClientComp from "./Buying";

function SaleAndPurchase() {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold text-gray-700">
        Property Sale and Purchase
      </h1>
      <div className="flex w-[90%] mx-auto gap-7">
        <SalesClientComp />
        <BuyingClientComp />
      </div>
    </div>
  );
}

export default SaleAndPurchase;
