import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Plus,
  ShoppingBag
} from "lucide-react";

import { addToCart } from "../redux/CartSlice";
import { plants } from "../data/plants";


export default function ProductList() {

  const dispatch = useDispatch();


  const cartItems = useSelector(
    (state) => state.cart.items
  );


  const addedIds = new Set(
    cartItems.map((item) => item.id)
  );


  const categories = [
    ...new Set(
      plants.map((plant) => plant.category)
    )
  ];


  const handleAdd = (plant) => {

    if (!addedIds.has(plant.id)) {

      dispatch(
        addToCart(plant)
      );

    }
  };


  return (

    <section className="page-shell products-page">

      <div className="section-heading products-heading">

        <div>

          <span className="eyebrow">
            OUR COLLECTION
          </span>

          <h1>
            Find your perfect plant.
          </h1>

          <p>
            Explore our collection of indoor plants
            organized by category.
          </p>

        </div>


        <div className="catalog-badge">

          <ShoppingBag size={19} />

          <span>
            {plants.length} plants
          </span>

        </div>

      </div>


      {categories.map((category) => {

        const categoryPlants =
          plants.filter(
            (plant) =>
              plant.category === category
          );


        return (

          <section
            className="category-section"
            key={category}
          >

            <div className="category-title">

              <h2>
                {category}
              </h2>

              <span>
                {categoryPlants.length} varieties
              </span>

            </div>


            <div className="product-grid">

              {categoryPlants.map((plant) => {

                const isAdded =
                  addedIds.has(plant.id);


                return (

                  <article
                    className="plant-card"
                    key={plant.id}
                  >

                    <div className="plant-image-wrap">

                      <img
                        src={plant.image}
                        alt={plant.name}
                      />

                      <span className="category-chip">
                        {category}
                      </span>

                    </div>


                    <div className="plant-info">

                      <h3>
                        {plant.name}
                      </h3>

                      <p>
                        {plant.description}
                      </p>


                      <div className="plant-bottom">

                        <span className="price">
                          ₹{plant.price}
                        </span>


                        <button
                          className={`add-btn ${
                            isAdded
                              ? "added"
                              : ""
                          }`}
                          onClick={() =>
                            handleAdd(plant)
                          }
                          disabled={isAdded}
                        >

                          {isAdded ? (
                            "Added"
                          ) : (
                            <>
                              <Plus size={16} />
                              Add to Cart
                            </>
                          )}

                        </button>

                      </div>

                    </div>

                  </article>

                );

              })}

            </div>

          </section>

        );

      })}

    </section>
  );
}