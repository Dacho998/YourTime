import React from "react";
import "../watches/Watches.css";
import type { Watch } from "./Watch";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

type Props = {
  watches: Watch[];
  visibleCount: number;
};

const formatPriceMKD = (price: number) => {
  return `${price.toFixed(3)} МКД`;
};

const WatchesCollection: React.FC<Props> = ({ watches, visibleCount }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (watch: Watch) => {
    const success = addToCart(watch);
    if (!success) {
      navigate("/log_in");
    }
  };

  return (
    <div className="container">
      {watches.slice(0, visibleCount).map((watch) => {
        const priceNumber =
          typeof watch.price === "string" ? parseFloat(watch.price) : watch.price;

        return (
          <div key={watch.id} className="card1" id={watch.id}>
            <img src={watch.img} alt={watch.name} width="100%" />
            <div>
              <h4>
                <b>{watch.name}</b>
              </h4>
              <p>
                <b>{formatPriceMKD(priceNumber)}</b>
              </p>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(watch)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WatchesCollection;
