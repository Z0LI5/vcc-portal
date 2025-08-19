import { NavBar } from "@/components/navbar";

export default function DonationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-emerald-950 text-white">
      {/* Nav */}
      <div className="z-10">
        <NavBar />
      </div>

      {/* Main content */}
      <main className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-4">Donations</h1>
          <p className="text-white/80">
            Support the Vedic Cultural Center with your generous contributions.
          </p>
        </div>
      </main>
    </div>
  );
}
