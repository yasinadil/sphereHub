"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/ThemeToggle/Toggle";
import { SearchBar } from "./SearchBar";

export default function Navbar() {
  return (
    <div>
      <div className="block md:hidden text-black dark:text-white">
        <div className="fixed top-5 z-10 left-[50%] translate-x-[-50%]">
          <div className="flex w-[95vw] md:w-[50vw] justify-between items-center py-2 px-4 rounded-full glasscard">
            <h1 className="font-semibold text-white">
              <Link href={"/"}>Sphere Hub</Link>
            </h1>
            <div className="flex justify-between items-center gap-2">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <SearchBar />
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="pt-8">
                      <Link href="/services" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Services
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/listings" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Listings
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/community" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Community
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/laws" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Laws
                        </NavigationMenuLink>
                      </Link>
                      <Link
                        className="w-[100%]"
                        href="/blog"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Blog
                        </NavigationMenuLink>
                      </Link>
                      <div className="flex justify-end p-2">
                        <ModeToggle />
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block text-black dark:text-white">
        <div className="fixed z-10 top-5 left-[50%] translate-x-[-50%]">
          <div className="flex w-[90vw] md:w-[80vw] justify-between items-center py-2 px-8 rounded-full bg-[#1339B1]">
            <h1 className="font-semibold text-xl text-white">
              <Link href={"/"}>Sphere Hub</Link>
            </h1>
            <SearchBar />
            <div className="flex justify-between items-center gap-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <Link href="/services" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Services
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/listings" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Listings
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/community" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Community
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/laws" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Laws
                        </NavigationMenuLink>
                      </Link>
                      <Link
                        className="w-[100%]"
                        href="/blog"
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Blog
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
