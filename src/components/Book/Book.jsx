import './Book.scss';

const Book = ({ book }) => {
	const { author, title, cover, publishYear } = book;
	return (
		<article className="book">
			{cover && <img className="book__image" src={cover} alt="Image" />}
			<p className="book__author">Auteur : {author}</p>
			<p className="book__title">Titre : {title}</p>
			<p className="book__published">Année de publication : {publishYear}</p>
		</article>
	);
};

export default Book;
