import React from "react";
import {
  Heart,
  Leaf,
  Sprout
} from "lucide-react";


export default function AboutUs() {

  return (

    <section className="page-shell about-page">

      <div className="section-heading">

        <span className="eyebrow">
          ABOUT US
        </span>

        <h1>
          Growing a greener everyday life.
        </h1>

        <p>
          Paradise Nursery is an online plant shop created
          to make discovering and buying indoor plants simple,
          enjoyable, and accessible.
        </p>

      </div>


      <div className="about-grid">

        <article className="about-card">

          <Leaf />

          <h2>
            Our Mission
          </h2>

          <p>
            We help people bring the beauty of nature indoors
            by offering a curated selection of houseplants
            through a simple digital shopping experience.
          </p>

        </article>


        <article className="about-card">

          <Sprout />

          <h2>
            Our Plants
          </h2>

          <p>
            From low-maintenance succulents to tropical
            foliage, our catalog gives plant lovers a variety
            of options for every space.
          </p>

        </article>


        <article className="about-card">

          <Heart />

          <h2>
            Our Promise
          </h2>

          <p>
            We focus on a clean, friendly shopping experience
            that helps users explore plants, manage their cart,
            and plan their next purchase.
          </p>

        </article>

      </div>

    </section>
  );
}