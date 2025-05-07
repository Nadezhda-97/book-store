//import Image from "next/image";
import Link from "next/link";

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
          {Array.from({ length: 10 }).map((_, i) => (
            <Link
              href={`/product/${i + 1}`}
              key={i}
              className="border rounded-md p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full h-40 bg-gray-200 mb-4" aria-label="Обложка книги" />
              <h2 className="text-lg font-medium">Название книги {i + 1}</h2>
              <p className="text-sm text-gray-600">Автор книги</p>
          </Link>
          ))}
        </div>
      </section>

      {/* Новинки */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Новинки</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border rounded p-4 text-center">Новая книга 1</div>
          <div className="border rounded p-4 text-center">Новая книга 2</div>
          <div className="border rounded p-4 text-center">Новая книга 3</div>
          <div className="border rounded p-4 text-center">Новая книга 4</div>
        </div>
      </section>

      {/* Книги на иностранном языке */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Книги на иностранном языке</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border rounded p-4 text-center">Foreign Book 1</div>
          <div className="border rounded p-4 text-center">Foreign Book 2</div>
          <div className="border rounded p-4 text-center">Foreign Book 3</div>
          <div className="border rounded p-4 text-center">Foreign Book 4</div>
        </div>
      </section>
    </main>
  );
}
