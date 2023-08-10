import Bookshelf from "../../assets/images/bookshelf.jpeg";
import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

const SignUp: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [key, setKey] = useState("");
  const [secret, setSecret] = useState("");

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log("Sign-up data:", { username, email, key, secret });
  };

  return (
    <Container className="w-full p-16">
      <div className="w-full grid grid-cols-2 gap-8 items-center justify-center py-8">
        <div className="text-center">
          <Typography variant="h4">Sign Up</Typography>
          <form>
            <TextField
              label="Username"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Key"
              fullWidth
              margin="normal"
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel htmlFor="secret">Secret</InputLabel>
              <Input
                id="secret"
                type="password"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <LockIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              sx={{ marginTop: "1rem" }}
              variant="contained"
              color="primary"
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
          </form>
        </div>
        <div className="max-w-[500px]">
          <img src={Bookshelf} alt="bookshelf" className="" />
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
