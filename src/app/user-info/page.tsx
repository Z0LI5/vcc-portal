import { auth } from "@/auth";
import Image from "next/image";
import { SignOutButton } from "@/components/sign-out";

export default async function UserInfo() {
  const session = await auth();
  return <div></div>;
}
