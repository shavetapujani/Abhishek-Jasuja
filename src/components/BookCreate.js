// --------------------video-84 Intianl SetUp--------------------------
// ---------------------------------------------------------------------
// function BookCreate() {
//   return <div>BookCreate</div>;
// }

// export default BookCreate;

// --------------------video-88 Receiving New Titles--------------------------
// ---------------------------------------------------------------------
// import { useState } from "react";

// function BookCreate({ onCreate }) {
//   const [title, setTitle] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onCreate(title);
//     setTitle("");
//   };

//   const handleChange = (event) => {
//     setTitle(event.target.value);
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>search the book</label>
//         <input value={title} onChange={handleChange} />
//         <button>create!</button>
//       </form>
//       ,
//     </div>
//   );
// }

// export default BookCreate;

// --------------------video-88 Receiving New Titles--------------------------
// ---------------------------------------------------------------------

import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title);
    setTitle("");
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add a Book </h3>
      <form onSubmit={handleSubmit}>
        <label>search the book</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">create!</button>
      </form>
    </div>
  );
}

export default BookCreate;
