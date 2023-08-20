"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button
    //       variant="ghost"
    //       size="icon"
    //       onClick={() => {
    //         theme == "light" ? setTheme("dark") : setTheme("light");
    //       }}
    //     >
    //       <SunIcon className="h-[1.2rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //       <MoonIcon className="absolute h-[1.2rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    //       <span className="sr-only">Toggle theme</span>
    //     </Button>
    //   </DropdownMenuTrigger>

    //     <DropdownMenuContent align="start">
    //       <DropdownMenuItem onClick={() => setTheme("light")}>
    //         Light
    //       </DropdownMenuItem>
    //       <DropdownMenuItem onClick={() => setTheme("dark")}>
    //         Dark
    //       </DropdownMenuItem>
    //       <DropdownMenuItem onClick={() => setTheme("system")}>
    //         System
    //       </DropdownMenuItem>
    //     </DropdownMenuContent>

    // </DropdownMenu>
    <Button
      variant="secondary"
      size="icon"
      onClick={() => {
        theme == "light" ? setTheme("dark") : setTheme("light");
      }}
    >
      <SunIcon className="h-[1.2rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
