import { NavBar } from "@/components/navbar";
import { SignOutButton } from "@/components/sign-out";
import { auth } from "@/auth";

export default async function AccountPage() {
  const session = await auth();
  return (
    <div className="min-h-screen flex flex-col bg-emerald-950 text-white">
      {/* Nav */}
      <div className="z-10">
        <NavBar />
      </div>

      {/* Main content */}
      <main className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-4">Account</h1>
          <p className="text-white/80">
            Manage your account details, profile settings, and preferences here.
          </p>
          <h1> Next Auth </h1>
          <p> User Signed In with name: {session?.user?.name}</p>
          <p> User Signed In with email: {session?.user?.email}</p>
          <SignOutButton />
        </div>
      </main>
    </div>
  );
}
