import React from "react";

export default function Item() {
  return (
    <div className="item">
      <img src=""></img>
      <p
        style={{
          cursor: "pointer",
          textDecoration: "underline",
          fontWeight: "bold",
        }}
      >
        product name
      </p>
      <div className="item-prices">
        <div className="item-price-new">Rp 100</div>
        <div className="item-price-old">Rp 100</div>
      </div>
    </div>
  );
}
