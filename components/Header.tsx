import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="flex h-fit w-full items-center justify-between px-4 py-1 md:justify-around">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={130} height={70} />
      </Link>
      <ThemeToggle />
    </header>
  );
};

export default memo(Header);
