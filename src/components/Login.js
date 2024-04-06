import React from "react";

function Login() {
  return (
    <div className="container mx-auto p-8">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <img
            src="email_verified.svg"
            alt="Email Verified"
            className="mx-auto mb-4"
          />
          <h1 className="text-3xl font-bold">Please verify your email...</h1>
        </div>
        <p className="text-lg mb-4">
          Please verify your email address. We've sent a confirmation email to:
        </p>
        <p className="text-lg font-semibold mb-4">account@refero.design</p>
        <p className="text-lg mb-4">
          Click the confirmation link in that email to begin using Dribbble.
        </p>
        <p className="text-lg mb-8">
          Didn’t receive the email? Check your Spam folder; it may have been
          caught by a filter. If you still don’t see it, you can{" "}
          <a href="/">resend the confirmation email</a>.
        </p>
        <p className="text-lg">
          Wrong email address? <a href="/">Change it.</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
