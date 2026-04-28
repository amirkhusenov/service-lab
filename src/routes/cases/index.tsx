import { createFileRoute, Link } from "@tanstack/react-router";
import { useStore } from "@tanstack/react-store";
import clsx from "clsx";
import { CaseList } from "#/components/cases/CaseList.tsx";
import Footer from "#/components/common/Footer";
import Header from "#/components/common/Header";
import { type Case, store } from "#/lib/store.ts";

export const Route = createFileRoute("/cases/")({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>) => {
    // validate and parse the search params into a typed state
    return {
      searchCaseFilters: search.searchCaseFilters || [],
    };
  },
});

const toggleSearch = (caseType: string, search: string[]) => {
  if (caseType === "all") {
    return [];
  }

  if (search.includes(caseType)) {
    return search.filter((c) => c !== caseType);
  }

  return [...search, caseType];
};

function RouteComponent() {
  const { searchCaseFilters }: { searchCaseFilters: string[] } = Route.useSearch();
  const { caseFilters, cases } = useStore(store, (state) => state);

  return (
    <main className="cases-page">
      <Header />
      <section className={"cases"}>
        <div className={"container"}>
          <h1 className={"section-title"}>Наши кейсы</h1>
          <p className={"cases-description"}>
            Сложные системы в понятных интерфейсах: от CRM до сложных админ-панелей.
          </p>

          <div className={"cases-list"}>
            <div className={"cases-list__filter"}>
              {caseFilters.map((item) => (
                <Link
                  resetScroll={false}
                  className={clsx("without-transform button", {
                    secondary: !searchCaseFilters.includes(item.id),
                    primary: searchCaseFilters.includes(item.id),
                  })}
                  key={item.id}
                  to={`/cases`}
                  search={{
                    searchCaseFilters: toggleSearch(item.id, searchCaseFilters),
                  }}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className={"cases-list__content cards"}>
              <CaseList
                cases={cases.filter((caseItem: Case) =>
                  searchCaseFilters.length ? searchCaseFilters.includes(caseItem.type) : true,
                )}
              />

              <div className={"case card case-additional"}>
                <div className={"card__content"}>
                  <h2 className={"card__title case__title"}>Хотите также?</h2>
                  <p className={"card__description case__description"}>
                    Готовы превратить ваш хаос в процессах в четкую архитектуру. Оставьте заявку, и мы подготовим план
                    реализации вашего сервиса в течение 24 часов.
                  </p>
                </div>
                <div className={"case-additional__buttons"}>
                  <Link to={`/`} className={"button tertiary"}>
                    Запустить разработку
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <div className={"secondary-page-gradient"}></div>
    </main>
  );
}
