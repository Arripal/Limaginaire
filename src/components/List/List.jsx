import Book from '../Book/Book';

const List = ({ books }) => {
	const booksList = books.map((book, index) => {
		return <Book key={`book--${index}-${Date.now()}`} book={book} />;
	});

	const sectionTitle =
		books.length > 0 ? 'Résultats' : 'Aucun résultat à votre recherche';

	return (
		<section>
			<h1>{sectionTitle}</h1>
			{booksList}
		</section>
	);
};

export default List;
