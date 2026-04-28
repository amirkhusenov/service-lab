import { createFileRoute, Link } from "@tanstack/react-router";
import { useStore } from "@tanstack/react-store";
import { CaseList } from "#/components/cases/CaseList.tsx";
import Footer from "#/components/common/Footer.tsx";
import Header from "#/components/common/Header.tsx";
import { store } from "#/lib/store.ts";

export const Route = createFileRoute("/cases/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { cases } = useStore(store, (state) => state);

  return (
    <main className="cases-page">
      <Header />

      <section className="about__cases">
        <div className="container">
          <div className="about__cases__top">
            <h1>
              Система <span>«StockRadar»</span>
            </h1>
            <Link className={"button secondary"} to={"/cases"} search={{ searchCaseFilters: ["storages"] }}>
              Склад
            </Link>
          </div>
          <div className="about__cases__border">
            <div className="about__cases__border_block">
              <p>Срок</p>
              <h3>4 месяца</h3>
            </div>
            <div className="about__cases__border_line" aria-hidden="true"></div>
            <div className="about__cases__border_block">
              <p>Стек</p>
              <h3>React, Node.js, PostgreSQL</h3>
            </div>
            <div className="about__cases__border_line" aria-hidden="true"></div>
            <div className="about__cases__border_block">
              <p>Бюджет</p>
              <h3>1.8 млн ₽</h3>
            </div>
          </div>
          <div className="about__cases__width">
            <h2>О проекте</h2>
            <p>
              Клиент — крупный дистрибьютор электроники с оборотом более 2000 SKU. Основная проблема заключалась в
              «слепых зонах»: данные в 1С обновлялись с задержкой, из-за чего возникали кассовые разрывы, а
              востребованный товар часто отсутствовал на складе, пока неликвид занимал место.
            </p>
          </div>
          <div className="about__cases__img">
            <img src="/assets/images/about__cases__img.png" alt="" />
          </div>
          <div className="about__cases__width">
            <h2>Задача</h2>
            <p>
              Оцифровать складской хаос. Нужно было объединить данные 1С с реальными остатками, убрать ошибки ручного
              ввода и автоматизировать закупки для каталога в 2000 SKU.
            </p>
          </div>
          <div className="about__cases__width">
            <h2>Наше решение</h2>
            <p>
              Мы разработали кастомную экосистему, которая стала «мозгом» склада, интегрировав её с существующей 1С
              заказчика.
            </p>
            <h3>Модуль предиктивной аналитики</h3>
            <p>
              Внедрена система, которая на основе исторических данных за 3 года прогнозирует спрос. Теперь программа
              сама формирует черновик заказа поставщику, учитывая сезонность и скорость оборачиваемости каждой позиции.
            </p>
            <h3>Интерактивная карта склада</h3>
            <p>
              Оцифровали топологию склада. Система строит для кладовщиков кратчайшие маршруты сборки заказов в мобильном
              приложении. Это позволило сократить лишний «пробег» персонала на 30%.
            </p>
            <h3>Контроль в реальном времени <span className="solution-subline">(Dashboard)</span></h3>
            <p>
              Для владельца бизнеса создан дашборд с ключевыми метриками: стоимость замороженного капитала, динамика
              отгрузок и критические остатки. Больше не нужно ждать отчетов от бухгалтерии - всё видно в один клик.
            </p>
          </div>
        </div>
      </section>

      <section className="cases__result">
        <div className="container">
          <h2>Результаты в цифрах</h2>
          <div className="cases__result__wrap">
            <div className="cases__result__block">
              <div className="cases__result__border">
                <h3>12 млн ₽</h3>
                <p>
                  Высвобождено оборотного капитала <br />
                  за счет оптимизации товарных остатков.
                </p>
              </div>
            </div>
            <div className="cases__result__block">
              <div className="cases__result__border">
                <h3>в 2.5 раза</h3>
                <p>Увеличена скорость сборки заказов благодаря внедрению умной топологии склада.</p>
              </div>
            </div>
            <div className="cases__result__block">
              <div className="cases__result__border">
                <h3>99.8%</h3>
                <p>
                  Точность учета данных. Ошибки <br />
                  из-за человеческого фактора практически исключены.
                </p>
              </div>
            </div>
          </div>
          <div className="cases__result__inner">
            <div className="cases__result__inner__block">
              <p>
                «До внедрения StockRadar мы работали в режиме постоянного тушения пожаров: то товар внезапно закончился,
                то склад затоварен тем, что не продается. Команда Service Lab. не просто написала софт, а глубоко
                погрузилась в нашу логистику. Теперь у нас есть „единая точка правды“. Система сама прогнозирует закупки
                и строит маршруты для кладовщиков, а я могу контролировать все показатели со смартфона. Редкий случай,
                когда сложная разработка окупается так быстро и действительно облегчает жизнь всей команде».
              </p>
              <div className="cases__result__author">
                <div className="cases__result__author__img">
                  <img src="/assets/images/cases__result__author__img.png" alt="" />
                </div>
                <div className="cases__result__author__info">
                  <h4>Александр Волков</h4>
                  <h5>Операционный директор</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="other">
        <div className="container">
          <div className="other__top">
            <h2 className="other__title">Похожие кейсы</h2>
          </div>
          <div className="other__wrap">
            <CaseList cases={cases.slice(0, 3)} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
