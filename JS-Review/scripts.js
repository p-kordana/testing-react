const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// array map

const books = getBooks();

const x = [1, 2, 3, 4, 5, 6];
x;
const x2 = x.map((el) => el * 2);
console.log(x2);

const titles = books.map((el) => el.title);
titles;

function getTotalReviewCount(b) {
  const goodReads = b.reviews.goodreads?.reviewsCount || 0;
  const libraryThing = b.reviews.librarything?.reviewsCount || 0;

  return goodReads + libraryThing;
}

const bookSummaries = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsTotal: getTotalReviewCount(book),
}));
bookSummaries;

// array filter

const bigguns = books.filter((b) => b.pages > 999);
bigguns;

const popular = books
  .filter((b) => b.pages > 500)
  .filter((b) => getTotalReviewCount(b) > 35000);
popular;

const adventure = books
  .filter((b) => b.genres.includes("adventure"))
  .map((b) => ({
    title: b.title,
    author: b.author,
  }));
adventure;

// array reduce

const totalPages = books.reduce((n, book) => n + book.pages, 0);
totalPages;

const bigBookCount = books
  .filter((b) => b.pages > 999)
  .reduce((n, book) => n + 1, 0);
bigBookCount;

// array sort
const unsorted = [3, 8, 7, 4, 5, 8, 9, 2];
const sortedAsc = unsorted.slice().sort((a, b) => a - b);
sortedAsc;
const sortedDesc = unsorted.slice().sort((a, b) => b - a);
sortedDesc;

// use a slice on sorts to retain the original array
unsorted;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

// immutable arrays

// add an object
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const moreBooks = [...books, newBook];
moreBooks;

// delete an object
const lessBooks = moreBooks.filter((b) => b.id !== 3);
lessBooks;

// update an object
const changedBooks = lessBooks.map((b) =>
  b.id == 6
    ? {
        id: 6,
        title: "Harry Pooper and the Chamber of Secrets",
        author: "J. K. Rolling on this dick",
      }
    : b
);
changedBooks;
