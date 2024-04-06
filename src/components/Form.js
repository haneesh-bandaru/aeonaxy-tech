import React from "react";
// import "./App.css"; // Import your CSS file for styling
import dribble from "../assets/images/loginImage.png";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  return (
    <div className="flex container mx-auto font-sans ">
      <div className="w-fit ">
        <img src={dribble} alt="Dribble" className="h-screen"></img>
      </div>
      <div className="max-w-lg mx-auto mt-10 mb-20 p-6 rounded-lg">
        <div className="flex justify-end -mr-56">
          Already a member?{" "}
          <a href="/sigin" className="text-blue-500">
            Sign In
          </a>
        </div>
        <h1 className="text-3xl font-bold mb-6">Sign up to Dribbble</h1>
        <div className="flex mb-6">
          <div className="mb-4  mr-10">
            <label className="block text-lg font-bold mb-2 " htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border bg-zinc-200 rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="John"
            />
          </div>{" "}
          <div>
            <label className="block text-lg font-bold mb-2" htmlFor="name">
              Username
            </label>
            <input
              className="appearance-none border bg-zinc-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="John"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-lg font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded bg-zinc-200 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="account@refero.design"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-bold mb-2 " htmlFor="password">
            Password
          </label>
          <input
            className="appearance-none border bg-zinc-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="6+ characters"
          />
        </div>
        <div className="mb-8">
          <input className="mr-2 leading-tight" type="checkbox" id="checkbox" />
          <label className="text-sm text-gray-700" htmlFor="checkbox">
            Creating an account means you're okay with our{" "}
            <a href="/" className="text-blue-700">
              Terms of Service
            </a>
            ,{" "}
            <a href="/" className="text-blue-700">
              Privacy Policy
            </a>
            , and our default{" "}
            <a href="/" className="text-blue-700">
              Notification Settings
            </a>
            .
          </label>
        </div>
        <button
          className="bg-pink-500 hover:bg-pink-700 mb-8 text-white  font-semibold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={() => {
            navigate("profile");
          }}
        >
          Create Account
        </button>
        <p className="text-slate-400 font-light text-xs w-80">
          This site is protected by reCAPTCHA and the Google {`\n`}
          <a href="/" className="text-blue-700">
            Privacy Policy{" "}
          </a>
          and{" "}
          <a href="/" className="text-blue-700">
            Terms of Service{" "}
          </a>
          apply.
        </p>
      </div>
    </div>
  );
}

export default Form;
