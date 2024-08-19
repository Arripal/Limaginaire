export default function booksFormatter(books) {
	const formattedBooks = books
		.filter((book) => book.cover_i)
		.map((book) => {
			const formattedKey = book.key.split('works/')[1];

			return {
				id: formattedKey,
				author: book.author_name,
				title: book.title,
				cover: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
				publishYear: book.first_publish_year,
			};
		});

	return formattedBooks;
}
