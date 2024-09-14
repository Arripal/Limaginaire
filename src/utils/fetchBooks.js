import booksFormatter from './booksFormatter';

export default async function fetchBooks(API_URL) {
	try {
		const booksResponse = await fetch(API_URL);
		const booksData = await booksResponse.json();
		const { docs } = booksData;

		if (!docs.length) {
			throw new Error('Aucun résultat correspondant à votre recherche.');
		}

		const books = booksFormatter(docs);

		return books;
	} catch (error) {
		throw new Error(error.message);
	}
}
