"use client";
import Link from "next/link";
import { useState } from "react";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import NavbarModal from "./NavbarModal";
import { usePathname } from "next/navigation";
import Hamburger from "./Hamburger";

const Navbar = () => {
  const currentRoute = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-zinc-100 backdrop-blur-sm">
      <div className="text-zinc-200 md:max-lg:px-10 py-4 px-4 flex justify-between font-sans font-semibold text-[14px] items-center">
        <Link
          href="/"
          className="text-[18px] gap-2 flex items-center text-red-500"
        >
          <HolidayVillageIcon className="text-red-500" />
          <p className="font-sans font-semibold block sm:hidden text-[14px]">
            Tivissa
          </p>
          <p className="font-sans font-semibold hidden sm:flex">Tivissa</p>
        </Link>

        <nav className="hidden sm:flex gap-5">
          <Link
            href="/about"
            className={`${
              currentRoute === "/about"
                ? "text-lime-400"
                : "text-zinc-600 hover:text-zinc-400 duration-150 delay-50"
            } `}
          >
            About
          </Link>
          <Link
            href="/blog"
            className={`${
              currentRoute === "/blog"
                ? "text-lime-400"
                : "text-zinc-600 hover:text-zinc-400 duration-150 delay-50"
            } `}
          >
            Blog
          </Link>
          <Link
            href="/projects"
            className={`${
              currentRoute === "/projects"
                ? "text-lime-400"
                : "text-zinc-600 hover:text-zinc-400 duration-150 delay-50"
            } `}
          >
            Projects
          </Link>
        </nav>

        <div
          className="block sm:hidden justify-end"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Hamburger />
        </div>
      </div>

      <hr className="border-zinc-300 border-1." />

      {isOpen && <NavbarModal onClose={() => setIsOpen(false)} />}
    </header>
  );
};

export default Navbar;
