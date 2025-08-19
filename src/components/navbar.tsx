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
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/30 backdrop-blur-lg shadow-lg py-3 px-6">
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
