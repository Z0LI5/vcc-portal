import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function HeroPage() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="font-bold text-4xl md:text-6xl mb-6 drop-shadow-lg">
          VCC Portal
        </h1>

        <p className="text-lg md:text-xl mb-8 leading-relaxed drop-shadow-md opacity-90">
          This is the Vedic Cultural Center Portal for Donations and Services.
          Please sign in to continue.
        </p>

        <SignInButton />
      </div>

      {/* Bottom Gradient */}
    </div>
  );
}
