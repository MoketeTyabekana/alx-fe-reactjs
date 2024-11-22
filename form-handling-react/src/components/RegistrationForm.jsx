import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

   
    if (!username) {
      newErrors.username = "Username is required.";
    }

   
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

   
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    
    setErrors(newErrors);

    
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully:", { username, email, password });
    }
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
    <form action="" onSubmit={handleSubmit}>
        
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleusernameChange}
        required

        placeholder="Username"
      />
      <input
        type="text"
        name="email"
        value={email}
        onChange={handleEmailChange}
        required

        placeholder="Email"
      />
      <input
        type="text"
        name="password"
        value={password}
        onChange={handlePasswordChange}
        required
        placeholder="Password"
      />

      <button type="submit">Submit</button>
    </form>
  );
}
