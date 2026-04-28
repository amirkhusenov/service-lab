import { createFileRoute } from "@tanstack/react-router";
import Footer from "#/components/common/Footer";
import Header from "#/components/common/Header";

export const Route = createFileRoute("/contacts")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="page contacts-page">
      <Header />
      <section className="contacts">
        <div className="container">
          <div className="contacts__top">
            <h1>
              Контакты <br />
              <span>Service Lab.</span>
            </h1>
            <div className="contacts__contacts">
              <a href="tel:">+7 (XXX) XXX-XX-XX</a>
              <a href="mailto:">hello@labservicestudio.com</a>
            </div>
          </div>
          <div className="contacts__legal">
            <h2>Правовые документы</h2>
            <ul>
              <li>
                <a href="#">
                  Описание деятельности
                  <img src="/assets/images/contacts__legal.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  Согласие на обработку персональных данных
                  <img src="/assets/images/contacts__legal.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  Политика конфиденциальности
                  <img src="/assets/images/contacts__legal.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="secondary-page-gradient"></div>

      <Footer />
    </main>
  );
}
