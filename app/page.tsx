
"use client"
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import DashboardContent from "@/components/DashboardContent";
import { useState } from "react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex flex-1 min-h-0">
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <DashboardContent />
      </div>
    </div>
  );
}