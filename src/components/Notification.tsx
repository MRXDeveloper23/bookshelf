import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";
import { NotificationProps } from "../interfaces";

const Notification: React.FC<NotificationProps> = ({ open, type, message, onClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={2000}
      onClose={onClose}
    >
      <Alert elevation={6} variant="filled" severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
