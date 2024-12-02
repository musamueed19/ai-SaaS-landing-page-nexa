import Link from "next/link";
import React from "react";
import Icons from "../global/icons";
import { buttonVariants } from "../ui/button";

const Navbar = () => {
  return (
    <header className="w-full h-14 px-4 sticky top-0 bg-background/40 inset-x-0 backdrop-blur-lg border-b border-border z-50">
      {/* Inner Container */}
      <div className="flex items-center justify-between mx-auto md:max-w-screen-xl h-full">
        {/* Logo - Section */}
        <div className="flex items-start">
          <Link href={"/"} className="flex items-center gap-x-2">
            <Icons.logo className="w-8 h-8" />
            <span className="text-lg font-medium">Nexa</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <ul className="flex items-center justify-center gap-8">
            
            {/* Pricing */}
            <li className="text-sm hover:text-foreground/80">
              <Link href={'/'}>Pricing</Link>
            </li>

            {/* About */}
            <li className="text-sm hover:text-foreground/80">
              <Link href={'/'}>About</Link>
            </li>

            {/* Feature */}
            <li className="text-sm hover:text-foreground/80">
              <Link href={'/'}>Features</Link>
            </li>

            {/* Blogs */}
            <li className="text-sm hover:text-foreground/80">
              <Link href={'/'}>Blogs</Link>
            </li>
          </ul>
        </div>


        {/* Login & Signup - Button Section */}
        <div className="flex items-center gap-x-4">

          {/* Sign In - Button */}
          <Link className={buttonVariants({size: "sm", variant: "ghost"})} href={'/'}>
          Sign in
          </Link>

          {/* Sign Out - Button */}
          <Link className={buttonVariants({size: "sm", className: "hidden md:flex"})} href={'/'}>
          Start free
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
