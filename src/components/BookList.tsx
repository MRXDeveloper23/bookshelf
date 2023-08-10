import React from "react";
import { Grid } from "@mui/material";
import Book from "./Book";

interface BookListProps {
  books: BookData[];
}

interface BookData {
  title: string;
  author: string;
  isbn: string;
  status: number;
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <Grid container spacing={2}>
      {books.map((book, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Book title={book.title} author={book.author} isbn={book.isbn} status={book.status} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
