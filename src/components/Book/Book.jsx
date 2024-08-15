const Book = ({ book }) => {
	const { author, title, image, publishYear } = book;

	return (
		<div>
			<img src={image} alt="Image" />
			<span>Author : {author}</span>
			<span>Title : {title}</span>
			<span>Published in : {publishYear}</span>
		</div>
	);
};

export default Book;
