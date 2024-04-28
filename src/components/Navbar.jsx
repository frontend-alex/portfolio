"use client";

import { navbarLinks } from "@constants/Data";

import Link from "next/link";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { setTheme } = useTheme();

  const navbarRef = React.useRef(null);

  React.useEffect(() => {
    window.onscroll = function () {
      navbarScroll();
    };
  }, []);

  const navbarScroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navbarRef.current.style.backdropFilter = "blur(16px)";
    } else {
      navbarRef.current.style.backdropFilter = "blur(16px)";
    }
  };

  return (
    <div className="fixed w-full z-[1000] navbar" ref={navbarRef}>
      <div className="max-w-7xl mx-auto py-5 flex items-center justify-between px-5 xl:px-0">
        <h1 className="font-bold">AI.</h1>

        <ul
          className="hidden md:flex items-center justify-center gap-3"
          id="hoverElement"
        >
          {navbarLinks.map((link, id) => (
            <li key={id}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <DropdownMenu className="z-[-1]">
          <DropdownMenuTrigger asChild id="hoverElement">
            <Button
              variant="outline"
              size="icon"
              className="bg-transparent border border-[#252525] outline-none"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="mt-4">
            <DropdownMenuItem
              className="cursor-none"
              onClick={() => setTheme("light")}
            >
              Light
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-none"
              onClick={() => setTheme("dark")}
            >
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-none"
              onClick={() => setTheme("system")}
            >
              <span id="hoverElement">System</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
