import "./Card.css";

function Card({ image, name, price, colors, category, onBuy }) {
  return (
    <div className="card">
      <img src={image} alt="" />

      <h3>{name}</h3>

      {/* ✅ CATEGORY */}
      <p className="category">{category || "General"}</p>

      <p>{price}</p>
      {/* <span>{colors}</span> */}

      {/* BUY BUTTON */}
      <button className="buy-btn" onClick={onBuy}>
        BUY NOW
      </button>
    </div>
  );
}

export default Card;