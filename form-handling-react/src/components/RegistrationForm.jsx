import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });


  const validateField = (name, value) => {
    let error = "";
  
    if (name === "username" && value.trim() === "") {
      error = "Username is required.";
    } else if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = "Enter a valid email address.";
    } else if (name === "password" && value.length < 6) {
      error = "Password must be at least 6 characters.";
    }
  
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };
  

  const handleusernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form action="">
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleusernameChange}
        required
      />
      <input
        type="text"
        name="email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <input
        type="text"
        name="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}
