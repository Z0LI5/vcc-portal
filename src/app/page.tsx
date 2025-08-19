"use server";
import { signIn, auth } from "@/auth";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LoginCard } from "@/components/login-card";
import { NavBar } from "@/components/navbar";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    return (
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <NavBar />
        <div className="absolute inset-0 bg-black/40" /> {/* dark overlay */}
        <Card className="relative w-full max-w-md bg-white/30 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-white drop-shadow">
              Welcome back, {session.user.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <p className="text-white/90 text-center">
              Access your profile and portal features
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild className="w-full">
              <Link href="/user-info">Go to User Info</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522199710521-72d69614c702?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/40" /> {/* dark overlay */}
      <Card className="relative w-full max-w-lg bg-white/30 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-white drop-shadow">
            Vedic Cultural Center Portal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-white/90 mb-4">
            Sign in to access your personalized features
          </p>
          <LoginCard />
        </CardContent>
      </Card>
    </div>
  );
}
