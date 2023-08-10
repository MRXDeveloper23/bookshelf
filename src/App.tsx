import { useEffect, useState } from "react";
import SignUp from "./pages/login";
import ApiService from "./services/api";
import { NotificationType, User } from "./types";
import Notification from "./components/Notification";
import Bookshelf from "./pages/books";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [successNotificationOpen, setSuccessNotificationOpen] = useState(false);
  const [errorNotificationOpen, setErrorNotificationOpen] = useState(false);

  const handleCloseSuccessNotification = () => {
    setSuccessNotificationOpen(false);
  };

  const handleCloseErrorNotification = () => {
    setErrorNotificationOpen(false);
  };

  const submitHandler = async (userData: User) => {
    const res = await ApiService.signUp(userData);
    if (res === "ok") {
      setSuccessNotificationOpen(true);
      setIsLoggedIn(true);
    } else {
      setErrorNotificationOpen(true);
    }
  };
  useEffect(() => {
    const checkLogin = async () => {
      if (await ApiService.checkLogin()) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };
    checkLogin();
  }, []);
  return (
    <div className="relative">
      {isLoggedIn ? <Bookshelf /> : <SignUp onSubmit={submitHandler} />}
      <Notification
        open={successNotificationOpen}
        type={NotificationType.Success}
        message="User registered successfully!"
        onClose={handleCloseSuccessNotification}
      />
      <Notification
        open={errorNotificationOpen}
        type={NotificationType.Error}
        message="Failed to register user. Please try again."
        onClose={handleCloseErrorNotification}
      />
    </div>
  );
}

export default App;
