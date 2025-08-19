import { NavBar } from "@/components/navbar";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-emerald-950 text-white">
      {/* Nav */}
      <div className="z-10">
        <NavBar />
      </div>

      {/* Main content */}
      <main className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-4">Services</h1>
          <p className="text-white/80">
            Explore the spiritual and cultural services offered by the VCC.
          </p>
        </div>
      </main>
    </div>
  );
}
