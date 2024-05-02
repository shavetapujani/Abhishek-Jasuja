// --------------------video-84 Intianl SetUp--------------------------
// ---------------------------------------------------------------------
// function BookEdit() {
//   return <div>BookEdit</div>;
// }

// export default BookEdit;

// --------------------video-109 Toggling form Display--------------------------
// ---------------------------------------------------------------------

// import { useState } from "react";
// function BookEdit({ book }) {
//   const [title, setTitle] = useState(book.title);

//   const handleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     console.log("New title", title);
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="book-edit">
//         <label> Title</label>
//         <div>
//           <input className="input" value={title} onChange={handleChange} />
//         </div>
//         <button
//           className="button is-primary"
//           value={title}
//           onChange={handleChange}
//         >
//           Save
//         </button>
//       </form>
//     </div>
//   );
// }

// export default BookEdit;

// --------------------video-110 Updating the Title--------------------------
// ---------------------------------------------------------------------
// import { useState } from "react";
// function BookEdit({ book, onEdit }) {
//   const [title, setTitle] = useState(book.title);

//   const handleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     onEdit(book.id, title);
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="book-edit">
//         <label> Title</label>
//         <div>
//           <input className="input" value={title} onChange={handleChange} />
//         </div>
//         <button
//           className="button is-primary"
//           value={title}
//           onChange={handleChange}
//         >
//           Save
//         </button>
//       </form>
//     </div>
//   );
// }

// export default BookEdit;

// --------------------video-111 & 113 Closing the form on Submit--------------------------
// ---------------------------------------------------------------------

import { useState } from "react";
function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(book.id, title);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="book-edit">
        <label> Title</label>
        <div>
          <input className="input" value={title} onChange={handleChange} />
        </div>
        <button
          className="button is-primary"
          value={title}
          onChange={handleChange}
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default BookEdit;
