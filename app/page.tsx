import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import DashboardContent from "@/components/DashboardContent";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden">
      <Navbar />

      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
}