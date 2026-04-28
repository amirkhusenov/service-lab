import { Link } from "@tanstack/react-router";
import { useStore } from "@tanstack/react-store";
import { type BlogPost, store } from "#/lib/store.ts";

export const BlogList = ({ posts }: { posts: BlogPost[] }) => {
  const { blogCategories } = useStore(store, (state) => state);

  return posts.map((post) => {
    return (
      <Link className="blog__block" key={post.id} to={"/blog/$id"} params={{ id: String(post.id) }}>
        <div className="blog__card card">
          <div className="blog__card__img">
            <img src={post.image} alt="" />
          </div>
          <div className="blog__card__info">
            <div className="blog__card__top">
              <span>{blogCategories[post.category]}</span>
              <data>{post.date}</data>
            </div>
            <h3>{post.title}</h3>
            <div className="blog__card__logo">
              <div className="blog__card__logo__img"></div>
              <p>Service Lab.</p>
            </div>
          </div>
        </div>
      </Link>
    );
  });
};
