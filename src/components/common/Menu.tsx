import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface MenuProps {
  onOpenChange?: (isOpen: boolean) => void;
}

export default function Menu({ onOpenChange }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    onOpenChange?.(isOpen);
    document.body.classList.toggle("body-menu-open", isOpen);

    return () => document.body.classList.remove("body-menu-open");
  }, [isOpen, onOpenChange]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div
      className={clsx("menu-container", {
        open: isOpen,
        closed: !isOpen,
      })}
    >
      <button
        className="header-nav__burger"
        type="button"
        aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={isOpen}
        aria-controls="header-navigation-menu"
        onClick={() => setIsOpen((value) => !value)}
      >
        <img src="/assets/images/burger-menu.svg" alt="" aria-hidden="true" />
      </button>
      <div className="header-nav__menu" id="header-navigation-menu">
        <Link
          to="/cases"
          search={{ searchCaseFilters: [] }}
          className="header-nav__menu-item ghost"
          onClick={closeMenu}
        >
          Кейсы
        </Link>
        <Link
          to="/blog"
          search={{ searchBlogFilters: [], searchQuery: "" }}
          className="header-nav__menu-item ghost"
          onClick={closeMenu}
        >
          Блог
        </Link>
        <Link to="/contacts" className="header-nav__menu-item ghost" onClick={closeMenu}>
          Контакты
        </Link>
      </div>
    </div>
  );
}
