import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const [password, setPassword] = useState(null);
  const [username, setUsername] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();
  const signInHandler = async () => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/admin");
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="flex flex-col">
        <h2 className="text-lg font-medium mb-2">Admin Dashboard</h2>
        <input
          type={"text"}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          className="h-10 mb-5 px-[10px] border"
        ></input>
        <input
          type={"password"}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className="h-10 mb-5 px-[10px] border"
        ></input>
        <button
          className="h-10 mb-5 bg-[teal] text-white font-semibold cursor-pointer"
          onClick={signInHandler}
        >
          Sign In
        </button>
        {error && (
          <span className="text-xs text-rose-800">Wrong Credentials!</span>
        )}
      </div>
    </div>
  );
};

export default Login;
