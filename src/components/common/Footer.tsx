import { Link } from "@tanstack/react-router";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-top__logo">
            <Link to="/" className="footer-top__logo-link">
              Service Lab.
            </Link>
          </div>
          <div className="footer-top__contacts">
            <div className="footer-top__contacts-title">Контакты</div>
            <ul className="footer-top__items">
              <li className="footer-top__item">hello@labservicestudio.com</li>
              <li className="footer-top__item">Москва, ул. Примерная, д. 1</li>
              <li className="footer-top__item">+7 (XXX) XXX-XX-XX</li>
            </ul>
          </div>
          <div className="footer-top__mailing">
            <div className="footer-top__mailing-title">Рассылка</div>
            <p className="footer-top__mailing-description">
              Кейсы, стоимость разработки и способы автоматизации бизнеса. Раз в месяц.
            </p>
            <div className="footer-top__mailing-input-wrapper">
              <input className="footer-top__mailing-input" placeholder="Email" />
              <img src="/assets/mail.png" className="footer-top__mailing-input-img" alt="" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <a href="/" className="footer-bottom__link">
            Политика конфиденциальности
          </a>
          <p className="footer-bottom__copyright">&copy; {year} Лаборатория сервисов.</p>
        </div>
      </div>
    </footer>
  );
}
