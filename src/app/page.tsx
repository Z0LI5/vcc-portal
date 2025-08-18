import Image from "next/image";
import Link from "next/link";
import { Button, HStack } from "@chakra-ui/react";
import NavBar from "@/components/ui/navbar";

export default function Home() {
  return (
    <div className="font-sans grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div>
        <NavBar />
      </div>
    </div>
  );
}
