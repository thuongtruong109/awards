import Image from "next/image";
import { memo } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="flex h-fit w-full items-center justify-between px-4 py-1 md:justify-around">
      <Image src="/logo.svg" alt="logo" width={130} height={70} />
      <ThemeToggle />
    </header>
  );
};

export default memo(Header);
