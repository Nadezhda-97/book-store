//import Image from "next/image";
//import Link from "next/link";
import BookCard from "./components/BookCard";
import { topBooks, newBooks, foreignBooks } from "./data/books";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-8 space-y-12">
      {/* Приветствие */}
      <section>
        <h1 className="text-4xl font-bold mb-4">Добро пожаловать в BookStore!</h1>
        <p className="text-gray-600 text-lg">Ваш онлайн-магазин книг</p>
        <p className="text-lg text-gray-700">
          Здесь вы найдёте книги на любой вкус — от классики до современных бестселлеров.
        </p>
      </section>

      {/* ТОП-10 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">ТОП-10</h2>
        <p className="text-gray-600">Ознакомьтесь с нашими самыми популярными изданиями</p>
        {/* Сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topBooks.map((book) => (
            <BookCard key={book.id} book={book}/>
          ))}
        </div>
      </section>

      {/* Новинки */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Новинки</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {newBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* Книги на иностранном языке */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Книги на иностранном языке</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {foreignBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </main>
  );
}
