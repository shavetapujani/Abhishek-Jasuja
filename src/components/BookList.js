// --------------------video-84 Intianl SetUp--------------------------
// ---------------------------------------------------------------------
// function BookList() {
//   return <div>BookList</div>;
// }

// export default BookList;

// --------------------video-106 Displaying the List--------------------------
// ---------------------------------------------------------------------
// import BookShow from "./BookShow";
// function BookList({ books, onDelete }) {
//   const renderedBooks = books.map((book) => {
//     return <BookShow key={book.id} book={book} onDelete={onDelete} />;
//   });

//   return <div className="book-list">{renderedBooks}</div>;
// }

// export default BookList;

// --------------------video-110 Updating the Title--------------------------
// ---------------------------------------------------------------------
import BookShow from "./BookShow";
function BookList({ books, onDelete, onEdit }) {
  const renderedBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} key={book.id} book={book} onDelete={onDelete} />
    );
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
