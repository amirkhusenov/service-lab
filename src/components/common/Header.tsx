import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import Menu from "#/components/common/Menu.tsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShowHeader, setIsShowHeader] = useState(true);
  const [isShowHeaderAnimation, setIsShowHeaderAnimation] = useState(false);
  const prevWindowScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        return;
      }

      const isScrollDown = prevWindowScrollY.current < window.scrollY;
      prevWindowScrollY.current = window.scrollY;

      if (isScrollDown && isShowHeader) {
        setIsShowHeader(false);
        setIsShowHeaderAnimation(false);
      }

      if (!isScrollDown && !isShowHeader) {
        setIsShowHeader(true);
        setIsShowHeaderAnimation(true);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => document.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen, isShowHeader]);

  return (
    <header
      className={clsx("header", {
        "menu-open": isMenuOpen,
        hidden: !isMenuOpen && !isShowHeader,
        visible: !isMenuOpen && isShowHeaderAnimation,
      })}
    >
      <div className="container">
        <nav className="header-nav">
          <Link to="/" className="header-nav__logo">
            Service Lab.
          </Link>
          <Menu onOpenChange={setIsMenuOpen} />
        </nav>
      </div>
    </header>
  );
}
