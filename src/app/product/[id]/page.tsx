import React from "react";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: { id: string };
};

const ProductPage: React.FC<ProductPageProps> = ({ params }) => { // { params }: ProductPageProps
  const { id } = params;

  if (!id) {
    return notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-4">Карточка товара</h1>
      <p className="text-gray-600">Информация о книге с ID: <strong>{id}</strong></p>
    </main>
  );
}

export default ProductPage;