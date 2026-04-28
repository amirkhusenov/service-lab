import { createFileRoute, Link } from "@tanstack/react-router";
import { useStore } from "@tanstack/react-store";
import { BlogList } from "#/components/blog/BlogList.tsx";
import Footer from "#/components/common/Footer.tsx";
import Header from "#/components/common/Header.tsx";
import { store } from "#/lib/store.ts";

export const Route = createFileRoute("/blog/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  const { posts, blogCategories } = useStore(store, (state) => state);
  const currentPost = posts.find((post) => String(post.id) === id) ?? posts[0];
  const currentCategoryTitle = blogCategories[currentPost.category];

  return (
    <main className={"blog-page page"}>
      <Header />

      <section className="blog__page">
        <div className="blog__page__banner">
          <img src="/assets/images/blog__page__banner.png" alt="" />
        </div>
        <div className="container">
          <div className="blog__page__mobile-head">
            <Link to={"/blog"} search={{ searchQuery: "", searchBlogFilters: [currentPost.category] }} className={"button secondary"}>
              {currentCategoryTitle}
            </Link>
            <h1 className="blog__page__title">{currentPost.title}</h1>
          </div>
          <div className="blog__page__top">
            <div className="blog__card__logo">
              <div className="blog__card__logo__img"></div>
              <p>Service Lab.</p>
            </div>
            <data>{currentPost.date}</data>
            <span>Время чтения 5 мин</span>
          </div>
          <div className="blog__page__width">
            <p>
              В ИТ-индустрии принято считать, что внедрение крупной системы — это конечный проект с понятным дедлайном.
              На деле же покупка или разработка ERP больше похожа на приобретение живого организма. С этого момента вы
              либо начинаете кормить его ресурсами, не получая ничего взамен, либо он становится фундаментом, на котором
              ваш бизнес прибавляет в скорости по 20–30% в год.{" "}
              <strong>Разница между этими сценариями кроется в одном понятии — архитектурном долге.</strong>
            </p>
            <p>
              Когда мы в Service Lab. заходим в проекты, где старая система «дышит на ладан», мы видим одну и ту же
              картину. Это не плохой код сам по себе, а заложничество бизнеса у собственных решений трехлетней давности.{" "}
              <strong>
                Налог на технический долг — это когда вы платите ежедневно за невозможность быстро адаптироваться под
                изменения рынка.
              </strong>{" "}
              Например, в какой-то момент компания решила сэкономить и жестко «пришила» логику расчета скидок прямо в ядро
              системы. Спустя год рынок изменился, маркетологи хотят запустить новую акцию, но разработчики разводят
              руками: чтобы поменять одну цифру, нужно пересобрать все приложение и молиться, чтобы не упала интеграция со
              складом. Это и есть налог на технический долг, который вы платите ежедневно.
            </p>
            <h3>
              «Главная ловушка — пытаться натянуть старые бизнес-процессы на новую систему. Это как вставить двигатель от
              Ferrari в телегу: шума много, а скорости нет».
            </h3>
            <p>
              Настоящая инвестиционная архитектура строится иначе. Она всегда «разомкнута». Мы верим в принцип API-first:
              система не должна быть вещью в себе.{" "}
              <strong>
                Любой модуль — будь то склад, финансы или CRM — обязан уметь общаться с внешним миром без посредников.
              </strong>{" "}
              Это дает бизнесу ту самую маневренность, когда вы за неделю подключаете новую курьерскую службу или выводите
              товары на маркетплейс, просто «воткнув» нужный коннектор в готовую розетку.
            </p>
            <p>
              Но архитектура — это лишь половина дела. Вторая часть инвестиции — это качество данных. ERP бесполезна,
              если она не является «единой точкой правды». Мы часто сталкиваемся с тем, что системы автоматизируют хаос:
              данные о закупках живут в одной таблице, реальные остатки — в другой, а отчет для директора собирается
              вручную.{" "}
              <strong>
                Инвестиция начинается там, где система сама блокирует ошибки человеческого фактора на входе.
              </strong>{" "}
              Если менеджер не может закрыть сделку без корректного артикула, значит, через год ваша аналитика будет
              показывать реальную прибыль, а не гадание на кофейной гуще.
            </p>
            <div className="blog__page__border">
              <p>
                В конечном счете, выбор между долгом и инвестицией — это вопрос честности. Можно выбрать «коробочное»
                решение, которое закроет дыры сегодня, но станет бетонной стеной завтра.{" "}
                <strong>
                  А можно потратить время на проектирование кастомного решения, которое будет расти вместе с вами.
                </strong>{" "}
                В Service Lab. мы выбираем второй путь, потому что код должен работать на бизнес, а не наоборот.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="other">
        <div className="container">
          <div className="other__top">
            <h2 className={"other__title"}>Другие статьи</h2>
          </div>
          <div className="other__wrap">
            <BlogList posts={posts.slice(0, 3)} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
