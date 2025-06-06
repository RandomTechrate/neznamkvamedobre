import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Activity, Users, Settings } from "lucide-react";
import DashboardClient from "./client";

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) {
    redirect("/auth/signin");
  }

  return <DashboardClient session={session} />;
} 