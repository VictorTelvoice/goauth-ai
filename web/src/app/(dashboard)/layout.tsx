import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/dashboard/Sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-black flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-10 max-w-[1600px] mx-auto">
        {children}
      </main>
    </div>
  );
}
