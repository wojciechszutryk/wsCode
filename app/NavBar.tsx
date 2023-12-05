"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaCode } from "react-icons/fa6";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/articles", label: "Articles" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <FaCode />
      </Link>
      <ul className="flex space-x-6">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link
              href={href}
              className={`${
                href === currentPath ? "text-zinc-100" : "text-zinc-500"
              } hover:text-zinc-300 transition-colors`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
