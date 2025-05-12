"use client"
import Image from "next/image";
import style from "./index.module.scss";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  useEffect(() => {
    const handleScroll = () => {setScrolled(window.scrollY > 0)
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollWidth(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${style.navbar} ${scrolled? "bg-gray-500" : "bg-transparent"} w-full fixed top-0 left-0 flex align-center justify-center`}>
      <Image
        src="/svgs/logo-fiap.svg"
        alt="Logo FIAP"
        width={100}
        height={50}
      />
       <div className={`${style.progress} ${scrolled? "bg-highlight" : ""} absolute left-0 bottom-0 `} style={{ width: `${scrollWidth}%` }} />
    </nav>
  );
};

export default Navbar;
