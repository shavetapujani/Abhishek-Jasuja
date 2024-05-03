// --------------------video-84 Intianl SetUp--------------------------
// ---------------------------------------------------------------------
// function App() {
//   return <div>App</div>;
// }

// export default App;

// --------------------video-85 State Location--------------------------
// ---------------------------------------------------------------------

// import { useState } from "react";
// function App() {
//   const [books, setBooks] = useState([]);

//   return <div>App</div>;
// }

// export default App;

// --------------------video-88 Receiving New Titles--------------------------
// ---------------------------------------------------------------------

// import { useState } from "react";
// import BookCreate from "./components/BookCreate";
// function App() {
//   const [books, setBooks] = useState([]);
//   const createBook = (title) => {
//     console.log("Need to add book with", title);
//   };
//   return (
//     <div>
//       <BookCreate onCreate={createBook} />
//     </div>
//   );
// }

// export default App;

// --------------------video-104 Adding a Book for Real!--------------------------
// ---------------------------------------------------------------------

// import { useState } from "react";
// import BookCreate from "./components/BookCreate";
// function App() {
//   const [books, setBooks] = useState([]);
//   const createBook = (title) => {
//     const updatedBoooks = [...books, { id: 123, title: title }];
//     setBooks(updatedBoooks);
//   };

//   return (
//     <div>
//       {books.length}
//       <BookCreate onCreate={createBook} />
//     </div>
//   );
// }

// export default App;

// --------------------video-105 Generating Random ID's!--------------------------
// ---------------------------------------------------------------------

// import { useState } from "react";
// import BookCreate from "./components/BookCreate";
// function App() {
//   const [books, setBooks] = useState([]);
//   const createBook = (title) => {
//     const updatedBoooks = [
//       ...books,
//       {
//         id: Math.round(Math.random() * 9999),
//         title: title,
//       },
//     ];
//     setBooks(updatedBoooks);
//   };

//   return (
//     <div>
//       {books.length}
//       <BookCreate onCreate={createBook} />
//     </div>
//   );
// }

// export default App;

// --------------------video-106 Displaying the List--------------------------
// ---------------------------------------------------------------------

// import { useState } from "react";
// import BookCreate from "./components/BookCreate";
// import BookList from "./components/BookList";
// function App() {
//   const [books, setBooks] = useState([]);
//   const createBook = (title) => {
//     const updatedBoooks = [
//       ...books,
//       {
//         id: Math.round(Math.random() * 9999),
//         title: title,
//       },
//     ];
//     setBooks(updatedBoooks);
//   };

//   return (
//     <div className="app">
//       <BookList books={books} />
//       <BookCreate onCreate={createBook} />
//     </div>
//   );
// }

// export default App;

// --------------------video-107 Deleting Records--------------------------
// ---------------------------------------------------------------------

// import { useState } from "react";
// import BookCreate from "./components/BookCreate";
// import BookList from "./components/BookList";
// function App() {
//   const [books, setBooks] = useState([]);

//   const deleteBookByID = (id) => {
//     const updatedBoooks = books.filter((book) => {
//       return book.id !== id;
//     });

//     setBooks(updatedBoooks);
//   };
//   const createBook = (title) => {
//     const updatedBoooks = [
//       ...books,
//       {
//         id: Math.round(Math.random() * 9999),
//         title: title,
//       },
//     ];
//     setBooks(updatedBoooks);
//   };

//   return (
//     <div className="app">
//       <BookList books={books} onDelete={deleteBookByID} />
//       <BookCreate onCreate={createBook} />
//     </div>
//   );
// }

// export default App;

// --------------------video-110 Updating the Title--------------------------
// ---------------------------------------------------------------------

// import { useState } from "react";
// import BookCreate from "./components/BookCreate";
// import BookList from "./components/BookList";
// function App() {
//   const [books, setBooks] = useState([]);

//   const editBookById = (id, newTitle) => {
//     const updatedBoooks = books.map((book) => {
//       if (book.id === id) {
//         return { ...books, title: newTitle };
//       }

//       return book;
//     });

//     setBooks(updatedBoooks);
//   };

//   const deleteBookById = (id) => {
//     const updatedBoooks = books.filter((book) => {
//       return book.id !== id;
//     });

//     setBooks(updatedBoooks);
//   };
//   const createBook = (title) => {
//     const updatedBoooks = [
//       ...books,
//       {
//         id: Math.round(Math.random() * 9999),
//         title: title,
//       },
//     ];
//     setBooks(updatedBoooks);
//   };

//   return (
//     <div className="app">
//       <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
//       <BookCreate onCreate={createBook} />
//     </div>
//   );
// }

// export default App;

// --------------------video-110 Adding Images--------------------------
// ---------------------------------------------------------------------

// import { useState } from "react";
// import BookCreate from "./components/BookCreate";
// import BookList from "./components/BookList";
// function App() {
//   const [books, setBooks] = useState([]);

//   const editBookById = (id, newTitle) => {
//     const updatedBoooks = books.map((book) => {
//       if (book.id === id) {
//         return { ...books, title: newTitle };
//       }

//       return book;
//     });

//     setBooks(updatedBoooks);
//   };

//   const deleteBookById = (id) => {
//     const updatedBoooks = books.filter((book) => {
//       return book.id !== id;
//     });

//     setBooks(updatedBoooks);
//   };
//   const createBook = (title) => {
//     const updatedBoooks = [
//       ...books,
//       {
//         id: Math.round(Math.random() * 9999),
//         title: title,
//       },
//     ];
//     setBooks(updatedBoooks);
//   };

//   return (
//     <div className="app">
//       <h1>Reading List</h1>
//       <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
//       <BookCreate onCreate={createBook} />
//     </div>
//   );
// }

// export default App;

// --------------------video-123 Creating a New Record--------------------------
// ---------------------------------------------------------------------
// import axios from "axios";
// import { useState } from "react";
// import BookCreate from "./components/BookCreate";
// import BookList from "./components/BookList";
// function App() {
//   const [books, setBooks] = useState([]);

//   const editBookById = (id, newTitle) => {
//     const updatedBoooks = books.map((book) => {
//       if (book.id === id) {
//         return { ...books, title: newTitle };
//       }

//       return book;
//     });

//     setBooks(updatedBoooks);
//   };

//   const deleteBookById = (id) => {
//     const updatedBoooks = books.filter((book) => {
//       return book.id !== id;
//     });

//     setBooks(updatedBoooks);
//   };
//   const createBook = async (title) => {
//     const response = await axios.post("http://localhost:3001/books", {
//       title,
//     });

//     setBooks(response.data);

//     const updatedBoooks = [...books, response.data];
//     setBooks(updatedBoooks);
//   };

//   return (
//     <div className="app">
//       <h1>Reading List</h1>
//       <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
//       <BookCreate onCreate={createBook} />
//     </div>
//   );
// }

// export default App;

// --------------------video-123 Creating a New Record--------------------------
// ---------------------------------------------------------------------
import axios from "axios";
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBoooks = books.map((book) => {
      if (book.id === id) {
        return { ...books, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBoooks);
  };

  const deleteBookById = (id) => {
    const updatedBoooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBoooks);
  };
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });

    setBooks(response.data);

    const updatedBoooks = [...books, response.data];
    setBooks(updatedBoooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
