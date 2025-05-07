import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";

type ProductPageProps = {
  params: { id: string };
};

const ProductPage: React.FC<ProductPageProps> = ({ params }) => { // { params }: ProductPageProps
  const { id } = params;

  if (!id) {
    return notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      {/* Название книги */}
      <h1 className="text-3xl font-bold mb-6">Название книги (заглушка)</h1>

      {/* Основной контейнер */}
      <div className="flex flex-col md:flex-row gap-8"></div>

      {/* Изображение */}
      <div className="w-full md:w-1/4">
        <Image
          src="/placeholder.jpg"
          alt="Обложка книги"
          width={300}
          height={450}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Описание и характеристики */}
      <div className="w-full md:w-2/4 flex flex-col gap-2">
        <p><strong>Описание:</strong> Здесь будет описание книги.</p>
        <p><strong>Автор:</strong> Имя Автора</p>
        <p><strong>Издательство:</strong> Название, 2023</p>
        <p><strong>Страниц:</strong> 320</p>
        <p><strong>Язык:</strong> Русский</p>
      </div>

      {/* Цена и кнопка */}
      <div className="w-full md:w-1/4">
        <p className="text-2xl font-semibold mb-4">999 ₽</p>
        <button className="w-full bg-black text-white py-2 px-4 rounded">
          Добавить в корзину
        </button>
      </div>
    </main>
  );
}

export default ProductPage;