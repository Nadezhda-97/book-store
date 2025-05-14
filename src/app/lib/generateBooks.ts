import { faker } from "@faker-js/faker";
import { Book, BookCategory } from "../types/Book";

const generateBooks = (count: number, category: BookCategory): Book[] => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    title: faker.lorem.words({ min: 2, max: 4 }),
    author: faker.person.fullName(),
    image: faker.image.urlPicsumPhotos({ width: 300, height: 400 }),
    description: faker.lorem.paragraph(),
    price: faker.commerce.price({ min: 200, max: 2000, dec: 0, symbol: "₽" }),
    category,
  }));
};

export default generateBooks;