import Header from '../../components/Header/Header';
import { useState, useEffect } from 'react';
import BookModel from '../../models/BookModel';
import List from '../../components/List/List';
import BookFinder from '../../components/BookFinder/BookFinder';

const Landing = () => {
	const [books, setBooks] = useState(null);

	useEffect(() => {
		async function fetchBooks() {
			const response = await fetch('/books.json');
			const booksData = await response.json();
			setBooks(booksData);
		}

		fetchBooks();
	}, []);

	return (
		<div style={{ backgroundColor: 'black' }}>
			<Header />
			<BookFinder />
			{books && <List books={books} />}
		</div>
	);
};

export default Landing;
