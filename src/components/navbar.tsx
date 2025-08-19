"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export function NavBar() {
  return (
    <div className="fixed w-screen top-0 right-0 z-50">
      <div className="">
        <div className="flex w-screen items-center justify-between  border-0 bg-black backdrop-blur-lg shadow-lg py-3 px-6">
          {/* Brand / Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white drop-shadow"
          >
            VCC Portal
          </Link>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
              <NavigationMenuItem>
                <Link href="/donations" legacyBehavior passHref>
                  <NavigationMenuLink className="text-white hover:text-orange-200 transition-colors font-medium">
                    Donations
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/services" legacyBehavior passHref>
                  <NavigationMenuLink className="text-white hover:text-orange-200 transition-colors font-medium">
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/account" legacyBehavior passHref>
                  <NavigationMenuLink className="text-white hover:text-orange-200 transition-colors font-medium">
                    Account
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
}
