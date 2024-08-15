import { useEffect, useState, useRef } from 'react';
import './BooksFinder.scss';

const BooksFinder = ({ setBooks }) => {
	const [inputValue, setInputValue] = useState('');
	const inputValueReference = useRef();
	useEffect(() => {
		async function fetchBooks() {
			if (!inputValue || inputValue.trim() == '') return;

			const url = `https://openlibrary.org/search.json?q=${inputValue}&fields=key,cover_i,title,author_name,first_publish_year`;

			try {
				const response = await fetch(url);
				const booksData = await response.json();
				const { docs } = booksData;
				if (!docs) {
					setBooks([]);
				}
				console.log(docs);
				const formattedBooks = docs.map((book) => {
					return {
						id: book.key,
						author: book.author_name,
						title: book.title,
						cover: book.cover_i,
						publishYear: book.first_publish_year,
					};
				});
				setBooks(formattedBooks);
			} catch (error) {
				throw new Error();
			}
		}
		fetchBooks();
		return () => {
			inputValueReference.current.value = '';
		};
	}, [inputValue]);

	const onSubmitHandler = (event) => {
		event.preventDefault();

		const currentInputValue = inputValueReference.current.value.trim();

		if (currentInputValue !== inputValue) {
			setInputValue(currentInputValue);
		} else {
			console.log('Input value is still the same');
		}
	};

	return (
		<main className="main">
			<h2 className="main__title">Rechercher un livre</h2>

			<form onSubmit={onSubmitHandler}>
				<input
					className="main__input"
					type="text"
					placeholder="Renseigner le titre ou l'auteur ici"
					ref={inputValueReference}
				/>
				<button className="main_btn" type="submit">
					<i className="fa-solid fa-magnifying-glass"></i>
				</button>
			</form>
		</main>
	);
};

export default BooksFinder;
