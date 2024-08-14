const Book = ({ book }) => {
	const { author, title, image } = book;

	return (
		<div>
			<img src={image} alt="Image" />
			<span>Author : {author}</span>
			<span>Title : {title}</span>
		</div>
	);
};

export default Book;
