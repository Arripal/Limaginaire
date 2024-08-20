import './Book.scss';

const Book = ({ book }) => {
	const { author, title, cover } = book;

	return (
		<article className="book">
			<div className="imgWrapper">
				{cover && <img className="book__image" src={cover} alt="Image" />}
			</div>

			<div className="book__details">
				<p className="book__details-author">{author || 'Anonyme'}</p>
				<p className="book__details-title">{title || 'Titre Indisponible'}</p>
			</div>
		</article>
	);
};

export default Book;
