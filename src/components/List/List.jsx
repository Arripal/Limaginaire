import Book from '../Book/Book';
import './List.scss';

const List = ({ books }) => {
	const booksList = books
		?.sort((a, b) => a.publishYear - b.publishYear)
		.map((book, index) => {
			return <Book key={`book--${index}-${Date.now()}`} book={book} />;
		});

	return (
		<section className="list">
			<h1 className="list__title">Résultats de votre recherche</h1>
			<div className="list__grid">{booksList}</div>
		</section>
	);
};

export default List;
