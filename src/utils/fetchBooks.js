import booksFormatter from './booksFormatter';

export default async function fetchBooks(
	inputValue,
	setIsLoading,
	setBooks,
	setResultsMsg
) {
	const bookUrl = `https://openlibrary.org/search.json?q=${inputValue}&fields=key,cover_i,title,author_name&limit=30`;

	setIsLoading(true);

	try {
		const booksResponse = await fetch(bookUrl);
		const booksData = await booksResponse.json();
		const { docs } = booksData;

		if (!docs.length) {
			setBooks([]);
			setResultsMsg('Aucun résultat ne correspond à votre recherche.');
			setIsLoading(false);
			return;
		}

		const books = booksFormatter(docs);

		setBooks([...books]);
		setIsLoading(false);
		setResultsMsg('');
	} catch (error) {
		setIsLoading(false);
		throw new Error(error.message);
	}
}
