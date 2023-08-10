import React, { useState } from "react";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

interface BookFormProps {
  onSubmit: (book: BookData) => void;
}

interface BookData {
  isbn: string;
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit }) => {
  const [isbn, setIsbn] = useState("");
  const [status, setStatus] = useState(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit({ isbn });
    setIsbn("");
    setStatus(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
      <FormControl>
        <InputLabel>Status</InputLabel>
        <Select value={status} onChange={(e) => setStatus(e.target.value as number)}>
          <MenuItem value={0}>New</MenuItem>
          <MenuItem value={1}>Reading</MenuItem>
          <MenuItem value={2}>Finished</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Save
      </Button>
    </form>
  );
};

export default BookForm;
