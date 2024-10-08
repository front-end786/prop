"use client";
import NavigationBar from "@/components/admin/Navigation";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Dashboard from "./admin/Dashborad";
export default function Home() {
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
      <NavigationBar />
      <main className="starter h-[65vh]">
        <h1 className="">
          <Link className="admin-link" href="/admin">
            Admin Page
          </Link>
        </h1>
        <h1 className="">
          <Link className="client-link button-primary" href="/client">
            Client Page
          </Link>
        </h1>
        <h1 className="">
          <button
            className="client-link button-primary "
            onClick={handleLogout}
          >
            Logout
          </button>
        </h1>
      </main>
      <Dashboard />
    </>
  );
}
