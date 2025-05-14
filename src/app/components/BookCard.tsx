"use client"; // ???

import Link from "next/link";
import Image from "next/image";
import { Book } from "../types/Book";

type BookCardProps = {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => (
  <Link
    href={`/product/${book.id}`}
    className="border rounded-md p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="w-full h-40 bg-gray-200 mb-4" aria-label="Обложка книги">
      <Image
        src={book.image}
        alt={`Обложка: ${book.title}`}
        width={200}
        height={300}
        className="mb-4 object-cover w-full h-auto"
      />
    </div>
    <h2 className="text-lg font-medium">{book.title}</h2>
    <p className="text-sm text-gray-600">{book.author}</p>
    <p className="text-base font-medium mt-2">{book.price}</p>
  </Link>
);

export default BookCard;