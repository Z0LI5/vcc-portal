import { auth } from "@/auth";
import Image from "next/image";
import { SignOutButton } from "@/components/sign-out";

export default async function UserInfo() {
  const session = await auth();
  return (
    <div>
      <h1> Next Auth </h1>
      <p> User Signed In with name: {session?.user?.name}</p>
      <p> User Signed In with email: {session?.user?.email}</p>
      <SignOutButton />
    </div>
  );
}
