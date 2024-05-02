// --------------------video-84 Intianl SetUp--------------------------
// ---------------------------------------------------------------------
// function BookShow() {
//   return <div>BookShow</div>;
// }

// export default BookShow;

// --------------------video-106 Displaying the List--------------------------
// ---------------------------------------------------------------------
// function BookShow({ book }) {
//   return <div className="book-show">{book.title}</div>;
// }

// export default BookShow;

// --------------------video-107 Deleting Records--------------------------
// ---------------------------------------------------------------------

// function BookShow({ book, onDelete }) {
//   const handleClick = () => {
//     onDelete(book.id);
//   };
//   return (
//     <div className="book-show">
//       {book.title}
//       <div className="actions">
//         <button className="delete" onClick={handleClick}>
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }
// export default BookShow;

// --------------------video-108 Toggling from Display--------------------------
// ---------------------------------------------------------------------
// import { useState } from "react";
// import BookEdit from "./BookEdit";
// function BookShow({ book, onDelete }) {
//   const [showEdit, SetShowEdit] = useState(false);
//   const handleDeleteClick = () => {
//     onDelete(book.id);
//   };
//   const handleEditClick = () => {
//     SetShowEdit(!showEdit);
//   };

//   let content = <h3>{book.title}</h3>;
//   if (showEdit) {
//     content = <BookEdit />;
//   }
//   return (
//     <div className="book-show">
//       <div>{content}</div>
//       <div className="actions">
//         <button className="edit" onClick={handleEditClick}>
//           Edit
//         </button>
//         <button className="delete" onClick={handleDeleteClick}>
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }

// export default BookShow;

// ---------------------video-109 Toggling form Display--------------------------
// ---------------------------------------------------------------------
// import { useState } from "react";
// import BookEdit from "./BookEdit";
// function BookShow({ book, onDelete }) {
//   const [showEdit, SetShowEdit] = useState(false);
//   const handleDeleteClick = () => {
//     onDelete(book.id);
//   };
//   const handleEditClick = () => {
//     SetShowEdit(!showEdit);
//   };

//   let content = <h3>{book.title}</h3>;
//   if (showEdit) {
//     content = <BookEdit book={book} />;
//   }
//   return (
//     <div className="book-show">
//       <div>{content}</div>
//       <div className="actions">
//         <button className="edit" onClick={handleEditClick}>
//           Edit
//         </button>
//         <button className="delete" onClick={handleDeleteClick}>
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }

// export default BookShow;

// --------------------video-110 Updating the Title--------------------------
// ---------------------------------------------------------------------
// import { useState } from "react";
// import BookEdit from "./BookEdit";
// function BookShow({ book, onDelete, onEdit }) {
//   const [showEdit, SetShowEdit] = useState(false);
//   const handleDeleteClick = () => {
//     onDelete(book.id);
//   };
//   const handleEditClick = () => {
//     SetShowEdit(!showEdit);
//   };

//   let content = <h3>{book.title}</h3>;
//   if (showEdit) {
//     content = <BookEdit onEdit={onEdit} book={book} />;
//   }
//   return (
//     <div className="book-show">
//       <div>{content}</div>
//       <div className="actions">
//         <button className="edit" onClick={handleEditClick}>
//           Edit
//         </button>
//         <button className="delete" onClick={handleDeleteClick}>
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }

// export default BookShow;

// --------------------video-111 & 113 Closing the form on Submit--------------------------
// ---------------------------------------------------------------------
// import { useState } from "react";
// import BookEdit from "./BookEdit";
// function BookShow({ book, onDelete, onEdit }) {
//   const [showEdit, SetShowEdit] = useState(false);
//   const handleDeleteClick = () => {
//     onDelete(book.id);
//   };
//   const handleEditClick = () => {
//     SetShowEdit(!showEdit);
//   };

//   const handleSubmit = (id, newTitle) => {
//     SetShowEdit(false);
//     onEdit(id, newTitle);
//   };
//   let content = <h3>{book.title}</h3>;
//   if (showEdit) {
//     content = <BookEdit onSubmit={handleSubmit} book={book} />;
//   }
//   return (
//     <div className="book-show">
//       <div>{content}</div>
//       <div className="actions">
//         <button className="edit" onClick={handleEditClick}>
//           Edit
//         </button>
//         <button className="delete" onClick={handleDeleteClick}>
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }

// export default BookShow;

// --------------------video-110 Adding Images--------------------------
// ---------------------------------------------------------------------

import { useState } from "react";
import BookEdit from "./BookEdit";
function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, SetShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    SetShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    SetShowEdit(false);
    onEdit(id, newTitle);
  };
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }
  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
