import { useEffect, useState } from 'react';
import './BookFinder.scss';

const BookFinder = ({ setBooks }) => {
	const [inputValue, setInputValue] = useState('');

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
					//TODO : Créer un composant ou une variable a retourner s'il n'y a aucun résultat
				}

				console.log('Fetch done !');
			} catch (error) {
				throw new Error();
			}
		}
		fetchBooks();
	}, [inputValue]);

	const onChangeHandler = (event) => {
		setInputValue(event.target.value);
	};
	return (
		<main className="main">
			<h2 className="main__title">Rechercher un livre</h2>
			<input
				className="main__input"
				type="text"
				placeholder="Renseigner le titre ou l'auteur ici"
				onChange={onChangeHandler}
				value={inputValue}
			/>
			<button className="main_btn">
				<i className="fa-solid fa-magnifying-glass"></i>
			</button>
		</main>
	);
};

export default BookFinder;
