import React from "react";
import { Link } from "react-router-dom";
import product from "../../assets/product.jpg";
// import mensImg from "../assets/mens-collection.jpg";
// import dressesImg from "../assets/dresses.jpg";
// import accessoriesImg from "../assets/accessories.jpg";
// import saleImg from "../assets/spring-sale.jpg";
// import newArrivalsImg from "../assets/new-arrivals.jpg";
import sale from"./Sale"
import "../../styles/Collections.css";


const Collections = () => {
  const collections = [
    {
      id: 1,
      title: "Women's Collection",
      cta: "Explore Now",
      image: product,
      link: "/collections/womens",
    },
    {
      id: 2,
      title: "Men's Collection",
      cta: "Explore Now",
      image: product,
      link: "/collections/mens",
    },
    {
      id: 3,
      title: "Dresses",
      cta: "Explore Now",
      image: product,
      link: "/collections/dresses",
    },
    {
      id: 4,
      title: "Accessories",
      cta: "Explore Now",
      image: product,
      link: "/collections/accessories",
    },
  ];

  const promotions = [
    {
      id: 1,
      label: "LIMITED TIME OFFER",
      title: "Spring Sale",
      subtitle: "Up to 50% Off",
      cta: "Shop The Sale",
      image: product,
      link: "/sale",
    },
    {
      id: 2,
      label: "NEW ARRIVALS",
      title: "Fresh Styles",
      subtitle: "Just Landed",
      cta: "Explore Now In",
      image: product,
      link: "/new-arrivals",
    },
  ];

  return (
    <section className="collections-section">
      {/* Header */}
      <div className="collections-header">
        <div className="collections-heading">
          <p className="collections-label">SHOP BY CATEGORY</p>
          <h2 className="collections-title">Find Your Perfect Style</h2>
        </div>
        <Link to="/categories" className="view-all-link">
          View All Categories <span className="arrow">→</span>
        </Link>
      </div>

      {/* Collections Grid */}
      <div className="collections-grid">
        {/* Top Row - 4 Cards */}
        {collections.map((collection) => (
          <Link
            to={collection.link}
            key={collection.id}
            className="collection-card"
          >
            <img
              src={collection.image}
              alt={collection.title}
              className="collection-image"
            />
            <div className="collection-overlay">
              <h3 className="collection-card-title">
                {collection.title}
              </h3>
              <p className="collection-cta">
                {collection.cta} <span>→</span>
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Promotions Grid */}
      <div className="promotions-grid">
        {promotions.map((promo) => (
          <Link
            to={promo.link}
            key={promo.id}
            className="promo-card"
          >
            <img
              src={promo.image}
              alt={promo.title}
              className="promo-image"
            />
            <div className="promo-overlay">
              <p className="promo-label">{promo.label}</p>
              <h3 className="promo-title">{promo.title}</h3>
              <p className="promo-subtitle">{promo.subtitle}</p>
              <button className="promo-btn">
                {promo.cta} <span>→</span>
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Collections;