import { createFileRoute, Link } from "@tanstack/react-router";
import Footer from "#/components/common/Footer.tsx";
import Header from "#/components/common/Header.tsx";

export const Route = createFileRoute("/")({ component: App });

interface WorkType {
  title: string;
  description: string;
}

const workTypes: WorkType[] = [
  {
    title: "CRM-системы",
    description:
      "Чтобы клиенты не терялись. Собираем все контакты и сделки в одном месте, дожимаем продажи роботами и строим отчеты за секунды.",
  },
  {
    title: "Админ-панели",
    description:
      "Пульт управления вашим проектом. Удобный интерфейс для работы с данными, заказами и контентом без риска что-то сломать.",
  },
  {
    title: "Системы автоматизации",
    description: "Автоматизируем рутину: склады, логистика, расчеты. Управляйте процессами, а не ошибками.",
  },
];

const workSteps: WorkType[] = [
  {
    title: "Проектирование",
    description:
      "Разбираем логику бизнеса и создаем интерактивный прототип. Вы видите, как работает сервис, до начала разработки.",
  },
  {
    title: "Разработка",
    description:
      "Пишем код и показываем результат каждые две недели. Вы контролируете процесс и вносите правки на лету.",
  },
  {
    title: "Интеграции и QA",
    description: "Связываем систему с 1С, API и мессенджерами. Тестируем безопасность и стабильность под нагрузкой.",
  },
  {
    title: "Запуск и передача",
    description: "Разворачиваем сервис и передаем права на код. Обучаем сотрудников и развиваем продукт после релиза.",
  },
];

function App() {
  return (
    <main className="start-page page">
      <div className="start-page-gradient start-page-right-gradient"></div>
      <div className="start-page-gradient start-page-left-gradient"></div>
      <Header />

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-content-bg">
              <h1 className="hero-title">
                Превращаем <span className="hero-title__accent">хаос</span>
                <br />в <span className="hero-title__accent">алгоритмы</span>
              </h1>
              <p className="hero-description">
                Создаем сложные экосистемы: от гибких CRM <br />
                до систем управления складом.
              </p>

              <div className="hero-buttons">
                <a href="/#calculate-form" className="button primary">
                  Обсудить проект
                </a>
                <Link to="/cases" search={{ searchCaseFilters: [] }} className="button secondary">
                  Смотреть кейсы
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="spec section">
        <div className="container">
          <h2 className="section-title">Что мы создаем</h2>
          <div className="cards">
            {workTypes.map((item) => {
              return (
                <div className="card" key={item.title}>
                  <div className="card__content">
                    <h3 className="card__title">{item.title}</h3>
                    <div className="card__description">{item.description}</div>
                  </div>
                  <div className="card__bg-icon">
                    <img src="/assets/start/icon.svg" alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="why-we section">
        <div className="container">
          <h2 className="section-title">Почему мы?</h2>
          <div className="motivation">
            <div className="motivation__description">
              <p className="motivation__description-text">
                Над вашим проектом работает выделенная команда Senior-разработчиков с опытом в финтехе и e-commerce. Мы
                не используем шаблоны, а пишем чистый код и сдаем работу короткими итерациями: вы получаете готовые
                модули каждые две недели и контролируете развитие продукта в реальном времени.
              </p>
              <div className="motivation__description-buttons">
                <Link to="/cases" search={{ searchCaseFilters: [] }} className="button primary">
                  Наши кейсы
                </Link>
              </div>
            </div>
            <div className="motivation__promo">
              <h3 className="motivation__promo-title">
                Сначала бизнес, <br />
                потом код
              </h3>
              <p className="motivation__promo-text">
                Мы не просто разработчики, а ваши бизнес-партнеры. Вникаем в процессы, находим слабые места и
                автоматизируем только то, что действительно принесет прибыль.
              </p>
            </div>
          </div>
          <div className="motivation-options">
            <div className="motivation-option">
              <h3 className="motivation-option-title">98%</h3>
              <p className="motivation-option-text">нашиx клиентов возвращаются снова</p>
            </div>
            <div className="motivation-option">
              <h3 className="motivation-option-title">5+</h3>
              <p className="motivation-option-text">лет в сфере разработки веб-сервисов</p>
            </div>
            <div className="motivation-option">
              <h3 className="motivation-option-title">На 20%</h3>
              <p className="motivation-option-text">сокращаем операционные расходы наших клиентов</p>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section section">
        <div className="container">
          <h2 className="section-title">Как это работает?</h2>
          <div className="work">
            {workSteps.map((item, index) => {
              return (
                <div className="work-item" key={item.title}>
                  <div className="work-item-title__number">
                    <span className="work-item-title__number-value">0{index + 1}</span>
                    <span className="work-item-title__number-border"></span>
                  </div>
                  <div className="work-item-content">
                    <h3 className="work-item-content-title">{item.title}</h3>
                    <p className="work-item-content-description">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="calculate-form section" id="calculate-form">
        <div className="container">
          <div className="calculate-form__content">
            <h2 className="calculate-form-title">Рассчитаем проект за 2 минуты</h2>
            <div className="calculate-form-description">
              Ответьте на 4 вопроса, чтобы мы подобрали стек технологий и подготовили предварительную оценку стоимости и
              сроков вашего сервиса.
            </div>
            <div className="calculate-form-buttons">
              <button className="button primary large" type="submit">
                Получить расчет
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
