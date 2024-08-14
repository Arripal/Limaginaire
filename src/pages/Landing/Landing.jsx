import Header from '../../components/Header/Header';
import { useState, useEffect } from 'react';

import List from '../../components/List/List';
import BookFinder from '../../components/BookFinder/BookFinder';

const Landing = () => {
	const [books, setBooks] = useState([]);

	return (
		<div style={{ backgroundColor: 'black' }}>
			<Header />
			<BookFinder setBooks={setBooks} />
			{books && <List books={books} />}
		</div>
	);
};

export default Landing;
