import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Registrattion successful now you can log in");
    } catch (error) {
      alert("Registration Failed. Please Try Again");
    }
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-60">
        <h1 className="text-center text-4xl mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(ev) => {
              setName(ev.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Your@email.com"
            value={email}
            onChange={(ev) => {
              setEmail(ev.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => {
              setPassword(ev.target.value);
            }}
          />
          <button className="primary">Register</button>
          <div className="text-center text-gray-500 py-2">
            Already a Member?{" "}
            <Link to={"/login"} className="text-black underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
