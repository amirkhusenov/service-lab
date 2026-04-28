import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { useState } from "react";
import Menu from "#/components/common/Menu.tsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={clsx("header", {
        "menu-open": isMenuOpen,
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
