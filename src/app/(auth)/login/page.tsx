"use client";

import { useState } from "react";
import { login } from "@/lib/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/store/auth-store";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function submit() {
    setLoading(true);

    try {
      const res = await login(username, password);

      Cookies.set("token", res.token);

      useAuthStore.getState().setAuth(res.token, {
        id: res.user.id,
        username: res.user.username,
        name: res.user.fullname,
      });

      router.push("/dashboard");
    } catch (err: any) {
      console.error(err);

      alert(err.response?.data?.message ?? err.message ?? "Terjadi kesalahan.");
    }

    setLoading(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <Card className="w-95 mx-5 px-1">
        <CardHeader className="my-4">
          <CardTitle className="text-center font-bold text-2xl">
            NOCDASH
          </CardTitle>
          <CardDescription className="text-center">
            Masuk dengan username dan password
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5">
          <div>
            <Label>Username</Label>

            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label>Password</Label>

            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1"
            />
          </div>

          <Button
            className="w-full h-10 mb-2 font-bold"
            onClick={submit}
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
