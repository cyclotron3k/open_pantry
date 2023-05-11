import React, { useState, useEffect } from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amount: props.cart[props.product.id] || 0 };
  }

  onAmountChange = (event) => {
    this.props.setCart((state, props) => ({
      ...this.props.cart,
      [this.props.product.id]: (this.state.amount =
        parseInt(event.target.value) || 0),
    }));
  };

  decrement = () => {
    this.props.setCart((state, props) => ({
      ...this.props.cart,
      [this.props.product.id]: --this.state.amount,
    }));
  };

  increment = () => {
    this.props.setCart((state, props) => ({
      ...this.props.cart,
      [this.props.product.id]: ++this.state.amount,
    }));
  };

  render() {
    return (
      <div className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img
            src={this.props.product.image || "assets/noun-produce-5569950.svg"}
            className="card-img-top"
            alt={`${this.props.product.title} image`}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.product.title}</h5>
            <h4>${parseFloat(this.props.product.cost).toFixed(2)}</h4>
            <div className="card-description">
              {this.props.product.description}
              <br />
              <b>Producer:</b> {this.props.product.user.display_name}
              <br />
            </div>

            <div className="input-group">
              <button className="btn custom-button" onClick={this.decrement}>
                -
              </button>
              <input
                type="number"
                width="2"
                min="0"
                max="100"
                name="something"
                value={this.state.amount}
                onChange={this.onAmountChange}
              />
              <button className="btn custom-button" onClick={this.increment}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
