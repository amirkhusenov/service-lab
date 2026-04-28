import { Store } from "@tanstack/store";

export type BlogCategoryType =
  | "development"
  | "cases"
  | "management"
  | "business"
  | "backend"
  | "technologies"
  | "frontend";

export interface BlogPost {
  id: number;
  category: BlogCategoryType;
  date: string;
  title: string;
  image: string;
  link: string;
}

interface CaseFilter {
  id: string;
  title: string;
}

export interface Case {
  id: number;
  title: string;
  description: string;
  image: string;
  type: string;
}

export const blogCategories: Record<BlogCategoryType, string> = {
  development: "Разработка",
  cases: "Кейсы",
  management: "Управление",
  business: "Бизнес",
  backend: "Backend",
  technologies: "Технологии",
  frontend: "Frontend",
};

const categoryFilters = Object.entries(blogCategories).map(([categoryID, categoryTitle]) => ({
  id: categoryID,
  title: categoryTitle,
}));

const posts: BlogPost[] = [
  {
    id: 1,
    category: "business",
    date: "02 февраля 2026",
    title: "ERP: Инвестиция или технический долг?",
    image: "/assets/images/blog__card__img1.png",
    link: "/blog-first",
  },
  {
    id: 2,
    category: "backend",
    date: "21 января 2026",
    title: "Архитектура данных в ритейле 2026",
    image: "/assets/images/blog__card__img2.png",
    link: "/",
  },
  {
    id: 3,
    category: "management",
    date: "05 февраля 2026",
    title: "Скрытые риски готовых ИТ-решений",
    image: "/assets/images/blog__card__img3.png",
    link: "/",
  },
  {
    id: 4,
    category: "cases",
    date: "10 января 2026",
    title: "Оптимизация склада: софт vs железо",
    image: "/assets/images/blog__card__img4.png",
    link: "/",
  },
  {
    id: 5,
    category: "business",
    date: "03 января 2026",
    title: "Путь от идеи до MVP за 12 недель",
    image: "/assets/images/blog__card__img5.png",
    link: "/",
  },
  {
    id: 6,
    category: "technologies",
    date: "17 февраля 2026",
    title: "Безопасность данных в облачных ERP",
    image: "/assets/images/blog__card__img6.png",
    link: "/",
  },
];

const caseFilters: CaseFilter[] = [
  { id: "all", title: "Все" },
  { id: "admin-panels", title: "Админ-панели" },
  { id: "crm", title: "CRM" },
  { id: "storages", title: "Склад" },
  { id: "other", title: "Другое" },
];

const cases: Case[] = [
  {
    id: 1,
    title: "Платформа кредитования",
    description: "Умный скоринг без участия человека",
    image: "/assets/cases/01.png",
    type: "admin-panels",
  },
  {
    id: 2,
    title: "Система «StockRadar»",
    description: "Склад с автопилотом: от рутины  к точным прогнозам.",
    image: "/assets/cases/02.png",
    type: "storages",
  },
  {
    id: 3,
    title: "CRM для школы CoolSkill",
    description: "Прозрачный путь студента от лида до диплома.",
    image: "/assets/cases/03.png",
    type: "crm",
  },
  {
    id: 4,
    title: "Диспетчерский хаб «RouteMaster»",
    description: "Весь автопарк на ладони без единого звонка.",
    image: "/assets/cases/04.png",
    type: "other",
  },
];

export const store = new Store({
  posts,
  categoryFilters,
  blogCategories,
  cases,
  caseFilters,
});
