import React, { useEffect, useState } from "react";
import { Container, Typography, CssBaseline } from "@mui/material";
import BookForm from "../../components/BookForm";
import BookList from "../../components/BookList";
import ApiService from "../../services/api";

interface BookData {
  title: string;
  author: string;
  isbn: string;
  status: number;
}

interface AddBookData {
  isbn: string;
}

const Bookshelf: React.FC = () => {
  const [books, setBooks] = useState<BookData[]>([]);

  const handleAddBook = (book: AddBookData) => {
    // setBooks([...books, book]);
  };

  useEffect(() => {
    const getAllBooks = async () => {
      const books = await ApiService.getBooks();
      console.log(books);
    };
    getAllBooks();
  }, []);

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Typography variant="h4" align="center" gutterBottom>
        Your bookshelf
      </Typography>
      <BookForm onSubmit={handleAddBook} />
      {books.length > 0 && <BookList books={books} />}
    </Container>
  );
};

export default Bookshelf;
