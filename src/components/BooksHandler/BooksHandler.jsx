import React from 'react';
import BooksFinder from '../BooksFinder/BooksFinder';
import Spinner from '../Spinner/Spinner';
import List from '../List/List';
import { useState } from 'react';
import Header from '../Header/Header';

const BooksHandler = () => {
	const [books, setBooks] = useState([]);
	const [resultsMsg, setResultsMsg] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	return (
		<div>
			<Header />
			<BooksFinder
				setBooks={setBooks}
				setResultsMsg={setResultsMsg}
				setIsLoading={setIsLoading}
			/>
			{isLoading && <Spinner />}
			{resultsMsg && <p className="results">{resultsMsg}</p>}
			{books.length && <List books={books} />}
		</div>
	);
};

export default BooksHandler;
