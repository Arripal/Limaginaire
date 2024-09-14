import { useEffect, useState, useRef } from 'react';
import booksFormatter from '../../utils/booksFormatter';
import './BooksFinder.scss';

const BooksFinder = ({ setBooks, setResultSectionTitle, setIsLoading }) => {
	const [inputValue, setInputValue] = useState('');
	const inputValueReference = useRef();

	useEffect(() => {
		async function fetchBooks() {
			if (!inputValue || inputValue.trim() == '') return;

			const bookUrl = `https://openlibrary.org/search.json?q=${inputValue}&fields=key,cover_i,title,author_name&limit=30`;
			setIsLoading(true);
			try {
				const booksResponse = await fetch(bookUrl);
				const booksData = await booksResponse.json();
				const { docs } = booksData;
				if (!docs) {
					setBooks([]);
					setResultSectionTitle(
						'Aucun résultat ne correspond à votre recherche.'
					);
				}

				const books = booksFormatter(docs);
				setBooks(books);
				setResultSectionTitle('Résultats de votre recherche');
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
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
			setBooks([]);
			setInputValue(currentInputValue);
		} else {
			alert('Les résultats pour cette recherche sont déjà affichés.');
		}
	};

	return (
		<main className="main">
			<section className="main__infos">
				<p className="main__infos-text">
					Les livres sont les portes de l'imaginaire,
					<br />
					ouvrant des mondes infinis à chaque page tournée.
				</p>
			</section>

			<form className="main__form" onSubmit={onSubmitHandler}>
				<h4>Rechercher un livre</h4>
				<div>
					<input
						className="main__form-input"
						type="text"
						placeholder="Renseigner le titre ou l'auteur ici"
						ref={inputValueReference}
					/>
					<button className="main__form-btn" type="submit">
						<i className="fa-solid fa-magnifying-glass"></i>
					</button>
				</div>
			</form>
		</main>
	);
};

export default BooksFinder;
