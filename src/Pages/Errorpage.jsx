import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="error-page">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">
        Go back to Home
      </Link>
    </div>
  );
};

export default Errorpage;
