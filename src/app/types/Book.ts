export type BookCategory = "top" | "new" | "foreign";

export interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  description: string;
  price: string;
  category: BookCategory;
}