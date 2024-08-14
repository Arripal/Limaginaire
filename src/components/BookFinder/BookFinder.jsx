import { useEffect, useState } from 'react';
import './BookFinder.scss';

const BookFinder = () => {
	const [inputValue, setInputValue] = useState('');
	const [books, setBooks] = useState([]);
	useEffect(() => {
		async function fetchBooks() {
			const url = `https://openlibrary.org/search.json?q=${inputValue}&fields=key,cover_i,title,author_name`;
			try {
				const response = await fetch(url);
				const booksData = await response.json();
				setBooks(booksData.docs);
				console.log(booksData);
				console.log('Fetch done !');
			} catch (error) {
				throw new Error();
			}
		}
		fetchBooks();
	}, [inputValue]);

	const onChange = (event) => {
		const inputValue = event.target.value;

		setInputValue(inputValue);
	};
	return (
		<main className="main">
			<h2 className="main__title">Rechercher un livre</h2>
			<input
				className="main__input"
				type="text"
				placeholder="Renseigner le titre ou l'auteur ici"
				onChange={onChange}
			/>
			<button className="main_btn">
				<i className="fa-solid fa-magnifying-glass"></i>
			</button>
		</main>
	);
};

export default BookFinder;
