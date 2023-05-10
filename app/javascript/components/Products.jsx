import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "/api/v1/products/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Connection error - please try again later");
      })
      .then((res) => setProducts(res))
      .catch(() => navigate("/"));
  }, []);

  const allProducts = products.map((product, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <img
          src={product.image || 'assets/noun-produce-5569950.svg'}
          className="card-img-top"
          alt={`${product.title} image`}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <div className="card-description">
          	{product.description}<br />
          	<b>Producer:</b> {product.user.display_name}<br />
          </div>
          <Link to={`/product/${product.id}`} className="btn custom-button">
            -
          </Link>
          <input type="number" min="0" max="100" name="something" />
          <Link to={`/product/${product.id}`} className="btn custom-button">
            +
          </Link>
        </div>
      </div>
    </div>
  ));

  const noProduct = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No products yet. Why not <Link to="/new_product">create one</Link>
      </h4>
    </div>
  );

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Cast your eyes</h1>
          <p className="lead text-muted">
            over the delectable wares we have on offer, and be amazed.
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-end mb-3">
            <Link to="/product" className="btn custom-button">
              Add Products
            </Link>
          </div>
          <div className="row">
            {products.length > 0 ? allProducts : noProduct}
          </div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div>
    </>
  );
};

export default Products;
