import { useState } from "react";

function Card({ emoji, name, price }) {
  const [quantity, setQuantity] = useState(1);

  const totalPrice = Number(price) * quantity;

  return (
    <div className="card">
      <div className="emoji">{emoji}</div>

      <h2>{name}</h2>

      <h3>₹{totalPrice.toLocaleString("en-IN")}</h3>

      <div className="quantity">
        <button
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
        >
          ➖
        </button>

        <span>{quantity}</span>

        <button onClick={() => setQuantity(quantity + 1)}>
          ➕
        </button>
      </div>
    </div>
  );
}

export default Card;