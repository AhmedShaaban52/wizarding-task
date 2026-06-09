"use client"
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import DashboardContent from "@/components/DashboardContent";
import { useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#020a13]">

      <div className="sticky top-0 z-30 w-full shrink-0">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
      </div>

      <div className="flex w-full">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <main className="flex-1 min-w-0 lg:pl-64">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
}