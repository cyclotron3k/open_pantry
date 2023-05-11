import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Product from "./Product";
import { CreditCard } from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [totalCost, setTotalCost] = useState(0.0);
  const [showModal, toggleShowModal] = useState(false);

  useEffect(() => {
    let sum = products
      .filter((p) => cart[p.id])
      .reduce(
        (partialSum, p) => partialSum + parseFloat(p.cost) * cart[p.id],
        0
      );
    setTotalCost(sum.toFixed(2));
  }, [cart]);

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
      .catch(() => window.location.replace('/users/sign_in'));
  }, []);

  const allProducts = products.map((product, index) => (
    <Product product={product} key={index} cart={cart} setCart={setCart} />
  ));

  const noProduct = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No products yet. Why not <Link to="/new_product">create one</Link>
      </h4>
    </div>
  );

  const placeOrder = () => {
    const url = "/api/v1/orders/create";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    };
    fetch(url, requestOptions)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Connection error - please try again later");
      })
      .then((res) => toggleShowModal(true))
      .catch(() => window.location.replace("/users/sign_in"));
  };

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
          <div className="row">
            {products.length > 0 ? allProducts : noProduct}
          </div>
        </main>
      </div>

      <Modal show={showModal}>
        <Modal.Header>
          <h4>Order complete</h4>
        </Modal.Header>
        <Modal.Body>
          Thanks for your order. Your items will be winging their way towards
          you in a jiffy.
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => toggleShowModal(false)}
            className="btn btn-primary"
          >
            Ok, bye
          </Button>
        </Modal.Footer>
      </Modal>

      <nav className="navbar fixed-bottom bg-body-tertiary">
        <div className="container">
          <h1 className="navbar-text">Total cost: ${totalCost}</h1>
          <button className="btn btn-success" onClick={placeOrder}>
            Place Order <CreditCard />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Products;
