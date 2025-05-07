import React from "react";

const ContactPage: React.FC = () => (
  <main className="max-w-4xl mx-auto px-6 py-8">
    <h1 className="text-3xl font-bold mb-4">Контакты</h1>
    <p className="mb-4">
      Если у вас возникли вопросы, предложения или нужна помощь с заказом —
      свяжитесь с нашей командой. Мы стараемся отвечать как можно быстрее.
    </p>
    <ul className="mb-6">
      <li><strong>📧 Email:</strong> support@bookstore.ru</li>
      <li><strong>📞 Телефон:</strong> +7 (999) 123-45-67</li>
      <li><strong>🏢 Адрес:</strong> г. Санкт-Петербург, ул. Книжная, д. 10</li>
    </ul>
    <p>
      Также вы можете написать нам через форму обратной связи или в социальных сетях —
      мы на связи!
    </p>
  </main>
);

export default ContactPage;