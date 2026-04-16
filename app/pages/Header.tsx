"use client"

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Header() {
  const pathname = usePathname(); // renamed for clarity
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Accueil", path: "/" },
    { label: "Galerie", path: "/galerie" },
    { label: "Événements", path: "/evenements" },
    { label: "À propos", path: "/a-propos" },
    { label: "Contact", path: "/contact" },
  ];

  const isGallerySub = (itemPath: string) =>
      itemPath === "/galerie" &&
      ["/galerie", "/luminaires", "/vases", "/sculptures"].includes(pathname);

  const isActive = (itemPath: string) =>
      pathname === itemPath || isGallerySub(itemPath);

  return (
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold font-[Saira] text-[#93471c]">
              O'GRÈS DE LA TERRE
            </Link>

            {/* Navigation desktop */}
            <nav className="hidden md:flex gap-8">
              {navItems.map((item) => (
                  <Link
                      key={item.path}
                      href={item.path} // ✅ was `to`
                      className={`transition-colors ${
                          isActive(item.path)
                              ? "text-[#FF6600] font-bold"
                              : "text-black hover:text-[#FF6600]"
                      }`}
                  >
                    {item.label}
                  </Link>
              ))}
            </nav>

            {/* Bouton hamburger mobile */}
            <button
                className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 focus:outline-none"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={menuOpen}
            >
              <span className={`block h-0.5 w-6 bg-[#93471c] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-[#93471c] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-[#93471c] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                menuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"
            }`}
        >
          <nav className="flex flex-col px-6 py-3 gap-1 bg-white">
            {navItems.map((item) => (
                <Link
                    key={item.path}
                    href={item.path} // ✅ was `to`
                    onClick={() => setMenuOpen(false)}
                    className={`py-3 border-b border-gray-100 last:border-0 transition-colors ${
                        isActive(item.path) // ✅ was `location.pathname`
                            ? "text-[#FF6600] font-bold"
                            : "text-black hover:text-[#FF6600]"
                    }`}
                >
                  {item.label}
                </Link>
            ))}
          </nav>
        </div>
      </header>
  );
}