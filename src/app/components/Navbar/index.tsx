"use client"
import Image from "next/image";
import style from "./index.module.scss";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${style.navbar} ${scrolled? "bg-gray-500" : ""}`}>
      <Image
        src="/svgs/logo-fiap.svg"
        alt="Logo FIAP"
        width={100}
        height={50}
      />
    </nav>
  );
};

export default Navbar;
