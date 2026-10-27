import { useState, useEffect } from "react";
import "./Library.css";

function Library() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch books");
        return res.json();
      })
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filtered = books.filter(
    (b) =>
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="library">
      <h1>Digital Library Search Application</h1>
      <input
        className="search"
        type="text"
        placeholder="Search by title or author..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p className="message">Loading books...</p>}
      {error && <p className="error">Error: {error}</p>}
      <div className="cards">
        {filtered.map((book) => (
          <div className="card" key={book.id}>
            <h2>{book.title}</h2>
            <p>ID: {book.id}</p>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;
