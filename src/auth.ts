export const runtime = "nodejs";

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { firestore } from "./lib/firestore";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHub, Google],
  adapter: FirestoreAdapter(firestore),
});
