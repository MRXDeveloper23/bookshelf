import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface BookProps {
  title: string;
  author: string;
  isbn: string;
  status: number;
}

const Book: React.FC<BookProps> = ({ title, author, isbn, status }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="subtitle1">{author}</Typography>
        <Typography variant="body2">ISBN: {isbn}</Typography>
        <Typography variant="body2">Status: {status}</Typography>
      </CardContent>
    </Card>
  );
};

export default Book;
