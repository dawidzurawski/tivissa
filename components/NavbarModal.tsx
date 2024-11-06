import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarModalProps {
  onClose: () => void;
}

const NavbarModal: React.FC<NavbarModalProps> = ({ onClose }) => {
  const currentRoute = usePathname();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return (): void => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="pt-10 block sm:hidden p-4 z-10 absolute bg-zinc-100 w-full h-lvh font-sans font-semibold text-[14px] text-zinc-600">
      <div className="flex flex-col gap-4">
        <Link
          href="/"
          className={`${
            currentRoute === "/"
              ? "text-red-500"
              : "text-zinc-600 hover:text-zinc-400 duration-150 delay-50"
          } `}
          onClick={onClose}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${
            currentRoute === "/about"
              ? "text-red-500"
              : "text-zinc-600 hover:text-zinc-400 duration-150 delay-50"
          } `}
          onClick={onClose}
        >
          About
        </Link>
        <Link
          href="/blog"
          className={`${
            currentRoute === "/blog"
              ? "text-red-500"
              : "text-zinc-600 hover:text-zinc-400 duration-150 delay-50"
          } `}
          onClick={onClose}
        >
          Blog
        </Link>
        <Link
          href="/projects"
          className={`${
            currentRoute === "/projects"
              ? "text-red-500"
              : "text-zinc-600 hover:text-zinc-400 duration-150 delay-50"
          } `}
          onClick={onClose}
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default NavbarModal;
