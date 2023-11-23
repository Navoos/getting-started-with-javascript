var favoriteBooks = [];

function addFavoriteBook(bookName) {
	if (!bookName.includes("great")) {
		favoriteBooks.push(bookName);
	}
}

function printFavoriteBooks() {
	console.log(`favorite books: ${favoriteBooks.length}`);

	for (let book of favoriteBooks) {
		console.log(book);
	}
}

addFavoriteBook("The great gatsby");
addFavoriteBook("The last dinner");
addFavoriteBook("Moja");
addFavoriteBook("Candide");

printFavoriteBooks();