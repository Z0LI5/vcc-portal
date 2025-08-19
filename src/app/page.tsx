"use server";

import { auth } from "@/auth";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { LoginCard } from "@/components/login-card";
import { SignOutButton } from "@/components/sign-out";
import { NavBar } from "@/components/navbar";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen flex flex-col bg-emerald-950 text-white">
      {/* Nav */}
      {session?.user && (
        <div className="z-10">
          <NavBar />
        </div>
      )}

      {/* Main content */}
      <main className="flex flex-1 items-center justify-center p-4">
        <Card className="w-full max-w-md bg-black/10 border-0 shadow-lg rounded-2xl">
          {session?.user ? (
            <>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-center text-white">
                  Welcome back, {session.user.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-white/80">
                  Access your profile and portal features
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <SignOutButton />
              </CardFooter>
            </>
          ) : (
            <>
              <CardHeader>
                <CardTitle className="text-3xl sm:text-4xl font-bold text-center text-white">
                  VCC Portal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-white/80 mb-4">
                  Sign in to access your personalized features
                </p>
                <LoginCard />
              </CardContent>
            </>
          )}
        </Card>
      </main>
    </div>
  );
}
