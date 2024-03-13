"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { useState } from "react";

const navLinks = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/LivroLista",
    name: "LivroLista"
  },
  {
    path: "/LivroDados",
    name: "LivroDados"
  },
];

function Navbar() {

  const pathname = usePathname() || "/";
  const [hoverLink, setHoverLink] = useState(pathname);

  return (
    <div className="mx-auto border w-[1200px]  mb-12 sticky top-2 z-[100] bg-stone-900/70 backdrop-blur-md">
      <nav className="flex items-center justify-center gap-2 w-full z[100] rounded-lg bg-dark">
        {
          navLinks.map((item, index) => {
            const isActive = item.path === pathname;

            return (
              <Link key={item.path} href={item.path} 
              className={`px-4 py-2 rounded-full text-sm lg:text-3xl relative no-underline duration-300 ease-in ${isActive ? "text-zinc-200" : "text-zinc-500"}`}>
                <span>{item.name}</span>
              </Link>
            )
          })
        }
      </nav>

    </div>
  )
}

export default Navbar;

