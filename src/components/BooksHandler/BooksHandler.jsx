import React from 'react';
import BooksFinder from '../BooksFinder/BooksFinder';
import List from '../List/List';
import { useState } from 'react';

const BooksHandler = () => {
	const [books, setBooks] = useState([]);
	return (
		<div>
			<BooksFinder setBooks={setBooks} />
			{books && <List books={books} />}
		</div>
	);
};

export default BooksHandler;
