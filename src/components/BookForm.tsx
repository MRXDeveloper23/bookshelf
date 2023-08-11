import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

interface BookFormProps {
  onSubmit: (book: BookData) => void;
}

interface BookData {
  isbn: string;
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit }) => {
  const [isbn, setIsbn] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ isbn });
    setIsbn("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </form>
  );
};

export default BookForm;
