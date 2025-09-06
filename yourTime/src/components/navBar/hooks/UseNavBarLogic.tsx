import { useState, useEffect, useRef } from "react";

export function useNavBarLogic() {
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleBrands = () => setBrandsOpen((prev) => !prev);
  const closeBrands = () => setBrandsOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeBrands();
      }
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return {
    brandsOpen,
    menuOpen,
    toggleBrands,
    closeBrands,
    toggleMenu,
    closeMenu,
    dropdownRef,
    navRef,
  };
}
