import Book from '../Book/Book';

const List = ({ books }) => {
	const booksList = books.map((book, index) => {
		return <Book key={`book--${index}-${Date.now()}`} book={book} />;
	});

	return (
		<section>
			<h1>Afficher les livres correspondant ici</h1>
			{booksList}
		</section>
	);
};

export default List;
