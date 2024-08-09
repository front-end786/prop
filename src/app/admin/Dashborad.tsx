"use client";
import NavigationBar from "@/components/admin/Navigation";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
function Dashboard() {
  const dashboardData = [
    {
      heading: "Total User",
      value: "23",
    },
    {
      heading: "Total Table",
      value: "23",
    },
    {
      heading: "Total Calculators",
      value: "23",
    },
    {
      heading: "Total User List",
      value: "23",
    },
  ];

  const data = [
    { link: "/", name: "Home" },
    { link: "/admin", name: "Admin" },
    { link: "/admin/users", name: "Users" },
    { link: "/admin/calculator", name: "Calculators" },
    { link: "/admin/dashboard", name: "Dashboard" },
  ];

  return (
    <>
      <div className="dashboard flex mx-auto w-[95%] p-7 rounded-xl mb-7">
        <div className="w-[30%] flex flex-col gap-6">
          <Image
            src="/profile-icon.png"
            width={200}
            height={200}
            className="rounded-full border border-gray-400 mx-auto"
            alt="profile"
          />
          <ul>
            {data.map((item) => (
              <li key={item.name} className="w-full flex">
                <Link
                  href={item.link}
                  className="text-2xl font-bold text-center my-2 bg-gray-200 w-full py-2"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <button className="bg-black text-2xl py-2 px-4 w-full text-white hover:bg-gray-800 font-bold shadow-lg rounded-lg">
            Logout
          </button>
        </div>
        <div className="w-[70%] p-7">
          <div className="flex gap-14 flex-wrap px-7">
            {dashboardData.map((item) => (
              <div
                key={item.heading}
                className={
                  item.heading == "Total User"
                    ? "bg-gray-100 shadow-xl py-2 px-3 rounded-xl flex-grow w-2/4  border border-gray-700"
                    : "bg-gray-100 shadow-xl py-2 px-3 rounded-xl flex-shrink border border-gray-700"
                }
              >
                <h2 className="text-4xl font-bold text-center">
                  {item.heading}
                </h2>
                <p className="my-3 font-semibold text-gray-700 text-2xl text-center">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Image
              src="/graph-arrow.png"
              width={500}
              height={500}
              alt="graph image mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
