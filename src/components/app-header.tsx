"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function AppHeader() {
  const router = useRouter();

  function logout() {
    Cookies.remove("token");
    router.replace("/login");
  }

  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <h2 className="text-lg font-semibold">
        Dashboard
      </h2>

      <Button
        variant="outline"
        onClick={logout}
      >
        Logout
      </Button>
    </header>
  );
}