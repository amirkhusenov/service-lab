import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useStore } from "@tanstack/react-store";
import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";
import { BlogList } from "#/components/blog/BlogList.tsx";
import Footer from "#/components/common/Footer.tsx";
import Header from "#/components/common/Header.tsx";
import { store } from "#/lib/store.ts";

export const Route = createFileRoute("/blog/")({
  component: RouteComponent,
  validateSearch: (search: Record<string, unknown>) => {
    // validate and parse the search params into a typed state
    return {
      searchBlogFilters: search.searchBlogFilters || [],
      searchQuery: search.searchQuery || "",
    };
  },
});

let timer: any | typeof setTimeout = null;

const toggleSearch = (blogType: string, search: string[]) => {
  if (search.includes(blogType)) {
    return [];
  }

  return [blogType];
};

function RouteComponent() {
  const { searchBlogFilters, searchQuery }: { searchBlogFilters: string[]; searchQuery: string } = Route.useSearch();
  const { categoryFilters, posts } = useStore(store, (state) => state);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    setSearch(searchQuery);
  }, [searchQuery]);

  const startSearch = useCallback(
    (inputSearch: string) => {
      setProcessing(false);
      navigate({
        to: "/blog",
        search: {
          searchBlogFilters: [],
          searchQuery: inputSearch || search,
        },
      });
    },
    [navigate, search],
  );

  return (
    <main className="blog-page">
      <Header />
      <section className="blog">
        <div className="container">
          <h1>Блог</h1>
          <div className="blog__top">
            <div className="blog__top__block">
              <p>
                Мы не пишем общие новости индустрии. <br />
                Здесь команда Service Lab. делится прикладным <br />
                опытом проектирования сложных систем.
              </p>
              <form
                className="blog__search"
                onSubmit={(e) => {
                  e.preventDefault();
                  startSearch(search);
                }}
              >
                <input
                  className="blog__search__input"
                  type="text"
                  placeholder="Найти статью"
                  value={search}
                  onChange={(e) => {
                    setProcessing(true);
                    setSearch(e.target.value);

                    if (timer) {
                      clearTimeout(timer);
                    }
                    timer = setTimeout(() => {
                      startSearch(e.target.value);
                    }, 300);
                  }}
                />
                <button type="submit" disabled={processing}>
                  {processing ? (
                    <svg
                      fill="#FFFFFFFF"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className={"search-loading"}
                    >
                      <path
                        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                        opacity=".25"
                      />
                      <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
                        <title>loading</title>

                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          dur="0.75s"
                          values="0 12 12;360 12 12"
                          repeatCount="indefinite"
                        />
                      </path>
                    </svg>
                  ) : (
                    <img src="/assets/images/blog__search.png" alt="" />
                  )}
                </button>
              </form>
            </div>
            <div className="blog__top__block">
              <ul>
                {categoryFilters.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={"/blog"}
                      key={item.id}
                      search={{ searchBlogFilters: toggleSearch(item.id, searchBlogFilters), searchQuery: "" }}
                      className={clsx("without-transform button", {
                        secondary: !searchBlogFilters.includes(item.id),
                        primary: searchBlogFilters.includes(item.id),
                      })}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="blog__wrap">
            <BlogList
              posts={posts
                .filter((post) => (searchBlogFilters.length ? searchBlogFilters.includes(post.category) : true))
                .filter((post) => {
                  return searchQuery ? post.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) : true;
                })}
            />
          </div>
        </div>
      </section>

      <div className="secondary-page-gradient"></div>
      <Footer />
      <div className={"secondary-page-gradient"}></div>
    </main>
  );
}
