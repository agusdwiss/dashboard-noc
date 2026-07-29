"use client";

import Link from "next/link";
import { LayoutDashboard, Monitor, Bell, Users } from "lucide-react";

export function AppSidebar() {
  return (
    <aside className="w-64 border-r bg-background">
      <div className="p-6">
        <h1 className="text-xl font-bold">Dashboard NOC</h1>
      </div>

      <nav className="p-4 space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent"
        >
          <LayoutDashboard className="h-4 w-4" />
          Dashboard
        </Link>

        <Link
          href="/devices"
          className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent"
        >
          <Monitor className="h-4 w-4" />
          Devices
        </Link>

        <Link
          href="/alarms"
          className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent"
        >
          <Bell className="h-4 w-4" />
          Alarm
        </Link>

        <Link
          href="/users"
          className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent"
        >
          <Users className="h-4 w-4" />
          Users
        </Link>
      </nav>
    </aside>
  );
}