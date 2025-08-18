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
    <div className="justify-items-center p-5 flex-col">
      <h1 className="font-bold text-3xl pb-10">
        {" "}
        Vedic Cultural Center Portal
      </h1>
      <LoginCard />
    </div>
  );
}
