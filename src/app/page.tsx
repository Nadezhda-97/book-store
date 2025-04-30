//import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      <section className="hero mb-10 text-center">
        <h1 className="text-4xl font-bold mb-2">Добро пожаловать в BookStore</h1>
        <p className="text-gray-600 text-lg">Ваш онлайн-магазин книг</p>
      </section>

      <section className="featured-books mb-8">
        <h2 className="text-3xl font-bold mb-2">Популярные книги</h2>
        <p className="text-gray-600">Ознакомьтесь с нашими самыми популярными изданиями</p>
      </section>

      {/* Сетка карточек */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="border rounded-md p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-full h-40 bg-gray-200 mb-4" aria-label="Обложка книги" />
            <h2 className="text-lg font-medium">Название книги {i + 1}</h2>
            <p className="text-sm text-gray-600">Автор книги</p>
          </div>
        ))}
      </section>
    </main>
  );
}
