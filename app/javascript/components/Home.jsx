import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Open Pantry Market Place</h1>
        <p className="lead">
          Buy and sell your wares
        </p>
        <hr className="my-4" />
        <Link
          to="/products"
          className="btn btn-lg custom-button"
          role="button"
        >
          View Produce
        </Link>
      </div>
    </div>
  </div>
);
