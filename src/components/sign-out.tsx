"use client";

import { logout } from "@/lib/actions/auth";
import { Button } from "./ui/button";

export const SignOutButton = () => {
  return <Button onClick={() => logout()}> Sign Out! </Button>;
};
