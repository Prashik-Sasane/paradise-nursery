import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingCart,
  Trash2
} from "lucide-react";

import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart
} from "../redux/CartSlice";


export default function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  const totalAmount = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const totalItems = items.reduce(
    (sum, item) =>
      sum + item.quantity,
    0
  );


  // Empty cart
  if (items.length === 0) {
    return (
      <section className="page-shell empty-cart">

        <ShoppingCart size={58} />

        <span className="eyebrow">
          YOUR CART
        </span>

        <h1>
          Your cart is empty.
        </h1>

        <p>
          Add some beautiful plants and
          they will appear here.
        </p>

        <Link
          className="primary-btn"
          to="/plants"
        >
          Continue Shopping
          <ArrowLeft size={18} />
        </Link>

      </section>
    );
  }


  return (
    <section className="page-shell cart-page">

      <div className="section-heading">

        <span className="eyebrow">
          SHOPPING CART
        </span>

        <h1>
          Your plant collection.
        </h1>

        <p>
          {totalItems} item
          {totalItems !== 1 ? "s" : ""}
          {" "}in your cart.
        </p>

      </div>


      <div className="cart-layout">

        {/* Cart Items */}

        <div className="cart-list">

          {items.map((item) => {

            const itemTotal =
              item.price * item.quantity;

            return (
              <article
                className="cart-item"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />


                <div className="cart-item-info">

                  <span className="category-label">
                    {item.category}
                  </span>

                  <h2>
                    {item.name}
                  </h2>

                  <p>
                    Unit price: ₹{item.price}
                  </p>


                  <div className="quantity-control">

                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          decreaseQuantity(item.id)
                        )
                      }
                    >
                      <Minus size={16} />
                    </button>


                    <strong>
                      {item.quantity}
                    </strong>


                    <button
                      type="button"
                      onClick={() =>
                        dispatch(
                          increaseQuantity(item.id)
                        )
                      }
                    >
                      <Plus size={16} />
                    </button>

                  </div>

                </div>


                <div className="cart-item-actions">

                  <strong>
                    ₹{itemTotal}
                  </strong>


                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() =>
                      dispatch(
                        removeFromCart(item.id)
                      )
                    }
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </article>
            );
          })}

        </div>


        {/* Order Summary */}

        <aside className="cart-summary">

          <span className="eyebrow">
            ORDER SUMMARY
          </span>


          <div className="summary-row">

            <span>
              Items
            </span>

            <span>
              {totalItems}
            </span>

          </div>


          <div className="summary-row">

            <span>
              Subtotal
            </span>

            <span>
              ₹{totalAmount}
            </span>

          </div>


          <div className="summary-row total-row">

            <span>
              Total
            </span>

            <strong>
              ₹{totalAmount}
            </strong>

          </div>


          <button
            type="button"
            className="checkout-btn"
            onClick={() =>
              alert("Checkout Coming Soon!")
            }
          >
            Checkout — Coming Soon
          </button>


          <Link
            className="continue-link"
            to="/plants"
          >
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>

        </aside>

      </div>

    </section>
  );
}