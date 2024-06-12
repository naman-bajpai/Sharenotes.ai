"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 flex gap-2 justify-center", className)}
      >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Our Mission</HoveredLink>
            <HoveredLink href="/interface-design">Why Invest In Us?</HoveredLink>
            <HoveredLink href="/seo">About us</HoveredLink>
            <HoveredLink href="/seo">Contact us</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Post">
        <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Post Your General Notes</HoveredLink>
            <HoveredLink href="/interface-design">Post Premium Notes</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Premium">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Purchase ShareNotes Premium</HoveredLink>
            <HoveredLink href="/individual">Restore Purchases</HoveredLink>

          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Search">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Search Notes</HoveredLink>
          </div>
        </MenuItem>
        
      </Menu>
      <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Login">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Login to your account</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Signup">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Register a New Account</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>

  );
}
