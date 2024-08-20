export default function booksFormatter(books) {
	const formattedBooks = books
		.filter((book) => book.cover_i)
		.map((book, index) => {
			return {
				id: `book--${book.title.trim()}--${index}}`,
				author: book.author_name.join(' - '),
				title: book.title,
				cover: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
			};
		});

	return formattedBooks;
}
