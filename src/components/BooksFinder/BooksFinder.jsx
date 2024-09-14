import { useEffect, useState, useRef } from 'react';
import fetchBooks from '../../utils/fetchBooks';
import './BooksFinder.scss';

const BooksFinder = ({ setBooks, setResultsMsg, setIsLoading }) => {
	const [inputValue, setInputValue] = useState('');
	const inputReference = useRef();
	const bookUrl = `https://openlibrary.org/search.json?q=${inputValue}&fields=key,cover_i,title,author_name&limit=30`;

	useEffect(() => {
		if (!inputValue.length || inputValue.trim() == '') return;

		setIsLoading(true);

		fetchBooks(bookUrl)
			.then((data) => {
				setBooks([...data]);
				setIsLoading(false);
				setResultsMsg('');
			})
			.catch((error) => {
				setIsLoading(false);
				setBooks([]);
				setResultsMsg(error.message);
			});

		return () => {
			inputReference.current.value = '';
		};
	}, [inputValue]);

	const onSubmitHandler = (event) => {
		event.preventDefault();

		const currentInputValue = inputReference.current.value.trim();

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
						ref={inputReference}
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
