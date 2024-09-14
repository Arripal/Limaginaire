import React from 'react';
import BooksFinder from '../BooksFinder/BooksFinder';
import Spinner from '../Spinner/Spinner';
import List from '../List/List';
import { useState } from 'react';
import Header from '../Header/Header';

const BooksHandler = () => {
	const [books, setBooks] = useState([]);
	const [resultSectionTitle, setResultSectionTitle] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	return (
		<div>
			<Header />
			<BooksFinder
				setBooks={setBooks}
				setResultSectionTitle={setResultSectionTitle}
				setIsLoading={setIsLoading}
			/>
			{isLoading && <Spinner />}
			{books.length && (
				<List books={books} resultSectionTitle={resultSectionTitle} />
			)}
		</div>
	);
};

export default BooksHandler;
