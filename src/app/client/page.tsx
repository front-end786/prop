"use client"
import Navigation from "@/components/admin/Navigation";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import QuoteTypeDetails from "./clientPage";
import SalesClientComp from "./SaleClient";
import BuyingClientComp from "./Buying";
import SaleAndPurchase from "./SaleAndPurchase";

function ClientPage() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await axios.get("/api/auth/logout");
      if (response.data.success) {
        alert(response.data.message);
        router.push("/login");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <>
      <Navigation />
      <div className="flex w-full item-center h-[70vh] justify-center">
        <div className="flex items-center gap-7">
          <Link href="/client/client-page">
            <button className="client-link button-primary">Client Page</button>
          </Link>

          <button
            className="client-link button-primary "
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <QuoteTypeDetails />
      <SalesClientComp />
      <BuyingClientComp />
      <SaleAndPurchase />
    </>
  );
}

export default ClientPage