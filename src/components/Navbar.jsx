"use client";

import { navbarLinks } from "@constants/Data";

import Link from "next/link";

import * as React from "react";
import { AlignJustify, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { setTheme } = useTheme();

  const mobileBarRef = React.useRef()
  const path = usePathname()

  // const navbarRef = React.useRef(null);

  // React.useEffect(() => {
  //   window.onscroll = function () {
  //     navbarScroll();
  //   };
  // }, []);

  // const navbarScroll = () => {
  //   if (
  //     document.body.scrollTop > 50 ||
  //     document.documentElement.scrollTop > 50
  //   ) {
  //     navbarRef.current.style.position = "fixed";
  //   } else {
  //     navbarRef.current.style.position = "relative";
  //   }
  // };

  const toggleMobileNav = () => {
    mobileBarRef.current.classList.toggle('active');
  }

  return (
    <div className="w-full fixed z-[1000] navbar">
      <div className="max-w-7xl mx-auto py-5 flex items-center justify-between px-5 xl:px-0">
        <h1 className="font-bold">AI.</h1>

        <ul
          className="hidden md:flex items-center justify-center gap-3"
          id="hoverElement"
        >
          {navbarLinks.map((link, id) => (
            <li key={id}>
              <Link className={path === link.path ? 'text-underline ': ''} href={link.path}>{link.name}.</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <DropdownMenu className="z-[-1] ">
            <DropdownMenuTrigger asChild id="hoverElement">
              <Button
                variant="outline"
                size="icon"
                className="border border-[#252525] outline-none"
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
          <div className="flex md:hidden">
            <div className="cursor-pointer" onClick={toggleMobileNav}>
              <AlignJustify/>
            </div>
            <div onClick={toggleMobileNav} className="bg-white dark:bg-[#0A0A0A] sidebar flex flex-col gap-5 p-5" ref={mobileBarRef}>
              <div className="flex justify-between items-center">
                <h1 className="font-bold">AI.</h1>
                <X className="text-red-600"/>
              </div>

              <ul className="flex flex-col gap-3">
                {navbarLinks.map((link, id) => (
                  <li key={id}><Link className={path === link.path ? 'text-underline ': ''} href={link.path}>{link.name}.</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
