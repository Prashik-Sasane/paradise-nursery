import React from "react";

import { Link, Route, Routes } from "react-router-dom";
import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Truck
} from "lucide-react";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

function Home() {
  return (
    <div className="home-page">

      <section className="hero">

        <div className="hero-overlay">

          <div className="hero-content">

            <span className="eyebrow">
              WELCOME TO PARADISE NURSERY
            </span>

            <h1>
              Bring Nature
              <br />
              <em>Into Your Home.</em>
            </h1>

            <p>
              Discover beautiful indoor plants, carefully selected
              to make your home greener, calmer, and more alive.
            </p>

            <Link
              className="primary-btn"
              to="/plants"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>


      <section className="benefits">

        <div className="benefit">

          <Leaf size={25} />

          <div>
            <h3>Healthy Plants</h3>

            <p>
              Quality plants selected with care.
            </p>
          </div>

        </div>


        <div className="benefit">

          <ShieldCheck size={25} />

          <div>
            <h3>Easy Shopping</h3>

            <p>
              A simple and secure cart experience.
            </p>
          </div>

        </div>


        <div className="benefit">

          <Truck size={25} />

          <div>
            <h3>Fresh Delivery</h3>

            <p>
              Plants prepared for a safe journey.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}


export default function App() {

  return (
    <>
      <Navbar />

      <main>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/plants"
            element={<ProductList />}
          />

          <Route
            path="/cart"
            element={<CartItem />}
          />

          <Route
            path="/about"
            element={<AboutUs />}
          />

        </Routes>

      </main>
    </>
  );
}