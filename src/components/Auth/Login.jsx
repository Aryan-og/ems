import React, { useState } from "react";

function Login({handleLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let submitHandler = (e) => {
    handleLogin(email,password)
    e.preventDefault();
  };

  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="border-2 border-emerald-400 p-28">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col gap-2 items-center justify-center"
          >
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              type="email"
              placeholder="Enter your email "
              className="border-2 border-emerald-600 outline-none py-1 px-4 rounded-xl placeholder-gray-400"
            />
            <input
            onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              type="password"
              placeholder="Enter your password"
              className="border-2 px-4 border-emerald-600 outline-none py-1 rounded-xl"
            />
            <button className=" bg-emerald-600 outline-none py-2 rounded-2xl mt-6 text-white px-4">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
