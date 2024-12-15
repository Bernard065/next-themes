import Image from "next/image";
import Link from "next/link";
import React from "react";
import ModeToggle from "@/components/navigation/ModeToggle";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/globe.svg" height={23} width={23} alt="logo" />
        <p>
          Test<span>Code</span>
        </p>
      </Link>
      <p>Search</p>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
