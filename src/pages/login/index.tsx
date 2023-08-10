import Bookshelf from "../../assets/images/bookshelf.jpeg";
import React, { FormEvent, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Alert,
  Snackbar,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { User } from "../../types";

const SignUp: React.FC<{ onSubmit: (userData: User) => void }> = ({
  onSubmit,
}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [key, setKey] = useState("");
  const [secret, setSecret] = useState("");

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault();
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      key.trim() === "" ||
      secret.trim() === ""
    ) {
      setHasError(true);
    } else {
      const userData: User = {
        username,
        email,
        key,
        secret,
      };
      localStorage.setItem("key", key);
      localStorage.setItem("secret", secret);
      onSubmit(userData);
    }
  };

  return (
    <Container className="!flex h-screen items-center sm:overflow-hidden">
      {hasError && (
        <Snackbar
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={true}
          autoHideDuration={2000}
          onClose={() => setHasError(false)}
        >
          <Alert severity="warning">Please fill in all required fields!</Alert>
        </Snackbar>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">
        <div className="">
          <img
            src={Bookshelf}
            alt="bookshelf"
            className="h-auto max-w-full object-contain"
          />
        </div>
        <div className="text-center">
          <Typography variant="h4">Sign Up</Typography>
          <form onSubmit={handleSignUp}>
            <TextField
              label="Username"
              fullWidth
              margin="normal"
              value={username}
              required={true}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Email"
              fullWidth
              type="email"
              margin="normal"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Key"
              fullWidth
              margin="normal"
              value={key}
              required={true}
              onChange={(e) => setKey(e.target.value)}
            />
            <FormControl fullWidth margin="normal" required={true}>
              <InputLabel htmlFor="secret">Secret</InputLabel>
              <Input
                id="secret"
                type={isPasswordShown ? "text" : "password"}
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                required={true}
                endAdornment={
                  <InputAdornment position="end">
                    <LockIcon
                      onClick={() => setIsPasswordShown(!isPasswordShown)}
                    />
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              sx={{ marginTop: "1rem" }}
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
