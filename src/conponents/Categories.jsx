import React from "react";
import { Link } from "react-router-dom";
import {
  FiShoppingBag,
  FiWatch,
  FiTag,
  FiTrendingUp,
  FiGift,
  FiPackage,
} from "react-icons/fi";
import product from "../assets/hero2.jpg";

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Handbags",
      icon: FiShoppingBag,
      link: "/handbags",
    },
    {
      id: 2,
      name: "Wallets",
      icon: FiTag,
      link: "/wallets",
    },
    {
      id: 3,
      name: "Belts",
      icon: FiWatch,
      link: "/belts",
    },
    {
      id: 4,
      name: "Shoes",
      icon: FiTrendingUp,
      link: "/shoes",
    },
    {
      id: 5,
      name: "Accessories",
      icon: FiPackage,
      link: "/accessories",
    },
    {
      id: 6,
      name: "Gifts",
      icon: FiGift,
      link: "/gifts",
    },
  ];

  return (
    <section className="categories-section">

      {/* Categories */}
      <div className="categories-container">
        <h2 className="categories-title">
          SHOP BY CATEGORY
        </h2>

        <div className="categories-grid">
          {categories.map((category) => {
            const IconComponent = category.icon;

            return (
              <Link
                to={category.link}
                key={category.id}
                className="category-card"
              >
                <div className="category-icon">
                  <IconComponent />
                </div>

                <p className="category-name">
                  {category.name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Featured Collection */}
      <div className="featured-section">

        <div className="featured-content">

          <p className="featured-label">
            COLLECTION EXCLUSIVE | LIMITED EDITION
          </p>

          <h2 className="featured-title">
            Elevate Your Wardrobe
          </h2>

          <p className="featured-description">
            Our newest collection brings together timeless design
            and contemporary flair. Pieces that make you feel
            confident, elegant, and authentically you.
          </p>

          <Link
            to="/collections"
            className="btn btn-secondary featured-btn"
          >
            EXPLORE COLLECTION
          </Link>

        </div>

        <div className="featured-image">
          <img
            src={product}
            alt="Featured collection"
          />
        </div>

      </div>

    </section>
  );
};

export default Categories;