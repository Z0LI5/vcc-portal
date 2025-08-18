"use server";
import { signIn, auth } from "@/auth";
import Link from "next/link";
import Image from "next/image";
import { LoginCard } from "@/components/login-card";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    return (
      <div>
        <Link href="/user-info"> User Info</Link>
      </div>
    );
  }

  return (
    <div className="justify-items-center p-8 flex-col">
      <LoginCard />
    </div>
  );
}
