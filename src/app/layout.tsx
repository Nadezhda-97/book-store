import type { Metadata } from "next";
import Link from "next/link";
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Header = () => (
  <header className="w-full px-6 py-4 border-b">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">

      {/* Логотип */}
      <div className="text-xl font-semibold">BookStore</div>

      {/* Навигация */}
      <nav className="flex gap-4 text-sm">
        <Link href="/" className="hover:underline">Главная</Link>
        <Link href="/catalog" className="hover:underline">Каталог</Link>
        <Link href="/about" className="hover:underline">О нас</Link>
        <Link href="/contact" className="hover:underline">Контакты</Link>
      </nav>

      {/* Поиск и корзина */}
      <div className="flex items-center gap-3">
        {/* Поиск */}
        <input
          type="text"
          placeholder="Поиск книг..."
          className="border rounded px-2 py-1 text-sm w-36 md:w-48"
        />
        {/* Иконка корзины */}
        <Link href="/cart" aria-label="Открыть корзину" className="relative">
          <ShoppingCartIcon className="h-6 w-6" />
          {/* Количество товаров — заглушка */}
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
              0
          </span>
        </Link>
        {/* Профиль */}
        <Link href="/profile" aria-label="Личный кабинет">
          <UserIcon className="h-6 w-6" />
        </Link>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="w-full px-6 py-4 border-t">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
      <div>&copy; {new Date().getFullYear()} BookStore</div>
      <div className="mt-2 md:mt-0 space-x-4">
        <a href="#" className="hover:underline">Политика конфиденциальности</a>
        <a href="#" className="hover:underline">Условия использования</a>
      </div>
    </div>
  </footer>
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
