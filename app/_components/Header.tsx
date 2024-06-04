import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

const Header: React.FC = () => {
  return (
    <header className="flex h-fit w-full items-center justify-between px-4 py-1 md:justify-around">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={110} height={60} />
      </Link>
      <ThemeToggle />
    </header>
  );
};

export default React.memo(Header);