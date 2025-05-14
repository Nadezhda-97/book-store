import { notFound } from "next/navigation";
import Image from "next/image";

import { topBooks, newBooks, foreignBooks } from "@/app/data/books";
import { Book } from "@/app/types/Book";

type ProductPageProps = {
  params: { id: string };
};

const allBooks: Book[] = [...topBooks, ...newBooks, ...foreignBooks];

const ProductPage = ({ params }: ProductPageProps) => {
  //const { id } = params;

  const currentBook = allBooks.find((book) => book.id === params.id);

  if (!currentBook) {
    return notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
      {/* Название книги */}
      <h1 className="text-3xl font-bold mb-6">{currentBook.title}</h1>

      {/* Основной контейнер */}
      <div className="flex flex-col md:flex-row gap-8"></div>

      {/* Изображение */}
      <div className="w-full md:w-1/4">
        <Image
          src={currentBook.image}
          alt={`Обложка книги: ${currentBook.title}`}
          width={300}
          height={450}
          className="w-full h-auto object-cover rounded"
        />
      </div>

      {/* Описание и характеристики */}
      <div className="w-full md:w-2/4 flex flex-col gap-2">
        <p><strong>Описание:</strong> {currentBook.description}</p>
        <p><strong>Автор:</strong> {currentBook.author}</p>
        <p><strong>Категория:</strong> {currentBook.category}</p>
        <p><strong>Язык:</strong> Русский</p>
        <p><strong>Год издания:</strong> 2023</p>
      </div>

      {/* Цена и кнопка */}
      <div className="w-full md:w-1/4">
        <p className="text-2xl font-semibold mb-4">{currentBook.price}</p>
        <button className="w-full bg-black text-white py-2 px-4 rounded">
          Добавить в корзину
        </button>
      </div>
    </main>
  );
}

export default ProductPage;